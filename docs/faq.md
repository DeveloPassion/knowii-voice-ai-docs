---
sidebar_position: 99
---

# Frequently Asked Questions

## General

### What is Knowii Voice AI?

Knowii Voice AI is a privacy-first voice-to-text transcription application that runs entirely on your computer. Your voice never leaves your device by default.

### Is it really private?

Yes! All audio processing and transcription happens locally on your computer by default. No internet connection is required, and your voice data is never sent to any cloud service.

### How much does it cost?

Knowii Voice AI is currently free during the early access period. Future pricing will be announced later.

### What operating systems are supported?

- **Windows**: 10 and 11 (fully supported)
- **Linux**: Coming Soon
- **macOS**: Coming Soon

## Installation & Setup

### How do I download Knowii Voice AI?

Download the latest version from the [website](https://voice-ai.knowii.net#download).

### What are the system requirements?

- 4GB RAM minimum (8GB recommended)
- 500MB free disk space
- Optional: GPU with Vulkan support for faster transcription (most modern NVIDIA, AMD, and Intel GPUs)

### Why do I need to download AI models?

The AI models are the "brains" that convert your voice to text. They're downloaded separately to keep the initial installer size small and to give you choice over which models to use.

### Which model should I choose?

- **Small models**: Faster, use less memory, slightly less accurate - good for most use cases
- **Large models**: Slower, use more memory, more accurate - best for high-accuracy needs
- Start with a small model and upgrade if needed

## Usage

### How do I transcribe my voice?

1. Press and hold `Ctrl+Space` (default shortcut)
2. Speak clearly
3. Release the shortcut
4. Text appears automatically at your cursor position

### Can I change the keyboard shortcut?

Yes! Go to **Settings > Shortcuts** and click on the shortcut to change it to your preferred key combination.

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

Yes! Knowii Voice AI supports multiple languages. Configure your language in **Settings > Transcription > Language**.

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

### Can I delete my history?

Yes! In the History tab, you can:

- **Delete individual** transcriptions
- **Clear all** history at once
- **Delete audio files** while keeping transcriptions to save space

### Does Knowii Voice AI collect telemetry?

No. Knowii Voice AI does not collect any telemetry, analytics, or usage data.

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
2. Try a **different shortcut** in **Settings > Shortcuts**
3. **Restart** the application after changing shortcuts

### Transcription is completely wrong

1. **Check** the selected language in settings
2. Try a **different model**
3. **Test** with clear audio and minimal background noise
4. **Verify** your microphone is working properly

### Models won't download

1. **Check** your internet connection (required for downloads only)
2. **Check** available disk space
3. Try **downloading again** (downloads can be resumed)
4. Try a **different model**

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

## Still Need Help?

Can't find the answer you're looking for? Visit the [Support](./support) page for all available help options including:

- Email support at support@knowii.net
- Knowii Community forums
- GitHub issues and discussions
- Additional resources and documentation
