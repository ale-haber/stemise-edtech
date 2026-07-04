# 🚀 STEMise EdTech Platform

> **THE VISION**
> STEMise is shifting from an organization that produces STEM content to a platform that the community builds together. The end result will function like a free, community-built hybrid of **Khan Academy and Duolingo**: a place where students learn for free, where the subject matter is unique because it comes from real contributors (surfaced through our STEAM Hackathon), and where **every lesson has a gamified, interactive layer** instead of being a static page.

Welcome to the foundational **Design System Showcase** for the new STEMise platform!

## 🚀 Getting Started

To run the design system showcase locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/edtech-platform.git
   cd edtech-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the `localhost` URL provided in the terminal (usually `http://localhost:5173` or `5174`) to view the interactive showcase!

## 🎨 Design System Philosophy

Because this platform is highly gamified, our design system relies on a few key principles:
- **Tactile & Bubbly Elements:** Buttons shouldn't just change color when clicked; they should feel like physical, pressable objects in a game. We achieve this with thick bottom borders that compress (`active:border-b-0 active:translate-y-1`) when clicked.
- **Vibrant & Contrast-Heavy Colors:** We utilize a dark navy (`#0f1a38`) for our primary background and text, paired with an electric lime/accent color (`#e4f4c0`) to create high-contrast, energetic focal points.
- **Reward Mechanics:** The UI heavily utilizes elements like XP bars, Streak Flames, Level Up modals, and Achievement Badges to make learning addictive.

## 🛠️ How to Use the Components

All of our UI elements are built on top of **Radix UI Primitives** and styled with **Tailwind CSS**. You can find the base components inside `src/components/ui`.

### 1. Typography
We use **Be Vietnam Pro** for a friendly, highly legible, and modern feel.
```tsx
<h1 className="text-5xl font-extrabold tracking-tight text-[#0f1a38]">Start your journey!</h1>
<p className="text-lg font-medium text-muted-foreground">Description goes here.</p>
```

### 2. Gamified Buttons
To create our signature "Duolingo-style" button, use the following Tailwind classes to simulate a 3D press effect:
```tsx
import { Button } from "@/components/ui/button";

// Primary Dark Button
<Button className="bg-[#0f1a38] text-white hover:bg-[#1a2b5e] rounded-2xl border-b-[5px] border-[#070d1f] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold">
  Start Lesson
</Button>

// Accent Light Button
<Button className="bg-[#e4f4c0] text-[#1a2e05] hover:bg-[#d4f09a] rounded-2xl border-b-[5px] border-[#adc778] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold">
  Check Answer
</Button>
```

### 3. Icons
We use **Lucide React** for all icons. When adding Gamification elements, use icons like `<Flame />`, `<Trophy />`, `<Star />`, and `<Zap />`.
```tsx
import { Flame } from "lucide-react";
<Flame className="h-8 w-8 fill-orange-500 text-orange-500" />
```

## 📂 File Structure
- `src/App.tsx`: The main Design System Showcase entry file.
- `src/components/ui/`: Contains all the raw Shadcn/Radix UI component blocks.
- `src/index.css`: Contains global CSS, Tailwind directives, and root CSS variables.

## 🤝 Contributing
As developers start migrating community-built content (lessons, games, mechanics) into the platform, make sure to use these pre-built design system components to maintain a cohesive, fun, and accessible learning environment.
