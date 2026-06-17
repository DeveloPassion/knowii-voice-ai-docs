---
sidebar_position: 7.5
title: Command-Line Interface (CLI)
description: Use the Knowii Voice AI command-line interface to transcribe files to subtitles, manage transcription models, configure log levels, and troubleshoot.
keywords:
    - command line
    - CLI
    - transcribe
    - subtitles
    - srt
    - models
    - download model
    - log levels
    - debugging
    - troubleshooting
    - terminal
---

# Command-Line Interface (CLI)

Knowii Voice AI ships **two** command-line tools:

- The **`knowii-voice-ai`** executable itself — the desktop app, which accepts a few startup flags (mainly `--log-level`) useful for troubleshooting and debugging.
- A standalone **`transcribe`** binary that runs fully headless to:
    - **Transcribe local audio/video files** to subtitles or text, offline — see [Transcribe files](#transcribe-files).
    - **Manage transcription models** (list, download, remove) from the terminal — see [Manage models](#manage-models).

:::info[Works alongside the running app]
The `transcribe` binary never launches or interferes with a running Knowii Voice AI window — it does its work and exits. It is safe to use while the desktop app is open. Models downloaded with `transcribe models download` appear in the app, and vice-versa.
:::

## Accessing the CLI

### Windows

1. **Open Command Prompt** or **PowerShell**
2. **Navigate to** the application directory (where `knowii-voice-ai.exe` is installed)
3. **Run** the executable with CLI arguments:

```cmd
knowii-voice-ai.exe --log-level debug
```

**Typical installation path:**

```cmd
cd "%USERPROFILE%\AppData\Local\Programs\knowii-voice-ai"
knowii-voice-ai.exe --help
```

### macOS

1. **Open Terminal** (Applications > Utilities > Terminal)
2. **Navigate to** the application bundle
3. **Run** the executable with CLI arguments:

```bash
/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/knowii-voice-ai --log-level debug
```

Or create an alias for convenience:

```bash
alias knowii-voice-ai="/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/knowii-voice-ai"
knowii-voice-ai --help
```

### Linux

1. **Open your terminal**
2. **Navigate to** the installation directory or use the full path
3. **Run** the executable with CLI arguments:

```bash
knowii-voice-ai --log-level debug
```

Or if installed system-wide:

```bash
/usr/local/bin/knowii-voice-ai --help
```

## Available Commands

### Show Help

Display all available CLI options:

```bash
knowii-voice-ai --help
```

**Output:**

```
AI-powered voice transcription application

Usage: knowii-voice-ai [OPTIONS]

Options:
      --log-level <LEVEL>  Set the log level (trace, debug, info, warn, error, off) [default: info]
  -h, --help               Print help
```

File transcription and model management live in the separate **`transcribe`** binary (documented below), not in the desktop executable.

### Configure Log Level

The `--log-level` option controls how much information is written to the application logs.

**Syntax:**

```bash
knowii-voice-ai --log-level <LEVEL>
```

**Available log levels** (from most verbose to least):

| Level   | Description                                              | When to Use                                  |
| ------- | -------------------------------------------------------- | -------------------------------------------- |
| `trace` | Extremely detailed logs including internal state changes | Deep debugging, development                  |
| `debug` | Detailed diagnostic information                          | Troubleshooting issues, creating bug reports |
| `info`  | General informational messages (default)                 | Normal operation                             |
| `warn`  | Warning messages about potential issues                  | Monitoring for problems                      |
| `error` | Error messages only                                      | Production, minimal logging                  |
| `off`   | No logging                                               | Not recommended                              |

**Examples:**

```bash
# Run with debug logging (recommended for troubleshooting)
knowii-voice-ai --log-level debug

# Run with trace logging (very detailed)
knowii-voice-ai --log-level trace

# Run with minimal logging (errors only)
knowii-voice-ai --log-level error

# Run with default logging (info)
knowii-voice-ai
```

## The `transcribe` binary

`transcribe` is a self-contained CLI that decodes media in-process (mp4, mkv, mov, m4a, mp3, wav, ogg, opus, flac, and more — no `ffmpeg` required) and runs the same transcription engines as the desktop app.

It has these subcommands:

```
transcribe file <FILE>... --model <NAME_OR_PATH> [OPTIONS]   # transcribe to subtitles/text
transcribe models list|download|remove                        # manage models
transcribe completions <shell>                                # shell completions
transcribe --help                                             # full help
```

:::info[Building it]
`transcribe` is built from the project's `src-tauri` directory. The full build (which includes the Whisper engine) is `cargo build --release --bin transcribe`. A smaller, Tauri-free server build that omits Whisper is `cargo build --release --bin transcribe --no-default-features`. Building requires the Rust toolchain and the libopus development headers (`libopus-dev` on Debian/Ubuntu, `opus` via Homebrew on macOS).
:::

### Engines

`transcribe` supports multiple engines via `--engine`:

| Engine        | Notes                                                              |
| ------------- | ------------------------------------------------------------------ |
| `whisper`     | Timestamped segments — best for subtitles. **Desktop build only.** |
| `parakeet`    | Fast ONNX engine; supports `--int8` quantized inference.           |
| `moonshine`   | Ultra-fast ONNX engine; English + several other languages.         |
| `omnilingual` | Massive language coverage (1,600+); supports `--int8`.             |

When `--model` is a known model **id** (e.g. `whisper-large-v3`), the engine is detected automatically. When it is a raw path, pass `--engine` (defaults to `whisper` in the desktop build).

## Transcribe Files

```bash
transcribe file <FILE>... --model <NAME_OR_PATH> [OPTIONS]
```

**Options:**

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

When `--model` is an **id**, it is resolved against your downloaded models (the same ones the app uses). Download one first with [`transcribe models download`](#manage-models), or pass an explicit path.

**Examples:**

```bash
# Subtitle a video — writes "talk.srt" next to it
transcribe file talk.mp4 --model whisper-large-v3

# Several files at once, into a folder, as WebVTT
transcribe file *.mp4 --model whisper-medium --format vtt --output ./subs/

# Force English and print plain text to the terminal
transcribe file interview.m4a --model whisper-large-v3 --language en --format txt --output -

# Pipe audio in from stdin
cat note.ogg | transcribe file - --model whisper-medium --format txt

# Fast ONNX engine with quantization, from a model directory
transcribe file clip.mkv --model parakeet-tdt-0.6b-v3 --int8
```

:::tip[Quoting paths]
File names often contain spaces. Always quote them: `transcribe file "My Recording.mp4" --model whisper-large-v3`.
:::

## Manage Models

`transcribe models` lists, downloads, and removes transcription models from the terminal, using the same catalog and on-disk location as the app, so changes are shared in both directions.

### List models

```bash
transcribe models list
```

Add `--downloaded` to show only installed models, or `--json` for machine-readable output. Use `--models-dir <DIR>` to inspect a non-default location.

**Output:**

```
Models directory: /home/you/.local/share/knowii-voice-ai/models
ID                         ENGINE        SIZE  DL   NAME
parakeet-tdt-0.6b-v3       Parakeet      785M    -  Parakeet V3
whisper-tiny               Whisper        74M    -  Whisper - Tiny
whisper-large-v3           Whisper      2952M    ✓  Whisper - Large V3
...
```

The `DL` column shows `✓` for models that are downloaded.

### Download a model

```bash
transcribe models download whisper-large-v3
```

The download streams to disk with a progress indicator and is written atomically, so it is safe to run while the app is open. If the model is already present, the command is a no-op.

### Remove a model

```bash
transcribe models remove whisper-large-v3
```

This deletes the model's files from the models directory.

:::info[Model ids]
Use the `ID` column from `transcribe models list`. Whisper ids also accept a short form — `large-v3` resolves to `whisper-large-v3`.
:::

## Shell completions

Generate completions for your shell:

```bash
transcribe completions bash
transcribe completions zsh > ~/.zsh/completions/_transcribe
transcribe completions fish > ~/.config/fish/completions/transcribe.fish
```

## Common Use Cases

### Troubleshooting Issues

When experiencing problems with Knowii Voice AI:

1. **Close the application** if it's already running
2. **Open your terminal/command prompt**
3. **Start the application with debug logging:**

```bash
knowii-voice-ai --log-level debug
```

4. **Reproduce the issue** while the application is running
5. **Check the logs** in the [application data directory](./application-data)
6. **Share the logs** when reporting issues (see below)

### Creating Bug Reports

For the most helpful bug reports:

1. **Run with debug or trace logging:**

```bash
knowii-voice-ai --log-level debug
```

2. **Reproduce the issue**
3. **Collect the log files** from:
    - Windows: `C:\Users\<username>\AppData\Roaming\knowii-voice-ai\logs\`
    - macOS: `~/Library/Application Support/knowii-voice-ai/logs/`
    - Linux: `~/.local/share/knowii-voice-ai/logs/`

4. **Include the following files** in your bug report:
    - `knowii-voice-ai.log` - Main application log
    - `knowii-voice-ai-bootstrap.log` - Startup log
    - `knowii-voice-ai-crash.log` - If the app crashed

### Monitoring Application Behavior

For ongoing monitoring or development:

```bash
# Run with info level and pipe to a file
knowii-voice-ai --log-level info 2>&1 | tee knowii-debug.log

# Or use trace for maximum detail
knowii-voice-ai --log-level trace 2>&1 | tee knowii-trace.log
```

## Understanding Log Levels

### Default (Info)

**What you see:**

- Application startup/shutdown
- Model loading events
- Recording start/stop
- Transcription completion
- Major state changes

**Use for:**

- Normal operation
- General awareness of application activity

### Debug

**What you see (includes Info plus):**

- Detailed function calls
- State transitions
- Configuration changes
- Audio processing details
- Shortcut registration/triggering

**Use for:**

- Investigating unexpected behavior
- Understanding why something isn't working
- Creating detailed bug reports
- Support requests

### Trace

**What you see (includes Debug plus):**

- Internal state dumps
- Every audio buffer processed
- Detailed timing information
- Low-level system interactions
- Complete execution flow

**Use for:**

- Deep technical debugging
- Performance analysis
- Development troubleshooting
- **Warning:** Creates very large log files

### Warn/Error

**What you see:**

- Only warnings and errors
- No normal operation logs

**Use for:**

- Production environments
- Minimal log file size
- Monitoring for problems only

## Tips and Best Practices

:::tip[Quick Troubleshooting]
Always start with `--log-level debug` when investigating issues. It provides enough detail without overwhelming you with trace-level logs.
:::

:::caution[Log File Size]
Trace logging creates very large log files. Use it only when needed and clean up old logs regularly from the [application data directory](./application-data#log-files).
:::

:::info[Default Behavior]
Without the `--log-level` flag, the application runs with `info` level logging, which is appropriate for everyday use.
:::

## Related Documentation

- [Debug Settings](./debug-settings) - In-app debugging options
- [Application Data](./application-data) - Where logs are stored
- [Support](../support) - Get help with issues

## Need Help?

If CLI options aren't resolving your issue:

- Check the [FAQ](../faq) for common problems
- Email support@knowii.net with your log files
- Visit the [Knowii Community](https://www.knowii.net) for community support

When contacting support, **always include logs captured with `--log-level debug`** to help diagnose issues faster.
