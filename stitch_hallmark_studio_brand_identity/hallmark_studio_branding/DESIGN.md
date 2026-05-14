---
name: Hallmark Studio Branding
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#99907e'
  outline-variant: '#4d4637'
  surface-tint: '#e6c364'
  primary: '#e6c364'
  on-primary: '#3d2e00'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#755b00'
  secondary: '#c6c7c3'
  on-secondary: '#2f312e'
  secondary-container: '#484947'
  on-secondary-container: '#b8b9b5'
  tertiary: '#b9c4ff'
  on-tertiary: '#1e2b66'
  tertiary-container: '#9ba8eb'
  on-tertiary-container: '#2e3b77'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#e3e3df'
  secondary-fixed-dim: '#c6c7c3'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#041451'
  on-tertiary-fixed-variant: '#35437e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 120%
    letterSpacing: -0.02em
  editorial-italic:
    fontFamily: Playfair Display
    fontSize: 1.2em
    fontWeight: '400'
    lineHeight: inherit
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
This design system embodies the "Elite Bespoke" ethos of a top-tier London creative agency. The aesthetic is rooted in **Minimalism** with an **Editorial** flair, prioritizing atmospheric depth over traditional interface patterns. It avoids the clutter of standard SaaS platforms in favor of a cinematic, high-contrast experience that feels both ambitious and grounded.

The visual narrative is driven by tension: the weight of massive typography against delicate 1px borders; the void of a near-black canvas against the warmth of gold accents. It evokes a sense of exclusivity and precision, designed to appeal to high-value clients who seek "high-craft" over "high-volume."

## Colors
The palette is intentionally restricted to maintain a premium, focused atmosphere. 

*   **Background (#111111):** A deep, ink-like black that provides the foundation for the "night-mode" editorial look.
*   **Text (#E8E8E4):** A warm, off-white cream that reduces eye strain compared to pure white and adds a sense of archival quality.
*   **Accent (#C9A84C):** A sophisticated gold used sparingly for highlights, borders, and interactive states.
*   **Surface:** Use #1A1A1A for container backgrounds to create subtle separation from the base canvas.

## Typography
The typography strategy relies on extreme contrast. **Inter** is utilized at its heaviest weights (Extra Bold and Black) for headlines to create a "Grotesk" high-impact feel. 

To inject the editorial "London agency" character, **Playfair Display** in italic is used as an accent font. This should be applied to specific words within headlines or as pull-quotes to break the rigidity of the sans-serif layout. 

Maintain generous line heights for body text to ensure readability against the dark background, and use wide-tracked uppercase labels for navigational elements to reinforce the architectural feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered with significant side margins to create a "gallery" feel. On mobile, it transitions to a fluid single-column layout.

Spacing is aggressive; "Section Gaps" are used to isolate thoughts and allow the high-impact typography to breathe. Vertical rhythm should be strictly adhered to using an 8px base unit. Gutters are wider than standard (32px) to prevent the dense typography from feeling cluttered. Alignment should be primarily left-aligned to mirror editorial print layouts.

## Elevation & Depth
This design system rejects traditional drop shadows. Depth is achieved through:

1.  **Tonal Layers:** Using slight variations of black (#111111 vs #1A1A1A) to distinguish between background and foreground containers.
2.  **Gold Outlines:** Delicate 1px borders in #C9A84C are used to define interactive areas or featured modules.
3.  **Atmospheric Glows:** Use soft, radial gradients of the primary gold color (at 5-10% opacity) behind key focal points or buttons to create a "backlit" effect.
4.  **Glassmorphism (Subtle):** For overlays or navigation bars, use a heavy backdrop blur (20px+) with a semi-transparent dark fill to maintain the moody atmosphere while providing structural depth.

## Shapes
The shape language is **Sharp (0px)**. To maintain a high-fashion, architectural aesthetic, every element from buttons to image containers utilizes hard 90-degree corners. This communicates precision, confidence, and a "bespoke" construction. Roundness is perceived as too "friendly" or "consumer-grade" for this particular agency brand; the sharpness ensures the UI feels like a structured editorial piece.

## Components

### Buttons
Primary buttons are rectangular with a 1px #C9A84C border and no fill. Text is `label-caps`. On hover, the button fills with #C9A84C and the text flips to #111111. A subtle gold glow should emanate from behind the button on hover.

### Cards
Cards are defined by 1px borders in a muted gold (#C9A84C at 30% opacity). They should have no shadow. Content inside uses the heavy Inter weight for titles and the Playfair Display italic for sub-captions.

### Input Fields
Inputs are simple bottom-borders (1px) in #E8E8E4. When focused, the border transitions to #C9A84C and a very faint gold glow appears beneath the text.

### Navigation
The navigation should be a minimalist bar at the top, using `label-caps` for links. Use a "reveal" animation for a full-screen menu where the background is #111111 and the links are `display-xl` typography.

### Chips/Tags
Small, sharp-edged boxes with 1px #E8E8E4 borders and `label-caps` text. These are used for project categories (e.g., "STRATEGY", "WEBGL").

### Interactive Lists
Lists used for service offerings or project archives should feature large headlines that change to the `editorial-italic` serif on hover, accompanied by a thumbnail image that follows the cursor.