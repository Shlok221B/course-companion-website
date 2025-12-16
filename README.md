# Course Companion Website

A modern, professional website for Course Companion - AI for teaching that lives in your LMS.

## Features

- **Modern Design**: Built with Next.js 14+ and Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Animated**: Smooth scroll animations and fade-in effects
- **Professional**: Clean, trust-focused design following the aesthetic guidelines
- **Fast**: Optimized for performance with Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
course-companion-website/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and design system
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── HeroSection.tsx     # Hero section with mockup
│   ├── WhoItsFor.tsx       # Target audience section
│   ├── HowItWorks.tsx      # 3-step process
│   ├── ProductHighlights.tsx # Key features
│   ├── TrustTeaser.tsx     # Trust & security section
│   ├── PricingPreview.tsx  # Pricing tiers
│   ├── UseCases.tsx        # Testimonials
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── BadgePill.tsx
│       ├── TrustTag.tsx
│       ├── Divider.tsx
│       ├── FadeIn.tsx
│       └── AnimatedMeter.tsx
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Design System

### Colors

- **Primary**: Dark blue (#1a1f3a) for text and main elements
- **Accent Teal**: (#00d4aa) for "safe/approved" states and primary CTAs
- **Accent Blue**: (#3b82f6) for links and citations
- **Panel Dark**: (#0a0e1a) for dark sections
- **Neutral**: (#f8f9fa) for backgrounds and borders

### Typography

- **Font**: Inter (via Google Fonts)
- **Headlines**: Bold, 650-750 weight
- **Body**: 16-18px, line-height 1.6+
- **Mono**: For status tags and technical labels

### Components

- **Buttons**: Primary (teal) and Secondary (outlined)
- **Cards**: Rounded corners (16-24px), hover effects
- **Badge Pills**: Rounded, low-contrast with borders
- **Trust Tags**: Rectangular, monospace, documentation-style
- **Dividers**: Hairline separators for structure

## Sections

1. **Hero Section**: Main headline, CTAs, and simplified chat mockup
2. **Who It's For**: Three-column layout for different audiences
3. **How It Works**: 3-step process with visual indicators
4. **Product Highlights**: Key features in card layout
5. **Trust & Security**: Dark section highlighting security features
6. **Pricing Preview**: Three pricing tiers
7. **Use Cases**: Testimonials from different user types
8. **Final CTA**: Call-to-action with footer

## Customization

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Use existing UI components from `components/ui/`

### Modifying Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  accent: {
    teal: "#00d4aa",  // Change this
    blue: "#3b82f6",  // Or this
  },
}
```

### Updating Content

Each section component contains its own content. Simply edit the component file to update text, features, or pricing.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## License

All rights reserved.

