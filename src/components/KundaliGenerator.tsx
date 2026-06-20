import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { generateKundali } from "../lib/api/kundali";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { SafeMarkdown } from "./ui/markdown";

export function KundaliGenerator({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    language: "en" as "en" | "hi",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await generateKundali({ data: formData });
      if (res.success) {
        setResult(res.reading);
        if (typeof window !== "undefined") {
          localStorage.setItem("kundali_cached_reading", res.reading);
          localStorage.setItem("kundali_cached_form", JSON.stringify(formData));
        }
      } else {
        setError(res.error || "Failed to generate Kundali");
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] border-cosmic/40 bg-surface/95 backdrop-blur-xl text-starlight">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient-cosmic">
            Generate Your Kundali
          </DialogTitle>
          <DialogDescription className="text-lavender">
            Enter your birth details precisely. Our AI and Swiss Ephemeris will do the rest.
          </DialogDescription>
        </DialogHeader>

        {!result && !loading && (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight">Name</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="E.g., Arjun"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-cosmic focus:outline-none focus:ring-1 focus:ring-cosmic text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-starlight">Date of Birth</label>
                <input
                  required
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-cosmic focus:outline-none focus:ring-1 focus:ring-cosmic text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-starlight">Time of Birth</label>
                <input
                  required
                  type="time"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-cosmic focus:outline-none focus:ring-1 focus:ring-cosmic text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight">Place of Birth</label>
              <input
                required
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                placeholder="E.g., Mumbai, India"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-cosmic focus:outline-none focus:ring-1 focus:ring-cosmic text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight">Reading Language / भाषा</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, language: "en" }))}
                  className={`flex-1 py-2.5 text-sm rounded-md border font-semibold transition ${
                    formData.language === "en"
                      ? "bg-gradient-to-r from-cosmic to-amber-gold border-transparent text-background"
                      : "bg-background border-border text-lavender hover:text-starlight hover:border-cosmic/30"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, language: "hi" }))}
                  className={`flex-1 py-2.5 text-sm rounded-md border font-semibold transition ${
                    formData.language === "hi"
                      ? "bg-gradient-to-r from-cosmic to-amber-gold border-transparent text-background"
                      : "bg-background border-border text-lavender hover:text-starlight hover:border-cosmic/30"
                  }`}
                >
                  हिन्दी (Hindi)
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-400">{error}</div>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cosmic to-amber-gold px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Decode Destiny <Sparkles className="h-4 w-4" />
            </button>
          </form>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-cosmic" />
            <p className="mt-4 text-sm text-lavender animate-pulse">
              Consulting the stars and analyzing planetary alignments...
            </p>
          </div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar space-y-4"
          >
            <div className="prose prose-invert prose-sm max-w-none text-lavender">
              <SafeMarkdown text={result} />
            </div>
            <button
              onClick={() => {
                setResult(null);
                setOpen(false);
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-cosmic/50 bg-transparent px-4 py-2.5 text-sm font-semibold text-starlight transition hover:bg-surface"
            >
              Close Reading
            </button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
