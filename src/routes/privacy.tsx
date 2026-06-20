import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

const GradText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ background: "linear-gradient(135deg,#FF6B2B,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </span>
);

function PrivacyPage() {
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
            Privacy <GradText>Policy</GradText>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Last updated: June 20, 2025 · Effective immediately</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            {
              title: "1. Introduction",
              content: `KundaliAI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Service.`
            },
            {
              title: "2. Information We Collect",
              content: `We collect only the minimum information necessary to provide the Service:\n\n• Birth Details (submitted voluntarily): Name, date of birth, time of birth, and place of birth — used solely to generate your Vedic Kundali reading.\n• Payment Information: Processed exclusively by Razorpay (a PCI-DSS Level 1 compliant processor). We do not store your card numbers, UPI IDs, or bank account details.\n• Usage Data: Browser type, device type, pages visited, and timestamp — collected via standard server logs and analytics for service improvement.\n• Cookies: We use minimal session cookies necessary for service functionality. No third-party tracking cookies are used.`
            },
            {
              title: "3. How We Use Your Information",
              content: `We use the information we collect to:\n\n• Generate and display your Kundali reading\n• Process payments and manage subscriptions\n• Send transactional communications (payment confirmations, subscription updates)\n• Monitor and improve service performance and security\n• Comply with legal obligations\n\nWe do NOT use your information for targeted advertising, and we do NOT sell your data to third parties.`
            },
            {
              title: "4. Data Storage & Retention",
              content: `Birth details submitted for Kundali generation are processed server-side in real-time to generate your reading and are not permanently stored in our databases beyond the active session. Reading results may be cached in your browser's local storage for convenience — this data never leaves your device. Payment records are retained for legal and accounting compliance as required by applicable law (typically 7 years under Indian tax regulations).`
            },
            {
              title: "5. Data Sharing",
              content: `We do not sell, trade, or rent your personal information to any third party. We share information only with:\n\n• Razorpay (payment processing) — governed by their own Privacy Policy\n• Google Cloud (AI inference via Gemini API) — data processed per Google's API Terms of Service\n• Vercel (hosting infrastructure) — server-side processing only\n• Law enforcement when required by valid legal process`
            },
            {
              title: "6. Data Security",
              content: `We implement industry-standard security measures including HTTPS/TLS encryption for all data in transit, secure API key management via environment variables, Razorpay's PCI-DSS compliant payment processing, and regular security audits. No method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.`
            },
            {
              title: "7. Your Rights (PDPB / GDPR)",
              content: `You have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data (right to be forgotten)\n• Object to processing of your data\n• Data portability (receive your data in a structured format)\n\nTo exercise any of these rights, email us at devsaurabhgaur@gmail.com. We will respond within 30 days.`
            },
            {
              title: "8. Children's Privacy",
              content: `The Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at devsaurabhgaur@gmail.com and we will delete such information.`
            },
            {
              title: "9. Cookies",
              content: `We use only essential functional cookies required for the Service to operate (e.g., session management). We do not use tracking, advertising, or third-party analytics cookies. You can configure your browser to refuse cookies, but some features of the Service may not function properly as a result.`
            },
            {
              title: "10. Third-Party Links",
              content: `Our Service may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`
            },
            {
              title: "11. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.`
            },
            {
              title: "12. Contact Us",
              content: `For any privacy-related questions, concerns, or requests, please contact our Privacy Officer at: devsaurabhgaur@gmail.com\n\nWe are committed to resolving privacy complaints and will respond within 5 business days.`
            }
          ].map((section, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 32px" }}>
              <h2 style={{ fontFamily: "Cinzel,serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 14, marginTop: 0 }}>{section.title}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0, whiteSpace: "pre-line" }}>{section.content}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, padding: "28px 32px", background: "rgba(255,107,43,0.06)", border: "1px solid rgba(255,107,43,0.2)", borderRadius: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#FFB347" }}>Privacy Questions?</strong> Contact us at{" "}
            <a href="mailto:devsaurabhgaur@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>devsaurabhgaur@gmail.com</a>
            {" "}· © {new Date().getFullYear()} KundaliAI · Made with ♥ in India
          </p>
        </div>
      </main>
    </div>
  );
}
