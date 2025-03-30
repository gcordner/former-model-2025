# Former Model WordPress Theme

A clean, modern block theme built from scratch using WordPress Full Site Editing (FSE) and a lightweight Webpack-based build process. This theme includes SCSS partials, modular JavaScript, and design tokens (like widths) automatically synced from `theme.json`.

## Features

- Fully FSE-compliant block theme (not a child theme)
- SCSS with modular partials
- JavaScript bundled and minimized
- CSS variables and SCSS variables synced to `theme.json`
- Webpack 5 for bundling and optimization
- No frontend frameworks, minimal dependencies
- PHPCS WordPress Standard–compliant

---

## Getting Started

### 1. Installation

Clone or download the theme into your `wp-content/themes` directory:

```bash
git clone https://github.com/YOUR_USERNAME/former-model.git
```
Or download and unzip it manually into your themes folder.

### 2. Install Dependencies

In the theme root:

```bash
npm install
```
### 3. Build Assets

There are three available scripts:

**Build for development (non-minified):**

```bash
npm run build
```

This will:

- Regenerate `_theme-values.scss` using values from `theme.json`
- Compile your SCSS and JS
- Output non-minified files

**Watch mode:**

```bash
npm run watch
```

This will:

- Rebuild assets when any .scss, .js, or theme.json file changes

Tip: Press Ctrl + C to exit watch mode.

**Production build (minified):**

```bash
npm run dist
```

This will:

- Regenerate _theme-values.scss
- Minify and optimize CSS and JS
- Output hashed filenames for long-term caching

## Folder Structure

```pgsql
former-model/
│
├── css/
│   ├── src/
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _theme-values.scss ← auto-generated from theme.json
│   │   ├── layout/
│   │   │   └── _header.scss
│   │   ├── components/
│   │   │   └── _buttons.scss
│   │   └── main.scss
│   └── build/
│       └── theme.min.[hash].css ← output
│
├── js/
│   ├── shrink-header.js
│   └── build/
│       └── main.min.[hash].js ← output
│
├── templates/
│   └── index.html
├── parts/
│   ├── header.html
│   └── footer.html
├── functions.php
├── theme.json
├── package.json
└── webpack.config.js
```

## Variables from `theme.json`

The following SCSS variables are auto-generated based on your `theme.json` layout:

```scss
// css/src/base/_theme-values.scss
$content-width: 700px;
$wide-width: 1200px;
```

These are regenerated on every build. You can use them throughout your SCSS for layout consistency.

## Requirements

- Node.js >= 16
- WordPress >= 6.1 (FSE support)
- PHP >= 7.4
- A modern browser (for dev tools)

## Code Style
This theme is **100% WordPress Coding Standards–compliant (PHP)**:

```bash
phpcs --standard=WordPress
```

## License
This theme is licensed under the [GNU General Public License v2.0 or later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

## Credits
Built by Geoff Cordner.

More at [Former-model.com](https://former-model.com)

