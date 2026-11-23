# APT MEDIA STUDIO — Design System & Architectural Specification

> **Brand**: APT MEDIA™  
> **Visual Archetype**: Swiss Brutalist Editorial Architecture with Analog Warmth & Dynamic WebGL  
> **Key Rules**:
> 1. **Zero Border Radius (`border-radius: 0px`)**: Sharp right angles on every card, button, and image frame.
> 2. **Split Buttons with 2px Gap**: Two separate rectangular compartments (text compartment + 1:1 square arrow compartment) separated by a 2px gap, filled with solid white or solid black.
> 3. **Dynamic Living WebGL Canvas**: `@firecms/neat` real-time interactive mesh gradient animating in the hero section with scroll-driven offset.
> 4. **Bottom Slide-Up Image Reveal**: In *Design Expertise*, expanding service items smoothly reveal their showcase imagery sliding in from the bottom.

---

## 1. Split Button Architecture

Each button consists of **two separate rectangular blocks** side by side:
- **Left Block**: Text label (`px-4 py-2.5 sm:px-5 sm:py-3 text-[13px] sm:text-sm font-medium tracking-normal`)
- **Gap**: `gap-[2px]` (background color shows through between the two boxes)
- **Right Block**: Square compartment containing the horizontal arrow (`ArrowRight` `w-9 sm:w-11 h-auto flex items-center justify-center`)
- **Fills**:
  - `variant="white"`: Solid white background with black text/arrow (`bg-white text-zinc-900 border border-zinc-200/90`)
  - `variant="dark"`: Solid black background with white text/arrow (`bg-[#18181b] text-white border border-[#18181b]`)

---

## 2. Dynamic WebGL Gradient (`@firecms/neat`)

Integrated in **[components/HeroGradient.tsx](file:///Users/parth/Developer/APT-MEDIA-WEB/components/HeroGradient.tsx)**:
- Renders `<canvas id="gradient" />` behind the hero typography and layered with the atmospheric silhouette visual.
- **Palette**:
  - `#E43F1A` (Electric vermilion brand orange)
  - `#FF6B00` (Fiery amber)
  - `#FFB800` (Warm sunset gold)
  - `#8A1505` (Deep crimson ember)
  - `#1F0803` (Obsidian amber glow)
- Reacts to window scroll by adjusting `gradient.yOffset`.
