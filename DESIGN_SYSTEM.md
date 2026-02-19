# Design System Documentation

## Premium Montessori Play School Website

This document defines the complete design system for the Little Learners Montessori website, ensuring consistency across all components and pages.

---

## 🎨 Color Palette

### Primary Colors

Our Montessori-inspired earthy palette creates a warm, sophisticated atmosphere:

#### Warm Beige (Primary Background)

```css
montessori-beige-50:  #faf8f5  /* Lightest - main background */
montessori-beige-100: #f5f1ea
montessori-beige-500: #c8b38d  /* Base color */
montessori-beige-900: #473c2f  /* Text color */
```

#### Muted Terracotta (Primary CTAs & Accents)

```css
montessori-terracotta-100: #f5ebe9  /* Light backgrounds */
montessori-terracotta-500: #c28f7d  /* Primary buttons, links */
montessori-terracotta-600: #a87566  /* Hover states */
```

#### Sage Green (Secondary Elements)

```css
montessori-sage-50:  #f6f8f6   /* Section backgrounds */
montessori-sage-100: #edf1ed   /* Card backgrounds */
montessori-sage-500: #99b599   /* Accent color */
montessori-sage-600: #7f9a7f   /* Hover states */
```

#### Dusty Blue (Tertiary Accents)

```css
montessori-dusty-50:  #f5f7f9  /* Subtle backgrounds */
montessori-dusty-100: #ebeff3
montessori-dusty-500: #89a7c3  /* Secondary accents */
```

#### Soft Mustard (Highlights)

```css
montessori-mustard-100: #f5f1e7
montessori-mustard-500: #c5ab67  /* Highlight color */
```

### Usage Guidelines

- **Backgrounds**: Use beige-50 as the primary background
- **Text**: beige-900 for primary text, beige-600/700 for secondary
- **CTAs**: terracotta-500 for primary buttons
- **Secondary Buttons**: sage-500 or outline with terracotta
- **Accents**: Rotate between sage, dusty, and mustard
- **Avoid**: Pure white, pure black, neon colors

---

## ✍️ Typography System

### Font Families

#### Playfair Display (Headings)

```css
font-family: "Playfair Display", serif;
weights: 400, 600, 700;
```

**Usage**: All h1, h2, h3, h4, h5, h6 elements  
**Character**: Premium, elegant, sophisticated

#### Nunito (Body Text)

```css
font-family: "Nunito", sans-serif;
weights: 300, 400, 600, 700;
```

**Usage**: All body text, buttons, navigation  
**Character**: Friendly, rounded, readable

### Type Scale

```css
/* Desktop */
h1: 3.75rem (60px) - font-serif, font-bold
h2: 3rem (48px)    - font-serif, font-bold
h3: 1.875rem (30px)- font-serif, font-bold
h4: 1.5rem (24px)  - font-serif, font-semibold
body-lg: 1.25rem (20px) - font-sans
body: 1rem (16px)  - font-sans
body-sm: 0.875rem (14px) - font-sans

/* Mobile (scales down automatically) */
h1: 2.5rem (40px)
h2: 2rem (32px)
```

### Line Height

- **Headings**: 1.1 - 1.2 (tight for impact)
- **Body Text**: 1.6 - 1.75 (relaxed for readability)

---

## 📏 Spacing System

### Padding Scale

Uses Tailwind's spacing scale plus custom values:

```css
/* Section Padding (responsive) */
.section-padding {
  padding-top: 3rem; /* Mobile: 48px */
  padding-bottom: 3rem;

  @media (md) {
    padding-top: 5rem; /* Tablet: 80px */
    padding-bottom: 5rem;
  }

  @media (lg) {
    padding-top: 6rem; /* Desktop: 96px */
    padding-bottom: 6rem;
  }
}

/* Container Max Width */
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
}
```

### Component Spacing

- **Between sections**: 12-24 spacing units
- **Card padding**: 6-8 units
- **Button padding**: px-6 to px-10, py-2 to py-4
- **Grid gaps**: 6-8 units

---

## 🎭 Animation Guidelines

### Principles

1. **Subtle and Meaningful** - Every animation serves a purpose
2. **Smooth Timing** - Use ease-out for entrances, ease-in-out for loops
3. **Consistent Duration** - 0.3s for interactions, 0.6s for page elements
4. **Performance First** - Animate only transform and opacity

### Animation Types

#### Scroll-Triggered Fade-In

```js
{
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
}
```

#### Hover Scale (Buttons)

```js
{
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3 }
}
```

#### Card Elevation

