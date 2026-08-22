---
sidebar_position: 7.5
title: Command-Line Interface (CLI)
description: Transcribe audio and video files to subtitles or text from your terminal with the transcribe CLI, manage transcription models, and control the Knowii Voice AI desktop app from scripts and keybindings.
keywords:
    - transcribe
    - CLI
    - command line
    - subtitles
    - srt
    - vtt
    - batch transcription
    - transcribe video
    - models
    - download model
    - terminal
    - automation
    - scripting
    - waybar
    - hyprland
    - keybind
    - log levels
---

# Command-Line Interface (CLI)

Knowii Voice AI gives you two command-line tools, and they do very different jobs:

- **`transcribe`** is the real CLI. It runs fully headless, turns audio and video files into subtitles or text, and manages your transcription models. No window, no clicking, no waiting.
- **`knowii-voice-ai`** is the desktop app itself. Its flags let you drive a running app from a script or a keybinding, and change how it starts up.

The first one is what most readers want, so it goes first.

:::tip[New to the CLI?]
The [Transcribe CLI Tutorial](../tutorials/transcribe-cli) walks you through your first file, start to finish, in about ten minutes. This page is the reference you come back to afterwards.
:::

## The `transcribe` CLI

`transcribe` turns the audio that never passes through your microphone (meeting recordings, interviews, podcasts, old videos) into subtitles or text. Point it at files, get text back.

It decodes media in-process (mp4, mkv, mov, m4a, mp3, wav, ogg, opus, flac, and more), so there is no `ffmpeg` to install. It runs the same transcription engines as the desktop app, on your machine, offline. And because it is a normal command-line program, it composes with everything else you already use: shell loops, cron jobs, Makefiles, scripts.

:::info[It works alongside the running app]
`transcribe` never launches or interferes with a running Knowii Voice AI window. It does its work and exits, so it is safe to use while the desktop app is open. Models downloaded with `transcribe models download` show up in the app, and models downloaded in the app are available to the CLI.
:::

### Where to find it

`transcribe` is installed with Knowii Voice AI, in the same folder as the main executable:

| Platform          | Location                                                      |
| ----------------- | ------------------------------------------------------------- |
| Windows           | `%LOCALAPPDATA%\Programs\knowii-voice-ai\transcribe.exe`      |
| macOS             | `/Applications/Knowii Voice AI.app/Contents/MacOS/transcribe` |
| Linux (deb / RPM) | `/usr/bin/transcribe`, already on your `PATH`                 |
| Linux (AppImage)  | Bundled inside the AppImage (see below)                       |

:::note[Using the AppImage?]
The AppImage packs everything, `transcribe` included, into a single file, so the CLI is not on your `PATH`. Extract it once and link it wherever you like:

```bash
./Knowii-Voice-AI.AppImage --appimage-extract usr/bin/transcribe
sudo install squashfs-root/usr/bin/transcribe /usr/local/bin/transcribe
```

Prefer the deb or RPM package if you plan to use the CLI a lot.
:::

Check that it works:

```bash
transcribe --help
```

If your shell cannot find the command, that folder is not on your `PATH`. Either call it by its full path, or add the folder to your `PATH` so you can type `transcribe` from anywhere. On macOS, an alias does the job too:

```bash
alias transcribe="/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/transcribe"
```

### Your first transcription

Two commands. Download a model, then use it:

```bash
transcribe models download whisper-large-v3
transcribe file talk.mp4 --model whisper-large-v3
```

That writes `talk.srt` next to `talk.mp4`. Open the video in any player and your subtitles are there.

Already downloaded a model inside the app? Skip the first command. The CLI and the app share the same models.

### Transcribe files

```bash
transcribe file <FILE>... --model <NAME_OR_PATH> [OPTIONS]
```

| Option                    | Description                                                              | Default            |
| ------------------------- | ------------------------------------------------------------------------ | ------------------ |
| `<FILE>...`               | One or more audio/video files. Use `-` to read one stream from stdin.    | _(required)_       |
| `-m`, `--model`           | A model id (e.g. `whisper-large-v3`) or a path to a model file/directory | _(required)_       |
| `--engine`                | Engine for raw paths: `whisper`, `parakeet`, `moonshine`, `omnilingual`  | auto / `whisper`   |
| `-l`, `--language`        | Language code (e.g. `en`, `fr`) or `auto` to detect (whisper)            | `auto`             |
| `-f`, `--format`          | Output format: `srt`, `vtt`, `txt`, or `json`                            | `srt`              |
| `-o`, `--output`          | Output directory, a single output file, or `-` for stdout                | next to each input |
| `--translate`             | Translate to English (whisper multilingual models only)                  | off                |
| `--initial-prompt <TEXT>` | Bias vocabulary/style (whisper only)                                     | _(none)_           |
| `--int8`                  | Use Int8 quantized inference where supported (parakeet/omnilingual)      | off                |
| `--no-preprocess`         | Skip preprocessing (peak-normalize; silence-trim for `txt`)              | off                |
| `--models-dir <DIR>`      | Where to look up models by id                                            | app data directory |

