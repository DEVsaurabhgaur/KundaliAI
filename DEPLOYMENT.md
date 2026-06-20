# Production Deployment Guide - KundaliAI 🌟

This guide provides the complete, step-by-step instructions to take KundaliAI from your local machine to live production.

---

## 📋 Table of Contents
1. [Prerequisites & API Keys](#1-prerequisites--api-keys)
2. [Database Schema Setup (Supabase)](#2-database-schema-setup-supabase)
3. [Environment Configuration](#3-environment-configuration)
4. [Deployment Platforms](#4-deployment-platforms)
5. [Performance & Security Best Practices](#5-performance--security-best-practices)

---

## 1. Prerequisites & API Keys

Before deploying, ensure you have setup accounts on the following platforms:
1.  **Google AI Studio**: To obtain a free-tier or pay-as-you-go **Gemini API Key**.
2.  **Supabase**: For hosting the generated readings log database.
3.  **Vercel / Cloudflare Workers**: For hosting the TanStack Start SSR application.

---

## 2. Database Schema Setup (Supabase)

1.  Log in to your [Supabase Dashboard](https://supabase.com) and create a new project.
2.  Navigate to the **SQL Editor** tab.
3.  Copy and run the contents of the initial migration file:
    👉 `supabase/migrations/0001_initial_schema.sql`
4.  This script will:
    *   Create the `kundalis` table.
    *   Enable Row Level Security (RLS).
    *   Setup policies allowing authenticated users to manage their own records safely.

---

## 3. Environment Configuration

Copy the `.env.example` file to create your environment config:
```bash
cp .env.example .env
```

Define the following variables in your hosting dashboard:

| Variable Name | Description | Placement |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Google Gemini API Key | Server-only (Secret) |
| `VITE_SUPABASE_URL` | Supabase endpoint URL | Client & Server (Public) |
| `VITE_SUPABASE_ANON_KEY` | Supabase Anon Client API key | Client & Server (Public) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase admin key (for secure inserts) | Server-only (Secret) |
| `NODE_ENV` | Environment level (`production`) | Server-only (Secret) |

---

## 4. Deployment Platforms

### Option A: Vercel (Recommended)
TanStack Start has native adapter bindings for Vercel.
1.  Connect your GitHub repository to Vercel.
2.  Vercel will auto-detect the Vite / TanStack Start configuration.
3.  Set the following settings:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `.output` (or standard auto-detected)
4.  Add your environment variables inside the Project Settings.
5.  Click **Deploy**.

### Option B: Cloudflare Workers
Since we optimized the rate limiter and Supabase client to be serverless-compatible, you can deploy as a Cloudflare Worker:
1.  Configure the Nitro preset inside your builder if necessary.
2.  Run `npx wrangler deploy` or hook up Cloudflare Pages for git-based deployments.

---

## 5. Performance & Security Best Practices

1.  **Gemini Rate Limiting**: The in-memory rate-limiter is set to `5 requests per 2 minutes` per client IP. This protects your API key from spam or bot attacks.
2.  **API Key Safety**: Never prefix `GEMINI_API_KEY` with `VITE_`. Keeping it non-prefixed guarantees Vite will *never* bundle it into the client-side browser files.
3.  **Local Storage Cache**: Readings are stored in browser localStorage. This improves load times and saves API cost for returning users.
4.  **XSS Protection**: All markdown content from the AI model is safely parsed into React DOM elements by the `<SafeMarkdown />` component, avoiding any custom script executions.
