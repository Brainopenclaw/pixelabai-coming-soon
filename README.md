# Pixelab AI Design System

A comprehensive, production-ready design system built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Tokens

### Colors
- **Primary**: Orange (#ff6b35), Yellow (#f7c948)
- **Accent**: Blue (#3b82f6), Purple (#8b5cf6)
- **Background**: Dark (#0a0a0a)

### Typography
- **Display**: 4rem / 700 weight
- **Heading**: 2.5rem / 700 weight
- **Subheading**: 1.5rem / 600 weight
- **Body**: 1rem / 400 weight
- **Small**: 0.875rem / 400 weight

### Spacing
- **Section Padding**: 6rem
- **Container Max Width**: 1280px

### Border Radius
- **Card**: 1rem
- **Button**: 0.5rem
- **Badge**: 9999px (pill)

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
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="cta">CTA with pulse</Button>
```

**Variants**: `primary` | `secondary` | `ghost` | `cta`  
**Sizes**: `sm` | `md` | `lg`

#### Card
```tsx
import { Card } from "@/components/ui";

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content with hover glow effect</p>
</Card>
```

#### Section
```tsx
import { Section } from "@/components/ui";

<Section background="gradient">
  {/* Section content */}
</Section>
```

**Backgrounds**: `none` | `gradient` | `dots`

#### Container
```tsx
import { Container } from "@/components/ui";

<Container maxWidth="xl">
  {/* Centered, max-width content */}
</Container>
```

**Max Widths**: `sm` | `md` | `lg` | `xl` | `full`

#### Badge
```tsx
import { Badge } from "@/components/ui";

<Badge variant="orange">Category</Badge>
```

**Variants**: `default` | `orange` | `blue` | `purple`

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

<FadeUp delay={0.2} duration={0.6}>
  <h1>Animated content</h1>
</FadeUp>
```

#### SlideIn
Slide from left/right on scroll

```tsx
import { SlideIn } from "@/components/animations";

<SlideIn direction="left" delay={0.1}>
  <p>Slides in from left</p>
</SlideIn>
```

**Directions**: `left` | `right`

#### CountUp
Animated number counter

```tsx
import { CountUp } from "@/components/animations";

<CountUp end={1000} start={0} duration={2} prefix="$" suffix="+" />
```

#### GlowCard
Card with border gradient glow on hover

```tsx
import { GlowCard } from "@/components/animations";

<GlowCard glowColor="orange">
  <h3>Glowing card</h3>
</GlowCard>
```

**Glow Colors**: `orange` | `blue` | `purple`

#### StaggerChildren
Staggered reveal for lists/grids

```tsx
import { StaggerChildren, StaggerItem } from "@/components/animations";

<StaggerChildren staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
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
Sticky header with blur backdrop, responsive nav, mobile hamburger menu with animated overlay

```tsx
import { Header } from "@/components/layout";

<Header />
```

#### Footer
Logo, nav links, social icons, copyright

```tsx
import { Footer } from "@/components/layout";

<Footer />
```

### Background Effects

#### AnimatedGrid
Dot grid pattern with moving spotlight (follows mouse)

```tsx
import { AnimatedGrid } from "@/components/effects";

<AnimatedGrid />
```

#### GradientOrbs
Floating blurred gradient circles

```tsx
import { GradientOrbs } from "@/components/effects";

<GradientOrbs />
```

#### AuroraBackground
Ambient color shift effect

```tsx
import { AuroraBackground } from "@/components/effects";

<AuroraBackground />
```

## 🚀 Usage

### Basic Page Structure

```tsx
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/components/ui";
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
            <h1 className="text-heading text-gradient-orange">
              Welcome to Pixelab AI
            </h1>
          </FadeUp>
        </Container>
      </Section>
      
      <Footer />
    </>
  );
}
```

## 🎯 Features

- ✅ **Dark theme only** - Optimized for dark mode
- ✅ **Fully responsive** - Mobile-first design
- ✅ **Smooth animations** - 60fps Framer Motion animations
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Accessible** - Semantic HTML, ARIA labels
- ✅ **Performance** - IntersectionObserver for scroll animations
- ✅ **Customizable** - Design tokens via Tailwind config

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

MIT
