"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader2, ShieldCheck, CreditCard } from "lucide-react";
import { createRazorpayOrder, verifyRazorpayPayment, PLANS, type PlanId } from "../lib/api/payment";

/* ─── Razorpay types ──────────────────────────────────────────────────── */
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  theme: { color: string };
  prefill?: { name?: string; email?: string; contact?: string };
  handler: (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => void;
  modal?: {
    ondismiss?: () => void;
    confirm_close?: boolean;
  };
}
interface RazorpayInstance {
  open: () => void;
}
declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

/* ─── Props ───────────────────────────────────────────────────────────── */
interface PaymentModalProps {
  planId: PlanId;
  onClose: () => void;
  onSuccess?: (planId: PlanId) => void;
}

/* ─── Success screen ──────────────────────────────────────────────────── */
function SuccessScreen({ planName, onClose }: { planName: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-5 py-10 px-6 text-center"
    >
      <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-400/10 ring-1 ring-green-500/30">
        <ShieldCheck className="h-10 w-10 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold text-starlight">Payment Successful!</h3>
        <p className="mt-2 text-lavender text-sm">
          Welcome to <span className="text-amber-gold font-semibold">{planName}</span>. <br />
          Your access has been activated.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-gradient-to-r from-cosmic to-amber-gold py-2.5 text-sm font-semibold text-[oklch(0.12_0.05_290)] transition hover:opacity-90"
        >
          Start Generating Kundalis
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Main PaymentModal ───────────────────────────────────────────────── */
export function PaymentModal({ planId, onClose, onSuccess }: PaymentModalProps) {
  const [step, setStep] = useState<"confirm" | "processing" | "verifying" | "success" | "error">("confirm");
  const [errorMsg, setErrorMsg] = useState("");
  const plan = PLANS[planId];

  const handlePay = async () => {
    setStep("processing");

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setErrorMsg("Could not load payment gateway. Check your internet connection.");
      setStep("error");
      return;
    }

    const orderResult = await createRazorpayOrder({ data: { planId } });
    if (!orderResult.success || !orderResult.orderId) {
      setErrorMsg(orderResult.error || "Failed to create order.");
      setStep("error");
      return;
    }

    const rzp = new window.Razorpay({
      key: orderResult.keyId!,
      amount: orderResult.amount!,
      currency: orderResult.currency!,
      name: "KundaliAI",
      description: `${plan.name} — Vedic Kundali`,
      order_id: orderResult.orderId,
      theme: { color: "#FF6B2B" },
      handler: async (response) => {
        setStep("verifying");
        const verified = await verifyRazorpayPayment({
          data: {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            planId,
          },
        });

        if (verified.success) {
          // Store access in localStorage
          try {
            localStorage.setItem("kundali_plan", planId);
            localStorage.setItem("kundali_payment_id", verified.paymentId!);
            localStorage.setItem("kundali_credits", String(verified.credits));
            localStorage.setItem("kundali_plan_name", verified.planName!);
          } catch { /* ignore */ }
          setStep("success");
          onSuccess?.(planId);
        } else {
          setErrorMsg(verified.error || "Payment verification failed.");
          setStep("error");
        }
      },
      modal: {
        ondismiss: () => setStep("confirm"),
        confirm_close: true,
      },
    });

    rzp.open();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-sm rounded-2xl border border-cosmic/30 bg-[oklch(0.14_0.07_290)] shadow-cosmic overflow-hidden"
      >
        {/* Close */}
        {step !== "processing" && step !== "verifying" && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-md p-1.5 text-lavender/60 hover:text-starlight hover:bg-white/10 transition"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* ── Confirm ─────────────────────────────────────────── */}
          {step === "confirm" && (
            <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cosmic/25 to-amber-gold/15 ring-1 ring-cosmic/30">
                  <CreditCard className="h-5 w-5 text-amber-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-starlight">{plan.name}</h3>
                  <p className="text-xs text-lavender/70">KundaliAI Subscription</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-border/60 bg-[oklch(0.18_0.08_290)] p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-lavender">Amount</span>
                  <span className="font-display text-xl font-bold text-starlight">
                    ₹{(PLANS[planId].amount / 100).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 border-t border-border/50 pt-3">
                  {planId === "starter" && [
                    "3 Kundali readings", "Full Vedic chart", "PDF export"
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-lavender">
                      <Check className="h-3.5 w-3.5 text-amber-gold shrink-0" /> {f}
                    </div>
                  ))}
                  {(planId === "pro_monthly" || planId === "pro_yearly") && [
                    "Unlimited Kundalis", "Priority AI processing",
                    "Compatibility matching", "Premium PDF"
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-lavender">
                      <Check className="h-3.5 w-3.5 text-amber-gold shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePay}
                className="w-full rounded-lg bg-gradient-to-r from-cosmic to-amber-gold py-3 text-sm font-bold text-[oklch(0.12_0.05_290)] transition hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] shadow-cosmic animate-glow-pulse"
              >
                Pay Securely with Razorpay
              </button>
              <p className="mt-3 text-center text-xs text-lavender/50">
                🔒 Secured by Razorpay · UPI, Cards, NetBanking accepted
              </p>
            </motion.div>
          )}

          {/* ── Processing / Verifying ─────────────────────────── */}
          {(step === "processing" || step === "verifying") && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 p-8 text-center"
            >
              <Loader2 className="h-10 w-10 animate-spin text-cosmic" />
              <div>
                <p className="font-semibold text-starlight">
                  {step === "processing" ? "Opening Payment Gateway…" : "Verifying Payment…"}
                </p>
                <p className="text-xs text-lavender/70 mt-1">Please do not close this window</p>
              </div>
            </motion.div>
          )}

          {/* ── Success ───────────────────────────────────────── */}
          {step === "success" && (
            <SuccessScreen planName={plan.name} onClose={onClose} />
          )}

          {/* ── Error ─────────────────────────────────────────── */}
          {step === "error" && (
            <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="p-6 flex flex-col items-center gap-4 text-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-red-500/10 ring-1 ring-red-500/30">
                <X className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-starlight">Payment Failed</h3>
                <p className="mt-2 text-sm text-lavender/70">{errorMsg}</p>
              </div>
              <div className="flex gap-2 w-full">
                <button onClick={() => setStep("confirm")}
                  className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-starlight transition hover:bg-white/5"
                >
                  Try Again
                </button>
                <button onClick={onClose}
                  className="flex-1 rounded-lg bg-gradient-to-r from-cosmic to-amber-gold py-2.5 text-sm font-semibold text-[oklch(0.12_0.05_290)] transition hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
