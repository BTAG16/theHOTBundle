# Design Guidelines for The HOT Bundle Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury e-commerce and premium gifting services like high-end boutiques and luxury brands, emphasizing elegance and sophistication.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Gold: 45 85% 60% (luxurious accent)
- Black: 0 0% 8% (sophisticated dark)
- White: 0 0% 98% (clean light)

**Dark Mode:**
- Background: 0 0% 8%
- Surface: 0 0% 12%
- Text: 0 0% 95%
- Gold accent remains: 45 85% 65%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text: 0 0% 10%
- Gold accent: 45 85% 55%

### B. Typography
- **Primary Font**: Poppins via Google Fonts
- **Hierarchy**: 
  - Hero headline: 48px/bold (mobile: 32px)
  - Section headers: 32px/semibold (mobile: 24px)
  - Body text: 16px/regular
  - Subtext: 14px/light

### C. Layout System
**Spacing Units**: Tailwind spacing of 4, 8, 16, and 24 (p-4, m-8, h-16, gap-24)
- Consistent vertical rhythm using these multiples
- Generous whitespace for luxury feel

### D. Component Library

**Header:**
- Centered logo with company name
- Minimal navigation (Home, About, Contact)
- Dark/light toggle in top-right
- Sticky/fixed positioning with backdrop blur

**Hero Section:**
- Large background image (Main.jpg) with dark overlay
- Centered content with "Luxury Gifting, Redefined" headline
- Subtext and gold CTA button with blur background
- Full viewport height on desktop

**About Section:**
- Clean two-column layout (desktop) / single column (mobile)
- Elegant typography with generous line spacing
- Subtle gold accent elements

**Contact Section:**
- Organized contact information in cards
- Location pins for Abuja & Benin
- Hover effects on contact elements

**Footer:**
- Minimal design with copyright and Instagram icon
- Consistent gold accent for social links

### E. Interactive Elements
- **Buttons**: Primary gold buttons with subtle shadows and smooth hover transitions
- **Navigation**: Smooth scroll behavior between sections
- **Theme Toggle**: Elegant icon-based toggle with smooth color transitions
- **Hover States**: Subtle scale transforms and color shifts
- **No complex animations**: Focus on smooth, elegant transitions

## Images
**Hero Image**: Large background image (Main.jpg) spanning full viewport width in hero section with dark overlay for text readability. Image should be optimized for different screen sizes.

**Color Reference**: Use the uploaded logo images as inspiration for maintaining the gold, black, and white luxury aesthetic throughout the design.

## Mobile Responsiveness
- Mobile-first approach with breakpoints at 768px and 1024px
- Stack layouts vertically on mobile
- Adjust typography scale for readability
- Touch-friendly button sizes (minimum 44px)
- Optimized hero image scaling