import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
});

const GradText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ background: "linear-gradient(135deg,#FF6B2B,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </span>
);

function RefundPage() {
  return (
    <div style={{ background: "#0A0518", minHeight: "100vh", color: "#fff", fontFamily: "Inter,system-ui,sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#FF6B2B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px #FF6B2B55" }}>
              <Sparkles size={16} color="#fff" />
            </div>
            <span style={{ fontFamily: "Cinzel,serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>
              Kundali<GradText>AI</GradText>
            </span>
          </Link>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 99, padding: "8px 18px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 96px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>LEGAL</p>
          <h1 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 16px" }}>
            Refund <GradText>Policy</GradText>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Last updated: June 20, 2025 · Effective immediately</p>
        </div>

        {/* Big NO REFUND Banner */}
        <div style={{ background: "rgba(239,68,68,0.08)", border: "2px solid rgba(239,68,68,0.3)", borderRadius: 20, padding: "32px 36px", marginBottom: 48, display: "flex", gap: 20, alignItems: "flex-start" }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(239,68,68,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
            <AlertTriangle size={22} color="#EF4444" />
          </div>
          <div>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: 22, fontWeight: 800, color: "#EF4444", margin: "0 0 10px" }}>STRICT NO REFUND POLICY</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              All purchases made on KundaliAI are <strong>final and non-refundable</strong>. By completing a purchase, you explicitly acknowledge and agree to this policy. Please read this document in full before making any purchase.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            {
              title: "1. Why We Cannot Offer Refunds",
              content: `KundaliAI provides a digital AI-generated service that is consumed instantly at the time of purchase or access. Specifically:\n\n• Each Kundali reading immediately invokes premium AI compute via Gemini 2.5 Flash, incurring real-time inference costs that cannot be reversed\n• Swiss Ephemeris astronomical calculations are performed in real-time at point of generation\n• PDF reports are generated on-demand and delivered instantly\n• Digital content (readings, reports) cannot be "returned" once generated and viewed\n\nBecause the value of our service is delivered instantly and completely upon generation, we cannot recover the cost of completed AI computations. This is why ALL SALES ARE FINAL.`
            },
            {
              title: "2. What Is Covered by This Policy",
              content: `This no-refund policy applies to all of the following:\n\n• Starter Plan (₹99 one-time): Non-refundable once purchased\n• Pro Monthly Subscription (₹499/month): Non-refundable once the billing period begins\n• Yearly Pro Subscription (₹3,999/year): Non-refundable once purchased, including for unused portions of the subscription period\n• Any additional credits or add-ons purchased\n\nThis policy applies regardless of:\n• Whether you have used all your credits or readings\n• Whether you are satisfied with the quality of readings generated\n• Whether you change your mind after purchase\n• Whether you accidentally purchased the wrong plan`
            },
            {
              title: "3. Subscription Cancellation",
              content: `You may cancel a recurring subscription (Pro Monthly or Yearly Pro) at any time by contacting us at devsaurabhgaur@gmail.com. Upon cancellation:\n\n• Your subscription will not renew at the next billing cycle\n• You retain access to all features until the end of the current paid period\n• No partial refund will be issued for the remaining unused portion of the current billing period\n• Cancellation does not entitle you to a refund of any previously paid amounts`
            },
            {
              title: "4. Technical Failure Exception",
              content: `The only exception to our no-refund policy is a documented, verifiable technical failure on our part where:\n\n• You completed a payment successfully (confirmed by Razorpay), AND\n• Our system was entirely unavailable (service downtime) AND\n• No reading was generated or delivered to you\n\nIn this specific scenario only, you must contact us at devsaurabhgaur@gmail.com within 48 hours of the failed transaction, providing your payment reference number. We will investigate and, at our sole discretion, issue a credit or refund if we confirm the above conditions. We make no guarantee of outcome and reserve the right to issue service credits in place of monetary refunds.`
            },
            {
              title: "5. Chargebacks & Disputes",
              content: `We take unauthorized chargebacks very seriously. If you initiate a chargeback or payment dispute with your bank or card issuer without first contacting us in good faith, we reserve the right to:\n\n• Immediately suspend or terminate your access to the Service\n• Provide evidence to your payment provider documenting your use of the Service\n• Take legal action to recover disputed amounts plus associated fees\n\nWe encourage you to contact us directly at devsaurabhgaur@gmail.com before raising any dispute. We are committed to resolving genuine issues fairly and promptly.`
            },
            {
              title: "6. Consumer Rights",
              content: `These terms do not limit any statutory rights you may have under applicable consumer protection laws in your jurisdiction. If you believe you have a statutory right to a refund that this policy does not address, please contact us at devsaurabhgaur@gmail.com with details of your claim and the applicable law you believe grants you this right.`
            },
            {
              title: "7. Contact for Refund Inquiries",
              content: `For any refund-related inquiry, please contact us at:\n\nEmail: devsaurabhgaur@gmail.com\nSubject Line: "Refund Inquiry - [Your Order/Payment Reference Number]"\n\nPlease allow up to 5 business days for a response. Including your payment reference number and the email associated with your purchase will help us resolve your inquiry faster.`
            }
          ].map((section, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 32px" }}>
              <h2 style={{ fontFamily: "Cinzel,serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 14, marginTop: 0 }}>{section.title}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0, whiteSpace: "pre-line" }}>{section.content}</p>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div style={{ marginTop: 48, padding: "28px 32px", background: "rgba(255,183,71,0.06)", border: "1px solid rgba(255,183,71,0.25)", borderRadius: 16 }}>
          <h3 style={{ fontFamily: "Cinzel,serif", fontSize: 16, fontWeight: 700, color: "#FFB347", marginTop: 0, marginBottom: 12 }}>📋 Policy Summary</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
            {[
              { label: "Starter Plan", status: "❌ No Refund" },
              { label: "Pro Monthly", status: "❌ No Refund" },
              { label: "Yearly Pro", status: "❌ No Refund" },
              { label: "Technical Failure (No Reading)", status: "⚠️ Review Case-by-Case" },
              { label: "Subscription Cancellation", status: "✅ Future Renewals Stopped" },
              { label: "Chargebacks", status: "⚠️ Contact Us First" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(0,0,0,0.2)", borderRadius: 10, padding: "12px 16px" }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 32, padding: "28px 32px", background: "rgba(255,107,43,0.06)", border: "1px solid rgba(255,107,43,0.2)", borderRadius: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#FFB347" }}>Support:</strong> Contact us at{" "}
            <a href="mailto:devsaurabhgaur@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>devsaurabhgaur@gmail.com</a>
            {" "}· © {new Date().getFullYear()} KundaliAI · Made with ♥ in India
          </p>
        </div>
      </main>
    </div>
  );
}
