// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Knowii Voice AI Documentation',
    tagline: 'Privacy-first voice-to-text transcription that runs locally on your computer',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.voice-ai.knowii.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'DeveloPassion', // Usually your GitHub org/user name.
    projectName: 'knowii-voice-ai-docs', // Usually your repo name.

    // Custom head tags for analytics and third-party scripts
    headTags: [
        {
            tagName: 'script',
            attributes: {
                'defer': 'defer',
                'data-domain': 'voice-ai.knowii.net',
                'data-api':
                    'https://blue-bar-dsebastien-19fd.developassion.workers.dev/api/v1/event',
                'src': 'https://blue-bar-dsebastien-19fd.developassion.workers.dev/content/script.js'
            }
        },
        {
            tagName: 'script',
            attributes: {
                defer: 'defer',
                src: 'https://gumroad.com/js/gumroad.js'
            }
        }
    ],

    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn'
        }
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
    // Note: experimental_faster can cause hot reload issues, disabled for now
    future: {
        experimental_faster: false,
        v4: true
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    routeBasePath: '/', // Serve docs at root path
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/DeveloPassion/knowii-voice-ai-docs/tree/main'
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css'
                }
            }
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            // Replace with your project's social card
            image: 'img/social-card.png',
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false
            },
            navbar: {
                title: 'Home',
                logo: {
                    alt: 'Knowii Voice AI Logo',
                    src: 'img/logo.svg',
                    href: '/'
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'userGuideSidebar',
                        position: 'left',
                        label: 'User Guide'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialsSidebar',
                        position: 'left',
                        label: 'Tutorials'
                    },
                    {
                        to: '/roadmap',
                        label: 'Roadmap',
                        position: 'left'
                    },
                    {
                        to: '/release-notes',
                        label: 'Release Notes',
                        position: 'left'
                    },
                    {
                        to: '/faq',
                        label: 'FAQ',
                        position: 'left'
                    },
                    {
                        href: 'https://voice-ai.knowii.net',
                        position: 'right',
                        label: 'Website'
                    },
                    {
                        'href': 'https://github.com/DeveloPassion/knowii-voice-ai-docs',
                        'position': 'right',
                        'className': 'header-github-link',
                        'aria-label': 'GitHub repository'
                    }
                ]
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true
                }
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/'
                            },
                            {
                                label: 'User Guide',
                                to: '/user-guide/installation'
                            },
                            {
                                label: 'Tutorials',
                                to: '/tutorials/getting-started'
                            },
                            {
                                label: 'Release Notes',
                                to: '/release-notes'
                            },
                            {
                                label: 'FAQ',
                                to: '/faq'
                            }
                        ]
                    },
                    {
                        title: 'Product',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://voice-ai.knowii.net'
                            },
                            {
                                label: 'Roadmap',
                                to: '/roadmap'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/DeveloPassion/knowii-voice-ai-docs'
                            },
                            {
                                label: 'Privacy Policy',
                                href: 'https://voice-ai.knowii.net/#/privacy-policy'
                            },
                            {
                                label: 'Terms of Use',
                                href: 'https://voice-ai.knowii.net/#/terms-of-use'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} DeveloPassion. Built with Docusaurus.`
            },
            prism: {
                additionalLanguages: [
                    'ruby',
                    'csharp',
                    'php',
                    'java',
                    'powershell',
                    'json',
                    'bash',
                    'dart',
                    'objectivec',
                    'r'
                ]
            },
            languageTabs: [
                {
                    highlight: 'python',
                    language: 'python',
                    logoClass: 'python'
                },
                {
                    highlight: 'bash',
                    language: 'curl',
                    logoClass: 'curl'
                },
                {
                    highlight: 'csharp',
                    language: 'csharp',
                    logoClass: 'csharp'
                },
                {
                    highlight: 'go',
                    language: 'go',
                    logoClass: 'go'
                },
                {
                    highlight: 'javascript',
                    language: 'nodejs',
                    logoClass: 'nodejs'
                },
                {
                    highlight: 'ruby',
                    language: 'ruby',
                    logoClass: 'ruby'
                },
                {
                    highlight: 'php',
                    language: 'php',
                    logoClass: 'php'
                },
                {
                    highlight: 'java',
                    language: 'java',
                    logoClass: 'java',
                    variant: 'unirest'
                },
                {
                    highlight: 'powershell',
                    language: 'powershell',
                    logoClass: 'powershell'
                },
                {
                    highlight: 'dart',
                    language: 'dart',
                    logoClass: 'dart'
                },
                {
                    highlight: 'javascript',
                    language: 'javascript',
                    logoClass: 'javascript'
                },
                {
                    highlight: 'c',
                    language: 'c',
                    logoClass: 'c'
                },
                {
                    highlight: 'objective-c',
                    language: 'objective-c',
                    logoClass: 'objective-c'
                },
                {
                    highlight: 'ocaml',
                    language: 'ocaml',
                    logoClass: 'ocaml'
                },
                {
                    highlight: 'r',
                    language: 'r',
                    logoClass: 'r'
                },
                {
                    highlight: 'swift',
                    language: 'swift',
                    logoClass: 'swift'
                },
                {
                    highlight: 'kotlin',
                    language: 'kotlin',
                    logoClass: 'kotlin'
                },
                {
                    highlight: 'rust',
                    language: 'rust',
                    logoClass: 'rust'
                }
            ]
        },

    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                indexPages: true,
                docsRouteBasePath: '/',
                hashed: true,
                language: ['en'],
                highlightSearchTermsOnTargetPage: false,
                searchResultContextMaxLength: 50,
                searchResultLimits: 8,
                searchBarShortcut: true,
                searchBarShortcutHint: true
            }
        ]
    ],
    plugins: [
        ['./src/plugins/webpack-alias.ts', {}],
        ['./src/plugins/tailwind-config.ts', {}],
        [
            'ideal-image',
            /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
            {
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                // Use false to debug, but it incurs huge perf costs
                disableInDev: true
            }
        ]
    ]
}

export default config
