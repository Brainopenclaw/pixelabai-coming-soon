# Pixelab AI Design System

A production-ready design system built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Tokens

### Colors
- **Primary**: Orange (#ff6b35), Yellow (#f7c948)
- **Accent**: Blue (#3b82f6), Purple (#8b5cf6)
- **Background**: #0a0a0a (dark)

### Typography
- **Display**: 4rem/700 — Hero headlines
- **Heading**: 2.5rem/700 — Section titles
- **Subheading**: 1.5rem/600 — Subsection titles
- **Body**: 1rem/400 — Content text
- **Small**: 0.875rem/400 — Captions, labels

### Spacing
- **Section Padding**: 6rem
- **Container Max Width**: 1280px (7xl)

### Border Radius
- **Card**: 1rem
- **Button**: 0.5rem
- **Badge**: 9999px (pill shape)

### Shadows
- **Glow Orange**: `0 0 40px rgba(255, 107, 53, 0.3)`
- **Glow Blue**: `0 0 40px rgba(59, 130, 246, 0.3)`
- **Glow Purple**: `0 0 40px rgba(139, 92, 246, 0.3)`

## 📦 Components

### UI Primitives

#### Button
```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="md">Click me</Button>
<Button variant="cta">Call to Action</Button>
```
**Variants**: primary | secondary | ghost | cta  
**Sizes**: sm | md | lg

#### Card
```tsx
import { Card } from "@/components/ui";

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content with animated hover effect</p>
</Card>
```

#### Container
```tsx
import { Container } from "@/components/ui";

<Container maxWidth="xl">
  {/* Centered, responsive content */}
</Container>
```
**Max Widths**: sm | md | lg | xl | full

#### Section
```tsx
import { Section } from "@/components/ui";

<Section background="gradient">
  {/* Full-width section with optional background */}
</Section>
```
**Backgrounds**: none | gradient | dots

#### Badge
```tsx
import { Badge } from "@/components/ui";

<Badge variant="orange">Featured</Badge>
```
**Variants**: default | orange | blue | purple

#### Input
```tsx
import { Input } from "@/components/ui";

<Input type="email" placeholder="tu@email.com" />
```

### Animation Primitives

#### FadeUp
Fade in + slide up on scroll (IntersectionObserver)

```tsx
import { FadeUp } from "@/components/animations";

<FadeUp delay={0.2}>
  <h1>Animated Heading</h1>
</FadeUp>
```

#### SlideIn
Slide from left or right on scroll

```tsx
import { SlideIn } from "@/components/animations";

<SlideIn direction="left" delay={0.1}>
  <p>Content slides in</p>
</SlideIn>
```

#### CountUp
Animated number counter

```tsx
import { CountUp } from "@/components/animations";

<CountUp end={1000} duration={2} prefix="$" suffix="+" />
```

#### GlowCard
Card with glow effect on hover

```tsx
import { GlowCard } from "@/components/animations";

<GlowCard glowColor="orange">
  <h3>Glowing Card</h3>
</GlowCard>
```

#### StaggerChildren
Staggered animation for lists

```tsx
import { StaggerChildren, StaggerItem } from "@/components/animations";

<StaggerChildren staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerChildren>
```

#### TextReveal
Words appear one by one

```tsx
import { TextReveal } from "@/components/animations";

<TextReveal delay={0.3}>
  Transform your business with AI
</TextReveal>
```

### Layout Components

#### Header
Fixed header with blur backdrop, responsive nav, logo

```tsx
import { Header } from "@/components/layout";

<Header />
```

#### Footer
Footer with logo, description, copyright

```tsx
import { Footer } from "@/components/layout";

<Footer />
```

### Background Effects

#### AnimatedGrid
Dot grid pattern background

```tsx
import { AnimatedGrid } from "@/components/effects";

<AnimatedGrid />
```

#### GradientOrbs
Floating animated gradient orbs

```tsx
import { GradientOrbs } from "@/components/effects";

<GradientOrbs />
```

#### AuroraBackground
Ambient aurora glow effect

```tsx
import { AuroraBackground } from "@/components/effects";

<AuroraBackground />
```

## 🚀 Usage Example

```tsx
import { Header, Footer } from "@/components/layout";
import { Section, Container, Button } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { GradientOrbs } from "@/components/effects";

export default function Page() {
  return (
    <>
      <GradientOrbs />
      <Header />
      
      <Section background="gradient">
        <Container>
          <FadeUp>
            <h1 className="text-display text-gradient-orange">
              Welcome to Pixelab AI
            </h1>
            <Button variant="cta" size="lg">Get Started</Button>
          </FadeUp>
        </Container>
      </Section>
      
      <Footer />
    </>
  );
}
```

## 🎯 Features

✅ Dark theme optimized  
✅ Fully responsive (mobile-first)  
✅ Smooth 60fps animations (Framer Motion)  
✅ Type-safe (TypeScript)  
✅ Performance-optimized (IntersectionObserver for scroll animations)  
✅ Accessible (semantic HTML, proper ARIA labels)  
✅ Customizable via Tailwind config

## 🛠️ Development

```bash
npm install
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
npm start      # Start production server
```

## 📄 License

MIT
