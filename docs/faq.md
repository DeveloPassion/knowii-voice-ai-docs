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
- **macOS**: 10.13 (High Sierra) or later, on both Apple Silicon and Intel Macs (signed and notarized by Apple)
- **Linux**: modern 64-bit distributions via `.deb`, `.rpm`, or `.AppImage`, with Wayland (including Hyprland) and X11 support

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

#### Omnilingual Models

Support for 1,600+ languages with automatic language detection:

- **Omnilingual 300M**: Smaller and faster. ~350 MB download
- **Omnilingual 1B**: Larger and more accurate. ~985 MB download

Great for multilingual users or less common languages. Still experimental - accuracy may vary.

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

Lightweight models designed for computers with limited resources (low memory or CPU). Slower and less accurate than Parakeet or Whisper, but ideal for low-end machines. All Moonshine models use under 1GB RAM:

- **Moonshine Base (English)**: Better accuracy among Moonshine models. ~239 MB, under 1GB RAM
- **Moonshine Tiny (English)**: Smallest English model. ~107 MB, under 1GB RAM
- **Moonshine Tiny (Arabic/Chinese/Japanese/Korean/Ukrainian/Vietnamese)**: Single-language variants. ~143 MB each, under 1GB RAM

**Notes**:

- Larger models require more powerful hardware
- English-only models are optimized for English and cannot transcribe other languages
- Moonshine models are best for computers with very limited RAM (1GB minimum)
- Omnilingual models support the most languages but are still experimental
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

### Why do numbers appear as words instead of digits?

Saying "1122" can come out as "one one two two" depending on which AI model you use — the model itself decides how to write numbers. To get digits:

- **Enable "Write digit sequences as numbers"** in **Settings > Transcription** — it automatically converts runs of 3+ spoken digits into numbers, without ever touching normal sentences
- **Use Parakeet V2** for English dictation — it writes numbers, dates, and amounts as digits much more consistently than Parakeet V3
- **Speak numbers fluently** in a steady rhythm — long pauses between digits make the model spell them out as words
- **Group numbers naturally** when possible (say "eleven twenty-two" rather than "one one two two")

