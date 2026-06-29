# Phoenix Glow

A multi-color neon CSS kit: animated glow effects, gradient text, buttons, a sticky navbar, cards, forms, and standalone neon primitives. Pure CSS, no build step, no dependencies.

© Skyler J. Jones · MIT licensed

---

## Install

```bash
npm install phoenix-glow
```

## Use it

Import the stylesheet once at the entry point of your app.

**Bundlers (Vite, webpack, etc.):**

```js
import "phoenix-glow";
// or be explicit:
import "phoenix-glow/css";
```

**Plain HTML** (point at the file in `node_modules`, or copy it into your assets):

```html
<link rel="stylesheet" href="node_modules/phoenix-glow/phoenix-glow.css" />
```

Then add the classes to your markup:

```html
<button class="phoenix-btn phoenix-btn-phoenix">Launch</button>
<div class="phoenix-card phoenix-glow-purple">
  <div class="phoenix-card-inner">Glowing panel</div>
</div>
```

---

## Two namespaces

The kit ships two independent systems that use different palettes. Mix or use either alone.

| Prefix       | Base background | Best for                                            |
| ------------ | --------------- | --------------------------------------------------- |
| `.phoenix-*` | `#0a0a0a`       | Full layout + component system (pages, navbar, hero)|
| `.phx-*`     | `#080E1F`       | Drop-in neon button / card primitives               |

All colors live in CSS custom properties on `:root`, so you can retheme by overriding them:

```css
:root {
  --phoenix-pink: 320 100% 70%;  /* HSL channels, used as hsl(var(--x) / alpha) */
  --phx-cyan: #2ad8ff;           /* plain hex */
}
```

---

## Glow effects

Six animated neon pulses. Add a glow class to any element with a border-radius and background:

```html
<div class="phoenix-card phoenix-glow-cyan">…</div>
```

`phoenix-glow-orange` · `phoenix-glow-pink` · `phoenix-glow-purple` · `phoenix-glow-blue` · `phoenix-glow-cyan` · `phoenix-glow-green`

**Text effects:**

- `phoenix-gradient-text` — six-color gradient clipped to the text
- `phoenix-title-glow` — static neon text-shadow
- `phoenix-title-glow-animated` — add alongside `phoenix-title-glow` for a pulsing title

```html
<h1 class="phoenix-title-xl phoenix-gradient-text">Phoenix</h1>
```

All animations are disabled automatically under `prefers-reduced-motion: reduce`.

---

## Class reference

**Layout** — `phoenix-page`, `phoenix-container`, `phoenix-section`, `phoenix-section-tight`, `phoenix-center`, `phoenix-grid-2`, `phoenix-grid-3`

**Typography** — `phoenix-kicker`, `phoenix-title-xl`, `phoenix-title-lg`, `phoenix-title-md`, `phoenix-copy-lg`, `phoenix-copy`, `phoenix-copy-sm`

**Buttons** — `phoenix-btn` (base) with a color: `phoenix-btn-phoenix`, `phoenix-btn-purple`, `phoenix-btn-blue`, `phoenix-btn-green`, `phoenix-btn-outline`

**Navbar** — `phoenix-navbar`, `phoenix-navbar-container`, `phoenix-navbar-row`, `phoenix-navbar-brand`, `phoenix-navbar-logo`, `phoenix-navbar-brand-text`, `phoenix-navbar-desktop`, `phoenix-navbar-link`, `phoenix-navbar-toggle`, `phoenix-navbar-mobile`, `phoenix-navbar-link-mobile`

**Surfaces** — `phoenix-card`, `phoenix-card-inner`, `phoenix-panel`, `phoenix-soft-box`

**Hero / preview** — `phoenix-hero`, `phoenix-hero-actions`, `phoenix-preview-window`, `phoenix-preview-dots`, `phoenix-dot` (+ `phoenix-dot-red` / `-yellow` / `-green`)

**Forms** — `phoenix-input`, `phoenix-select`, `phoenix-label`, `phoenix-help`, `phoenix-help-error`, `phoenix-help-success`

**Doc helpers** — `phoenix-doc-toolbar`, `phoenix-doc-section`, `phoenix-doc-header`, `phoenix-copy-btn`

**phx primitives** — `phx-btn` (+ `phx-btn--cyan`, `phx-btn--purple`), `phx-card`

---

## Example layout

```html
<div class="phoenix-page">
  <nav class="phoenix-navbar">
    <div class="phoenix-navbar-container">
      <div class="phoenix-navbar-row">
        <div class="phoenix-navbar-brand">
          <div class="phoenix-navbar-logo"></div>
          <span class="phoenix-navbar-brand-text">Phoenix</span>
        </div>
        <div class="phoenix-navbar-desktop">
          <a class="phoenix-navbar-link" href="#">Docs</a>
          <a class="phoenix-navbar-link" href="#">Pricing</a>
        </div>
      </div>
    </div>
  </nav>

  <section class="phoenix-hero phoenix-center">
    <div class="phoenix-container">
      <span class="phoenix-kicker">New</span>
      <h1 class="phoenix-title-xl phoenix-gradient-text">Phoenix Glow</h1>
      <p class="phoenix-copy-lg">A neon UI kit that actually glows.</p>
      <div class="phoenix-hero-actions">
        <button class="phoenix-btn phoenix-btn-phoenix">Get started</button>
        <button class="phoenix-btn phoenix-btn-outline">View on GitHub</button>
      </div>
    </div>
  </section>
</div>
```

---

## License

MIT © Skyler J. Jones. See [LICENSE](./LICENSE).
