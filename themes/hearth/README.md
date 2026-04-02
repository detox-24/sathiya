# Hearth

A warm, earthy Hugo theme for writers, poets, and thinkers. Minimal but never cold. Literary but never precious.

**Typography:** Cormorant Garamond (display) + EB Garamond (body)  
**Palette:** Parchment, terracotta, espresso, sage  
**Hugo minimum version:** 0.110.0

---

## Getting started

### 1. Install the theme

Place the `hearth` folder inside your project's `themes/` directory:

```
your-site/
└── themes/
    └── hearth/   ← here
```

Or add it as a git submodule:

```bash
git submodule add https://github.com/you/hearth themes/hearth
```

### 2. Configure your site

Copy `exampleSite/hugo.toml` **and** the sample content to your project root:

```bash
cp themes/hearth/exampleSite/hugo.toml ./hugo.toml
mkdir -p content
cp -r themes/hearth/exampleSite/content/* content/
```

Then fill in your details in `hugo.toml`:

```toml
baseURL      = "https://yoursite.com"
title        = "Your Name"
theme        = "hearth"

[params]
  tagline    = "writer, poet, thinker"
  description = "A brief description for SEO."
```

### 3. Create content

```bash
# Essay
hugo new writing/the-weight-of-things.md

# Poem
hugo new poetry/evening-light.md

# Journal entry
hugo new journal/a-tuesday-in-april.md

# Portfolio piece
hugo new work/my-project.md
```

---

## Content types

### Writing (essays)
Full drop cap on first paragraph. Front matter:
```yaml
---
title: "The Weight of Things"
date: 2025-04-01
subtitle: "An optional secondary line"
draft: false
---
```

### Poetry
Centered layout, generous line-height, italic serif. Use `\` at the end of lines for hard line breaks within a stanza. A blank line between stanzas creates natural spacing.

```yaml
---
title: "Evening Light"
date: 2025-04-01
draft: false
---
```

### Journal
Drop cap like essays. Supports `location` in front matter.
```yaml
---
title: "A Tuesday in April"
date: 2025-04-01
location: "the kitchen"
draft: false
---
```

### Work (portfolio)
Supports `category`, `subtitle`, and `link` (renders a "Visit project →" button).
```yaml
---
title: "Project Name"
date: 2025-01-01
category: "Photography"
subtitle: "A brief description"
link: "https://yourproject.com"
draft: false
---
```

---

## Section descriptions

Add a `_index.md` to any section folder with a `description` param — it appears on the homepage section cards and the list page:

```yaml
---
title: "Writing"
description: "Essays on living, thinking, and making sense of things."
---
```

---

## Customising the palette

All colours are CSS custom properties in `static/css/main.css`. Change the `:root` block to make the theme your own:

```css
:root {
  --bg:     #F8F2E4;   /* page background */
  --accent: #B85830;   /* terracotta — links, drop caps, rule lines */
  --sage:   #6B7A5A;   /* used for work categories */
  /* ... */
}
```

---

## License

MIT — use it, change it, make it yours.