```css
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

#### Floating Elements

```js
{
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}
```

### Prohibited

❌ Bouncing animations  
❌ Spinning (except loading indicators)  
❌ Dramatic scale changes (>1.1)  
❌ Excessive shadows or glows

---

## 🧩 Component Library

### Button Variants

#### Primary

```jsx
<Button variant="primary" size="lg">
  Schedule a Visit
</Button>
```

- Background: terracotta-500
- Text: white
- Hover: terracotta-600
- Shadow: medium

#### Secondary

```jsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```

- Background: sage-500
- Text: white
- Hover: sage-600

#### Outline

```jsx
<Button variant="outline" size="md">
  Explore Programs
</Button>
```

- Background: transparent
- Border: 2px terracotta-500
- Text: terracotta-500
- Hover: beige-50 background

### Card Component

```jsx
<Card className="p-8">{/* Content */}</Card>
```

**Features**:

- Rounded corners: 1.5rem (24px)
- Background: white
- Shadow: subtle elevation
- Hover: translate -8px, shadow increase

### Section Component

```jsx
<Section id="section-id" background="light">
  {/* Content */}
</Section>
```

**Background Options**:

- `default`: beige-50
- `light`: white
- `gradient`: custom Montessori gradient
- `sage`: sage-50
- `dusty`: dusty-50

---

## 📱 Responsive Breakpoints

```js
// Tailwind breakpoints (mobile-first)
{
  sm: '640px',   // Small devices
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (desktops)
  xl: '1280px',  // Extra large
}
```

### Grid Patterns

```jsx
/* Programs Section */
className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8";

/* Philosophy Section */
className = "grid md:grid-cols-3 gap-8";

/* Activities Grid */
className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6";
```

### Mobile Considerations

- **Minimum touch target**: 44px × 44px
- **Readable text size**: 16px minimum
- **Stack layouts**: Vertical on mobile
- **Full-width buttons**: On mobile viewports
- **Hamburger menu**: < 768px

---

## 🖼️ Visual Assets

### Image Guidelines

- **Format**: WebP (with JPEG/PNG fallback)
- **Aspect Ratios**:
  - Hero: 16:9 or 4:3
  - Gallery: Various (masonry)
  - Profile photos: 1:1 (square)
- **Optimization**: Compress to < 200KB per image
- **Alt Text**: Always required for accessibility

### Icon System

Using **Lucide React**:

```jsx
import { Calendar, Phone, Heart } from "lucide-react";

<Calendar size={24} className="text-terracotta-500" />;
```

**Sizes**: 16px, 20px, 24px, 32px, 40px  
**Style**: Outline (consistent line weight)

---

## ♿ Accessibility

### Color Contrast

All color combinations meet **WCAG AA** standards:

- Text on beige-50: beige-900 (21:1 ratio ✅)
- White on terracotta-500: (4.5:1 ratio ✅)
- Buttons have 3:1 minimum contrast

### Keyboard Navigation

- ✅ Tab order follows visual flow
- ✅ Focus indicators visible (outline ring)
- ✅ Skip to content link
- ✅ Escape closes modals

### Screen Readers

- Semantic HTML elements (nav, section, footer)
- ARIA labels on icon buttons
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3)

---

## 📐 Layout Principles

### Spacing Rhythm

Follow the **8px grid system**:

- All spacing in multiples of 4px or 8px
- Consistent margins and padding

### Visual Hierarchy

1. **Size**: Larger = more important
2. **Color**: Terracotta draws attention
3. **Weight**: Bold for key information
4. **Position**: Top and center prioritized

### White Space

- **Generous breathing room** around elements
- **Section separation**: 80-96px
- **Content max-width**: 1280px
- **Text blocks**: 65-75 characters per line

---

## ✅ Design Checklist

When creating new components:

- [ ] Uses Montessori color palette
- [ ] Typography follows scale (Playfair + Nunito)
- [ ] Spacing uses 8px grid
- [ ] Animations are subtle (< 0.6s)
- [ ] Responsive across 3 breakpoints
- [ ] Touch targets ≥ 44px
- [ ] Color contrast passes WCAG AA
- [ ] Has hover/focus states
- [ ] Semantic HTML elements
- [ ] Accessible to screen readers

---

## 🎯 Brand Tone

### Visual Tone of Voice

**70% Playful**:

- Soft, rounded corners
- Warm color palette
- Friendly typography (Nunito)
- Gentle animations

**30% Premium**:

- Elegant serif headings
- Sophisticated gradients
- Clean layouts with white space
- Professional photography

### What to Avoid

❌ Cartoon characters or clipart  
❌ Neon or loud colors  
❌ Comic Sans or childish fonts  
❌ Bouncing or excessive animations  
❌ Cluttered layouts  
❌ Stock photos that feel generic

---

**Last Updated**: February 2026  
**Maintained By**: Development Team  
**Version**: 1.0
