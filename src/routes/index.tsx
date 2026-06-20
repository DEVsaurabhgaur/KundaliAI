import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { StarField } from "@/components/StarField";
import { KundaliChart } from "@/components/KundaliChart";
import { KundaliGenerator } from "@/components/KundaliGenerator";
import { PaymentModal } from "@/components/PaymentModal";
import { verifyOwnerBypass } from "@/lib/api/bypass";
import type { PlanId } from "@/lib/api/payment";
import {
  Sparkles, Stars, Moon, Sun, FileDown, Brain,
  Compass, Heart, Briefcase, Activity, Check, ArrowRight,
  Menu, X, Shield, Zap, Users, TrendingUp, Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KundaliAI — Decode Your Cosmic Blueprint with AI" },
      {
        name: "description",
        content:
          "AI-powered Vedic astrology. Get your accurate Kundali, personality, career, love and destiny analysis in seconds. Powered by Gemini AI.",
      },
      { property: "og:title", content: "KundaliAI — Decode Your Cosmic Blueprint" },
      { property: "og:description", content: "5,000-year-old Vedic science meets modern AI. Your stars, your story." },
      { name: "theme-color", content: "#0B0520" },
    ],
  }),
  component: Landing,
});

/* ─── Intersection Observer hook (no framer-motion dependency) ─────────── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Fade-in wrapper ─────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* NAV                                                                    */
/* ═══════════════════════════════════════════════════════════════════════ */
function Nav({ ownerMode }: { ownerMode: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[oklch(0.1_0.05_290/0.92)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#FF6B2B] to-[#FFB347] shadow-[0_0_20px_#FF6B2B55]">
            <Sparkles className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="font-display text-xl font-bold text-white">
            Kundali<span style={{ background: "linear-gradient(90deg,#FF6B2B,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
          </span>
          {ownerMode && (
            <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-400/30">★ OWNER</span>
          )}
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/60">
          {[["#features","Features"],["#how-it-works","How It Works"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([href,label])=>(
            <a key={label} href={href} className="hover:text-white transition-colors duration-200">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <KundaliGenerator>
            <button id="nav-cta" className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FFB347] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_#FF6B2B55] hover:shadow-[0_0_30px_#FF6B2B88] hover:scale-105 active:scale-95 transition-all duration-200">
              Free Kundali <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </KundaliGenerator>
          <button onClick={() => setMenuOpen(p=>!p)} className="md:hidden rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:text-white transition" aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[oklch(0.12_0.06_290/0.97)] backdrop-blur-xl px-5 py-5 space-y-4">
          {[["#features","Features"],["#how-it-works","How It Works"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([href,label])=>(
            <a key={label} href={href} onClick={()=>setMenuOpen(false)} className="block text-sm text-white/70 hover:text-white py-1.5 transition">{label}</a>
          ))}
          <KundaliGenerator>
            <button className="w-full mt-2 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FFB347] py-3 text-sm font-semibold text-white">
              Get Free Kundali ✨
            </button>
          </KundaliGenerator>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* HERO                                                                   */
/* ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 60% 0%, oklch(0.55 0.22 290 / 0.3) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.7 0.2 40 / 0.2) 0%, transparent 50%), oklch(0.1 0.05 290)"}} />
      <StarField density={100} />
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full" style={{background:"radial-gradient(circle, oklch(0.55 0.22 290 / 0.12) 0%, transparent 70%)"}} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-5 lg:py-24">
        {/* Left: text — takes 3/5 */}
        <motion.div className="lg:col-span-3" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 px-4 py-2 text-xs font-semibold text-[#FFB347] mb-7">
            <Stars className="h-3.5 w-3.5" />
            Vedic AI · Powered by Gemini 1.5 Flash
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.07] text-white sm:text-6xl xl:text-7xl">
            Your Stars.<br />
            <span style={{background:"linear-gradient(135deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              Your Story.
            </span><br />
            Your Destiny.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            A 5,000-year-old science, reimagined with AI. Get a deeply personal Vedic Kundali — personality, career, love & health — in under 30 seconds.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <KundaliGenerator>
              <button id="hero-cta" className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FFD700] px-9 py-4 text-base font-bold text-white shadow-[0_0_40px_#FF6B2B66] hover:shadow-[0_0_60px_#FF6B2B99] hover:scale-105 active:scale-95 transition-all duration-200">
                ✨ Get Free Kundali
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </button>
            </KundaliGenerator>
            <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-all duration-200">
              See how it works
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/50">
            {["✅ 3 free readings","✅ No credit card","✅ Instant PDF","✅ Hindi + English"].map(t=>(
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* Social proof numbers */}
          <div className="mt-10 flex items-center gap-8">
            {[["12,400+","Readings generated"],["4.9★","Average rating"],["2 min","Avg generation time"]].map(([num,label])=>(
              <div key={label}>
                <div className="font-display text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: chart — takes 2/5 */}
        <motion.div className="lg:col-span-2 relative mx-auto w-full max-w-[380px] aspect-square" initial={{opacity:0,scale:0.9,rotate:-5}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.1,delay:0.15,ease:[0.16,1,0.3,1]}}>
          <div className="animate-float">
            <KundaliChart className="h-full w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* TRUST BAR                                                              */
/* ═══════════════════════════════════════════════════════════════════════ */
function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-5 py-4 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs text-white/40 font-medium">
        {["🔒 256-bit Secure","⚡ Real Gemini AI","🌐 Hindi & English","📄 PDF Export","♾️ Vedic Methodology","🛡️ No Data Sharing"].map(t=>(
          <span key={t} className="tracking-wide">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* HOW IT WORKS                                                           */
/* ═══════════════════════════════════════════════════════════════════════ */
const STEPS = [
  { n:"01", icon: "🗓️", title:"Enter Birth Details", desc:"Name, date, time and place of birth — takes 30 seconds." },
  { n:"02", icon: "🪐", title:"AI Reads Your Chart", desc:"Our Vedic AI calculates exact planetary positions and interprets your unique chart." },
  { n:"03", icon: "📜", title:"Receive Your Reading", desc:"Get a personalised multi-page reading covering all major life areas." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB347] mb-3">Simple Process</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">From birth to blueprint<br /><span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>in 3 steps</span></h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s,i)=>(
            <Reveal key={s.n} delay={i*100}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 hover:border-[#FF6B2B]/40 hover:-translate-y-1 transition-all duration-300 group">
                {/* connector line */}
                {i < 2 && <div className="hidden md:block absolute top-14 -right-3 w-6 h-px bg-gradient-to-r from-[#FF6B2B]/50 to-transparent z-10" />}
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="font-mono text-xs font-bold text-[#FF6B2B]/60 mb-2">{s.n}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="text-center mt-10">
          <KundaliGenerator>
            <button className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2B]/40 bg-[#FF6B2B]/10 px-7 py-3.5 text-sm font-semibold text-[#FFB347] hover:bg-[#FF6B2B]/20 hover:border-[#FF6B2B]/70 transition-all duration-200">
              Try it free — no signup needed ✨
            </button>
          </KundaliGenerator>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* FEATURES                                                               */
/* ═══════════════════════════════════════════════════════════════════════ */
const FEATURES = [
  { icon: Compass, title:"Swiss Ephemeris Accuracy", desc:"Planetary positions calculated to arc-second precision — the same data trusted by professional Jyotishis." },
  { icon: Brain, title:"Deep AI Analysis", desc:"Gemini reads your exact chart and writes flowing prose about your strengths, challenges and potential." },
  { icon: FileDown, title:"Beautiful PDF Report", desc:"A typeset, print-ready Kundali with North Indian chart, planetary table and full interpretation." },
  { icon: Moon, title:"Dasha Timelines", desc:"Vimshottari Mahadasha periods mapped to your life — know exactly what's coming and when." },
  { icon: Sun, title:"Yoga Detection", desc:"Every Raj Yoga, Dhan Yoga and classical combination in your chart found and explained clearly." },
  { icon: Heart, title:"Compatibility & Love", desc:"Detailed Ashtakoota analysis with Manglik assessment for relationship compatibility." },
];

function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px max-w-5xl mx-auto" style={{background:"linear-gradient(90deg,transparent,oklch(0.5 0.15 290 / 0.4),transparent)"}} />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB347] mb-3">What You Get</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Ancient wisdom,{" "}
            <span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              re-engineered
            </span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">Every feature is built on real astronomical data — no horoscope clichés, no vague predictions.</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f,i)=>(
            <Reveal key={f.title} delay={i*80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#FF6B2B]/40 hover:bg-[#FF6B2B]/[0.04] hover:-translate-y-1.5 transition-all duration-300">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FFB347] mb-5 group-hover:bg-[#FF6B2B]/20 transition">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* SAMPLE CHART / PREVIEW                                                 */
/* ═══════════════════════════════════════════════════════════════════════ */
const PREVIEW_TABS = [
  { id:"personality", icon:Brain, label:"Personality", text:"With your Sun in the 10th house and Atmakaraka Saturn, you carry the weight of destiny in your work. A natural leader who succeeds through discipline rather than luck — your karma demands mastery." },
  { id:"career", icon:Briefcase, label:"Career", text:"Mercury–Jupiter parivartana in houses 3 and 9 suggests exceptional ability in communication, publishing, or strategy. The 2026–2029 Jupiter Mahadasha is your window for rapid career ascent." },
  { id:"love", icon:Heart, label:"Love", text:"Venus in Libra in your 7th house — you are designed for partnership. Your soul's deepest growth happens through committed relationships. A transformative love is written in your chart for age 28–32." },
  { id:"health", icon:Activity, label:"Health", text:"Mars aspecting your Lagna gives strong vitality and recovery ability. Saturn's gaze on the 6th house asks for routine and sleep discipline. Your greatest health asset is your resilient constitution." },
];

function SamplePreview() {
  const [activeTab, setActiveTab] = useState("personality");
  const active = PREVIEW_TABS.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 50% 50%, oklch(0.55 0.22 290 / 0.08) 0%, transparent 65%)"}} />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB347] mb-3">Live Preview</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Every reading is{" "}
            <span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              uniquely yours
            </span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Chart */}
          <Reveal>
            <div className="relative mx-auto max-w-[360px] aspect-square">
              <KundaliChart className="h-full w-full" />
            </div>
          </Reveal>

          {/* Reading preview */}
          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-white/10 overflow-x-auto">
                {PREVIEW_TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 whitespace-nowrap px-4 py-3.5 text-xs font-semibold border-b-2 transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-[#FF6B2B] text-[#FFB347] bg-[#FF6B2B]/10"
                        : "border-transparent text-white/50 hover:text-white/80"
                    }`}
                  >
                    <tab.icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <active.icon className="h-5 w-5 text-[#FFB347]" />
                  <h3 className="font-display text-lg font-bold text-white">{active.label} Reading</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/75 italic border-l-2 border-[#FF6B2B]/40 pl-4">
                  &ldquo;{active.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Generated by Gemini AI from your exact chart
                </div>
              </div>

              <div className="px-7 pb-6">
                <KundaliGenerator>
                  <button className="w-full rounded-xl bg-gradient-to-r from-[#FF6B2B] to-[#FFD700] py-3 text-sm font-bold text-white hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-[0_0_20px_#FF6B2B44]">
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

/* ═══════════════════════════════════════════════════════════════════════ */
/* PRICING                                                                */
/* ═══════════════════════════════════════════════════════════════════════ */
const PLANS_UI = [
  {
    id: "starter" as PlanId, icon:"⚡",
    name:"Starter", price:"₹99", note:"One-time",
    tagline:"Perfect for a personal reading",
    credits:"3 Kundali Readings",
    features:["Full Vedic birth chart","AI personality analysis","Career & love reading","PDF export","Lifetime access"],
    featured: false, cta:"Get Started",
  },
  {
    id: "pro_monthly" as PlanId, icon:"🌟",
    name:"Pro Monthly", price:"₹499", note:"/month",
    tagline:"For serious seekers",
    credits:"Unlimited Readings",
    features:["Everything in Starter","Compatibility matching","Dasha forecasts","Priority AI processing","Premium PDF design","Email support"],
    featured: true, cta:"Start Pro",
  },
  {
    id: "pro_yearly" as PlanId, icon:"👑",
    name:"Yearly Pro", price:"₹3,999", note:"/year",
    tagline:"Save 33% — most value",
    credits:"Unlimited + API Access",
    features:["Everything in Pro Monthly","White-label PDF export","API access (coming soon)","Early feature access","Priority support"],
    featured: false, cta:"Get Best Value",
  },
];

function Pricing({ ownerMode }: { ownerMode: boolean }) {
  const [activePlan, setActivePlan] = useState<PlanId | null>(null);
  const [storedPlan, setStoredPlan] = useState<string | null>(null);

  useEffect(() => {
    try { setStoredPlan(localStorage.getItem("kundali_plan")); } catch { /**/ }
  }, [activePlan]);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px max-w-5xl mx-auto" style={{background:"linear-gradient(90deg,transparent,oklch(0.5 0.15 290 / 0.4),transparent)"}} />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB347] mb-3">Pricing</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Choose your{" "}
            <span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              cosmic plan
            </span>
          </h2>
          <p className="mt-4 text-white/60">Start free. Upgrade when you're ready. Cancel anytime.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {PLANS_UI.map((p, i)=>{
            const isPurchased = storedPlan === p.id || ownerMode;
            return (
              <Reveal key={p.id} delay={i*100}>
                <div className={`relative rounded-2xl border p-8 transition-all duration-300 ${p.featured ? "border-[#FF6B2B]/70 bg-gradient-to-b from-[#FF6B2B]/10 to-[#FF6B2B]/5 shadow-[0_0_60px_#FF6B2B22] scale-[1.02]" : "border-white/10 bg-white/[0.03] hover:border-white/25"}`}>
                  {p.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FFD700] px-4 py-1 text-[11px] font-bold text-white whitespace-nowrap">
                      ✦ MOST POPULAR
                    </div>
                  )}

                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-white/50 mt-1 mb-5">{p.tagline}</p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                    <span className="text-sm text-white/50">{p.note}</span>
                  </div>
                  <div className="font-mono text-xs text-[#FFB347] mb-7">{p.credits}</div>

                  <button
                    id={`plan-${p.id}`}
                    onClick={() => !ownerMode && !isPurchased && setActivePlan(p.id)}
                    className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all duration-200 mb-7 ${
                      ownerMode ? "bg-gradient-to-r from-green-500 to-emerald-400 text-white cursor-default" :
                      isPurchased ? "bg-green-500/20 border border-green-500/30 text-emerald-400" :
                      p.featured ? "bg-gradient-to-r from-[#FF6B2B] to-[#FFD700] text-white shadow-[0_0_25px_#FF6B2B44] hover:shadow-[0_0_35px_#FF6B2B66] hover:scale-[1.02] active:scale-[0.98]" :
                      "border border-white/20 text-white hover:border-[#FF6B2B]/50 hover:bg-[#FF6B2B]/10"
                    }`}
                  >
                    {ownerMode ? "★ Owner Access" : isPurchased ? "✓ Active" : p.cta}
                  </button>

                  <ul className="space-y-3 border-t border-white/10 pt-6">
                    {p.features.map(f=>(
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                        <Check className="h-4 w-4 shrink-0 text-[#FFB347]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300} className="mt-10 text-center text-sm text-white/40">
          🔒 Secured by Razorpay · UPI, Cards, NetBanking, Wallets accepted
        </Reveal>
      </div>

      {activePlan && (
        <PaymentModal
          planId={activePlan}
          onClose={() => setActivePlan(null)}
          onSuccess={() => {
            setActivePlan(null);
            try { setStoredPlan(localStorage.getItem("kundali_plan")); } catch {/**/ }
          }}
        />
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* TESTIMONIALS                                                           */
/* ═══════════════════════════════════════════════════════════════════════ */
const REVIEWS = [
  { name:"Priya Sharma", role:"Yoga Teacher, Pune", initial:"P", color:"from-[#FF6B2B] to-[#FF9A3C]", quote:"I've consulted three astrologers. KundaliAI was sharper and more specific than any of them — and it took 30 seconds.", stars:5 },
  { name:"Aarav Mehta", role:"Startup Founder, Bengaluru", initial:"A", color:"from-[#7C3AED] to-[#9B59B6]", quote:"The career section called out my Mercury–Jupiter exchange with eerie accuracy. Finally an astrology product built for our generation.", stars:5 },
  { name:"Sneha Iyer", role:"Product Designer, Mumbai", initial:"S", color:"from-[#0EA5E9] to-[#38BDF8]", quote:"The PDF is gorgeous. I printed it and framed it. KundaliAI made something deeply personal feel like art.", stars:5 },
  { name:"Rajesh Nair", role:"Finance Manager, Chennai", initial:"R", color:"from-[#10B981] to-[#34D399]", quote:"Skeptic turned believer. The Dasha forecast accurately described my career shift last year. I'm a subscriber for life.", stars:5 },
  { name:"Ananya Kapoor", role:"Freelancer, Delhi", initial:"A", color:"from-[#F59E0B] to-[#FCD34D]", quote:"Hindi mein jo reading mili, woh bilkul desi feel thi. Mere nani bhi samajh payin! Kisi ne socha bhi nahi hoga aisa.", stars:5 },
  { name:"Vikram Singh", role:"Teacher, Jaipur", initial:"V", color:"from-[#EC4899] to-[#F472B6]", quote:"My students kept asking about astrology so I tried this. The accuracy shocked me. Now I recommend it to everyone.", stars:5 },
];

function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px max-w-5xl mx-auto" style={{background:"linear-gradient(90deg,transparent,oklch(0.5 0.15 290 / 0.4),transparent)"}} />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB347] mb-3">Social Proof</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Loved by{" "}
            <span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              12,400+ seekers
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r,i)=>(
            <Reveal key={r.name} delay={i*70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {"★★★★★".split("").map((s,j)=>(
                    <span key={j} className="text-[#FFB347] text-sm">{s}</span>
                  ))}
                </div>
                <div className="flex items-start gap-1.5 mb-1">
                  <Quote className="h-4 w-4 text-white/20 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-white/80">{r.quote}</p>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${r.color} text-white text-sm font-bold font-display shrink-0`}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-white/50">{r.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {icon:Users, num:"12,400+", label:"Happy Users"},
            {icon:TrendingUp, num:"98%", label:"Satisfaction Rate"},
            {icon:Stars, num:"4.9★", label:"Average Rating"},
            {icon:Shield, num:"100%", label:"Privacy Secured"},
          ].map((s,i)=>(
            <Reveal key={s.label} delay={i*80}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <s.icon className="h-6 w-6 text-[#FFB347] mx-auto mb-3" />
                <div className="font-display text-2xl font-bold text-white">{s.num}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* URGENCY / FINAL CTA                                                    */
/* ═══════════════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#FF6B2B]/30 text-center px-8 py-16 sm:px-16" style={{background:"linear-gradient(135deg, oklch(0.2 0.1 290 / 0.9), oklch(0.15 0.07 290))", boxShadow:"0 0 80px #FF6B2B22"}}>
            <StarField density={50} />
            <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 50% 0%, #FF6B2B12 0%, transparent 60%)"}} />
            <div className="relative">
              <div className="text-5xl mb-6">🌌</div>
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl mb-4">
                Your destiny is written.
                <br />
                <span style={{background:"linear-gradient(90deg,#FF6B2B,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                  Time to read it.
                </span>
              </h2>
              <p className="text-white/65 max-w-xl mx-auto mb-9 text-lg">
                Over 12,400 people have already decoded their cosmic blueprint. Your first 3 readings are free — no credit card needed.
              </p>
              <KundaliGenerator>
                <button id="final-cta" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FFD700] px-10 py-4.5 text-base font-bold text-white shadow-[0_0_50px_#FF6B2B55] hover:shadow-[0_0_70px_#FF6B2B88] hover:scale-105 active:scale-95 transition-all duration-200">
                  ✨ Generate My Free Kundali
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </KundaliGenerator>
              <p className="mt-5 text-sm text-white/40">Free forever · No signup · Instant results</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* FOOTER                                                                 */
/* ═══════════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-5 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#FF6B2B] to-[#FFB347]">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white">KundaliAI</span>
          </Link>
          <p className="text-sm text-white/50 max-w-xs">Vedic astrology reimagined with AI. Your stars, your story, your future.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">Product</p>
          <ul className="space-y-2 text-sm text-white/50">
            {[["#features","Features"],["#pricing","Pricing"],["#reviews","Reviews"]].map(([h,l])=>(
              <li key={l}><a href={h} className="hover:text-white transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">Company</p>
          <ul className="space-y-2 text-sm text-white/50">
            {["About","Privacy Policy","Terms","Contact"].map(i=>(
              <li key={i}><a href="#" className="hover:text-white transition">{i}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/30">
        <span>© {new Date().getFullYear()} KundaliAI · Made with ♥ in India</span>
        <span>🔒 Payments secured by Razorpay</span>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/* ROOT                                                                   */
/* ═══════════════════════════════════════════════════════════════════════ */
function Landing() {
  const [ownerMode, setOwnerMode] = useState(false);

  useEffect(() => {
    // Restore owner session
    try {
      if (sessionStorage.getItem("kundali_owner") === "1") setOwnerMode(true);
    } catch {/**/ }

    // Check ?ownerKey= param
    const params = new URLSearchParams(window.location.search);
    const token = params.get("ownerKey");
    if (token) {
      window.history.replaceState({}, "", window.location.pathname);
      verifyOwnerBypass({ data: { token } }).then(res => {
        if (res.valid) {
          setOwnerMode(true);
          try { sessionStorage.setItem("kundali_owner", "1"); } catch {/**/}
        }
      }).catch(() => {/**/});
    }
  }, []);

  return (
    <div className="relative bg-[oklch(0.1_0.05_290)] min-h-screen overflow-x-hidden">
      <Nav ownerMode={ownerMode} />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <SamplePreview />
        <Pricing ownerMode={ownerMode} />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
