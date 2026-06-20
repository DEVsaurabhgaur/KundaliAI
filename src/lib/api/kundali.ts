import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateKundali = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(1, "Name is required"),
      dateOfBirth: z.string(),
      timeOfBirth: z.string(),
      placeOfBirth: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is not configured.");
      }

      // We focus on AI interpretation for the free tier implementation.
      const prompt = `Act as an expert Vedic astrologer. Generate a detailed, mystical, and personalized personality, career, love, and health reading for a person named ${data.name} born on ${data.dateOfBirth} at ${data.timeOfBirth} in ${data.placeOfBirth}. Use standard astrological associations for this date and time. Keep the tone encouraging but deeply insightful, avoiding cliché. Output in clean Markdown format with headers.`;

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const aiReading = result.response.text();

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
