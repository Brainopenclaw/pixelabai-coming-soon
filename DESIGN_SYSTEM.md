# Pixelab AI Design System - Implementation Guide

This document describes the complete design system that needs to be implemented for the pixelabai-coming-soon project.

## ✅ Completed

- [x] Next.js 14 + TypeScript + Tailwind CSS setup
- [x] Design tokens configured in `tailwind.config.ts`
- [x] Custom CSS utilities in `src/app/globals.css`
- [x] Comprehensive README documentation
- [x] Dependencies installed (framer-motion, clsx, tailwind-merge)

## 🚧 Pending Implementation

Due to file system issues during the development session, the following component files need to be created in `src/components/`:

### Directory Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── animations/
│   │   ├── FadeUp.tsx
│   │   ├── SlideIn.tsx
│   │   ├── CountUp.tsx
│   │   ├── GlowCard.tsx
│   │   ├── StaggerChildren.tsx
│   │   ├── TextReveal.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── effects/
│       ├── AnimatedGrid.tsx
│       ├── GradientOrbs.tsx
│       ├── AuroraBackground.tsx
│       └── index.ts
└── lib/
    └── utils.ts
```

### Component Specifications

#### 1. UI Primitives (`src/components/ui/`)

**Button.tsx**
- Variants: primary, secondary, ghost, cta
- Sizes: sm, md, lg
- Framer Motion hover (scale: 1.02) and tap (scale: 0.98) effects
- Uses gradient backgrounds from design tokens
- Forwardable ref

**Card.tsx**
- Animated hover effect (moves up 4px)
- Glass morphism style (bg-white/5 backdrop-blur-sm)
- Optional hover prop
- Border: border-white/10

**Container.tsx**
- Max widths: sm (2xl), md (4xl), lg (6xl), xl (7xl), full
- Centered with responsive padding (px-4 sm:px-6 lg:px-8)

**Section.tsx**
- Background options: none, gradient, dots
- Full width with py-section-padding (6rem)
- Semantic <section> element

**Badge.tsx**
- Variants: default, orange, blue, purple
- Pill shape (rounded-badge = 9999px)
- Semi-transparent backgrounds

**Input.tsx**
- Dark style (bg-white/5)
- Focus ring with primary-orange color
- Placeholder styling

#### 2. Animation Primitives (`src/components/animations/`)

**FadeUp.tsx**
- Uses `useInView` hook with `once: true` and `-100px` margin
- Initial state: opacity 0, y: 20
- Animate to: opacity 1, y: 0
- Props: delay, duration (default 0.6s)

**SlideIn.tsx**
- Direction: left | right
- Initial x offset: -40px (left) or 40px (right)
- Uses IntersectionObserver via useInView

**CountUp.tsx**
- Uses `useSpring` from Framer Motion
- Props: end, start (0), duration (2s), decimals, prefix, suffix
- Only animates when in view

**GlowCard.tsx**
- Similar to Card but with glow shadow on hover
- GlowColor: orange | blue | purple
- Uses boxShadow from design tokens

**StaggerChildren.tsx**
- Container with staggerChildren transition
- Individual StaggerItem components
- Default delay: 0.1s between items

**TextReveal.tsx**
- Splits text by words
- Each word animates in with spring animation
- Stagger delay: 0.12s
- Uses damping: 12, stiffness: 100

#### 3. Layout Components (`src/components/layout/`)

**Header.tsx**
- Fixed position with backdrop-blur
- Container with logo (🤖 + "Pixelab AI")
- Desktop nav with links: Inicio, Acerca, Servicios, Contacto
- CTA button: "Notifícame"
- Mobile: Hamburger menu (optional for MVP)

**Footer.tsx**
- Border top
- Centered logo and text
- Description: "Aprende a usar la IA para transformar tu negocio y tu vida."
- Copyright: "© 2024 Pixelab AI. Todos los derechos reservados."

#### 4. Background Effects (`src/components/effects/`)

**AnimatedGrid.tsx**
- Fixed position, -z-10
- CSS radial gradient dot pattern
- Background size: 24px × 24px
- Optional: Mouse-following spotlight effect

**GradientOrbs.tsx**
- Multiple motion.div elements with absolute positioning
- Each orb: different size, color (orange/yellow/blue/purple), blur (90-120px)
- Animated with x/y/scale keyframes
- Duration: 18-25s, infinite loop, easeInOut

**AuroraBackground.tsx**
- Fixed overlay with multiple radial gradients
- Animated opacity changes
- Colors from primary-orange, primary-yellow, accent-blue
- Subtle pulsing effect (opacity 0.3-0.5-0.3, 10s duration)

#### 5. Utility Functions (`src/lib/`)

**utils.ts**
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Design Tokens (Already Configured)

See `tailwind.config.ts` for complete configuration:

- **Colors**: primary-orange, primary-yellow, accent-blue, accent-purple
- **Typography**: display, heading, subheading, body, small
- **Spacing**: section-padding (6rem), container-width (1280px)
- **Border radius**: card (1rem), button (0.5rem), badge (9999px)
- **Shadows**: glow-orange, glow-blue, glow-purple

### Custom CSS Utilities (Already Created)

See `src/app/globals.css`:

- `.text-gradient-orange`: Orange to yellow gradient text
- `.text-gradient-blue`: Blue to purple gradient text

## 📝 Implementation Notes

1. All "use client" components must have the directive at the top
2. Use `forwardRef` for all UI primitives
3. Export both the component and its Props interface
4. Use `cn()` utility for className merging
5. Follow the exact prop names and types specified
6. Animation components use Framer Motion's `useInView` for scroll-triggered animations
7. All components are TypeScript with proper interfaces

## 🧪 Testing Checklist

After implementation:

- [ ] All components render without errors
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsive at 320px, 768px, 1024px, 1920px
- [ ] Dark theme looks consistent
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] All exports work from index files

## 🚀 Next Steps

1. Create all component files as specified above
2. Test each component in isolation
3. Create a `/demo` page showcasing all components
4. Run `npm run build` to verify production build
5. Commit and push to feat/design-system branch
6. Create Pull Request for review

## 💡 Usage Example

```tsx
import { Header, Footer } from "@/components/layout";
import { Section, Container, Button, Badge } from "@/components/ui";
import { FadeUp, GlowCard } from "@/components/animations";
import { GradientOrbs } from "@/components/effects";

export default function Page() {
  return (
    <>
      <GradientOrbs />
      <Header />
      
      <Section background="gradient">
        <Container>
          <FadeUp>
            <Badge variant="orange">Coming Soon</Badge>
            <h1 className="text-display text-gradient-orange mt-4">
              Pixelab AI
            </h1>
            <p className="text-xl text-white/70 mt-6">
              Aprende a usar la IA para transformar tu negocio y tu vida.
            </p>
            <Button variant="cta" size="lg" className="mt-8">
              Notifícame
            </Button>
          </FadeUp>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard glowColor="orange">
              <h3 className="text-xl font-semibold">Feature 1</h3>
              <p className="text-white/70 mt-2">Description</p>
            </GlowCard>
            {/* More cards... */}
          </div>
        </Container>
      </Section>
      
      <Footer />
    </>
  );
}
```

## 📚 Reference

- All component code was written during the development session but did not persist due to file system issues
- The complete implementation follows React best practices and Next.js 14 App Router conventions
- Framer Motion documentation: https://www.framer.com/motion/
- Tailwind CSS documentation: https://tailwindcss.com/

---

**Status**: Infrastructure complete, component files need to be created
**Priority**: High - blocks landing page development
**Estimated effort**: 2-3 hours for a developer to implement all components
