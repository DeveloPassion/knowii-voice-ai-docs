---
sidebar_position: 99
title: FAQ - Knowii Voice AI
description: Find answers to common questions about Knowii Voice AI. Learn about installation, usage, privacy, performance, troubleshooting, and more.
keywords:
    - FAQ
    - frequently asked questions
    - help
    - troubleshooting
    - common issues
    - support
    - answers
    - questions
---

# Frequently Asked Questions (FAQ)

## General

### What is Knowii Voice AI?

Knowii Voice AI is a privacy-first voice-to-text transcription application that runs entirely on your computer. Your voice never leaves your device by default.

### Is it really private?

Yes! All audio processing and transcription happens locally on your computer by default. No internet connection is required, and your voice data is never sent to any cloud service.

### How much does it cost?

Knowii Voice AI is currently free during the early access period. Future pricing will be announced later.

### What operating systems are supported?

- **Windows**: 10 and 11 (fully supported)
- **Linux**: Not supported yet
- **macOS**: Not supported yet

## Installation & Setup

### How do I download Knowii Voice AI?

See the [Installation Guide](./user-guide/installation) for detailed download and installation instructions.

### What are the system requirements?

See the [Installation Guide](./user-guide/installation#required-hardware) for complete system requirements and hardware recommendations.

### How do I update Knowii Voice AI?

Knowii Voice AI includes automatic updates. The app will notify you when new versions are available. You can also check manually by going to Settings → About → Check for Updates.

For detailed instructions on both automatic and manual updates, see the [Updating Guide](./user-guide/updating).

### Why do I need to download AI models?

The AI models are the "brains" that convert your voice to text. They're downloaded separately to keep the initial installer size small and to give you choice over which models to use.

### Which model should I choose?

- **Small models**: Faster, use less memory, slightly less accurate - good for most use cases
- **Large models**: Slower, use more memory, more accurate - best for high-accuracy needs
- **English-only models**: Optimized for English-only transcription, typically faster than multi-language equivalents
- Start with a small model and upgrade if needed

### What models are available?

Knowii Voice AI supports multiple AI transcription models:

#### Parakeet Models

- **Parakeet V3** (Recommended): NVIDIA's state-of-the-art model. Fast and accurate. Supports 25 European languages with automatic language detection. 785 MB download.

#### Whisper Models (Multi-Language)

These models support 99 languages:

- **Tiny**: Very fast, basic accuracy. 78 MB, ~0.5GB RAM
- **Small**: Fast and quite accurate. 488 MB, ~2GB RAM
- **Medium**: Accurate but slower. 1520 MB, ~5GB RAM
- **Large V3 Turbo**: Accurate but slow. 1620 MB, ~6GB RAM
- **Large V3**: Highest accuracy but slowest. 3100 MB, ~10GB RAM

#### Whisper Models (English-Only)

Optimized specifically for English transcription:

- **Tiny (English only)**: Very fast, English-only. 78 MB, ~0.5GB RAM
- **Base (English only)**: Fast, English-only. 148 MB, ~1GB RAM
- **Small (English only)**: Fast and accurate, English-only. 488 MB, ~2GB RAM
- **Medium (English only)**: Accurate, English-only. 1520 MB, ~5GB RAM

#### Moonshine Models

Lightweight models designed for computers with limited resources (low memory or CPU). Slower and less accurate than Parakeet or Whisper, but ideal for low-end machines:

- **Moonshine Base (English)**: Better accuracy among Moonshine models. ~239 MB
- **Moonshine Tiny (English)**: Smallest English model. ~107 MB
- **Moonshine Tiny (Arabic/Chinese/Japanese/Korean/Ukrainian/Vietnamese)**: Single-language variants. ~143 MB each

**Notes**:

- Larger models require more powerful hardware
- English-only models are optimized for English and cannot transcribe other languages
- Moonshine models are best for computers with very limited RAM
- You can download and switch between models at any time

## Usage

### How do I transcribe my voice?

See the [Getting Started Tutorial](./tutorials/getting-started) for a complete step-by-step walkthrough of your first recording.

### Can I change the keyboard shortcut?

Yes! Go to **Settings > General** and click on the shortcut to change it to your preferred key combination.

### Does it work in all applications?

Yes! Knowii Voice AI pastes transcribed text into any application that accepts text input - browsers, email clients, word processors, IDEs, chat applications, and more.

### How accurate is the transcription?

Accuracy depends on:

- **Audio quality**: Clear audio with minimal background noise works best
- **Speaking style**: Clear, natural speech at a moderate pace
- **Model choice**: Larger models are generally more accurate
- **Language**: Some languages have better model support than others

Typical accuracy is 90-95% for clear audio with good microphones.

### Can I transcribe in languages other than English?

Yes! Knowii Voice AI supports multiple languages. The default **Auto** setting automatically detects the language you're speaking and is recommended for most users. Only change the language in **Settings > Transcription > Language** if you're experiencing issues with automatic detection.

### What if the transcription has errors?

You can:

- **Edit** transcriptions directly in the History tab
- **Configure** word replacements in Settings to auto-correct common errors
- **Try** a more accurate (larger) model

## Privacy & Data

### Where is my data stored?

All data (transcriptions, audio recordings, settings) is stored locally on your computer:

- **Windows**: `%APPDATA%/knowii-voice-ai/`
- **Linux**: `~/.config/knowii-voice-ai/` or `$XDG_CONFIG_HOME/knowii-voice-ai/`

See the [Privacy Policy](https://voice-ai.knowii.net/#/privacy-policy) for more details.

### Can I delete my history?

Yes! In the History tab, you can:

- **Delete individual** transcriptions
- **Clear all** history at once
- **Delete audio files** while keeping transcriptions to save space

### Does Knowii Voice AI collect telemetry?

No. Knowii Voice AI does not collect any telemetry, analytics, or usage data. See the [Privacy Policy](https://voice-ai.knowii.net/#/privacy-policy) for more details.

### Is my audio recorded?

Audio is temporarily recorded during transcription and optionally saved in your history for playback. You can delete audio files at any time while keeping the transcription text.

## Performance

### Why is transcription slow?

Transcription speed depends on:

- **CPU/GPU**: Faster processors = faster transcription
- **Model size**: Larger models take longer to process
- **Audio length**: Longer recordings take longer to transcribe

To improve speed:

- Use a **smaller model**
- Enable **GPU acceleration** if you have a Vulkan-compatible GPU (most modern GPUs)
- Keep recordings **short** (under 30 seconds for best experience)

### Does it use my GPU?

Yes! If you have a Vulkan-compatible GPU (most modern NVIDIA, AMD, and Intel GPUs), Knowii Voice AI automatically detects and uses it for significantly faster transcription. CUDA support for NVIDIA GPUs is planned for a future release.

### Why does it use so much memory?

AI models require significant memory to run. To reduce memory usage:

- Use a **smaller model**
- Enable **auto-unload** in **Settings > Models** to unload models after inactivity

### Can I run it on a laptop?

Yes! Knowii Voice AI works well on laptops. Consider using:

- **Smaller models** for better battery life
- **Auto-unload** to free memory when not in use
- **On-demand microphone mode** instead of always-on

## Troubleshooting

### The app doesn't start

1. **Check** system requirements
2. **Verify** the application has permission to run
3. **Check** system logs for error messages
4. Try **reinstalling** the application

### No audio is recorded

1. **Check** that your microphone is connected and working
2. **Verify** microphone permissions in system settings
3. **Test** the microphone in another application
4. **Select** the correct microphone in **Settings > Audio**

### Shortcut doesn't work

1. **Check** that the shortcut isn't already used by another application
2. Try a **different shortcut** in **Settings > General**
3. **Restart** the application after changing shortcuts

### Transcription is completely wrong

1. **Check** the selected language in settings
2. Try a **different model**
3. **Test** with clear audio and minimal background noise
4. **Verify** your microphone is working properly

### Models won't download

1. **Check** your internet connection (required for downloads only)
2. **Check** available disk space
3. **Close and restart** the application, then retry the download
4. Try **downloading again** (downloads can be resumed)
5. Try a **different model**
6. If the issue persists, **Hugging Face** (where most models are downloaded from) may be experiencing downtime - check their [status page](https://status.huggingface.co/) or try again later

## Advanced

### Can I use my own AI models?

Not currently. Custom model support may be added in a future release. See the [Roadmap](./roadmap) for planned features.

### Can I use this for professional transcription?

Yes, but please note:

- **Review** transcriptions for accuracy
- Knowii Voice AI is provided as-is without warranties
- For critical professional use (legal, medical), consider additional review processes

### Is there an API?

Not currently. API access is being considered for future releases. See the [Roadmap](./roadmap).

### Is there a CLI?

There is a basic one but it's not documented yet and its features are limited. Improvements are planned for future releases. See the [Roadmap](./roadmap).

### What is the relationship to Handy.computer?

Knowii Voice AI is a fork of [Handy](https://github.com/cjpais/Handy). Handy is licensed under the MIT license, which explicitly allows anyone to use, modify, and redistribute the code. That's exactly what I've done here.

Just because it's a fork doesn't mean it's the same thing. I've recreated the entire frontend, implemented different features, and taken different paths forward. The projects share common origins but have distinct goals and functionality. You can see what's been implemented in the [Release Notes](./release-notes) and what's planned in the [Roadmap](./roadmap).

The decision to keep Knowii Voice AI closed-source comes down to sustainability and the resources needed for ongoing development and support. I intend to contribute improvements back to the original Handy project over time.

This is how open source is supposed to work - permissive licenses enable people to build on existing work and take it in new directions.

## Still Need Help?

Can't find the answer you're looking for? Visit the [Support](./support) page for all available help options including:

- Email support at support@knowii.net
- Knowii Community forums
- GitHub issues and discussions
- Additional resources and documentation
