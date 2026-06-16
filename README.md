# KundaliAI — Decode Your Cosmic Blueprint 🌌✨

A premium web application that blends the 5,000-year-old science of Vedic astrology with modern Artificial Intelligence to generate accurate, personalized, and deep cosmic readings. 

Built with state-of-the-art technologies including **TanStack Start**, **Google Gemini AI**, **Supabase**, and **Framer Motion**.

---

## 🌟 Key Features

- **Vedic Precision & AI Insights:** Computes planetary geometries and uses Google Gemini (`gemini-1.5-flash`) to generate detailed, mystical readings for personality, career, love, and health.
- **Animated Cosmic UI:** A visually stunning interface with interactive floating particles, dynamic space gradients, and custom astrology chart illustrations.
- **Supabase Backend Integration:** Built-in schema support for saving user Kundalis with secure Row-Level Security (RLS) policies.
- **Type-Safe Routing & API:** Full end-to-end type safety using TanStack Router and TanStack Start server functions, backed by Zod validators.
- **Instant PDF Export Capability:** Clean layouts ready for high-fidelity export and sharing.

---

## 🛠️ Technology Stack

- **Core Framework:** [Vite](https://vitejs.dev/) & [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (Server-side rendering + file-based routing)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling & Motion:** [Tailwind CSS](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
- **AI Engine:** [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Gemini AI API)
- **Database & Auth:** [Supabase](https://supabase.com/)
- **Validation:** [Zod](https://zod.dev/)

---

## 📂 Project Structure

```text
KundaliAI/
├── src/
│   ├── components/       # Reusable UI components & layouts
│   │   ├── ui/           # Radix UI + shadcn components
│   │   ├── KundaliChart  # Custom animated cosmic chart component
│   │   ├── StarField     # Animated background canvas particle effect
│   │   └── ...
│   ├── lib/
│   │   ├── api/          # Secure server functions (Gemini Integration)
│   │   └── supabase.ts   # Supabase client setup
│   ├── routes/           # File-based TanStack Router routes
│   │   ├── __root.tsx    # App root shell layout
│   │   └── index.tsx     # Hero landing page & layout structure
│   ├── router.tsx        # TanStack Router configuration
│   ├── start.ts          # Client entrypoint setup
│   └── styles.css        # Core styling and design tokens
├── supabase/
│   └── migrations/       # Database schemas & Row-Level Security (RLS)
├── .env.example          # Environment variables template
├── package.json          # Dependency management & build scripts
└── vite.config.ts        # Vite plugins configuration (TanStack Start, Tailwind)
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### ⚙️ Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DEVsaurabhgaur/KundaliAI.git
   cd KundaliAI
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and populate it with your credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Database Setup (Optional):**
   Apply the migrations located in the `supabase/migrations/` folder to your Supabase project to enable saving generated readings.

---

## 💻 Running Locally

To start the development server:

```bash
npm run dev
# or
bun run dev
```

The application will run locally at `http://localhost:3000` (or the port specified by Vite).

---

## 🔧 Useful Scripts

- `npm run dev` — Run local development server
- `npm run build` — Build production bundle
- `npm run lint` — Run ESLint rules check
- `npm run format` — Auto-format code using Prettier
