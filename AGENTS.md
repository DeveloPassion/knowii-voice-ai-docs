# Knowii Voice AI - Documentation Website

## Project Overview

This is the public documentation website for Knowii Voice AI, built with Docusaurus 3.9.2 and Tailwind CSS 4.

- **Repository**: https://github.com/DeveloPassion/knowii-voice-ai-docs
- **Website**: https://docs.voice-ai.knowii.net
- **Main Project**: https://github.com/DeveloPassion/knowii-voice-ai (private)
- **Marketing Site**: https://voice-ai.knowii.net

## Purpose

This documentation website serves as the public-facing documentation for Knowii Voice AI, including:

- User guide and tutorials
- Product roadmap
- FAQ and troubleshooting
- API documentation (future)

## Tech Stack

- **Framework**: Docusaurus 3.9.2
- **Styling**: Tailwind CSS 4 (configured via `src/css/custom.css`)
- **Components**: Shadcn/UI components
- **Search**: @easyops-cn/docusaurus-search-local
- **Deployment**: GitHub Pages via GitHub Actions

## Colors and Branding

The website uses Knowii Voice AI brand colors:

- **Primary**: `#ffffff` (white) - Used for main text and primary UI elements
- **Secondary**: `#e5007d` (pink/magenta) - Used for accents and interactive elements
- **Secondary Text**: `#ff1493` (deep pink) - Used for highlighted text
- **Background**: `#37404c` (dark blue-gray) - Used for dark mode background
- **Font**: Noto Sans

Colors are defined in `src/css/custom.css` using oklch color space for better consistency.

**Theme**: Dark theme is used by default (matching the main application). Users can toggle to light mode if desired.

## Development Workflow

### Local Development

```bash
npm start          # Start dev server at http://localhost:4000
npm run build      # Build for production
npm run serve      # Serve production build locally at http://localhost:4000
```

### Type Checking

This project uses a **strict TypeScript configuration**. Always ensure your code compiles without errors.

#### Quick Type Check

Use this to verify code compiles correctly without building:

```bash
npm run tsc
```

This runs `tsc --noEmit` which:

- Type checks all TypeScript files
- Reports compilation errors
- Does NOT generate output files
- Exits immediately with success/failure status

**When to use:**

- Before committing code
- To quickly verify changes compile
- **This is the recommended command for agents to verify compilation**

#### Continuous Type Checking (MANDATORY)

**CRITICAL**: This process MUST ALWAYS be running in the background during development:

```bash
npm run tsc:watch
```

This runs `tsc --noEmit --watch --preserveWatchOutput` which:

- Continuously watches for file changes
- Re-compiles automatically on save
- Shows compilation errors in real-time
- Preserves previous output for easier reading
- Does NOT generate output files

**MANDATORY REQUIREMENT:** Keep this running in a separate terminal at ALL times during development for instant feedback on type errors. Never make TypeScript changes without this running.

#### Before Committing

**ALWAYS** run before committing code:

```bash
npm run tsc
```

- Verifies all TypeScript code compiles without errors
- Does NOT generate output files (uses `--noEmit`)
- Must exit with zero errors before committing

### Code Quality

```bash
npm run lint       # Check formatting with Prettier
npm run format     # Format all files with Prettier
```

### Commits

This project uses:

- **Commitizen** for structured commits: `npm run commit`
- **Commitlint** to validate commit messages
- **Husky** for git hooks
- **Lint-staged** for pre-commit formatting

**Commit format**: `type(scope): description`

Available scopes: `all`, `a11y`, `code`, `deps`, `docs`, `i18n`, `qa`, `release`, `sec`, `ui`, `ux`, `build`, `deploy`, `api`, `guide`, `tutorial`, `roadmap`, `faq`, `config`, `search`, `nav`, `sidebar`, `footer`, `theme`

### Releases

None

## Project Structure

```
knowii-voice-ai-docs/
├── docs/                    # Documentation markdown files
│   ├── intro.md            # Introduction page
│   ├── user-guide/         # User guide section
│   ├── tutorials/          # Tutorials section
│   ├── roadmap/            # Product roadmap
│   └── faq/                # FAQ section
├── blog/                   # Blog posts (optional)
├── src/                    # Custom React components and pages
│   ├── components/         # Reusable components
│   ├── css/
│   │   └── custom.css     # Tailwind 4 configuration and custom styles
│   └── pages/             # Custom pages
├── static/                 # Static assets
│   ├── index.html         # Root redirect to /intro
│   └── img/               # Images (logos, icons, screenshots)
├── docusaurus.config.ts    # Docusaurus configuration (TypeScript)
├── sidebars.ts            # Sidebar navigation structure (TypeScript)
└── package.json           # Dependencies and scripts
```

## Configuration Files

### Docusaurus Configuration

`docusaurus.config.ts` contains:

