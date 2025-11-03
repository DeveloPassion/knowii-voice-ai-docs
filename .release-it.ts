const fs = require('fs')
const path = require('path')

/**
 * Update version in VERSION file
 */
function updateVersionFile(version) {
    const versionFilePath = path.join(__dirname, 'VERSION')
    fs.writeFileSync(versionFilePath, `${version}\n`, 'utf8')
    console.log(`✓ Updated VERSION to ${version}`)
}

const releaseItConfig = {
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
            // Update all version files after package.json is bumped
            "node -e \"const cfg = require('./.release-it.js'); const pkg = require('./package.json'); cfg.updateVersionFile(pkg.version);\"",
            // Generate/update changelog
            'npx auto-changelog -p',
            // Stage all version files
            'git add VERSION CHANGELOG.md'
        ],
        'after:release':
            'echo "\\n✓ Successfully released ${name} v${version}\\n\\nView release: ${repo.protocol}://${repo.host}/${repo.repository}/releases/tag/v${version}"'
    }
}

// Export both the config and the helper functions
module.exports = releaseItConfig
module.exports.updateVersionFile = updateVersionFile
