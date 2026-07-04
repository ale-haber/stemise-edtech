# AI Assistant Context: STEMise EdTech Platform

> **🚨 CORE PLATFORM VISION 🚨**
> STEMise is shifting from an organization that produces STEM content to a platform that the community builds together. The end result will function like a free, community-built hybrid of **Khan Academy and Duolingo**: a place where students learn for free, where the subject matter is unique because it comes from real contributors (surfaced through our STEAM Hackathon), and where **every lesson has a gamified, interactive layer** instead of being a static page.

Welcome, AI coding assistant! You are contributing to the **STEMise EdTech Platform**. Please read this context file carefully before generating code or modifying the repository.

## 🎨 Design System & UI Guidelines
This repository contains the foundational Design System. When generating components or UI updates, strictly adhere to the following aesthetic rules:

### 1. Gamified & Tactile Aesthetics
- Avoid flat, corporate, or generic SaaS designs.
- Buttons should feel like physical, pressable objects. 
  - **Always use the 3D button approach:** `rounded-2xl border-b-[5px] active:border-b-0 active:translate-y-[5px] transition-all`.
  - Do NOT use standard flat buttons from shadcn/ui without adding these tactile classes.

### 2. Core Colors
Use these specific brand colors when building components:
- **Primary Navy:** `bg-[#0f1a38]` / `text-[#0f1a38]` (Used for dark headers, main text, and primary dark buttons).
- **Accent Lime:** `bg-[#e4f4c0]` / `text-[#1a2e05]` (Used for high-contrast action buttons and highlights).
- **Secondary/Muted:** Use standard Tailwind slate scales (`slate-100` to `slate-300`) for borders and disabled states.

### 3. Typography
- The global font is **Be Vietnam Pro**. 
- Make typography heavy, bold, and highly legible. Use `font-extrabold` and `tracking-tight` for headers.

### 4. Component Structure
- We use **React + Vite** with **Tailwind CSS**.
- The base components are generated from **shadcn/ui** (stored in `src/components/ui/`), but they must be styled to fit the gamified aesthetic described above.
- Icons must be imported from **lucide-react**. Use fun, game-like icons (e.g., `Flame`, `Star`, `Zap`, `Trophy`) instead of generic UI icons when representing learning progress.

## 🛠️ Development Rules
1. **No React Router (Yet):** This specific repo (`edtech-platform`) currently serves as the single-page Design System Showcase. Do not introduce `react-router-dom` unless explicitly requested.
2. **Relative Base Paths:** `vite.config.ts` uses `base: './'` so the built assets can be hosted smoothly on Netlify, under subdirectories, or via reverse proxies. Do not change this to an absolute path.
3. **Avoid Destructive Overwrites:** If you are modifying a gamified component, do not strip out the specific borders and click animations (`active:translate-y`) that give it the Duolingo feel.

If asked to build a new component for a lesson, think: *"How can I make this feel like a fun game rather than a textbook?"*
