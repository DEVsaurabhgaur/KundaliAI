import React, { useState, useId } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { generateKundali } from "../lib/api/kundali";
import { Sparkles, ArrowRight, Brain, Briefcase, Heart, Activity, Download, RotateCcw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeMarkdown } from "./ui/markdown";
import { KundaliChart } from "./KundaliChart";

/* ─── Constellation loading animation ────────────────────────────────── */
function ConstellationLoader() {
  const nodes = [
    { cx: 60, cy: 30 }, { cx: 100, cy: 20 }, { cx: 140, cy: 40 },
    { cx: 80, cy: 65 }, { cx: 120, cy: 70 }, { cx: 60, cy: 90 },
    { cx: 140, cy: 90 },
  ];
  const lines = [
    [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 5], [4, 6],
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10">
      <svg width="200" height="120" viewBox="0 0 200 120">
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="oklch(0.7 0.2 40 / 0.4)"
            strokeWidth="1"
            strokeDasharray="4 4"
          >
            <animate attributeName="opacity" values="0.2;0.8;0.2"
              dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
          </line>
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r="3.5"
            fill="oklch(0.83 0.15 75)"
            opacity="0.8"
          >
            <animate attributeName="r" values="2.5;5;2.5"
              dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4"
              dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="text-center space-y-1.5">
        <p className="text-sm font-medium text-amber-gold animate-pulse">
          Consulting the cosmic archives…
        </p>
        <p className="text-xs text-lavender/70">
          Aligning planetary positions for your birth chart
        </p>
      </div>
    </div>
  );
}

/* ─── Inline field error ──────────────────────────────────────────────── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xs text-red-400 mt-1"
    >
      {msg}
    </motion.p>
  );
}

/* ─── Result tabs ─────────────────────────────────────────────────────── */
const TABS = [
  { id: "all", label: "Full Reading", icon: Sparkles },
  { id: "personality", label: "Personality", icon: Brain },
  { id: "career", label: "Career", icon: Briefcase },
  { id: "love", label: "Love", icon: Heart },
  { id: "health", label: "Health", icon: Activity },
] as const;
type TabId = (typeof TABS)[number]["id"];

function filterSection(text: string, tab: TabId): string {
  if (tab === "all") return text;
  const keywords: Record<string, string[]> = {
    personality: ["personality", "character", "nature", "soul", "self", "व्यक्तित्व", "स्वभाव"],
    career: ["career", "profession", "work", "business", "finance", "job", "करियर", "व्यवसाय"],
    love: ["love", "relationship", "marriage", "partner", "romance", "प्रेम", "विवाह"],
    health: ["health", "body", "wellness", "vitality", "स्वास्थ्य", "शरीर"],
  };
  const kws = keywords[tab] || [];
  const lines = text.split(/\r?\n/);
  const result: string[] = [];
  let inSection = false;

  for (const line of lines) {
    const lower = line.toLowerCase();
    const isHeader = line.startsWith("#");
    if (isHeader) {
      inSection = kws.some((k) => lower.includes(k));
    }
    if (inSection || result.length === 0) result.push(line);
    if (result.length > 0 && isHeader && !inSection && result.length > 3) break;
  }
  return result.length > 2 ? result.join("\n") : text;
}

/* ─── Form validation ─────────────────────────────────────────────────── */
interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  language: "en" | "hi";
}
interface FormErrors {
  name?: string;
  dateOfBirth?: string;
  timeOfBirth?: string;
  placeOfBirth?: string;
}

