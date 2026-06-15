import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StarField } from "@/components/StarField";
import { KundaliChart } from "@/components/KundaliChart";
import {
  Sparkles,
  Stars,
  Moon,
  Sun,
  FileDown,
  Brain,
  Compass,
  Heart,
  Briefcase,
  Activity,
  Check,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KundaliAI — Decode Your Cosmic Blueprint" },
      {
        name: "description",
        content:
          "AI-powered Vedic astrology. Get an accurate Kundali, personality, career and destiny analysis in seconds.",
      },
      { property: "og:title", content: "KundaliAI — Decode Your Cosmic Blueprint" },
      {
        property: "og:description",
        content:
          "Swiss Ephemeris precision meets Claude AI narration. Your stars, your story, your future.",
      },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cosmic to-amber-gold shadow-cosmic">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide text-starlight">
            Kundali<span className="text-gradient-cosmic">AI</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-lavender md:flex">
          <a href="#features" className="transition hover:text-starlight">Features</a>
          <a href="#chart" className="transition hover:text-starlight">Sample Chart</a>
          <a href="#pricing" className="transition hover:text-starlight">Pricing</a>
          <a href="#testimonials" className="transition hover:text-starlight">Reviews</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-lavender transition hover:text-starlight sm:block">
            Sign in
          </button>
          <button className="rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-5 py-2.5 text-sm font-semibold text-background shadow-cosmic transition hover:scale-[1.03]">
            Get Your Kundali
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora" />
      <StarField density={120} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-16 lg:grid-cols-2 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cosmic/30 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-amber-gold backdrop-blur">
            <Stars className="h-3.5 w-3.5" />
            Powered by Advanced Vedic AI
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-starlight sm:text-6xl lg:text-7xl">
            Decode Your<br />
            <span className="text-gradient-cosmic">Cosmic Blueprint</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-lavender">
            A 5,000-year-old science meets modern AI. Generate an accurate Vedic Kundali in
            seconds and receive a deeply personal reading on your personality, career, love
            and destiny — written, not templated.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-7 py-3.5 text-sm font-semibold text-background shadow-cosmic transition animate-glow-pulse hover:scale-[1.03]">
              Get Your Free Kundali
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-border bg-surface/50 px-7 py-3.5 text-sm font-medium text-starlight backdrop-blur transition hover:border-cosmic/50 hover:bg-surface">
              See sample report
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-gold" /> 3 free Kundalis</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-gold" /> No credit card</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-gold" /> Instant PDF export</div>
          </div>
        </motion.div>

        <motion.div 
          className="relative mx-auto aspect-square w-full max-w-[520px] animate-float"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <KundaliChart className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: Compass,
    title: "Swiss Ephemeris Precision",
    desc: "Planetary positions calculated to the arc-second using the same library trusted by professional Jyotishis worldwide.",
  },
  {
    icon: Brain,
    title: "AI-Written Personality",
    desc: "Claude reads your chart like a 30-year veteran astrologer — flowing prose that cites your actual planetary placements.",
  },
  {
    icon: FileDown,
    title: "Premium PDF Report",
    desc: "A beautifully typeset 24-page Kundali ready to print, share, or treasure. Includes North & South Indian charts.",
  },
  {
    icon: Moon,
    title: "Dasha Forecasts",
    desc: "Vimshottari Mahadasha & Antardasha periods mapped against your life events with timing-precise predictions.",
  },
  {
    icon: Sun,
    title: "Yogas & Rashifala",
    desc: "Raj Yoga, Dhan Yoga, Pancha Mahapurusha — every classical combination detected and explained in plain English.",
  },
  {
    icon: Heart,
    title: "Compatibility Matching",
    desc: "Ashtakoota Gun Milan with detailed Manglik analysis. Discover what the stars say about your relationships.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-nebula/40 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-lavender">
            <Sparkles className="h-3.5 w-3.5 text-amber-gold" />
            What makes KundaliAI different
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold text-starlight sm:text-5xl">
            Ancient wisdom,<br />
            <span className="text-gradient-cosmic">re-engineered</span>
          </h2>
          <p className="mt-4 text-lavender">
            Every feature is built on real astronomical data — no shortcuts, no horoscope clichés.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur transition hover:border-cosmic/50 hover:bg-surface"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cosmic/20 to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cosmic/20 to-nebula/20 text-amber-gold ring-1 ring-cosmic/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-starlight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lavender">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleChart() {
  const insights = [
    { icon: Brain, label: "Personality", text: "With Atmakaraka Saturn in the 10th house, you carry the weight of destiny in your work…" },
    { icon: Briefcase, label: "Career", text: "Mercury–Jupiter parivartana suggests excellence in communication, teaching, or strategy…" },
    { icon: Heart, label: "Love", text: "Venus in Libra in the 7th house — your relationships are governed by aesthetics and balance…" },
    { icon: Activity, label: "Health", text: "Mars aspecting Lagna grants strong vitality; Saturn's gaze asks for disciplined routines…" },
  ];

  return (
    <section id="chart" className="relative py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-cosmic/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <KundaliChart className="h-full w-full" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-gold">A peek inside</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-starlight sm:text-5xl">
            Every reading is <span className="text-gradient-cosmic">uniquely yours</span>
          </h2>
          <p className="mt-4 text-lavender">
            No two charts produce the same words. Claude reads your exact planetary geometry and
            writes a reading that feels like it was made for you — because it was.
          </p>
          <div className="mt-8 space-y-3">
            {insights.map((i) => (
              <div key={i.label} className="flex gap-4 rounded-xl border border-border bg-surface/50 p-4 backdrop-blur">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cosmic/20 to-nebula/20 text-amber-gold ring-1 ring-cosmic/20">
                  <i.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-starlight">{i.label}</p>
                  <p className="mt-0.5 truncate text-sm text-lavender">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Starter",
    price: "₹99",
    desc: "Perfect for a one-off reading or gift.",
    credits: "3 Kundalis",
    features: ["Full Vedic chart", "AI personality analysis", "PDF export", "Lifetime access"],
    featured: false,
  },
  {
    name: "Pro Monthly",
    price: "₹499",
    period: "/mo",
    desc: "For seekers, astrologers, and curious minds.",
    credits: "Unlimited Kundalis",
    features: ["Everything in Starter", "Compatibility matching", "Dasha forecasts", "Priority AI", "Premium PDF"],
    featured: true,
  },
  {
    name: "Yearly Pro",
    price: "₹3,999",
    period: "/yr",
    desc: "Save 33% — the choice of serious practitioners.",
    credits: "Unlimited + White-label",
    features: ["Everything in Pro", "White-label PDFs", "API access", "Early features", "1:1 onboarding"],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cosmic/30 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-amber-gold">
            Pricing
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold text-starlight sm:text-5xl">
            Choose your <span className="text-gradient-cosmic">cosmic plan</span>
          </h2>
          <p className="mt-4 text-lavender">Start free with 3 Kundalis. Upgrade when the stars call.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-2xl border p-8 backdrop-blur transition ${
                p.featured
                  ? "border-cosmic/60 bg-gradient-to-b from-surface-elevated to-surface shadow-cosmic"
                  : "border-border bg-surface/60 hover:border-cosmic/40"
              }`}
            >
              {p.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold text-starlight">{p.name}</h3>
              <p className="mt-1.5 text-sm text-lavender">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-starlight">{p.price}</span>
                {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-amber-gold">{p.credits}</p>

              <button
                className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-gradient-to-r from-cosmic to-amber-gold text-background hover:scale-[1.02]"
                    : "border border-border bg-surface text-starlight hover:border-cosmic/50"
                }`}
              >
                Get Started
              </button>

              <ul className="mt-7 space-y-3 border-t border-border pt-7 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-lavender">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Yoga teacher, Pune",
    quote:
      "I've consulted three astrologers in my life. KundaliAI's reading was sharper and more specific than any of them — and it took 30 seconds.",
  },
  {
    name: "Aarav Mehta",
    role: "Founder, Bengaluru",
    quote:
      "The career section called out my Mercury–Jupiter exchange with eerie accuracy. Finally, an astrology product built for our generation.",
  },
  {
    name: "Sneha Iyer",
    role: "Designer, Mumbai",
    quote:
      "The PDF is gorgeous. I printed mine and framed it. KundaliAI made something deeply personal feel like art.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
            Loved by <span className="text-gradient-cosmic">12,400+</span> seekers
          </h2>
          <p className="mt-4 text-lavender">Real readings. Real reactions.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur"
            >
              <div className="mb-4 flex gap-0.5 text-amber-gold">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-sm">{s}</span>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-starlight">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cosmic to-nebula font-display font-semibold text-background">
                  {r.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-starlight">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-cosmic/40 bg-gradient-to-br from-surface-elevated via-surface to-background p-12 text-center shadow-cosmic sm:p-16">
          <StarField density={40} />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-starlight sm:text-5xl">
              Your destiny is <span className="text-gradient-cosmic">written</span>.<br />
              Time to read it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lavender">
              Generate your first Kundali in under 30 seconds. Free, always.
            </p>
            <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cosmic to-amber-gold px-8 py-4 text-sm font-semibold text-background shadow-cosmic transition hover:scale-[1.03]">
              Generate My Free Kundali
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cosmic to-amber-gold shadow-cosmic">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="font-display text-xl font-bold text-starlight">
              Kundali<span className="text-gradient-cosmic">AI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-lavender">
            Your stars. Your story. Your future. Vedic astrology re-engineered for the modern seeker.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-starlight">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-lavender">
            <li><a href="#features" className="hover:text-starlight">Features</a></li>
            <li><a href="#pricing" className="hover:text-starlight">Pricing</a></li>
            <li><a href="#chart" className="hover:text-starlight">Sample reading</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-starlight">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-lavender">
            <li><a href="#" className="hover:text-starlight">About</a></li>
            <li><a href="#" className="hover:text-starlight">Privacy</a></li>
            <li><a href="#" className="hover:text-starlight">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} KundaliAI · Crafted with cosmic precision.
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Nav />
      <Hero />
      <Features />
      <SampleChart />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
