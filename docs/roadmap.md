---
sidebar_position: 100
title: Product Roadmap - Knowii Voice AI
description: Explore upcoming features and improvements for Knowii Voice AI. See what's in development, planned features, and long-term vision for privacy-first voice transcription.
keywords:
    - roadmap
    - upcoming features
    - planned features
    - development
    - future releases
    - feature requests
    - product vision
---

# Product Roadmap

This page outlines the current and planned features for Knowii Voice AI.

## Short-Term Goals

### Recently Delivered ✅

- **Rock-solid Linux Support**: Rewritten global shortcuts and native, layout-correct text output on Wayland, reliable operation on GNOME and KDE, automatic keyboard permission setup in `.deb`/`.rpm` packages, and graceful handling of desktops without a system tray (shipped in 0.7.0) (#158, #313, #316, #317)
- **Microphone Test**: Test your microphone directly from the Audio settings (shipped in 0.7.0) (#304)
- **Clearer Error Feedback**: The app now warns you when a recording fails to start or when global shortcuts fail to initialize (shipped in 0.7.0) (#303)
- **macOS Support**: Native, signed and notarized builds for Apple Silicon and Intel (shipped in 0.6.0)
- **Linux Support**: Native `.deb`, `AppImage`, and `.rpm` packages with Wayland/Hyprland compatibility (shipped in 0.6.0)

### Next Releases

- **Obsidian Integration**: First-class support for sending transcriptions straight into your Obsidian vault (#310)
- **Code-signed Windows & Linux binaries** (#62): macOS builds are already signed and notarized; Windows and Linux builds are not signed yet
- **Mute/Pause Media While Recording**: Disable noise while recording to get the best possible transcriptions (#108)
- **Home screen** (#52)
- **Auto-submit mode** (#53)
- **Prevent sleep while recording** (#109)
- **Smart AI-enabled Post-Processing**: Apply custom transformations to transcriptions: remove filler words, fix commonly misrecognized words, use AI. Configure AI-enabled pipelines, detect applications/context and go from raw transcriptions to specialized outputs (#24, #18, #19, #20, #49, #124)
- **Hybrid Push-to-Talk** (#139)
- **Real-time Transcription**: See words appear in real-time as you speak, not after you finish (#127)
- **Shortcut to paste last transcription** (#141)
- **Voice Trigger Words/Phrases**: Keyboard-less mode where a trigger word or phrase initiates recording and transcription (#132)
- **Portable Version**: Uncompress. Run. Transcribe. Everything stored in one folder (#147)
- **History UI/UX Improvements** (#155, #170, #119, #98)
- **Better trim silences** (#110)
- **Minimize to tray setting** (#36)
- **Cancel recording hotkey** (#39)
- **Better word replacements** (#57, #172)
- **Additional Transcription Models**: Support more transcription models (local and remote) (#90, #144, #173, #181, #11, #21, #5)
- **Transcription improvements** (#146, #123, #125, #126, #129)
- **Improve audio recordings quality** (#166, #142, #99)
- **Deeper Internationalization**: Deeper support for translations. Different keyboard shortcuts that transcribe in different languages (#136, #138, #122, #33)
- **CUDA Support**: GPU acceleration for NVIDIA GPUs using CUDA for even faster transcription (#174)
- **In-App feedback and error reporting** (#105, #106)
- **API**: Integrate Knowii Voice AI with other applications and systems programmatically (#135, #31, #143). A command-line interface (the `transcribe` CLI) already shipped in 0.6.0 (#47, #131)
- **File Transcription**: Drag and drop audio files (meeting recordings, interviews, podcasts) to transcribe them (#133)
- **Usage Statistics**: Get statistics about your usage
- **Allow selecting a different folder for models** (#40)
- **Allow selecting a different folder for the history** (#115, #116, #117, #118)
- **Easily add and use custom sound files** (#153)

## Long-Term Vision

- **Voice Commands & Action System**: Use your voice to trigger concrete actions (#26)
- **Plugins System**: Extensibility through plugins (#26)
- **Cross-Device Command & Control**: Use the app on one device to command other devices (#25, #7, #137)
- **Context Analysis**: Understand what you're doing to generate contextual transcriptions (#16)
- **Speaker Diarization**: Identify and label different speakers (#68)
- **Cloud Sync** (Optional): Optionally sync history across devices (opt-in) (#23)
- **Themes**: Custom color themes and UI customization (#22)
- **Mobile Companion App**: Android/iOS app for on-the-go transcription (#6)
- **Reprocess past recordings** (#130)
- **Custom Hotkeys**: Additional customizable shortcuts (#39)

## Future Considerations 🔮

- **Screenshots + AI analysis**: Take screenshots with a shortcut, and get help from AI (#217)
- **Meeting Assistant Mode**: Record and transcribe meetings with summaries
- **Translation**: Real-time translation between languages
- **Voice Synthesis**: Text-to-speech with your voice
- **Custom Model Training**: Train models on your voice for better accuracy
- **Collaboration**: Share transcriptions with team members
- **Auto-Punctuation Enhancement**: Improved automatic punctuation
- **Markdown Support**: Direct markdown formatting in transcriptions
- **Code Mode**: Optimized transcription for programming

## How to Request Features

Have an idea for Knowii Voice AI? I'd love to hear it!

1. **Check** the roadmap above to see if it's already planned
2. **Search** existing feature requests on [GitHub](https://github.com/DeveloPassion/knowii-voice-ai-docs/issues)
3. **Create** a new feature request if it doesn't exist, create [a discussion](https://github.com/DeveloPassion/knowii-voice-ai-docs/discussions), or send me an [e-mail](mailto:support@knowii.net)

## Release Cycle

Knowii Voice AI releases will regularly be published, bringing new features your way.

Check the [Release Notes](/release-notes) to see what's new in each version.

## Stay Updated

To stay informed about new releases and features:

- **Join** the [Knowii Community](https://www.knowii.net)
- **Check** your e-mail inbox for announcements
- **Visit** the [website](https://voice-ai.knowii.net) for announcements
- **Watch** the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai-docs)
- **Check** the app for update notifications (coming soon)

---

_Roadmap subject to change based on development priorities and community feedback._
