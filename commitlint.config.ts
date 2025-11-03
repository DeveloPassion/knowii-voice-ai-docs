import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [1, 'always', 100],
        'scope-enum': [
            2,
            'always',
            [
                'all',
                'a11y',
                'code',
                'deps',
                'docs',
                'i18n',
                'qa',
                'release',
                'sec',
                'ui',
                'ux',
                'build',
                'deploy',
                'api',
                'guide',
                'tutorial',
                'roadmap',
                'faq',
                'config',
                'search',
                'nav',
                'sidebar',
                'footer',
                'theme'
            ]
        ],
        'scope-case': [2, 'always', 'lowercase']
    }
}

export default config