When `--model` is an **id**, it is resolved against your downloaded models. When it is a raw path, pass `--engine` as well so the CLI knows what it is loading.

**Examples:**

```bash
# Subtitle a video - writes "talk.srt" next to it
transcribe file talk.mp4 --model whisper-large-v3

# Several files at once, into a folder, as WebVTT
transcribe file *.mp4 --model whisper-medium --format vtt --output ./subs/

# Force English and print plain text to the terminal
transcribe file interview.m4a --model whisper-large-v3 --language en --format txt --output -

# Translate a French recording into English subtitles
transcribe file entretien.mp3 --model whisper-large-v3 --translate

# Feed a jargon-heavy recording some vocabulary up front
transcribe file standup.m4a --model whisper-large-v3 --initial-prompt "Kubernetes, Grafana, Prometheus, OTEL"

# Pipe audio in from stdin
cat note.ogg | transcribe file - --model whisper-medium --format txt

# Fast ONNX engine with quantization
transcribe file clip.mkv --model parakeet-tdt-0.6b-v3 --int8
```

:::tip[Quote your paths]
File names often contain spaces. Always quote them: `transcribe file "My Recording.mp4" --model whisper-large-v3`.
:::

### Output formats

| Format | What you get                             | Use it for                                    |
| ------ | ---------------------------------------- | --------------------------------------------- |
| `srt`  | Numbered subtitle blocks with timestamps | Video players, YouTube, editing software      |
| `vtt`  | WebVTT subtitles                         | Web video, HTML5 players                      |
| `txt`  | Plain text, no timestamps                | Notes, search, feeding text into another tool |
| `json` | Structured segments with timings         | Scripts and further processing                |

### Engines

`transcribe` supports multiple engines via `--engine`:

| Engine        | Notes                                                    |
| ------------- | -------------------------------------------------------- |
| `whisper`     | Timestamped segments. The best choice for subtitles.     |
| `parakeet`    | Fast ONNX engine; supports `--int8` quantized inference. |
| `moonshine`   | Ultra-fast ONNX engine; English plus several languages.  |
| `omnilingual` | Massive language coverage (1,600+); supports `--int8`.   |

When `--model` is a known model id (e.g. `whisper-large-v3`), the engine is detected automatically, so you rarely need this flag.

### Manage models

`transcribe models` lists, downloads, and removes transcription models from the terminal, using the same catalog and the same folder as the app. Changes are shared in both directions.

**List what is available:**

```bash
transcribe models list
```

```
Models directory: /home/you/.local/share/knowii-voice-ai/models
ID                         ENGINE        SIZE  DL   NAME
parakeet-tdt-0.6b-v3       Parakeet      785M    -  Parakeet V3
whisper-tiny               Whisper        74M    -  Whisper - Tiny
whisper-large-v3           Whisper      2952M    ✓  Whisper - Large V3
...
```

The `DL` column shows `✓` for models you already have. Add `--downloaded` to list only those, `--json` for machine-readable output, or `--models-dir <DIR>` to inspect another location.

**Download a model:**

```bash
transcribe models download whisper-large-v3
```

The download streams to disk with a progress indicator and is written atomically, so it is safe to run while the app is open. If the model is already there, nothing happens.

**Remove a model:**

```bash
transcribe models remove whisper-large-v3
```

:::info[Model ids]
Use the `ID` column from `transcribe models list`. Whisper ids also accept a short form: `large-v3` resolves to `whisper-large-v3`.
:::

### Shell completions

Tab completion for subcommands, flags, and model ids:

```bash
transcribe completions bash
transcribe completions zsh > ~/.zsh/completions/_transcribe
transcribe completions fish > ~/.config/fish/completions/transcribe.fish
```

---

## Controlling the desktop app

The `knowii-voice-ai` executable takes flags of its own. These have nothing to do with file transcription. They exist so you can drive the app from somewhere other than its keyboard shortcut, and change how it starts.

```
AI-powered voice transcription application

Usage: knowii-voice-ai [OPTIONS]

Options:
      --log-level <LEVEL>     Set the log level (trace, debug, info, warn, error, off) [default: info]
      --toggle-transcription  Start or stop a transcription in the running instance
      --cancel                Abort the running instance's current recording or transcription
      --start-hidden          Start with the main window hidden (tray only)
      --no-tray               Start without creating a system tray icon
  -h, --help                  Print help
```

