import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Verifies the owner bypass token on the server.
 * Token is compared to OWNER_BYPASS_TOKEN env var — never exposed to client.
 *
 * Usage: visit /?ownerKey=YOUR_SECRET_TOKEN
 * The page will set a session cookie and clean the URL.
 */
export const verifyOwnerBypass = createServerFn({ method: "POST" })
  .validator(z.object({ token: z.string().min(1).max(200) }))
  .handler(async ({ data }) => {
    try {
      const secret = process.env.OWNER_BYPASS_TOKEN;
      if (!secret) {
        // bypass not configured — just deny silently
        return { valid: false };
      }

      // Constant-time comparison to prevent timing attacks
      if (data.token.length !== secret.length) return { valid: false };
      let diff = 0;
      for (let i = 0; i < data.token.length; i++) {
        diff |= data.token.charCodeAt(i) ^ secret.charCodeAt(i);
      }
      const valid = diff === 0;

      if (valid) {
        console.log("🔓 Owner bypass activated.");
      }

      return { valid };
    } catch {
      return { valid: false };
    }
  });
