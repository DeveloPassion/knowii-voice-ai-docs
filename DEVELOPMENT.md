# Development Guide

This document contains technical details for developers working on the Knowii Voice AI documentation website.

## Tech Stack

- **Framework**: [Docusaurus 3.9.2](https://docusaurus.io/)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Search**: @easyops-cn/docusaurus-search-local
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: npm
- **Node Version**: 20+

## Project Structure

```
knowii-voice-ai-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── .gitconfig                   # Config-based git hooks (Git 2.54+)
├── scripts/
│   └── git-hooks/
│       └── format-staged.sh    # Pre-commit Prettier hook
├── docs/                        # Documentation markdown files
│   ├── intro.md
│   ├── user-guide/
│   ├── tutorials/
│   ├── roadmap.md
│   └── faq.md
├── src/
│   ├── css/
│   │   └── custom.css          # Tailwind 4 config + custom styles
│   └── plugins/                # Custom Docusaurus plugins
│       ├── webpack-alias.ts
│       └── tailwind-config.ts
├── static/                      # Static assets
│   ├── index.html              # Root redirect to /intro
│   └── img/
│       ├── logo.svg            # Knowii Voice AI logo
│       ├── icon.svg            # Knowii icon
│       ├── favicon.ico         # Browser favicon
│       ├── social-card.png     # Open Graph social card
│       └── screenshots/        # Product screenshots
├── docusaurus.config.ts         # Main Docusaurus configuration
├── sidebars.ts                  # Sidebar navigation structure
├── tsconfig.json                # TypeScript configuration
├── .editorconfig                # Editor configuration
├── commitlint.config.ts         # Commit message linting
├── .cz-config.ts                # Commitizen configuration
├── package.json
├── AGENTS.md                    # AI agent context
├── CLAUDE.md                    # Claude Code entry point
└── README.md                    # User-facing documentation
```

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/DeveloPassion/knowii-voice-ai-docs.git
cd knowii-voice-ai-docs

# Install dependencies
npm install

# Activate git hooks (Git 2.54+ config-based hooks)
npm run setup
```

### Development Server

```bash
# Start development server (hot reload)
npm start
```

Opens browser at `http://localhost:4000`. Most changes reflect immediately without restart.

### Type Checking

```bash
# Quick type check
npm run tsc

# Continuous type checking (run in separate terminal)
npm run tsc:watch
```

**Always run `npm run tsc` before committing to ensure TypeScript compilation passes.**

### Building

```bash
# Production build
npm run build

# Preview production build locally
npm run serve
```

The build generates static files in the `build/` directory.

## TypeScript Configuration

This project uses **super strict TypeScript** matching the main website:

```json
{
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "allowUnreachableCode": false,
    "allowJs": false
}
```

**Key points:**

- NO JavaScript files allowed (`.js` extension not permitted)
- All array/object access returns `T | undefined` - must check before use
- All function return types must be explicit
- No unused variables or parameters
- Strict null checks everywhere

## Code Quality & Formatting

### Prettier

```bash
# Check formatting
npm run lint

# Auto-format all files
npm run format
```

**Pre-commit hook** automatically formats staged files.

### EditorConfig

Settings in `.editorconfig`:

- Charset: UTF-8
- End of line: LF
- Insert final newline: true
- Indent style: tabs
- Indent size: 4
- Tab width: 4

## Commit Conventions

### Using Commitizen

```bash
# Interactive commit (recommended)
npm run commit
# or
npm run cm
```

### Commit Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks
- `build`: Build system changes
- `ci`: CI/CD changes

**Scopes:**
`all`, `a11y`, `code`, `deps`, `docs`, `i18n`, `qa`, `release`, `sec`, `ui`, `ux`, `build`, `deploy`, `api`, `guide`, `tutorial`, `roadmap`, `faq`, `config`, `search`, `nav`, `sidebar`, `footer`, `theme`

### Commitlint

Commit messages are validated automatically via git hook. Invalid commits are rejected.

```bash
# Manually validate last commit
npm run commit:lint
```

## Versioning & Releases

None

## Styling & Theming

### Tailwind CSS 4

Configuration is in `src/css/custom.css` (no separate `tailwind.config.js`).

#### Custom Theme Colors

```css
@theme inline {
    /* Light mode */
    --color-primary: oklch(1 0 0); /* white */
    --color-secondary: oklch(0.56 0.25 340); /* #e5007d pink */
    --color-accent: oklch(0.63 0.28 340); /* #ff1493 deep pink */
}

html[data-theme='dark'] {
    /* Dark mode */
    --background: oklch(0.3 0.02 245); /* #37404c */
    --primary: oklch(1 0 0); /* white */
    --secondary: oklch(0.56 0.25 340); /* #e5007d */
}
```

#### Docusaurus Variables

```css
:root {
    --ifm-color-primary: #e5007d; /* Knowii pink */
    --ifm-font-family-base: 'Noto Sans', ...;
}

html[data-theme='dark'] {
    --ifm-background-color: #37404c; /* Knowii dark bg */
}
```

### Adding Custom Styles

Add styles to `src/css/custom.css`:

```css
@layer components {
    .my-custom-class {
        @apply flex items-center gap-4;
    }
}
```

### Theme Configuration

The site uses **dark theme by default**, matching the Knowii Voice AI application:

```ts
colorMode: {
  defaultMode: 'dark',
  disableSwitch: false,
  respectPrefersColorScheme: false
}
```

Users can toggle to light mode using the theme switch in the navbar.

## Documentation Structure

### Adding a New Page

1. **Create markdown file** in `docs/` (e.g., `docs/user-guide/new-page.md`)
2. **Add frontmatter:**

    ```md
    ---
    sidebar_position: 2
    ---

    # Page Title
    ```

3. **Update `sidebars.ts`:**
    ```ts
    userGuideSidebar: [
        {
            type: 'category',
            label: 'User Guide',
            items: ['user-guide/installation', 'user-guide/new-page']
        }
    ]
    ```
4. **Test locally** with `npm start`

### Markdown Features

Docusaurus supports:

- Standard Markdown
- MDX (JSX in Markdown)
- Code blocks with syntax highlighting
- Admonitions (:::note, :::tip, :::warning, :::danger)
- Tabs
- Images
- Internal links

#### Example Admonition

```md
:::tip
This is a helpful tip!
:::
```

#### Example Code Block

````md
```typescript title="example.ts"
const greeting: string = 'Hello World'
```
````

## Sidebar Configuration

Sidebar structure defined in `sidebars.ts`:

```ts
const sidebars = {
    userGuideSidebar: [
        {
            type: 'category',
            label: 'User Guide',
            items: ['user-guide/installation', 'user-guide/basic-usage']
        }
    ],
    tutorialsSidebar: [
        {
            type: 'category',
            label: 'Tutorials',
            items: ['tutorials/getting-started']
        }
    ]
}
```

## Navbar Configuration

Navbar items in `docusaurus.config.ts`:

```ts
navbar: {
  title: 'Knowii Voice AI',
  logo: {
    alt: 'Knowii Voice AI Logo',
    src: 'img/logo.svg',
    href: '/docs/intro'
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'userGuideSidebar',
      position: 'left',
      label: 'User Guide'
    },
    // ... more items
  ]
}
```

## Deployment

### GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`:

1. **Trigger**: Push to `main` branch
2. **Build**: `npm run build`
3. **Deploy**: Upload to `gh-pages` branch
4. **Live**: https://docs.voice-ai.knowii.net

### Manual Deployment

```bash
# Build
npm run build

# Deploy using Docusaurus CLI (requires GitHub token)
GIT_USER=<your-username> npm run deploy
```

### Deployment Configuration

In `docusaurus.config.ts`:

```ts
url: 'https://docs.voice-ai.knowii.net',
baseUrl: '/',
organizationName: 'DeveloPassion',
projectName: 'knowii-voice-ai-docs',
docs: {
  routeBasePath: '/', // Docs served at root path (not /docs/)
}
```

**Note**: Documentation pages are served at the root path (e.g., `/intro`, `/user-guide/installation`) rather than under `/docs/`. This provides cleaner URLs for the documentation site.

**Root Redirect**: The `static/index.html` file provides a redirect from `/` to `/intro`, ensuring users landing on the root URL are automatically redirected to the introduction page.

## Custom Plugins

### Webpack Alias Plugin

`src/plugins/webpack-alias.ts` - Provides path aliases for imports:

```ts
'@': src/
'@css': src/css/
'@lib': src/lib/
```

Usage:

```ts
import styles from '@css/custom.css'
```

### Tailwind Config Plugin

`src/plugins/tailwind-config.ts` - Integrates Tailwind CSS 4 with Docusaurus PostCSS pipeline.

## Search

Local search powered by `@easyops-cn/docusaurus-search-local`:

- Indexes all pages automatically
- Keyboard shortcut: `Ctrl+K` or `Cmd+K`
- Configured in `docusaurus.config.ts`:
    ```ts
    searchResultLimits: 8,
    searchBarShortcut: true,
    searchBarShortcutHint: true
    ```

## Troubleshooting

### Build Fails with Broken Links

Docusaurus checks all internal links. Fix broken links or adjust:

```ts
onBrokenLinks: 'throw', // or 'warn', 'ignore'
```

### TypeScript Errors

```bash
# Check types without building
npx tsc --noEmit
```

### Git Hooks Not Running

Hooks are defined in `.gitconfig` at the repo root (Git 2.54+ config-based hooks) and must be activated once per clone:

```bash
npm run setup
```

### Formatting Issues

```bash
# Format all files
npm run format

# Check what would be formatted
npm run lint
```

## Assets and Images

### Image Organization

Images and assets are stored in `static/img/`:

```
static/img/
├── logo.svg              # Main Knowii Voice AI logo
├── icon.svg              # Knowii icon (simplified)
├── favicon.ico           # Browser favicon
├── social-card.png       # Open Graph social media card
├── name-transparent.svg  # Knowii text logo (transparent)
├── thumbnail.svg         # Thumbnail image
└── screenshots/          # Product screenshots
    ├── 2025-11-03-history.png
    ├── 2025-11-03-model-download.png
    ├── 2025-11-03-model-selection.png
    ├── 2025-11-03-onboarding.png
    └── 2025-11-03-settings-general.png
```

### Asset Source

All logos, icons, and screenshots are sourced from the main marketing website (`../knowii-voice-ai-website/public/assets/`) to ensure brand consistency across all web properties.

### Using Images in Documentation

Reference images in markdown with relative paths:

```md
![Settings Screenshot](/img/screenshots/2025-11-03-settings-general.png)
```

Or use the Docusaurus `<Image>` component for optimized images with the `ideal-image` plugin.

## Performance

- **Static generation**: All pages pre-rendered at build time
- **Code splitting**: Automatic per-route code splitting
- **Image optimization**: Use `ideal-image` plugin for images
- **CSS purging**: Unused Tailwind classes removed in production

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)