### Control a running app

Knowii Voice AI only ever runs once. Launch it again while it is already open and the new command hands its instructions to the running app, then exits. That is what makes these two flags work:

| Flag                     | What it does                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| `--toggle-transcription` | Starts recording. Run it again to stop recording, transcribe, and paste, just like the shortcut. |
| `--cancel`               | Throws away whatever is in progress and returns to idle. Does nothing if nothing is running.     |

This gives you a second way to trigger dictation, alongside your keyboard shortcut. It is handy for a panel or status-bar button (Waybar, Polybar, a dock, a stream deck), a desktop keybinding set in your window manager, or a script that dictates as part of a longer sequence.

```bash
# Start recording (or stop it and transcribe, if already recording)
knowii-voice-ai --toggle-transcription

# Discard the current recording or transcription
knowii-voice-ai --cancel
```

**Hyprland keybindings** (`~/.config/hypr/hyprland.conf`):

```ini
bind = SUPER, D, exec, knowii-voice-ai --toggle-transcription
bind = SUPER SHIFT, D, exec, knowii-voice-ai --cancel
```

**A Waybar button** (`~/.config/waybar/config`):

```json
"custom/dictate": {
    "format": "🎙",
    "tooltip": "Dictate with Knowii Voice AI",
    "on-click": "knowii-voice-ai --toggle-transcription",
    "on-click-right": "knowii-voice-ai --cancel"
}
```

:::note[These commands never steal your window]
Running the app with `--toggle-transcription` or `--cancel` will not pop the Knowii Voice AI window in front of what you are doing. Otherwise every press of your panel button would interrupt you. Launching it with no flags at all still brings the window forward, as before.
:::

:::tip[Press once to start, once to stop]
`--toggle-transcription` always works as a toggle, even with **Push-to-talk** enabled in the settings. A command has no key to hold down, so there is nothing to release. Your keyboard shortcut keeps behaving exactly as you configured it.
:::

If Knowii Voice AI is **not** running yet, these flags simply start the app normally, without recording. Recording during startup would only capture the few seconds the app needs to load its model, so your first words would be lost. Start the app, then trigger it again.

### Change how the app starts

These flags apply to the launch itself. They have no effect if the app is already running (you will see a note about it in the logs).

| Flag             | What it does                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `--start-hidden` | Starts with the main window hidden, straight to the tray. Same as **Start hidden**, but only for this launch. |
| `--no-tray`      | Starts without a system tray icon, for desktops where you would rather not have one.                          |

```bash
# Start quietly in the tray, e.g. from a session autostart script
knowii-voice-ai --start-hidden

# Start with no tray icon at all
knowii-voice-ai --no-tray
```

:::info[With `--no-tray`, closing the window minimizes it]
Without a tray icon there would be no way to bring the window back, so closing it minimizes the window instead of hiding it. You can always find it again in your task switcher. For the same reason, combining `--no-tray` with a hidden start is not possible: the window is shown, so the app never becomes unreachable.
:::

### Logging

`--log-level` controls how much detail the app writes to its logs. Use it when something misbehaves and you want to see why.

```bash
knowii-voice-ai --log-level debug
```

| Level   | What it gives you                                        | When to use it                      |
| ------- | -------------------------------------------------------- | ----------------------------------- |
| `trace` | Internal state dumps, every audio buffer, full timing    | Deep debugging. Creates huge files. |
| `debug` | Detailed diagnostics, state transitions, shortcut events | Troubleshooting and bug reports     |
| `info`  | Startup, model loading, recording, transcription         | Normal operation (default)          |
| `warn`  | Warnings only                                            | Quiet monitoring                    |
| `error` | Errors only                                              | Minimal logging                     |
| `off`   | Nothing                                                  | Not recommended                     |

When reporting a problem, start the app with `--log-level debug`, reproduce the issue, then attach the log files. You can also read the most recent logs without leaving the app, under **Settings → Advanced**.

Where the log files live, and which ones to send, is covered in [Application Data](./application-data#log-files) and on the [Support page](../support#how-to-find-log-files).

## Related Documentation

- [Transcribe CLI Tutorial](../tutorials/transcribe-cli): your first file, step by step
- [Transcription Settings](./transcription-settings): models and engines in the app
- [Debug Settings](./debug-settings): in-app debugging options
- [Application Data](./application-data): where models, history, and logs are stored
- [Support](../support): get help with issues

## Need Help?

- Check the [FAQ](../faq) for common problems
- Email support@knowii.net with your log files
- Visit the [Knowii Community](https://www.knowii.net) for community support
