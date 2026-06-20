import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

const GradText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ background: "linear-gradient(135deg,#FF6B2B,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </span>
);

function TermsPage() {
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
            Terms & <GradText>Conditions</GradText>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Last updated: June 20, 2025 · Effective immediately</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing or using KundaliAI ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service. KundaliAI is operated by Saurabh Gaur ("we", "us", or "our"). These terms apply to all visitors, users, and others who access or use the Service.`
            },
            {
              title: "2. Description of Service",
              content: `KundaliAI provides AI-powered Vedic astrology readings ("Kundali") generated using astronomical data and artificial intelligence technology. The Service includes free readings (up to the limit specified on the platform) and premium subscription plans. All readings are for entertainment and informational purposes only and should not be relied upon for any critical life decisions.`
            },
            {
              title: "3. User Eligibility",
              content: `You must be at least 18 years of age to use this Service and make purchases. By using the Service, you represent and warrant that you are at least 18 years old and that you have the legal capacity to enter into these Terms. If you are under 18, you may use the Service only with the involvement of a parent or guardian.`
            },
            {
              title: "4. Account & Data",
              content: `KundaliAI does not require mandatory account registration for free readings. Birth details you submit (name, date of birth, time of birth, place of birth) are processed solely to generate your Kundali reading. We do not sell, share, or use your personal birth data for advertising. Reading results may be cached locally in your browser for convenience and are not stored on our servers beyond the generation session.`
            },
            {
              title: "5. Payments & Subscriptions",
              content: `Premium plans are available for purchase via Razorpay, a PCI-DSS compliant payment processor. All amounts are displayed in Indian Rupees (INR). Subscription plans (Pro Monthly and Yearly Pro) automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. We reserve the right to change pricing with 30 days notice.`
            },
            {
              title: "6. No Refund Policy",
              content: `ALL PURCHASES ARE FINAL AND NON-REFUNDABLE. Because each Kundali reading instantly consumes premium AI compute resources (Gemini 2.5 Flash AI), astronomical ephemeris calculations, and server processing capacity at the moment of generation, we are unable to offer refunds once a reading has been generated or payment has been processed. This no-refund policy applies to: (a) Starter plan one-time purchases, (b) Pro Monthly subscriptions where at least one reading has been generated, (c) Yearly Pro subscriptions where at least one reading has been generated, (d) any partial-period subscription cancellations. In exceptional technical cases where the Service was completely unavailable and no reading was generated, please contact devsaurabhgaur@gmail.com within 48 hours for review. We reserve sole discretion in such determinations.`
            },
            {
              title: "7. Disclaimer of Warranties",
              content: `THE SERVICE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. KundaliAI does not guarantee the accuracy, completeness, or suitability of any Kundali reading for any particular purpose. Vedic astrology readings are for entertainment purposes only. We expressly disclaim all warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.`
            },
            {
              title: "8. Limitation of Liability",
              content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, KUNDALIAI AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.`
            },
            {
              title: "9. Intellectual Property",
              content: `All content, features, and functionality of the Service — including but not limited to the AI-generated readings, website design, code, text, graphics, and branding — are owned by KundaliAI and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for your personal use. You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any portion of the Service without our prior written consent.`
            },
            {
              title: "10. Prohibited Uses",
              content: `You agree not to: (a) scrape, crawl, or use automated tools to access the Service; (b) attempt to circumvent usage limits or free-tier restrictions; (c) use the Service to generate content for commercial redistribution without our consent; (d) interfere with the Service's security or operation; (e) impersonate another person or entity; (f) use the Service for any illegal purpose or in violation of any applicable law or regulation; (g) resell access to the Service without written permission.`
            },
            {
              title: "11. Privacy",
              content: `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.`
            },
            {
              title: "12. Governing Law & Dispute Resolution",
              content: `These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The seat of arbitration shall be New Delhi, India. The language of arbitration shall be English.`
            },
            {
              title: "13. Changes to Terms",
              content: `We reserve the right to modify these Terms at any time. We will notify users of material changes by posting a notice on our website and updating the "Last updated" date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, please discontinue use of the Service.`
            },
            {
              title: "14. Contact Us",
              content: `If you have any questions about these Terms and Conditions, please contact us at: devsaurabhgaur@gmail.com. We aim to respond to all inquiries within 5 business days.`
            }
          ].map((section, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 32px" }}>
              <h2 style={{ fontFamily: "Cinzel,serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 14, marginTop: 0 }}>{section.title}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>{section.content}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, padding: "28px 32px", background: "rgba(255,107,43,0.06)", border: "1px solid rgba(255,107,43,0.2)", borderRadius: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#FFB347" }}>Questions?</strong> Contact our support team at{" "}
            <a href="mailto:devsaurabhgaur@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>devsaurabhgaur@gmail.com</a>
            {" "}· © {new Date().getFullYear()} KundaliAI · Made with ♥ in India
          </p>
        </div>
      </main>
    </div>
  );
}
