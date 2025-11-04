// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
    // User Guide sidebar
    userGuideSidebar: [
        {
            type: 'category',
            label: 'User Guide',
            items: [
                'user-guide/installation',
                'user-guide/basic-usage',
                'user-guide/advanced-settings',
                'user-guide/debug-settings',
                'user-guide/application-data'
            ]
        }
    ],

    // Tutorials sidebar
    tutorialsSidebar: [
        {
            type: 'category',
            label: 'Tutorials',
            items: ['tutorials/getting-started']
        }
    ]
}

export default sidebars
