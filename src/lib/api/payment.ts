import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createHmac } from "node:crypto";

/* ─── Plans config (server-side source of truth) ──────────────────────── */
export const PLANS = {
  starter: { name: "Starter", amount: 9900, credits: 3 },       // ₹99
  pro_monthly: { name: "Pro Monthly", amount: 49900, credits: -1 }, // ₹499 unlimited
  pro_yearly: { name: "Yearly Pro", amount: 399900, credits: -1 },  // ₹3,999 unlimited
} as const;
export type PlanId = keyof typeof PLANS;

/* ─── Create Razorpay Order ────────────────────────────────────────────── */
export const createRazorpayOrder = createServerFn({ method: "POST" })
  .validator(z.object({ planId: z.enum(["starter", "pro_monthly", "pro_yearly"]) }))
  .handler(async ({ data }) => {
    try {
      const keyId = process.env.RAZORPAY_KEY_ID;
      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      if (!keyId || !keySecret) {
        return { success: false, error: "Payment gateway is not configured." };
      }

      const plan = PLANS[data.planId];
      const orderPayload = {
        amount: plan.amount,
        currency: "INR",
        receipt: `kundali_${data.planId}_${Date.now()}`,
        notes: { plan: data.planId, product: "KundaliAI" },
      };

      const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(orderPayload),
        signal: AbortSignal.timeout(10_000),
      });

      if (!response.ok) {
        const errBody = await response.text();
        console.error("Razorpay order creation failed:", errBody);
        return { success: false, error: "Failed to create payment order. Please try again." };
      }

      const order = (await response.json()) as { id: string; amount: number; currency: string };
      return {
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId,
        planName: plan.name,
        credits: plan.credits,
      };
    } catch (err: unknown) {
      const e = err as Error;
      console.error("createRazorpayOrder error:", e.message);
      return { success: false, error: "Payment service temporarily unavailable." };
    }
  });

/* ─── Verify Razorpay Payment (server-side signature check) ────────────── */
export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .validator(
    z.object({
      razorpay_order_id: z.string().min(1),
      razorpay_payment_id: z.string().min(1),
      razorpay_signature: z.string().min(1),
      planId: z.enum(["starter", "pro_monthly", "pro_yearly"]),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const keySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!keySecret) {
        return { success: false, error: "Payment gateway not configured." };
      }

      // Verify HMAC-SHA256 signature
      const body = `${data.razorpay_order_id}|${data.razorpay_payment_id}`;
      const expectedSig = createHmac("sha256", keySecret)
        .update(body)
        .digest("hex");

      if (expectedSig !== data.razorpay_signature) {
        console.error("Razorpay signature mismatch! Possible tampering.");
        return { success: false, error: "Payment verification failed. Please contact support." };
      }

      const plan = PLANS[data.planId];
      console.log(`✅ Payment verified: ${data.razorpay_payment_id} for plan ${data.planId}`);

      return {
        success: true,
        paymentId: data.razorpay_payment_id,
        planId: data.planId,
        planName: plan.name,
        credits: plan.credits,
      };
    } catch (err: unknown) {
      const e = err as Error;
      console.error("verifyRazorpayPayment error:", e.message);
      return { success: false, error: "Verification service error." };
    }
  });
