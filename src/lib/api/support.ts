import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Cosmic guide instruction guidelines: handles refunds, pricing details, and redirect links
const systemInstruction = `
You are the KundaliAI Cosmic Support Guide, a helpful and polite virtual assistant for KundaliAI (an AI-powered Vedic astrology platform).
Your goals:
1. Help users with any questions about KundaliAI features, pricing, or how to generate a birth chart.
2. If users ask about pricing or premium plans, explain them clearly:
   - Starter Plan: ₹99 (one-time) for 3 premium Kundali readings, downloadable as PDF.
   - Pro Monthly: ₹499/month for unlimited readings, compatibility matching, and Dasha forecasts.
   - Yearly Pro: ₹3,999/year (best value, saves 33%) for unlimited readings, premium white-label PDFs, and early access.
3. If users ask about refunds, explain our strict NO REFUND POLICY:
   - Since generating a Kundali instantly consumes premium AI compute resources (Gemini 2.5 Flash / Claude AI) and astronomical chart calculation, all purchases are final. We do not offer refunds under any circumstances.
4. If a user has a complex technical issue or payment query that you cannot resolve, tell them to contact our human support team directly at devsaurabhgaur@gmail.com.
5. Maintain a mystical, polite, and cosmic tone. Keep your responses concise (under 3-4 sentences when possible) to fit well in a small floating chat window.
`.trim();

export const chatSupport = createServerFn({ method: "POST" })
  .validator(
    z.object({
      message: z.string().min(1, "Message is required").max(2000, "Message must not exceed 2000 characters"),
      history: z.array(
        z.object({
          role: z.enum(["user", "model"]),
          text: z.string().max(2000, "Text must not exceed 2000 characters"),
        })
      ).max(30, "History cannot exceed 30 messages").default([]),
    })
  )
  .handler(async ({ data }) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return { success: false, reply: "The support coordinates are offline. (API Key missing)" };
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: systemInstruction,
      });

      // Format history for Gemini API
      const formattedHistory = data.history.map((h) => ({
        role: h.role,
        parts: [{ text: h.text }],
      }));

      const chat = model.startChat({
        history: formattedHistory,
      });

      const result = await chat.sendMessage(data.message);
      const reply = result.response.text();

      return { success: true, reply };
    } catch (err: unknown) {
      const e = err as Error;
      console.error("Support Chat API Error:", e.message);
      return {
        success: false,
        reply: "Apologies, the cosmic frequencies are busy. Please try again or email us at devsaurabhgaur@gmail.com.",
      };
    }
  });
