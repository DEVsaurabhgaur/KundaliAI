import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StarField } from "@/components/StarField";
import { KundaliChart } from "@/components/KundaliChart";
import { KundaliGenerator } from "@/components/KundaliGenerator";
import { PaymentModal } from "@/components/PaymentModal";
import { verifyOwnerBypass } from "@/lib/api/bypass";
import type { PlanId } from "@/lib/api/payment";
import {
  Sparkles, Stars, Moon, Sun, FileDown, Brain,
  Compass, Heart, Briefcase, Activity, Check, ArrowRight,
  Menu, X, Zap, Shield,
} from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "KundaliAI — Decode Your Cosmic Blueprint" },
      {
        name: "description",
        content:
          "AI-powered Vedic astrology. Get an accurate Kundali, personality, career and destiny analysis in seconds. Powered by Gemini AI.",
      },
      { property: "og:title", content: "KundaliAI — Decode Your Cosmic Blueprint" },
      {
        property: "og:description",
        content: "5,000-year-old Vedic science meets modern AI. Your stars, your story.",
      },
      { name: "theme-color", content: "#0B0520" },
    ],
  }),
  component: Landing,
} as any));

/* ─── Scroll reveal hook ──────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/* ─── Nav ─────────────────────────────────────────────────────────────── */
function Nav({ ownerMode }: { ownerMode: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-[oklch(0.12_0.05_290/0.9)] backdrop-blur-xl shadow-[0_2px_20px_oklch(0.12_0.05_290/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cosmic to-amber-gold shadow-cosmic">
            <Sparkles className="h-4 w-4 text-[oklch(0.12_0.05_290)]" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide text-starlight">
            Kundali<span className="text-gradient-cosmic">AI</span>
          </span>
          {ownerMode && (
            <span className="ml-1 rounded-full bg-amber-gold/20 px-2 py-0.5 text-[10px] font-bold text-amber-gold border border-amber-gold/30">
              ★ OWNER
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-lavender md:flex">
          {["Features", "Sample Chart", "Pricing", "Reviews"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="transition hover:text-starlight hover:text-gradient-cosmic"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <KundaliGenerator>
            <button
              id="nav-cta"
              className="rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-5 py-2.5 text-sm font-semibold text-[oklch(0.12_0.05_290)] shadow-cosmic transition hover:scale-[1.04] hover:shadow-[0_0_30px_oklch(0.7_0.2_40/0.5)] active:scale-[0.98]"
            >
              Get Your Kundali
            </button>
          </KundaliGenerator>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden rounded-lg border border-border/60 bg-surface/50 p-2 text-lavender transition hover:text-starlight hover:border-cosmic/40"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/60 bg-[oklch(0.14_0.07_290/0.95)] backdrop-blur-xl px-5 py-4 space-y-3"
        >
          {[
            ["#features", "Features"],
            ["#sample-chart", "Sample Chart"],
            ["#pricing", "Pricing"],
            ["#reviews", "Reviews"],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-lavender hover:text-starlight transition"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-aurora" />
      <StarField density={130} />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute top-20 left-1/3 h-72 w-72 rounded-full bg-nebula/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cosmic/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cosmic/30 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-amber-gold backdrop-blur mb-6">
            <Stars className="h-3.5 w-3.5" />
            Powered by Vedic AI + Gemini 1.5 Flash
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.06] text-starlight sm:text-6xl lg:text-[5rem]">
            Decode Your
            <br />
            <span className="text-gradient-cosmic">Cosmic Blueprint</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-lavender/90">
            A 5,000-year-old science meets modern AI. Generate an accurate Vedic
            Kundali in seconds and receive a deeply personal reading on your
            personality, career, love and destiny.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <KundaliGenerator>
              <button
                id="hero-cta"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-8 py-3.5 text-sm font-semibold text-[oklch(0.12_0.05_290)] shadow-cosmic transition animate-glow-pulse hover:scale-[1.04] hover:shadow-[0_0_40px_oklch(0.7_0.2_40/0.55)] active:scale-[0.98]"
              >
                Get Your Free Kundali
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </KundaliGenerator>
            <a
              href="#sample-chart"
              className="rounded-full border border-border/70 bg-surface/50 px-7 py-3.5 text-sm font-medium text-starlight backdrop-blur transition hover:border-cosmic/50 hover:bg-surface"
            >
              See sample report ↓
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["3 free Kundalis", "No credit card", "Instant PDF export"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-gold" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[500px] animate-float"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <KundaliChart className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Features ────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: Compass,
    title: "Swiss Ephemeris Precision",
    desc: "Planetary positions calculated to the arc-second using the same library trusted by professional Jyotishis worldwide.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Brain,
    title: "AI-Written Personality",
    desc: "Gemini reads your chart like a 30-year veteran astrologer — flowing prose that cites your actual planetary placements.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: FileDown,
    title: "Premium PDF Report",
    desc: "A beautifully typeset Kundali ready to print, share, or treasure. Includes North & South Indian charts.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Moon,
    title: "Dasha Forecasts",
    desc: "Vimshottari Mahadasha & Antardasha periods mapped against your life events with timing-precise predictions.",
    color: "from-indigo-500/20 to-indigo-600/5",
  },
  {
    icon: Sun,
    title: "Yogas & Rashifala",
    desc: "Raj Yoga, Dhan Yoga, Pancha Mahapurusha — every classical combination detected and explained in plain English.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Heart,
    title: "Compatibility Matching",
    desc: "Ashtakoota Gun Milan with detailed Manglik analysis. Discover what the stars say about your relationships.",
    color: "from-rose-500/20 to-rose-600/5",
  },
];

function Features() {
  const { ref, inView } = useReveal();
  return (
    <section id="features" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-nebula/40 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-lavender mb-5">
            <Sparkles className="h-3.5 w-3.5 text-amber-gold" />
            What makes KundaliAI different
          </div>
          <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
            Ancient wisdom,{" "}
            <span className="text-gradient-cosmic">re-engineered</span>
          </h2>
          <p className="mt-4 text-lavender/80">
            Every feature is built on real astronomical data — no shortcuts, no horoscope clichés.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur transition-all duration-300 hover:border-cosmic/50 hover:bg-surface hover:-translate-y-1 hover:shadow-[0_8px_40px_oklch(0.7_0.2_40/0.15)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cosmic/20 to-nebula/20 text-amber-gold ring-1 ring-cosmic/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-starlight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lavender/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Sample Chart ────────────────────────────────────────────────────── */
const INSIGHTS = [
  {
    icon: Brain,
    label: "Personality",
    text: "With Atmakaraka Saturn in the 10th house, you carry the weight of destiny in your work…",
  },
  {
    icon: Briefcase,
    label: "Career",
    text: "Mercury–Jupiter parivartana suggests excellence in communication, teaching, or strategy…",
  },
  {
    icon: Heart,
    label: "Love",
    text: "Venus in Libra in the 7th house — your relationships are governed by aesthetics and balance…",
  },
  {
    icon: Activity,
    label: "Health",
    text: "Mars aspecting Lagna grants strong vitality; Saturn's gaze asks for disciplined routines…",
  },
];

function SampleChart() {
  const { ref, inView } = useReveal();
  return (
    <section id="sample-chart" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <KundaliChart className="h-full w-full" />
          </div>
        </div>
        <div ref={ref} className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-gold">
              A peek inside
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-starlight sm:text-5xl">
              Every reading is{" "}
              <span className="text-gradient-cosmic">uniquely yours</span>
            </h2>
            <p className="mt-4 text-lavender/80">
              No two charts produce the same words. Gemini reads your exact planetary
              geometry and writes a reading that feels like it was made for you — because it was.
            </p>
            <div className="mt-8 space-y-3">
              {INSIGHTS.map((insight) => (
                <div
                  key={insight.label}
                  className="flex gap-4 rounded-xl border border-border/70 bg-surface/50 p-4 backdrop-blur transition hover:border-cosmic/30 hover:bg-surface"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cosmic/20 to-nebula/20 text-amber-gold ring-1 ring-cosmic/20">
                    <insight.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-starlight">{insight.label}</p>
                    <p className="mt-0.5 text-sm text-lavender/80 line-clamp-2">{insight.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const PLANS_UI = [
  {
    id: "starter" as PlanId,
    name: "Starter",
    price: "₹99",
    desc: "Perfect for a one-off reading or gift.",
    credits: "3 Kundalis",
    features: ["Full Vedic chart", "AI personality analysis", "PDF export", "Lifetime access"],
    featured: false,
    icon: Zap,
  },
  {
    id: "pro_monthly" as PlanId,
    name: "Pro Monthly",
    price: "₹499",
    period: "/mo",
    desc: "For seekers, astrologers, and curious minds.",
    credits: "Unlimited Kundalis",
    features: [
      "Everything in Starter",
      "Compatibility matching",
      "Dasha forecasts",
      "Priority AI",
      "Premium PDF",
    ],
    featured: true,
    icon: Stars,
  },
  {
    id: "pro_yearly" as PlanId,
    name: "Yearly Pro",
    price: "₹3,999",
    period: "/yr",
    desc: "Save 33% — the choice of serious practitioners.",
    credits: "Unlimited + White-label",
    features: [
      "Everything in Pro",
      "White-label PDFs",
      "API access",
      "Early features",
      "1:1 onboarding",
    ],
    featured: false,
    icon: Shield,
  },
];

function Pricing({ ownerMode }: { ownerMode: boolean }) {
  const { ref, inView } = useReveal();
  const [activePlan, setActivePlan] = useState<PlanId | null>(null);

  // Read stored plan from localStorage
  const [storedPlan, setStoredPlan] = useState<string | null>(null);
  useEffect(() => {
    try {
      setStoredPlan(localStorage.getItem("kundali_plan"));
    } catch { /* ignore */ }
  }, [activePlan]);

  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cosmic/30 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-amber-gold mb-5">
            Pricing
          </div>
          <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
            Choose your <span className="text-gradient-cosmic">cosmic plan</span>
          </h2>
          <p className="mt-4 text-lavender/80">
            Start free with 3 Kundalis. Upgrade when the stars call.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS_UI.map((p, i) => {
            const isPurchased = storedPlan === p.id || ownerMode;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-2xl border p-8 backdrop-blur transition-all duration-300 ${
                  p.featured
                    ? "border-cosmic/60 bg-gradient-to-b from-surface-elevated to-surface shadow-cosmic scale-[1.02]"
                    : "border-border bg-surface/60 hover:border-cosmic/40 hover:-translate-y-1"
                }`}
              >
                {p.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[oklch(0.12_0.05_290)]">
                    Most Popular
                  </div>
                )}
                {isPurchased && (
                  <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-green-500/20 border border-green-500/30 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                    <Check className="h-3 w-3" /> Active
                  </div>
                )}

                <div className="flex items-center gap-2.5 mt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cosmic/20 to-nebula/15 text-amber-gold ring-1 ring-cosmic/20">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-starlight">{p.name}</h3>
                </div>
                <p className="mt-2 text-sm text-lavender/70">{p.desc}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-starlight">{p.price}</span>
                  {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-amber-gold">
                  {p.credits}
                </p>

                <button
                  id={`pricing-btn-${p.id}`}
                  onClick={() => !ownerMode && setActivePlan(p.id)}
                  className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition-all duration-200 ${
                    ownerMode
                      ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white cursor-default"
                      : isPurchased
                        ? "bg-green-500/20 border border-green-500/30 text-emerald-400"
                        : p.featured
                          ? "bg-gradient-to-r from-cosmic to-amber-gold text-[oklch(0.12_0.05_290)] hover:scale-[1.02] shadow-cosmic"
                          : "border border-border bg-surface text-starlight hover:border-cosmic/50 hover:bg-surface-elevated"
                  }`}
                >
                  {ownerMode ? "★ Owner Access" : isPurchased ? "✓ Active Plan" : "Get Started"}
                </button>

                <ul className="mt-7 space-y-2.5 border-t border-border/60 pt-7 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-lavender/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Payment modal */}
      {activePlan && (
        <PaymentModal
          planId={activePlan}
          onClose={() => setActivePlan(null)}
          onSuccess={() => {
            setActivePlan(null);
            try { setStoredPlan(localStorage.getItem("kundali_plan")); } catch { /* ignore */ }
          }}
        />
      )}
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────── */
const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Yoga teacher, Pune",
    initials: "P",
    quote:
      "I've consulted three astrologers in my life. KundaliAI's reading was sharper and more specific than any of them — and it took 30 seconds.",
    stars: 5,
  },
  {
    name: "Aarav Mehta",
    role: "Founder, Bengaluru",
    initials: "A",
    quote:
      "The career section called out my Mercury–Jupiter exchange with eerie accuracy. Finally, an astrology product built for our generation.",
    stars: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Designer, Mumbai",
    initials: "S",
    quote:
      "The PDF is gorgeous. I printed mine and framed it. KundaliAI made something deeply personal feel like art.",
    stars: 5,
  },
];

function Testimonials() {
  const { ref, inView } = useReveal();
  return (
    <section id="reviews" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
            Loved by <span className="text-gradient-cosmic">12,400+</span> seekers
          </h2>
          <p className="mt-4 text-lavender/80">Real readings. Real reactions.</p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-border/70 bg-surface/60 p-7 backdrop-blur transition hover:border-cosmic/30 hover:-translate-y-1"
            >
              <div className="mb-4 flex gap-0.5 text-amber-gold">
                {"★".repeat(r.stars).split("").map((s, i) => (
                  <span key={i} className="text-sm">{s}</span>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-starlight/90">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cosmic to-nebula font-display font-semibold text-[oklch(0.12_0.05_290)]">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-starlight">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-cosmic/40 bg-gradient-to-br from-surface-elevated via-surface to-background p-12 text-center shadow-cosmic sm:p-16">
          <StarField density={40} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cosmic/5 to-transparent" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
              Your destiny is <span className="text-gradient-cosmic">written</span>.<br />
              Time to read it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lavender/80">
              Generate your first Kundali in under 30 seconds. Free, always.
            </p>
            <KundaliGenerator>
              <button
                id="cta-final"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-9 py-4 text-sm font-semibold text-[oklch(0.12_0.05_290)] shadow-cosmic transition animate-glow-pulse hover:scale-[1.04] hover:shadow-[0_0_50px_oklch(0.7_0.2_40/0.6)] active:scale-[0.98]"
              >
                Generate My Free Kundali
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </KundaliGenerator>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cosmic to-amber-gold shadow-cosmic">
              <Sparkles className="h-4 w-4 text-[oklch(0.12_0.05_290)]" />
            </div>
            <span className="font-display text-xl font-bold text-starlight">
              Kundali<span className="text-gradient-cosmic">AI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-lavender/70">
            Your stars. Your story. Your future. Vedic astrology re-engineered for the modern seeker.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-starlight">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-lavender/70">
            {[["#features", "Features"], ["#pricing", "Pricing"], ["#sample-chart", "Sample reading"]].map(
              ([href, label]) => (
                <li key={label}>
                  <a href={href} className="hover:text-starlight transition">{label}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-starlight">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-lavender/70">
            {["About", "Privacy", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-starlight transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border/50 px-5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} KundaliAI · Crafted with cosmic precision.
      </div>
    </footer>
  );
}

/* ─── Landing (root) ──────────────────────────────────────────────────── */
function Landing() {
  const [ownerMode, setOwnerMode] = useState(false);

  useEffect(() => {
    // Check persisted owner session
    try {
      if (sessionStorage.getItem("kundali_owner") === "1") {
        setOwnerMode(true);
      }
    } catch { /* ignore */ }

    // Check URL param ?ownerKey=XXX
    const params = new URLSearchParams(window.location.search);
    const token = params.get("ownerKey");
    if (token) {
      // Clean URL immediately (don't expose token in history)
      const clean = window.location.pathname;
      window.history.replaceState({}, "", clean);

      // Verify on server
      verifyOwnerBypass({ data: { token } }).then((res) => {
        if (res.valid) {
          setOwnerMode(true);
          try { sessionStorage.setItem("kundali_owner", "1"); } catch { /* ignore */ }
        }
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background grain">
      <Nav ownerMode={ownerMode} />
      <main>
        <Hero />
        <Features />
        <SampleChart />
        <Pricing ownerMode={ownerMode} />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
