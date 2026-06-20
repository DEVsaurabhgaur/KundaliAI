import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { StarField } from "@/components/StarField";
import { KundaliChart } from "@/components/KundaliChart";
import { KundaliGenerator } from "@/components/KundaliGenerator";
import { PaymentModal } from "@/components/PaymentModal";
import { verifyOwnerBypass } from "@/lib/api/bypass";
import type { PlanId } from "@/lib/api/payment";
import {
  Sparkles, Stars, FileDown, Brain, Compass, Heart,
  Briefcase, Activity, Check, ArrowRight, Menu, X,
  Shield, Users, TrendingUp, Quote, Moon, Sun,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* ─── Scroll reveal (pure IntersectionObserver) ──────────────────────── */
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>{children}</div>
  );
}

/* ─── Gradient text helper ────────────────────────────────────────────── */
const GradText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ background: "linear-gradient(135deg,#FF6B2B,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </span>
);

/* ═══════════════════════════════════════════════════════════════════════ */
/*  NAV                                                                   */
/* ═══════════════════════════════════════════════════════════════════════ */
function Nav({ ownerMode }: { ownerMode: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{ background: scrolled ? "rgba(10,5,30,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent", position: "sticky", top: 0, zIndex: 50, transition: "all 0.3s ease" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#FF6B2B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px #FF6B2B55" }}>
            <Sparkles size={16} color="#fff" />
          </div>
          <span style={{ fontFamily: "Cinzel,serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>
            Kundali<GradText>AI</GradText>
          </span>
          {ownerMode && <span style={{ background: "rgba(255,183,71,0.2)", border: "1px solid rgba(255,183,71,0.4)", borderRadius: 99, padding: "2px 10px", fontSize: 11, fontWeight: 700, color: "#FFB347" }}>★ OWNER</span>}
        </Link>

        <nav style={{ display: "flex", gap: 32, fontSize: 14 }} className="hidden md:flex">
          {[["#features","Features"],["#how-it-works","How It Works"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([h,l]) => (
            <a key={l} href={h} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
            >{l}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <KundaliGenerator>
            <button id="nav-cta" style={{ background: "linear-gradient(135deg,#FF6B2B,#FFB347)", border: "none", borderRadius: 99, padding: "10px 22px", fontSize: 14, fontWeight: 700, color: "#fff", cursor: "pointer", boxShadow: "0 0 20px #FF6B2B55", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.05)"; (e.target as HTMLElement).style.boxShadow = "0 0 32px #FF6B2B88"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = "scale(1)"; (e.target as HTMLElement).style.boxShadow = "0 0 20px #FF6B2B55"; }}>
              Free Kundali ✨
            </button>
          </KundaliGenerator>
          <button onClick={() => setOpen(p => !p)} className="md:hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: 8, color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "rgba(10,5,30,0.97)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
          {[["#features","Features"],["#how-it-works","How It Works"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([h,l]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 15, padding: "6px 0" }}>{l}</a>
          ))}
          <KundaliGenerator>
            <button style={{ background: "linear-gradient(135deg,#FF6B2B,#FFB347)", border: "none", borderRadius: 99, padding: "12px 0", fontSize: 15, fontWeight: 700, color: "#fff", cursor: "pointer", width: "100%" }}>
              ✨ Get Free Kundali
            </button>
          </KundaliGenerator>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/*  HERO                                                                  */
/* ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", background: "radial-gradient(ellipse at 65% 0%, rgba(120,40,200,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(255,107,43,0.15) 0%, transparent 50%)" }}>
      <StarField density={110} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,40,180,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center", width: "100%" }} className="lg:grid-cols-hero">

        {/* Text */}
        <div style={{ animation: "fadeSlideUp 0.7s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,43,0.12)", border: "1px solid rgba(255,107,43,0.35)", borderRadius: 99, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#FFB347", marginBottom: 28, letterSpacing: "0.02em" }}>
            <Stars size={14} /> Vedic AI · Powered by Gemini 2.5 Flash
          </div>

          <h1 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(40px,6vw,76px)", fontWeight: 800, lineHeight: 1.07, color: "#fff", margin: "0 0 24px" }}>
            Your Stars.<br />
            <GradText>Your Story.</GradText><br />
            Your Destiny.
          </h1>

          <p style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 0 40px" }}>
            A 5,000-year-old science, reimagined with AI. Get a deeply personal Vedic Kundali — personality, career, love &amp; health — in under 30 seconds.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 40 }}>
            <KundaliGenerator>
              <button id="hero-cta" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#FF6B2B,#FFD700)", border: "none", borderRadius: 99, padding: "16px 36px", fontSize: 16, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 0 40px #FF6B2B55", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.04)"; (e.target as HTMLElement).style.boxShadow = "0 0 60px #FF6B2B88"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = "scale(1)"; (e.target as HTMLElement).style.boxShadow = "0 0 40px #FF6B2B55"; }}>
                ✨ Get Free Kundali <ArrowRight size={18} />
              </button>
            </KundaliGenerator>
            <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 99, padding: "15px 28px", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,107,43,0.5)"; (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"; (e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}>
              See how it works
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>
            {["✅ 3 free readings","✅ No credit card","✅ Instant PDF","✅ Hindi + English"].map(t => <span key={t}>{t}</span>)}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px" }}>
            {[["12,400+","Readings generated"],["4.9★","Average rating"],["< 30s","Generation time"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "Cinzel,serif", fontSize: 26, fontWeight: 800, color: "#fff" }}>{n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ animation: "floatAnim 6s ease-in-out infinite", maxWidth: 420, margin: "0 auto", width: "100%", aspectRatio: "1" }}>
          <KundaliChart className="h-full w-full" />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes floatAnim { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }
        @media(min-width:1024px) { .lg\\:grid-cols-hero { grid-template-columns: 3fr 2fr !important; } }
      `}</style>
    </section>
  );
}

/* ─── Trust Bar ───────────────────────────────────────────────────────── */
function TrustBar() {
  const items = ["🔒 256-bit Secure","⚡ Gemini 1.5 Flash AI","🌐 Hindi & English","📄 PDF Export","♾️ Vedic Methodology","🛡️ No Data Selling"];
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", padding: "14px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 32px" }}>
        {items.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.38)", letterSpacing: "0.04em" }}>{t}</span>)}
      </div>
    </div>
  );
}

/* ─── How It Works ────────────────────────────────────────────────────── */
const STEPS = [
  { n:"01", emoji:"🗓️", title:"Enter Birth Details", desc:"Name, date, time and place of birth — takes just 30 seconds to fill." },
  { n:"02", emoji:"🪐", title:"AI Reads Your Chart", desc:"Vedic AI calculates exact planetary positions and interprets your unique birth chart." },
  { n:"03", emoji:"📜", title:"Receive Your Reading", desc:"Get a personalised multi-page reading covering personality, career, love and health." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal className="text-center" style={{ textAlign: "center", marginBottom: 60 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>SIMPLE PROCESS</p>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 16px" }}>
              From birth to blueprint <GradText>in 3 steps</GradText>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {STEPS.map((s,i) => (
            <Reveal key={s.n} delay={i*120}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: 32, transition: "all 0.3s ease", height: "100%" }}
                onMouseEnter={e => { (e.currentTarget).style.borderColor = "rgba(255,107,43,0.45)"; (e.currentTarget).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget).style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.emoji}</div>
                <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: "rgba(255,107,43,0.6)", marginBottom: 8 }}>{s.n}</div>
                <h3 style={{ fontFamily: "Cinzel,serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400} className="text-center" style={{ textAlign: "center", marginTop: 40 }}>
          <KundaliGenerator>
            <button style={{ background: "rgba(255,107,43,0.12)", border: "1px solid rgba(255,107,43,0.4)", borderRadius: 99, padding: "14px 32px", fontSize: 14, fontWeight: 700, color: "#FFB347", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "rgba(255,107,43,0.22)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "rgba(255,107,43,0.12)"; }}>
              Try it free — no signup needed ✨
            </button>
          </KundaliGenerator>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Features ────────────────────────────────────────────────────────── */
const FEATURES = [
  { Icon: Compass, title:"Swiss Ephemeris Accuracy", desc:"Planetary positions calculated to arc-second precision — same as professional Jyotishis worldwide." },
  { Icon: Brain, title:"Deep AI Personality", desc:"Gemini reads your exact chart and writes flowing prose about your strengths, challenges and potential." },
  { Icon: FileDown, title:"Beautiful PDF Report", desc:"Typeset, print-ready Kundali with North Indian chart, planetary table and full interpretation." },
  { Icon: Moon, title:"Dasha Timelines", desc:"Vimshottari Mahadasha periods mapped to your life — know exactly what's coming and when." },
  { Icon: Sun, title:"Yoga Detection", desc:"Every Raj Yoga, Dhan Yoga and classical combination in your chart found and explained clearly." },
  { Icon: Heart, title:"Compatibility & Love", desc:"Ashtakoota analysis with Manglik assessment for complete relationship compatibility." },
];

function Features() {
  return (
    <section id="features" style={{ padding: "96px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>WHAT YOU GET</p>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", margin: "0 0 16px" }}>
              Ancient wisdom, <GradText>re-engineered</GradText>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Every feature built on real astronomical data — no horoscope clichés, no vague predictions.
            </p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i*80}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: 28, transition: "all 0.3s", height: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,43,0.4)"; e.currentTarget.style.background = "rgba(255,107,43,0.04)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,107,43,0.12)", border: "1px solid rgba(255,107,43,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={20} color="#FFB347" />
                </div>
                <h3 style={{ fontFamily: "Cinzel,serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Live Preview ────────────────────────────────────────────────────── */
const PREVIEW_TABS = [
  { id:"personality", Icon:Brain, label:"Personality", text:"With your Sun in the 10th house and Atmakaraka Saturn, you carry the weight of destiny in your work. A natural leader who succeeds through discipline — your karma demands mastery." },
  { id:"career", Icon:Briefcase, label:"Career", text:"Mercury–Jupiter parivartana in houses 3 and 9 suggests exceptional ability in communication or strategy. The 2026–2029 Jupiter Mahadasha is your window for rapid career ascent." },
  { id:"love", Icon:Heart, label:"Love", text:"Venus in Libra in your 7th house — you are designed for deep partnership. Your soul's growth happens through committed relationships. A transformative love is written in your chart." },
  { id:"health", Icon:Activity, label:"Health", text:"Mars aspecting your Lagna gives strong vitality and recovery ability. Saturn's gaze on the 6th house asks for routine and sleep discipline. You have a remarkably resilient constitution." },
];

function SamplePreview() {
  const [tab, setTab] = useState("personality");
  const active = PREVIEW_TABS.find(t => t.id === tab)!;
  return (
    <section style={{ padding: "96px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>LIVE PREVIEW</p>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", margin: 0 }}>
              Every reading is <GradText>uniquely yours</GradText>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <Reveal>
            <div style={{ maxWidth: 380, margin: "0 auto", aspectRatio: "1", width: "100%" }}>
              <KundaliChart className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden" }}>
              {/* Tabs */}
              <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", overflowX: "auto" }}>
                {PREVIEW_TABS.map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "14px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", borderBottom: tab === t.id ? "2px solid #FF6B2B" : "2px solid transparent", background: tab === t.id ? "rgba(255,107,43,0.1)" : "transparent", color: tab === t.id ? "#FFB347" : "rgba(255,255,255,0.5)", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                    <t.Icon size={14} />{t.label}
                  </button>
                ))}
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <active.Icon size={18} color="#FFB347" />
                  <h3 style={{ fontFamily: "Cinzel,serif", fontSize: 17, fontWeight: 700, color: "#fff", margin: 0 }}>{active.label} Reading</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.78)", fontStyle: "italic", borderLeft: "2px solid rgba(255,107,43,0.4)", paddingLeft: 16, margin: "0 0 24px" }}>
                  &ldquo;{active.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
                  Generated by Gemini AI from your exact chart
                </div>
                <KundaliGenerator>
                  <button style={{ width: "100%", background: "linear-gradient(135deg,#FF6B2B,#FFD700)", border: "none", borderRadius: 12, padding: "14px 0", fontSize: 14, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 0 20px #FF6B2B44", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "0.9"; (e.target as HTMLElement).style.transform = "scale(1.01)"; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "scale(1)"; }}>
                    Get Your Personalised Reading ✨
                  </button>
                </KundaliGenerator>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const PLANS_UI = [
  { id:"starter" as PlanId, emoji:"⚡", name:"Starter", price:"₹99", note:"One-time", tag:"Perfect for a personal reading", credits:"3 Kundali Readings", features:["Full Vedic birth chart","AI personality analysis","Career & love reading","PDF export","Lifetime access"], featured:false, cta:"Get Started" },
  { id:"pro_monthly" as PlanId, emoji:"🌟", name:"Pro Monthly", price:"₹499", note:"/month", tag:"For serious seekers", credits:"Unlimited Readings", features:["Everything in Starter","Compatibility matching","Dasha forecasts","Priority AI","Premium PDF","Email support"], featured:true, cta:"Start Pro" },
  { id:"pro_yearly" as PlanId, emoji:"👑", name:"Yearly Pro", price:"₹3,999", note:"/year", tag:"Save 33% — best value", credits:"Unlimited + API Access", features:["Everything in Pro Monthly","White-label PDFs","API access (soon)","Early features","Priority support"], featured:false, cta:"Get Best Value" },
];

function Pricing({ ownerMode }: { ownerMode: boolean }) {
  const [activePlan, setActivePlan] = useState<PlanId | null>(null);
  const [storedPlan, setStoredPlan] = useState<string | null>(null);
  useEffect(() => { try { setStoredPlan(localStorage.getItem("kundali_plan")); } catch{} }, [activePlan]);

  return (
    <section id="pricing" style={{ padding: "96px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>PRICING</p>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>
              Choose your <GradText>cosmic plan</GradText>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>Start free. Upgrade when ready. Cancel anytime.</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, alignItems: "start" }}>
          {PLANS_UI.map((p, i) => {
            const purchased = storedPlan === p.id || ownerMode;
            return (
              <Reveal key={p.id} delay={i*100}>
                <div style={{ position: "relative", borderRadius: 22, border: p.featured ? "1px solid rgba(255,107,43,0.65)" : "1px solid rgba(255,255,255,0.1)", background: p.featured ? "linear-gradient(160deg,rgba(255,107,43,0.1),rgba(255,107,43,0.04))" : "rgba(255,255,255,0.03)", padding: 32, transform: p.featured ? "scale(1.02)" : "scale(1)", boxShadow: p.featured ? "0 0 60px rgba(255,107,43,0.15)" : "none", transition: "all 0.3s" }}>
                  {p.featured && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#FF6B2B,#FFD700)", borderRadius: 99, padding: "5px 18px", fontSize: 11, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>✦ MOST POPULAR</div>}
                  {purchased && <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 99, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#4ade80" }}>✓ Active</div>}
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{p.emoji}</div>
                  <h3 style={{ fontFamily: "Cinzel,serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{p.tag}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontFamily: "Cinzel,serif", fontSize: 42, fontWeight: 800, color: "#fff" }}>{p.price}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{p.note}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "#FFB347", marginBottom: 28 }}>{p.credits}</div>
                  <button id={`plan-${p.id}`} onClick={() => !ownerMode && !purchased && setActivePlan(p.id)}
                    style={{ width: "100%", borderRadius: 14, border: p.featured && !purchased && !ownerMode ? "none" : "1px solid rgba(255,255,255,0.2)", padding: "15px 0", fontSize: 15, fontWeight: 800, cursor: ownerMode ? "default" : purchased ? "default" : "pointer", marginBottom: 28, transition: "all 0.2s",
                      background: ownerMode ? "linear-gradient(135deg,#22c55e,#4ade80)" : purchased ? "rgba(74,222,128,0.15)" : p.featured ? "linear-gradient(135deg,#FF6B2B,#FFD700)" : "rgba(255,255,255,0.06)",
                      color: ownerMode ? "#fff" : purchased ? "#4ade80" : "#fff",
                      boxShadow: p.featured && !purchased && !ownerMode ? "0 0 25px rgba(255,107,43,0.4)" : "none" }}>
                    {ownerMode ? "★ Owner Access" : purchased ? "✓ Active Plan" : p.cta}
                  </button>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid rgba(255,255,255,0.09)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                        <Check size={15} color="#FFB347" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={300} style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "rgba(255,255,255,0.38)" }}>
          🔒 Secured by Razorpay · UPI, Cards, NetBanking, Wallets
        </Reveal>
      </div>
      {activePlan && <PaymentModal planId={activePlan} onClose={() => setActivePlan(null)} onSuccess={() => { setActivePlan(null); try { setStoredPlan(localStorage.getItem("kundali_plan")); } catch{} }} />}
    </section>
  );
}

/* ─── Reviews ─────────────────────────────────────────────────────────── */
const REVIEWS = [
  { name:"Priya Sharma", role:"Yoga Teacher, Pune", i:"P", color:"#FF6B2B", quote:"I've consulted three astrologers. KundaliAI was sharper and more specific than any of them — and it took 30 seconds." },
  { name:"Aarav Mehta", role:"Startup Founder, Bengaluru", i:"A", color:"#7C3AED", quote:"The career section called out my Mercury–Jupiter exchange with eerie accuracy. Finally an astrology product for our generation." },
  { name:"Sneha Iyer", role:"Product Designer, Mumbai", i:"S", color:"#0EA5E9", quote:"The PDF is gorgeous. I printed it and framed it. KundaliAI made something deeply personal feel like art." },
  { name:"Rajesh Nair", role:"Finance Manager, Chennai", i:"R", color:"#10B981", quote:"Skeptic turned believer. The Dasha forecast accurately described my career shift last year. I'm a subscriber for life." },
  { name:"Ananya Kapoor", role:"Freelancer, Delhi", i:"A", color:"#F59E0B", quote:"Hindi mein jo reading mili, woh bilkul desi feel thi. Mere nani bhi samajh payin! Bahut achha kaam kiya." },
  { name:"Vikram Singh", role:"Teacher, Jaipur", i:"V", color:"#EC4899", quote:"My students kept asking about astrology so I tried this. The accuracy shocked me. Now I recommend it to everyone." },
];

function Reviews() {
  return (
    <section id="reviews" style={{ padding: "96px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", color: "#FFB347", marginBottom: 12 }}>SOCIAL PROOF</p>
            <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#fff", margin: 0 }}>
              Loved by <GradText>12,400+ seekers</GradText>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i*70}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: 24, transition: "all 0.3s", height: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ color: "#FFB347", fontSize: 14, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ display: "flex", gap: 6, marginBottom: 4, alignItems: "flex-start" }}>
                  <Quote size={14} color="rgba(255,255,255,0.2)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", margin: 0 }}>{r.quote}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: r.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cinzel,serif", fontWeight: 700, color: "#fff", fontSize: 14, flexShrink: 0 }}>{r.i}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginTop: 48 }}>
          {[[Users,"12,400+","Happy Users"],[TrendingUp,"98%","Satisfaction Rate"],[Stars,"4.9★","Average Rating"],[Shield,"100%","Privacy Secured"]].map(([Icon, n, l]) => (
            <Reveal key={l as string} delay={100}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "28px 20px", textAlign: "center" }}>
                {/* @ts-ignore */}
                <Icon size={24} color="#FFB347" style={{ margin: "0 auto 12px" }} />
                <div style={{ fontFamily: "Cinzel,serif", fontSize: 28, fontWeight: 800, color: "#fff" }}>{n as string}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{l as string}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section style={{ padding: "96px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ position: "relative", borderRadius: 28, border: "1px solid rgba(255,107,43,0.3)", background: "linear-gradient(135deg,rgba(30,15,60,0.95),rgba(20,10,45,0.95))", padding: "80px 40px", textAlign: "center", overflow: "hidden", boxShadow: "0 0 80px rgba(255,107,43,0.1)" }}>
            <StarField density={50} />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 56, marginBottom: 24 }}>🌌</div>
              <h2 style={{ fontFamily: "Cinzel,serif", fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 20px" }}>
                Your destiny is written.<br /><GradText>Time to read it.</GradText>
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
                Over 12,400 people have decoded their cosmic blueprint. Your first 3 readings are free — no credit card needed.
              </p>
              <KundaliGenerator>
                <button id="final-cta" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg,#FF6B2B,#FFD700)", border: "none", borderRadius: 99, padding: "18px 44px", fontSize: 17, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 0 50px rgba(255,107,43,0.5)", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.05)"; (e.target as HTMLElement).style.boxShadow = "0 0 70px rgba(255,107,43,0.75)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.transform = "scale(1)"; (e.target as HTMLElement).style.boxShadow = "0 0 50px rgba(255,107,43,0.5)"; }}>
                  ✨ Generate My Free Kundali <ArrowRight size={20} />
                </button>
              </KundaliGenerator>
              <p style={{ marginTop: 18, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Free forever · No signup · Instant results</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "60px 20px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40 }}>
        <div style={{ gridColumn: "span 2" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#FF6B2B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={15} color="#fff" />
            </div>
            <span style={{ fontFamily: "Cinzel,serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>KundaliAI</span>
          </Link>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 280, lineHeight: 1.7 }}>Vedic astrology reimagined with AI. Your stars, your story, your future.</p>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Product</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[["#features","Features"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([h,l]) => (
              <a key={l} href={h} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Company</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["About","Privacy Policy","Terms","Contact"].map(l => (
              <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
        <span>© {new Date().getFullYear()} KundaliAI · Made with ♥ in India</span>
        <span>🔒 Payments secured by Razorpay</span>
      </div>
    </footer>
  );
}

/* ─── Root ────────────────────────────────────────────────────────────── */
function Landing() {
  const [ownerMode, setOwnerMode] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem("kundali_owner") === "1") setOwnerMode(true); } catch{}
    const params = new URLSearchParams(window.location.search);
    const token = params.get("ownerKey");
    if (token) {
      window.history.replaceState({}, "", window.location.pathname);
      verifyOwnerBypass({ data: { token } }).then(r => {
        if (r.valid) { setOwnerMode(true); try { sessionStorage.setItem("kundali_owner","1"); } catch{} }
      }).catch(() => {});
    }
  }, []);

  return (
    <div style={{ background: "#0A0518", minHeight: "100vh", color: "#fff", fontFamily: "Inter,system-ui,sans-serif" }}>
      <Nav ownerMode={ownerMode} />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <SamplePreview />
        <Pricing ownerMode={ownerMode} />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
