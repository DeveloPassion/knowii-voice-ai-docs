---
sidebar_position: 9
title: Updating Guide
description: Learn how to update Knowii Voice AI to the latest version. Instructions for automatic updates through the app and manual installation methods.
keywords:
    - update
    - upgrade
    - install update
    - new version
    - latest version
    - automatic update
    - manual update
---

# Updating Knowii Voice AI

Knowii Voice AI updates itself. Here's how that works, and how to do it by hand if you'd rather.

## Check for Updates

1. The app will automatically check for updates on startup. You will see "Checking" in the status bar and in the About screen
2. You can also force checking for updates by clicking on "Check for updates" in the status bar, in the About screen or using the system tray menu

Prefer to stay in full control? Turn off **Check for Updates Automatically** in **Settings > Advanced** and the app makes no automatic network requests at all — manual checks keep working. See [Advanced Settings](./advanced-settings#check-for-updates-automatically).

## Download and Install Updates

### Through the app

1. If a new version is available, you will see "Update available" in the status bar and "Install Update" in the About screen
2. Click on "Update available" in the status bar or on "Install Update" in the About screen to download the new version and launch the installer
3. Follow the installation wizard
4. **Launch** the new version from the Start Menu or desktop shortcut

### Manually

If you prefer to update manually or face an issue with the built-in update feature:

1. **Download** the latest version for your platform:
    - From your [Gumroad Library](https://gumroad.com/library) (if purchased there)
    - From the [Knowii Community](https://www.knowii.net) website (if purchased there)
2. **Run the installer**:
    - Run the installer (it will automatically detect and update your existing installation)
    - Follow the installation wizard
3. **Launch** the updated application from your Start Menu or desktop shortcut

## Update Security

All updates downloaded through the built-in updater are:

- **Cryptographically signed**: every update is signature-verified before it installs, so a tampered file is rejected
- **Authenticated**: Only official updates from DeveloPassion can be installed
- **Secure**: Downloaded over HTTPS from trusted servers

If signature verification fails, the update will be rejected and you'll be notified. This protects you from malicious updates.

Installing manually instead? You can check a download's signature yourself — see [Verifying Your Download](./verify-downloads).

## What Happens to My Data?

When you update Knowii Voice AI:

- **Settings are preserved**: All your preferences, shortcuts, and configurations remain intact
- **History is kept**: Your transcription history and starred items are not affected
- **Models stay downloaded**: Your AI models don't need to be re-downloaded
- **Audio files remain**: All saved audio recordings are preserved

Your data is stored separately from the application, so updates never delete or modify your personal data.

## Update Frequency

Knowii Voice AI receives regular updates with:

- **New features**: Enhanced functionality and capabilities
- **Improvements**: Better performance and user experience
- **Bug fixes**: Resolution of reported issues
- **Security patches**: Important security updates when needed

Check the [Release Notes](../release-notes) to see what's new in each version.

## Troubleshooting Updates

### Update Check Fails

If checking for updates doesn't work:

1. **Check your internet connection**: Update checks require internet access
2. **Check firewall settings**: Ensure Knowii Voice AI can access the internet
3. **Try again later**: The update server may be temporarily unavailable
4. **Manual update**: Use the manual update method instead

### Update Download Fails

If downloading an update fails:

1. **Check your internet connection**: Ensure you have a stable connection
2. **Check disk space**: Make sure you have enough free space for the update
3. **Try again**: Click "Download Update" again (downloads can be resumed)
4. **Manual update**: Download and install manually instead

### Update Installation Fails

If installing an update fails:

1. **Close the application**: Make sure Knowii Voice AI is fully closed
2. **Check permissions**: Ensure you have permission to update the application
3. **Try manual update**: Download and run the installer manually
4. **Contact support**: If problems persist, see the [Support](../support) page

### Signature Verification Fails

If update signature verification fails:

1. **DO NOT install the update**: This could indicate a security issue
2. **Try downloading again**: The download may have been corrupted
3. **Check for announcements**: Visit the release notes page for any security notices
4. **Contact support**: Report the issue at support@knowii.net

## Downgrading

While not officially supported, if you need to use an older version:

1. **Backup your data**: your application data folder (`%APPDATA%\knowii-voice-ai` on Windows, `~/Library/Application Support/knowii-voice-ai` on macOS, `~/.local/share/knowii-voice-ai` on Linux; see the [Application Data](./application-data) page)
2. **Uninstall** the current version
3. **Install** the older version manually
4. **Restore your data** if needed

Note: Downgrading is not recommended and may cause compatibility issues.

## Stay Informed

To stay up to date with new releases:

- **Keep automatic update checks on** in Settings → Advanced (they are on by default)
- **Watch** the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai-docs)
- **Visit** the [website](https://voice-ai.knowii.net) for announcements
- **Join** the [Knowii Community](https://www.knowii.net)
- **Check** the [Release Notes](../release-notes) to see what's new

## Version History

For a complete list of all releases and what's new in each version, see the [Release Notes](../release-notes) page.
