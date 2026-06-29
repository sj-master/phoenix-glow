# 🐦‍🔥 Phoenix Glow

A multi-color neon UI kit: pure-CSS glow effects, gradient text, layout, and forms — **plus 16 matching React components**. Use the CSS on its own, or use the components (which use the same CSS). No Tailwind, no Radix, no external UI dependencies — just React.

© Skyler J. Jones ([sj-master](https://github.com/sj-master)) · MIT licensed

#  View Demo Live

https://phoenix-glow.netlify.app/

---

## Install

```bash
npm install phoenix-glow
```

React is optional — only needed if you use the components.

---

## Pure CSS

```js
import "phoenix-glow/css";
```

```html
<button class="phoenix-btn phoenix-btn-phoenix">Launch</button>
<div class="phoenix-card phoenix-glow-purple"><div class="phoenix-card-inner">Glowing panel</div></div>
```

## React components

```jsx
import { Button, Card, Modal, Tabs, Switch, Alert } from "phoenix-glow";
import "phoenix-glow/css";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <Card title="Phoenix" description="A neon UI kit that glows." glow="purple">
      <Switch label="Neon mode" defaultChecked color="cyan" />
      <Button variant="phoenix" onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Hello">
        <Alert variant="success" title="Nice">It works.</Alert>
      </Modal>
    </Card>
  );
}
```

---

## Components (16)

| Component | Purpose | Key props |
|-----------|---------|-----------|
| `Button` | Solid neon button | `variant`, `isLoading` |
| `GlowButton` | Pulsing animated button | `variant` |
| `Badge` | Status pill | `variant`, `size` |
| `Avatar` | Image or initials avatar | `src`, `initials`, `size`, `gradient` |
| `Card` | Content surface w/ optional glow | `title`, `description`, `image`, `glow`, `action` |
| `GridSection` | Responsive feature grid | `items`, `columns` |
| `Alert` | Inline callout banner | `variant`, `title` |
| `Spinner` | Neon loading ring | `size`, `color` |
| `Skeleton` | Shimmer loading placeholder | `width`, `height`, `radius` |
| `Progress` | Neon progress bar | `value`, `color`, `showLabel` |
| `Modal` | Dialog with backdrop + ESC close | `open`, `onClose`, `title`, `footer` |
| `Tooltip` | Hover tooltip (4 sides) | `content`, `side` |
| `Tabs` | Tab switcher | `items`, `defaultIndex`, `color` |
| `Accordion` | Collapsible sections | `items`, `allowMultiple` |
| `Input` | Text field w/ label + help | `label`, `help`, `status` |
| `Switch` | Neon toggle | `checked`, `onChange`, `color`, `label` |

All components accept native HTML attributes and respect `prefers-reduced-motion`.

Color options throughout: `phoenix` · `cyan` · `purple` · `green` (and glows add `orange` · `pink` · `blue`).

---

## CSS classes

Glows `phoenix-glow-{orange|pink|purple|blue|cyan|green}` · text `phoenix-gradient-text`, `phoenix-title-glow` · layout `phoenix-page/-container/-section/-grid-2/-3` · buttons `phoenix-btn` + `-phoenix/-purple/-blue/-green/-outline` · navbar `phoenix-navbar*` · forms `phoenix-input/-select/-label`. Retheme via the `:root` custom properties.

---

## License

MIT © Skyler J. Jones. See [LICENSE](./LICENSE).
