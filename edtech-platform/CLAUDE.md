# AI Assistant Context: STEMise EdTech Platform

> **CORE PLATFORM VISION**
> STEMise is shifting from an organization that produces STEM content to a platform that the community builds together. The end result will function like a free, community-built hybrid of **Khan Academy and Duolingo**: a place where students learn for free, where the subject matter is unique because it comes from real contributors (surfaced through our STEAM Hackathon), and where **every lesson has a gamified, interactive layer** instead of being a static page.

Welcome, AI coding assistant. You are contributing to the STEMise EdTech Platform. Please read this context file carefully before generating code or modifying the repository. Do not use emojis in your responses or documentation.

## 1. Onboarding and Architecture
- **Tech Stack:** React, Vite, Tailwind CSS, Shadcn UI, TypeScript, Lucide React.
- **Routing:** This specific repo currently serves as a single-page Design System Showcase. Do not introduce `react-router-dom` unless explicitly requested.
- **File Structure:** Base components live in `src/components/ui/`. Composite components live in `src/components/`.

## 2. Daily Coding & Design System Rules
When generating components or UI updates, you must strictly adhere to the gamified aesthetic. Avoid flat, corporate, or generic SaaS designs.

### Tactile Aesthetics
- Buttons must feel like physical, pressable objects in a game.
- **Mandatory Button Classes:** `rounded-2xl border-b-[5px] active:border-b-0 active:translate-y-[5px] transition-all`.
- Do not use standard flat buttons from shadcn/ui without adding these tactile classes.

### Core Colors
Use these specific brand colors when building components:
- **Primary Navy:** `bg-[#0f1a38]` / `text-[#0f1a38]` (Used for dark headers, main text, and primary dark buttons).
- **Accent Lime:** `bg-[#e4f4c0]` / `text-[#1a2e05]` (Used for high-contrast action buttons and highlights).
- **Secondary/Muted:** Use standard Tailwind slate scales (`slate-100` to `slate-300`) for borders and disabled states.

### Typography
- The global font is **Be Vietnam Pro**. 
- Make typography heavy, bold, and highly legible. Use `font-extrabold` and `tracking-tight` for headers.

### Gamification Elements
If asked to build a new component for a lesson, think: *"How can I make this feel like a fun game rather than a textbook?"*
- Icons must be imported from **lucide-react**. Use game-like icons (e.g., Flame, Star, Zap, Trophy) instead of generic UI icons.
- Use `HoverCard` for streak indicators.
- Use `Dialog` for level-up or reward modals.
- Use thick borders (`border-2` or `border-4`) around cards to make them pop.

## 3. Technical Constraints
- **Relative Base Paths:** `vite.config.ts` uses `base: './'` so the built assets can be hosted smoothly under subdirectories or via reverse proxies. Do not change this to an absolute path.
- **Avoid Destructive Overwrites:** If you are modifying a gamified component, do not strip out the specific borders and click animations that give it the Duolingo feel.
