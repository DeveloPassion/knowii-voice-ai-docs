import type { Config } from 'release-it'

export default {
    'ci': false,
    'disable-metrics': true,
    'git': {
        requireCleanWorkingDir: true,
        requireBranch: 'main',
        requireUpstream: true,
        commit: true,
        commitMessage: 'chore(release): release v${version}',
        commitArgs: ['--no-verify'], // Skip git hooks for release commits
        tag: true,
        tagName: 'v${version}',
        tagAnnotation: 'Release v${version}',
        push: true,
        pushArgs: ['--follow-tags'],
        pushRepo: 'origin'
    },
    'github': {
        release: true,
        releaseName: 'Release v${version}',
        releaseNotes:
            'npx auto-changelog --stdout --commit-limit false -u --template ./.release-it/changelog-compact.hbs',
        draft: false,
        tokenRef: 'GITHUB_TOKEN'
    },
    'npm': {
        publish: false // Not publishing to npm
    },
    'plugins': {
        '@release-it/bumper': {
            out: [
                {
                    file: 'VERSION',
                    type: 'text/plain'
                }
            ]
        },
        '@release-it/conventional-changelog': {
            infile: 'CHANGELOG.md',
            preset: {
                name: 'conventionalcommits',
                types: [
                    { type: 'feat', section: 'Features' },
                    { type: 'fix', section: 'Bug Fixes' },
                    { type: 'perf', section: 'Performance Improvements' },
                    { type: 'revert', section: 'Reverts' },
                    { type: 'docs', section: 'Documentation' },
                    { type: 'style', section: 'Styles' },
                    { type: 'refactor', section: 'Code Refactoring' },
                    { type: 'test', section: 'Tests' },
                    { type: 'build', section: 'Build System' },
                    { type: 'ci', section: 'Continuous Integration' },
                    { type: 'chore', section: 'Chores', hidden: true }
                ]
            }
        }
    },
    'hooks': {
        'after:bump': [
            // Generate/update changelog
            'npx auto-changelog -p',
            // Stage changelog (bumper plugin handles version files)
            'git add CHANGELOG.md'
        ],
        'after:release':
            'echo "\\n✓ Successfully released ${name} v${version}\\n\\nView release: ${repo.protocol}://${repo.host}/${repo.repository}/releases/tag/v${version}"'
    }
} satisfies Config