See [Numbers and Dates](./user-guide/basic-usage#numbers-and-dates) for more tips.

### Can I transcribe in languages other than English?

Yes! Knowii Voice AI supports multiple languages:

- **Omnilingual models**: 1,600+ languages with automatic detection
- **Whisper models**: 99 languages
- **Parakeet V3**: 25 European languages (Parakeet V2 is English only)
- **Moonshine models**: English, Arabic, Chinese, Japanese, Korean, Ukrainian, Vietnamese

The default **Auto** setting automatically detects the language you're speaking and is recommended for most users. Only change the language in **Settings > Transcription > Language** if you're experiencing issues with automatic detection.

### What if the transcription has errors?

You can:

- **Edit** transcriptions directly in the History tab
- **Configure** word replacements in Settings to auto-correct common errors
- **Try** a more accurate (larger) model

## Privacy & Data

### Where is my data stored?

All data (transcriptions, audio recordings, settings) is stored locally on your computer:

- **Windows**: `%APPDATA%\knowii-voice-ai`
- **macOS**: `~/Library/Application Support/knowii-voice-ai`
- **Linux**: `~/.local/share/knowii-voice-ai` (or `$XDG_DATA_HOME/knowii-voice-ai` if set)

You can open this folder at any time from **Settings → About → App Data Folder → Open Folder**. See the [Application Data](./user-guide/application-data) page for what's inside, and the [Privacy Policy](https://voice-ai.knowii.net/#/privacy-policy) for more details.

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
4. **On Linux**: the shortcut needs keyboard access. Add yourself to the `input` group with `sudo usermod -aG input $USER`, then **log out and back in**. See the [Installation guide](./user-guide/installation#linux-enable-the-global-shortcut-keyboard-access).

### Dictated text doesn't appear (Linux)

If your shortcut records and transcribes but the text isn't typed into your app, it depends on your desktop:

- **GNOME (Wayland)**: text output is built in — **no `ydotool` or extra tool to install**. If you're on the `.deb` or `.rpm`, it works automatically. If you're on the AppImage, run the one-time `/dev/uinput` command and log out/in once (see the Installation guide link below).
- **KDE, Hyprland/Sway, X11**: install the **typing tool for your desktop** (package names are the same across distributions — use `dnf`/`apt`/`pacman`/`zypper`):

| Desktop                       | Tool      |
| ----------------------------- | --------- |
| **KDE Plasma** (Wayland)      | `kwtype`  |
| **Hyprland / Sway** (wlroots) | `wtype`   |
| **X11** (any desktop)         | `xdotool` |

Then restart the app (or pick the tool under **Settings → Advanced → Paste → Typing Tool**). Knowii Voice AI shows a warning with the exact command when a compatible typing tool is missing. More detail in the [Installation guide](./user-guide/installation#linux-reliable-text-output).

### AppImage: global shortcuts or typing don't work

On Linux, the **AppImage** is a single portable file that runs without an installer. Because nothing gets installed, the AppImage can't set up the small system permission rules that Knowii Voice AI needs to (1) detect your global keyboard shortcut and (2) type your transcriptions without a permission pop-up every time. So on the AppImage, your shortcut or the typing may not work until those rules are in place.

The regular **.deb** and **.rpm** packages install these rules for you automatically, which is why they "just work".

#### Easiest fix: install the .deb or .rpm package

Instead of the AppImage, download and install the package for your system:

- **.deb** for Debian, Ubuntu, Linux Mint, and Pop!\_OS
- **.rpm** for Fedora, RHEL, and openSUSE

These set everything up automatically, so global shortcuts and typing work right after you log in. Get them from the [Installation guide](./user-guide/installation) or the [GitHub Releases](https://github.com/DeveloPassion/knowii-voice-ai-website) downloads page.

#### Manual fix: if you must use the AppImage

If you need to stay on the AppImage, you can add the same rules yourself. Open a terminal and paste the following block. It creates the two rules, makes sure the required system module is loaded, and applies everything to your current session:

```bash
# 1) Keyboard access for global shortcuts
sudo tee /etc/udev/rules.d/72-knowii-voice-ai-input.rules >/dev/null <<'EOF'
KERNEL=="event*", SUBSYSTEM=="input", ENV{ID_INPUT_KEYBOARD}=="1", TAG+="uaccess"
EOF

# 2) uinput access for prompt-free typing
sudo tee /etc/udev/rules.d/72-knowii-voice-ai-uinput.rules >/dev/null <<'EOF'
KERNEL=="uinput", SUBSYSTEM=="misc", OPTIONS+="static_node=uinput", TAG+="uaccess"
EOF

# 3) Make sure the uinput module is loaded now and on every boot
echo uinput | sudo tee /etc/modules-load.d/knowii-voice-ai-uinput.conf >/dev/null
sudo modprobe uinput

# 4) Apply the rules to your current session
sudo udevadm control --reload-rules
sudo udevadm trigger --subsystem-match=input --action=change
sudo udevadm trigger --subsystem-match=misc --action=change
```

Then **log out and back in** (or reboot) and restart Knowii Voice AI.

:::note
This only affects the **AppImage on Linux**. The **.deb** and **.rpm** packages, as well as **Windows** and **macOS**, need none of this - everything is handled for you.
:::

:::tip
Once your shortcut works, the in-app warning about it disappears on its own.
:::

### System tray icon missing on GNOME

If you're using the GNOME desktop, you may notice that Knowii Voice AI has no icon in the system tray (usually near your clock). **This is not a bug in the app.**

Unlike KDE and most other Linux desktops, GNOME does not show tray icons on its own - it removed that built-in feature years ago. To get tray icons back, GNOME users add a small, widely-used add-on called an _extension_. Once it's installed, the Knowii Voice AI tray icon appears just like it does everywhere else, and the in-app warnings about the missing tray go away.

You only need to do this once.

#### Option 1: Use the Extensions app (easiest)

1. Open the **Extensions** app (on some systems it's called **Extension Manager**) from your applications list.
    - Don't have it? Install it first. It's usually called **gnome-shell-extension-manager** in your software store or package manager. On **Ubuntu**, the needed support is often already there and just needs turning on.
2. In the app, search for **"AppIndicator and KStatusNotifierItem Support"**.
3. Turn the switch next to it **on**.
4. **Close and restart Knowii Voice AI** so it can detect the tray. The tray icon should now appear.

#### Option 2: Enable it from the GNOME Extensions website

1. Open [this extension page](https://extensions.gnome.org/extension/615/appindicator-support/) in your web browser.
2. Flip the toggle at the top of the page to **on**.
    - The website needs a small browser helper to work. If the toggle doesn't respond, install the **GNOME browser integration** add-on for your browser. On **Fedora**, you may also need the **gnome-browser-connector** package. If this feels fiddly, use Option 1 above instead - it's simpler.
3. **Close and restart Knowii Voice AI**. The tray icon should now appear.

:::tip
Whichever option you choose, the last step is the important one: after enabling the extension, **close and reopen Knowii Voice AI** so it picks up the newly available tray.
:::

:::info
The app works perfectly fine even without the tray icon - you just lose the quick tray menu. Because there's no tray to bring the window back from, Knowii Voice AI automatically protects you so you never lose access to the window:

- **Closing the window minimizes it** instead of hiding it. You can bring it back any time from the **Activities** overview or with **Alt+Tab**.
- The **Start Hidden** option is ignored, so the window always opens when you launch the app.
  :::

:::note
This only affects GNOME when the extension isn't installed. KDE and other desktops with a working system tray are not affected, and the tray icon appears normally there - no action needed.
:::

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
