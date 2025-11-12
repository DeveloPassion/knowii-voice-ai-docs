---
sidebar_position: 99
title: Release Notes - Knowii Voice AI
description: Latest features, improvements, and bug fixes in Knowii Voice AI. See what's new in each version and learn how to update to the latest release.
keywords:
    - release notes
    - changelog
    - what's new
    - updates
    - version history
    - new features
    - improvements
---

# Release Notes

Stay up to date with the latest features, improvements, and fixes in Knowii Voice AI.

## Version 0.5.0 (November 12, 2025)

### Improvements

**Unified Update Experience**

- Update checks are now consistent across the entire app - whether you check from the status bar footer, the Settings → About page, or the system tray menu, you'll get the same reliable experience
- All update entry points now show the same information and work the same way

### Bug Fixes

**Update System Reliability**

- Fixed critical issues with the automatic update system that could prevent the app from checking for or downloading updates correctly
- Added extensive logging to help diagnose any update-related issues
- Improved error handling throughout the update process

**Note**: If you experienced issues with updates in previous versions, this release resolves those problems. The update system should now work reliably across all platforms.

---

## Version 0.4.0 (November 11, 2025)

### New Features

**Enhanced Model Support**

- Added English-optimized variants of Whisper models for faster and more accurate English transcriptions
- Added Whisper Tiny model option for even faster transcriptions on lower-end hardware
- Automatic language matching: the app now ensures your selected language is compatible with your chosen transcription model

**Improved Paste System**

- New paste insert mode that types transcriptions character by character (useful for applications where clipboard paste doesn't work)
- Paste settings moved to Advanced tab for ease of access

**Better User Interface**

- Audio settings moved to a dedicated tab for easier navigation
- Custom word replacements extracted to a separate, more accessible component

---

## Version 0.3.0 (November 8, 2025)

### New Features

**Automatic Update System**

- Built-in update checker that notifies you when new versions are available
- Download updates directly from the app (check Settings → About or the tray menu)

**Audio Features**

- Add custom sounds to play when recording starts/stops
- New set of built-in sounds

### Security Enhancements

- Cryptographic signature verification ensures updates are authentic and safe

---

## Version 0.2.0 (November 5, 2025)

### New Features

**Documentation Access**

- Direct link to documentation in the About screen for quick access to help and guides

**Improved User Experience**

- Added missing "Auto" language detection option in the onboarding flow
- Enhanced main window and overlay visual design for a more polished look

---

## Earlier Versions

### Version 0.1.0 (November 4, 2025)

The initial release of Knowii Voice AI included:

**Core Features**

- Local voice-to-text transcription
- Support for multiple transcription models (Whisper and Parakeet)
- Push-to-talk recording with customizable keyboard shortcuts
- Transcription history with search, filtering, starring, and editing
- Audio playback of recorded transcriptions
- Voice Activity Detection (VAD) with real-time audio level visualization
- Custom word replacement for fixing common transcription errors
- System tray integration

**Platform Support**

- Windows support
- Test builds available for Linux

**User Interface**

- Modern, responsive design that works on all screen sizes
- Recording overlay with configurable position
- Onboarding flow for new users
- Settings organization across multiple tabs (General, Transcription, Audio, History, Advanced, Debug)
- Model download and management

**Audio Features**

- Audio feedback sounds for recording start/stop
- Multiple sound themes
- Volume control for audio feedback
- Support for custom sound files

**Advanced Features**

- Multiple microphone mode options (Always On, On Demand)
- Device selection for input and output
- Configurable model auto-unload timeouts
- Debug mode for troubleshooting

---

## How to Update

To update to the latest version, see the [Updating Guide](./user-guide/updating) for detailed instructions on both automatic and manual updates.

---

## Stay Informed

To receive notifications about new releases:

- **Enable update checks** in Settings → About
- **Watch** the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai-docs)
- **Visit** the [website](https://voice-ai.knowii.net) for announcements
- **Join** the [Knowii Community](https://www.knowii.net)

---

_For technical details and full changelog, visit the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai)._
