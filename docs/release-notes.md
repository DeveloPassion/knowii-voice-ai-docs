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

## Upcoming Release

### Bug Fixes

**No More Repeated Digits or Words (Parakeet)**

- Fixed a bug where spoken digit sequences (account numbers, phone numbers) could come out with repeated characters or words, e.g. "11768211" becoming "1176821111111". Slowly spoken numbers were the most affected. Transcriptions with Parakeet models are now accurate regardless of the paste method used.

**More Reliable Clipboard Protection**

- If your clipboard held an image or files, a clipboard-based paste used to wipe it clean. The transcription now stays on the clipboard as text instead. Copied text is still restored as before.

**No More Accidental Double Recordings**

- Pressing your recording shortcut while a previous transcription is still being processed is now safely ignored, instead of silently starting a new recording that could split your dictation in two.

## Version 0.7.0 (July 2, 2026)

This release makes Knowii Voice AI rock-solid on Linux, and brings quality-of-life improvements to all platforms.

### New Features

**Microphone Test**

- Test your microphone directly from Settings → Audio to verify it's picked up correctly before you start recording

**Reworked Global Shortcuts and Text Output on Linux**

- Global shortcuts now work reliably across Linux desktops (GNOME, KDE, Hyprland, and more) thanks to a new low-level shortcut engine
- Transcribed text is now typed using your actual keyboard layout on Wayland
- Shortcut keys are suppressed while recording, so they no longer leak into the active application
- The `.deb` and `.rpm` packages automatically set up the required keyboard permissions; AppImage users get clear in-app guidance to do the same
- The app now warns you when no compatible typing tool is installed

**Clearer Error Feedback**

- A clear warning is shown when a recording fails to start
- A clear warning is shown when global shortcuts fail to initialize

**Faster Dropdown Navigation**

- Searchable dropdowns (like the language and model pickers) now support type-ahead: just start typing to jump to the right entry

### Improvements

- **GNOME without a system tray**: The app now degrades gracefully and explains what to do when no system-tray host is available
- **Quieter offline behavior**: Checking for updates while offline no longer floods the logs with errors

### Bug Fixes

- Restored the main window titlebar on GNOME and KDE
- Fixed a launch crash on GNOME (Wayland)
- Fixed the recording overlay configuration on recent Hyprland versions
- Linux packages now declare the required Vulkan runtime dependencies, so GPU acceleration works out of the box
- Fixed shortcuts occasionally double-triggering after the app resumed them

---

## Version 0.6.1 (June 17, 2026)

### Improvements

**Reliable Windows Builds**

- Updated the Windows packaging so installers continue to build correctly with the latest build tools
- Ensures every release ships a complete set of Windows, macOS, and Linux downloads together

This is a maintenance release on top of 0.6.0 - there are no changes to features or how you use the app.

---

## Version 0.6.0 (June 17, 2026)

This is a major release: Knowii Voice AI is now available on **macOS and Linux** in addition to Windows, with a host of new transcription models and quality-of-life improvements.

### New Features

**Now Available on macOS and Linux**

- **macOS**: Native builds for both Apple Silicon (M1 and newer) and Intel Macs, **signed and notarized by Apple** for a smooth, trusted install
- **Linux**: Native packages in multiple formats - `.deb`, `AppImage`, and `.rpm` - with Wayland/Hyprland compatibility
- Windows remains fully supported - the same private, on-device experience now on every major platform

**More Transcription Models**

- **Omnilingual**: Automatic language detection across 1,600+ languages, including rare and underrepresented ones
- **Moonshine**: Ultra-fast transcription, ideal for lower-end machines and quick notes
- **Parakeet v2**: Updated NVIDIA Canary models with improved accuracy and timestamps

**Command-Line Interface**

- A standalone `transcribe` command lets you transcribe audio files and manage models from the terminal - no window required
- Handy for scripts, automation, and power users

**Quick Folder Access**

- New **Open Folder** buttons to jump straight to your **app data folder** (Settings → About), your **custom sounds folder** (Settings → Audio), and your **history folder** (History)
- Folders are created automatically if they don't exist yet

**Recording Overlay Options**

- Turn the on-screen recording overlay on or off
- Choose from more overlay positions to fit your workflow

**Faster Model Downloads**

- Models now download in parallel and from mirror locations, so getting set up is quicker and more reliable

### Improvements

- **Snappier History**: The History screen now loads in pages and lazy-loads audio, so it stays fast even with lots of transcriptions
- **Tidier Data Storage**: Your data, logs, and settings are now grouped together in a single application data location, making backups and troubleshooting easier
- **Sound Previews**: Changing your start/stop sounds now plays a quick preview so you can hear your choice immediately
- **Windows**: Double-click the tray icon to open the main window

### Bug Fixes

- Fixed push-to-talk on Linux (Hyprland)
- Fixed a Windows crash when a microphone rejected the 16 kHz recording setting
- Improved file download handling and notifications
- Fixed a double-logging issue

---

## Version 0.5.0 (November 12, 2025)

### Improvements

**Unified Update Experience**

- Update checks are now consistent across the entire app - whether you check from the status bar footer, the Settings → About page, or the system tray menu, you'll get the same reliable experience
- All update entry points now show the same information and work the same way

**Enhanced Troubleshooting**

- Log files are now automatically generated for better troubleshooting and diagnostics
- Log files are stored in a `logs` folder within your application data folder (`%APPDATA%\knowii-voice-ai\logs` on Windows)
- See the [Support page](/support#how-to-find-log-files) for instructions on locating log files when reporting issues

### Bug Fixes

**Update System Reliability**

- Fixed critical issues with the automatic update system that cause the application to start on startup
- Improved error handling throughout the update process

**Note**: You have to download this version manually. Moving forward though, the update system should work reliably.

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