- Site metadata (title, URL, favicon)
- Theme configuration
- Plugin configuration
- Navbar and footer configuration
- Dark mode default settings

**Important**: When updating branding, update:

- Site title and tagline
- Favicon in `static/img/`
- Logo in `static/img/`
- Social card image (`social-card.png`)
- Social links in navbar/footer
- Copyright notice

### Assets and Images

All logos, icons, and screenshots are **shared from the marketing website** (`../knowii-voice-ai-website/public/assets/`) to ensure brand consistency. These assets should not be modified independently - any branding changes should be made in the main website repository first, then copied here.

### Sidebar Configuration

`sidebars.ts` defines the documentation navigation structure. Update this when adding new documentation sections.

### Tailwind Configuration

Tailwind 4 configuration is in `src/css/custom.css` (not in a separate config file). Custom theme colors are defined using CSS custom properties with the `@theme` directive.

## Content Guidelines

### Writing Documentation

- **Audience**: End users who may not be technical
- **Language**: Clear, simple, benefit-focused
- **Avoid jargon**: Explain technical terms when necessary
- **Use examples**: Provide real-world examples and use cases
- **Screenshots**: Include screenshots where helpful
- **Keep updated**: Documentation should always reflect the current application state

### Markdown Features

Docusaurus supports:

- Standard Markdown
- MDX (JSX in Markdown)
- Code blocks with syntax highlighting
- Admonitions (notes, warnings, tips)
- Tabs
- Images
- Mermaid diagrams

### Syncing with Main Project

When features are added/updated in the main Knowii Voice AI project:

1. Check if `documentation/Features.md` in the main repo was updated
2. Update relevant documentation pages here
3. Add/update tutorials if needed
4. Update roadmap if milestones completed
5. Ensure screenshots are current

## Deployment

Deployment to GitHub Pages is automated via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions workflow builds the site
3. Built site is deployed to `gh-pages` branch
4. Site is live at https://docs.voice-ai.knowii.net

**Note**: The `gh-pages` branch should not be modified manually.

## TypeScript Configuration

This project uses **super strict TypeScript configuration**. All code MUST respect the strict settings defined in `tsconfig.json`:

- ✅ `"strict": true` - All strict type checking options enabled
- ✅ `"noUnusedLocals": true` - No unused variables allowed
- ✅ `"noUnusedParameters": true` - No unused function parameters allowed
- ✅ `"noImplicitReturns": true` - All code paths must return a value
- ✅ `"noFallthroughCasesInSwitch": true` - No fallthrough in switch statements
- ✅ `"noUncheckedIndexedAccess": true` - Array/object access returns `T | undefined`
- ✅ `"noImplicitOverride": true` - Must use `override` keyword when overriding
- ✅ `"allowUnreachableCode": false` - No unreachable/dead code
- ✅ `"allowJs": false` - TypeScript only, no JavaScript files

**Always:**

- Check for null/undefined before accessing properties (use `if (!value) return` or optional chaining `value?.property`)
- Verify array/object access returns non-undefined before use (with `noUncheckedIndexedAccess`, `array[0]` returns `T | undefined`)
- Specify explicit return types for all functions
- Remove unused variables or prefix with `_` if intentionally unused
- Use `override` keyword when overriding parent class methods
- Ensure all switch statement cases are handled (no missing returns)
- Use `const` by default, `let` only when reassignment is needed, never `var`

## Agent Guidelines

When working on this documentation website:

1. **Read this file** at the start of each session to understand the project
2. **Respect brand colors** defined in the Colors section
3. **Keep documentation in sync** with the main Knowii Voice AI project features
4. **Use Prettier** for all formatting (runs automatically on commit)
5. **Follow commit conventions** using commitizen
6. **Run type check** before committing: `npm run tsc`
7. **Test the build** before committing: `npm run build`
8. **Check the local site**: `npm start` to preview changes

### Common Tasks

**Add a new documentation page:**

1. Create `.md` file in appropriate `docs/` subdirectory
2. Add front matter with title and description
3. Update `sidebars.ts` to include the new page
4. Run `npm run tsc` to verify TypeScript compilation
5. Test locally with `npm start`

**Update branding:**

1. Update colors in `src/css/custom.css`
2. Update images in `static/img/`
3. Update `docusaurus.config.ts` metadata
4. Run `npm run tsc` to verify TypeScript compilation
5. Test in both light and dark modes

**Add a new feature to docs:**

1. Check `documentation/Features.md` in main repo for user-friendly description
2. Create/update documentation page
3. Add to appropriate sidebar category in `sidebars.ts`
4. Run `npm run tsc` to verify TypeScript compilation
5. Consider adding a tutorial
6. Update FAQ if needed

## Related Links

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)
- [Main Project Repository](https://github.com/DeveloPassion/knowii-voice-ai) (private)
- [Marketing Website](https://voice-ai.knowii.net)
