# STEMise EdTech Platform

> **THE VISION**
> STEMise is shifting from an organization that produces STEM content to a platform that the community builds together. The end result will function like a free, community-built hybrid of **Khan Academy and Duolingo**: a place where students learn for free, where the subject matter is unique because it comes from real contributors (surfaced through our STEAM Hackathon), and where **every lesson has a gamified, interactive layer** instead of being a static page.

Welcome to the foundational Design System Showcase for the new STEMise platform. This document serves as your complete onboarding guide.

## 1. Onboarding and Local Setup

To start contributing to the STEMise platform, follow these steps:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/edtech-platform.git
   cd edtech-platform
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the local URL provided in the terminal (typically `http://localhost:5173` or `http://localhost:5174`).

## 2. Project Architecture

This repository is built using modern, scalable web technologies:
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Component Library:** Shadcn UI (Radix Primitives)
- **Icons:** Lucide React
- **Language:** TypeScript

### Directory Structure
- `/src/components/ui`: Contains all base UI primitives (buttons, inputs, dialogs). Do not modify these unless making a global design change.
- `/src/components`: Contains composite components built from the UI primitives.
- `/src/lib`: Utility functions (e.g., `cn` for Tailwind class merging).
- `App.tsx`: Currently serves as the interactive Design System Showcase. Run the local server to see how to use all the components.

## 3. Daily Coding Guidelines

When you are tasked with building a new lesson, game, or UI component, follow these rules to ensure consistency with the gamified platform.

### Gamified Buttons
Our buttons must feel tactile and pressable. Never use flat, corporate buttons. 

**Copy-Paste Template for a Primary Button:**
```tsx
import { Button } from "@/components/ui/button";

export function PrimaryButton({ children, onClick }) {
  return (
    <Button 
      onClick={onClick}
      className="bg-[#0f1a38] text-white hover:bg-[#1a2b5e] rounded-2xl border-b-[5px] border-[#070d1f] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold"
    >
      {children}
    </Button>
  );
}
```

### Brand Colors
Always use these specific Tailwind hex values directly, or build them into your component classes:
- **Primary Navy:** `bg-[#0f1a38]` / `text-[#0f1a38]` (For backgrounds, text, and main buttons).
- **Accent Lime:** `bg-[#e4f4c0]` / `text-[#1a2e05]` (For highlights and secondary actions).

### Typography
- The global font is **Be Vietnam Pro**.
- Use `font-extrabold` and `tracking-tight` for all major headers (e.g., lesson titles).
- Use `text-muted-foreground` and `font-medium` for subtitles and descriptions.

### Interactive Elements
When building lessons, avoid static text pages. Use the following components to make the experience engaging:
- **XP Bars:** Use the `<Progress />` component to show lesson completion. Wrap it in a thick border for a gamified feel.
- **Modals:** Use the `<Dialog />` component for "Level Up" or "Achievement Unlocked" screens.
- **Tooltips:** Use `<HoverCard />` or `<Tooltip />` to show streak counts or definitions for difficult words.

## 4. Deployment

This project is configured to deploy seamlessly to Netlify. 
- The `vite.config.ts` uses a relative base path (`base: './'`) to ensure assets load correctly regardless of where the site is hosted (root domain or subdirectory).
- Do not modify the build script in `package.json` unless absolutely necessary, as it is configured to bypass legacy type errors during the migration phase.
