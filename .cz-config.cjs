module.exports = {
    types: [
        { value: 'feat', name: 'feat:     A new feature' },
        { value: 'fix', name: 'fix:      A bug fix' },
        { value: 'docs', name: 'docs:     Documentation only changes' },
        {
            value: 'style',
            name: 'style:    Changes that do not affect the meaning of the code'
        },
        {
            value: 'refactor',
            name: 'refactor: A code change that neither fixes a bug nor adds a feature'
        },
        {
            value: 'perf',
            name: 'perf:     A code change that improves performance'
        },
        { value: 'test', name: 'test:     Adding missing tests' },
        {
            value: 'chore',
            name: 'chore:    Changes to the build process or auxiliary tools'
        },
        { value: 'revert', name: 'revert:   Revert to a commit' },
        {
            value: 'build',
            name: 'build:    Changes that affect the build system'
        },
        {
            value: 'ci',
            name: 'ci:       Changes to CI configuration files and scripts'
        }
    ],

    scopes: [
        { name: 'all' },
        { name: 'a11y' },
        { name: 'code' },
        { name: 'deps' },
        { name: 'docs' },
        { name: 'i18n' },
        { name: 'qa' },
        { name: 'release' },
        { name: 'sec' },
        { name: 'ui' },
        { name: 'ux' },
        { name: 'build' },
        { name: 'deploy' },
        { name: 'api' },
        { name: 'guide' },
        { name: 'tutorial' },
        { name: 'roadmap' },
        { name: 'faq' },
        { name: 'config' },
        { name: 'search' },
        { name: 'nav' },
        { name: 'sidebar' },
        { name: 'footer' },
        { name: 'theme' }
    ],

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix']
}
