import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getRequest } from "@tanstack/react-start/server";
import { isRateLimited } from "../rate-limiter";

const RATE_LIMIT_WINDOW = 2 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export const generateKundali = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be under 100 characters")
        .transform((val) => val.replace(/[<>'"/;`%]/g, "").trim()),
      dateOfBirth: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Expected YYYY-MM-DD"),
      timeOfBirth: z
        .string()
        .regex(/^\d{2}:\d{2}(:\d{2})?$/, "Invalid time format. Expected HH:MM or HH:MM:SS"),
      placeOfBirth: z
        .string()
        .min(1, "Place of birth is required")
        .max(150, "Place of birth must be under 150 characters")
        .transform((val) => val.replace(/[<>'"/;`%]/g, "").trim()),
      language: z.enum(["en", "hi"]).default("en"),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const req = getRequest();
      const clientIp = req
        ? req.headers.get("cf-connecting-ip") ||
          req.headers.get("x-real-ip") ||
          req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          "127.0.0.1"
        : "127.0.0.1";

      const limit = isRateLimited(clientIp, {
        windowMs: RATE_LIMIT_WINDOW,
        maxRequests: RATE_LIMIT_MAX,
      });

      if (limit.limited) {
        throw new Error(`Too many requests from this IP. Please try again in ${limit.retryAfter} seconds.`);
      }

      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is not configured.");
      }

      // We focus on AI interpretation for the free tier implementation.
      const languageInstruction = data.language === "hi"
        ? "IMPORTANT: You must write the entire analysis and prediction in elegant, standard, and deep Hindi (हिंदी) language using traditional Vedic astrological terms. Keep the tone inspiring and native."
        : "Please write the reading in English.";

      const prompt = `Act as an expert Vedic astrologer. Generate a detailed, mystical, and personalized personality, career, love, and health reading for a person named ${data.name} born on ${data.dateOfBirth} at ${data.timeOfBirth} in ${data.placeOfBirth}. Use standard astrological associations for this date and time. Keep the tone encouraging but deeply insightful, avoiding cliché. Output in clean Markdown format with headers. ${languageInstruction}`;

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(prompt);
      const aiReading = result.response.text();

      // Conditional save to Supabase database if config is active
      const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || "";

      if (supabaseUrl && supabaseServiceKey) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const client = createClient(supabaseUrl, supabaseServiceKey);
          
          // Store chart details with default location coordinates fallback
          await client.from("kundalis").insert({
            name: data.name,
            date_of_birth: data.dateOfBirth,
            time_of_birth: data.timeOfBirth,
            place_of_birth: data.placeOfBirth,
            latitude: 0.0, // Default coordinates for fallback
            longitude: 0.0,
            ai_reading: aiReading,
          });
          console.log("Kundali reading successfully saved to database.");
        } catch (dbErr) {
          console.error("Supabase Save Warning (skipped):", dbErr);
        }
      }

      return { success: true, reading: aiReading };
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Secure Server Error Log:", error.stack || error.message);
      const isDev = process.env.NODE_ENV === "development";
      const clientMessage = isDev
        ? error.message
        : "The cosmos is briefly offline. We could not align the stars for you at this moment. Please verify your details and try again.";
      return { success: false, error: clientMessage };
    }
  });