function validate(data: FormData): FormErrors {
  const errs: FormErrors = {};
  if (!data.name.trim()) errs.name = "Name is required";
  else if (data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

  if (!data.dateOfBirth) errs.dateOfBirth = "Date of birth is required";
  else {
    const d = new Date(data.dateOfBirth);
    if (isNaN(d.getTime())) errs.dateOfBirth = "Invalid date";
    else if (d > new Date()) errs.dateOfBirth = "Date cannot be in the future";
  }

  if (!data.timeOfBirth) errs.timeOfBirth = "Time of birth is required";

  if (!data.placeOfBirth.trim()) errs.placeOfBirth = "Place of birth is required";
  else if (data.placeOfBirth.trim().length < 2) errs.placeOfBirth = "Enter a valid city/town";

  return errs;
}

/* ─── Main component ──────────────────────────────────────────────────── */
export function KundaliGenerator({ children }: { children: React.ReactNode }) {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    language: "en",
  });

  // Restore cached reading on open
  React.useEffect(() => {
    if (!open) return;
    try {
      const cachedReading = localStorage.getItem("kundali_cached_reading");
      const cachedForm = localStorage.getItem("kundali_cached_form");
      if (cachedReading && cachedForm && !result) {
        setResult(cachedReading);
        setFormData((prev) => ({ ...prev, ...JSON.parse(cachedForm) }));
      }
    } catch {
      // ignore
    }
  }, [open]);

  const formErrors = validate(formData);
  const hasErrors = Object.keys(formErrors).length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Touch all fields
    setTouched({ name: true, dateOfBirth: true, timeOfBirth: true, placeOfBirth: true });
    if (hasErrors) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await generateKundali({ data: { ...formData } });
      if (res.success && res.reading) {
        setResult(res.reading);
        setActiveTab("all");
        try {
          localStorage.setItem("kundali_cached_reading", res.reading);
          localStorage.setItem("kundali_cached_form", JSON.stringify(formData));
        } catch { /* ignore */ }
      } else {
        setError(res.error || "Failed to generate Kundali. Please try again.");
      }
    } catch (err: unknown) {
      const e = err as Error;
      setError(e.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setTouched({});
    try {
      localStorage.removeItem("kundali_cached_reading");
      localStorage.removeItem("kundali_cached_form");
    } catch { /* ignore */ }
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[660px] max-h-[92vh] border-cosmic/40 bg-[oklch(0.14_0.07_290)] backdrop-blur-xl text-starlight p-0 overflow-hidden flex flex-col gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 shrink-0">
          <DialogTitle className="font-display text-xl text-gradient-cosmic flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-gold" />
            {result ? `${formData.name}'s Cosmic Reading` : "Generate Your Kundali"}
          </DialogTitle>
          <DialogDescription className="text-lavender/80 text-sm">
            {result
              ? `Born on ${formData.dateOfBirth} in ${formData.placeOfBirth}`
              : "Enter your birth details for an AI-powered Vedic reading"}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {/* ── FORM ─────────────────────────────────────────────────── */}
          {!result && !loading && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25 }}
              className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6"
            >
              <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor={`${uid}-name`} className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
                    Full Name
                  </label>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="e.g. Arjun Sharma"
                    autoComplete="name"
                    className={`input-field w-full rounded-lg border bg-[oklch(0.18_0.08_290)] px-3.5 py-2.5 text-sm text-white placeholder-lavender/40 transition focus:outline-none ${
                      touched.name && formErrors.name ? "border-red-500/70" : "border-border hover:border-cosmic/40"
                    }`}
                  />
                  {touched.name && <FieldError msg={formErrors.name} />}
                </div>

                {/* DOB + Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor={`${uid}-dob`} className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
                      Date of Birth
                    </label>
                    <input
                      id={`${uid}-dob`}
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      onBlur={() => handleBlur("dateOfBirth")}
                      max={new Date().toISOString().split("T")[0]}
                      className={`input-field w-full rounded-lg border bg-[oklch(0.18_0.08_290)] px-3.5 py-2.5 text-sm text-white transition focus:outline-none ${
                        touched.dateOfBirth && formErrors.dateOfBirth ? "border-red-500/70" : "border-border hover:border-cosmic/40"
                      }`}
                    />
                    {touched.dateOfBirth && <FieldError msg={formErrors.dateOfBirth} />}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor={`${uid}-time`} className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
                      Time of Birth
                    </label>
                    <input
                      id={`${uid}-time`}
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleChange}
                      onBlur={() => handleBlur("timeOfBirth")}
                      step="60"
                      className={`input-field w-full rounded-lg border bg-[oklch(0.18_0.08_290)] px-3.5 py-2.5 text-sm text-white transition focus:outline-none ${
                        touched.timeOfBirth && formErrors.timeOfBirth ? "border-red-500/70" : "border-border hover:border-cosmic/40"
                      }`}
                    />
                    {touched.timeOfBirth && <FieldError msg={formErrors.timeOfBirth} />}
                  </div>
                </div>

                {/* Place */}
                <div className="space-y-1">
                  <label htmlFor={`${uid}-place`} className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
                    Place of Birth
                  </label>
                  <input
                    id={`${uid}-place`}
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    onBlur={() => handleBlur("placeOfBirth")}
                    placeholder="e.g. Mumbai, India"
                    autoComplete="address-level2"
                    className={`input-field w-full rounded-lg border bg-[oklch(0.18_0.08_290)] px-3.5 py-2.5 text-sm text-white placeholder-lavender/40 transition focus:outline-none ${
                      touched.placeOfBirth && formErrors.placeOfBirth ? "border-red-500/70" : "border-border hover:border-cosmic/40"
                    }`}
                  />
                  {touched.placeOfBirth && <FieldError msg={formErrors.placeOfBirth} />}
                </div>

                {/* Language */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
                    Reading Language / भाषा
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {(["en", "hi"] as const).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, language: lang }))}
                        className={`py-2.5 text-sm rounded-lg border font-semibold transition-all duration-200 ${
                          formData.language === lang
                            ? "bg-gradient-to-r from-cosmic to-amber-gold border-transparent text-[oklch(0.12_0.05_290)]"
                            : "bg-[oklch(0.18_0.08_290)] border-border text-lavender hover:text-starlight hover:border-cosmic/30"
                        }`}
                      >
                        {lang === "en" ? "🇬🇧 English" : "🇮🇳 हिन्दी"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-start gap-2.5 rounded-lg bg-red-500/10 border border-red-500/20 p-3"
                    >
                      <span className="text-red-400 text-sm">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-cosmic to-amber-gold px-4 py-3 text-sm font-semibold text-[oklch(0.12_0.05_290)] transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-cosmic animate-glow-pulse"
                >
                  Decode My Destiny
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-lavender/50 pb-1">
                  ✨ Powered by Vedic AI · Gemini 2.5 Flash
                </p>
              </form>
            </motion.div>
          )}

          {/* ── LOADING ───────────────────────────────────────────────── */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex items-center justify-center"
            >
              <ConstellationLoader />
            </motion.div>
          )}

          {/* ── RESULT ───────────────────────────────────────────────── */}
          {result && !loading && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col min-h-0"
            >
              {/* Chart */}
              <div className="shrink-0 bg-gradient-to-b from-[oklch(0.16_0.07_290)] to-transparent px-6 py-4">
                <div className="mx-auto w-[200px] aspect-square">
                  <KundaliChart
                    dateOfBirth={formData.dateOfBirth}
                    timeOfBirth={formData.timeOfBirth}
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="shrink-0 px-4 pb-2 border-b border-border/50">
                <div className="flex gap-1 overflow-x-auto no-print pb-1">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-200 ${
                        activeTab === tab.id
                          ? "tab-active"
                          : "border-transparent text-lavender/70 hover:text-lavender hover:bg-white/5"
                      }`}
                    >
                      <tab.icon className="h-3 w-3" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="prose prose-invert prose-sm max-w-none"
                  >
                    <SafeMarkdown text={filterSection(result, activeTab)} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action buttons */}
              <div className="shrink-0 px-6 py-4 border-t border-border/50 flex gap-2.5 no-print">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-transparent px-3.5 py-2 text-xs font-semibold text-starlight transition hover:bg-white/5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  New
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-cosmic/40 bg-[oklch(0.18_0.08_290)] px-3.5 py-2 text-xs font-semibold text-amber-gold transition hover:bg-[oklch(0.22_0.09_290)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cosmic to-amber-gold px-3.5 py-2 text-xs font-semibold text-[oklch(0.12_0.05_290)] transition hover:opacity-90"
                >
                  <X className="h-3.5 w-3.5" />
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
