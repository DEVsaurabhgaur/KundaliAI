import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Loader2 } from "lucide-react";
import { chatSupport } from "../lib/api/support";

interface Message {
  role: "user" | "model";
  text: string;
}

const QUICK_QUERIES = [
  "What is the Refund Policy?",
  "How to contact support?",
  "What are the pricing plans?",
  "Is the calculations accurate?",
];

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Greetings, seeker. I am the Cosmic Support Guide. How can I align the stars for you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMessage = textToSend.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      // Pass the message and historical context to the backend
      const res = await chatSupport({
        data: {
          message: userMessage,
          history: messages,
        },
      });

      setMessages((prev) => [...prev, { role: "model", text: res.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Apologies, the space coordinate fetch failed. Please check your network or email devsaurabhgaur@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans no-print">
      {/* Chat Button Toggle */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cosmic to-amber-gold text-[oklch(0.12_0.05_290)] shadow-cosmic transition-all hover:scale-105 hover:rotate-3 active:scale-95 animate-glow-pulse cursor-pointer"
          aria-label="Open support chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="flex h-[480px] w-[360px] flex-col rounded-2xl border border-cosmic/30 bg-[oklch(0.14_0.07_290/0.96)] text-starlight shadow-nebula backdrop-blur-xl overflow-hidden transition-all duration-300 animate-slide-up"
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-cosmic/20 to-transparent px-4 py-3 border-b border-border/40 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cosmic to-amber-gold">
                <Sparkles className="h-4 w-4 text-[oklch(0.12_0.05_290)]" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-amber-gold">Cosmic Support</h4>
                <p className="text-[10px] text-lavender/60">Powered by Gemini 2.5 Flash</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-lavender/60 hover:text-starlight hover:bg-white/10 transition cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-cosmic/90 to-cosmic/75 text-white rounded-tr-none border border-cosmic/30"
                      : "bg-surface-elevated/75 text-lavender rounded-tl-none border border-border/55"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-surface-elevated/70 border border-border/40 px-3.5 py-2.5 text-xs text-lavender/60 rounded-tl-none">
                  <Loader2 className="h-3 w-3 animate-spin text-amber-gold" />
                  Aligning cosmic coordinates…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-4 py-2 border-t border-border/20 shrink-0">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {QUICK_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  disabled={loading}
                  className="whitespace-nowrap rounded-full border border-border/60 bg-surface/50 px-2.5 py-1 text-[10px] text-lavender/80 hover:text-amber-gold hover:border-amber-gold/50 hover:bg-white/5 transition disabled:opacity-55 disabled:cursor-not-allowed cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-border/40 bg-surface/40 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about KundaliAI..."
              disabled={loading}
              className="flex-1 rounded-xl border border-border bg-surface px-3 py-2 text-xs text-white placeholder-lavender/40 focus:outline-none focus:border-cosmic/60 transition disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-cosmic to-amber-gold text-[oklch(0.12_0.05_290)] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
