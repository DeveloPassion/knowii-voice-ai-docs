---
sidebar_position: 7.6
title: Transcribe CLI Tool
description: Standalone command-line tool for transcribing audio files and managing speech recognition models without the GUI application.
keywords:
    - transcribe
    - CLI
    - command line
    - speech to text
    - audio transcription
    - model management
    - batch transcription
    - headless
---

# Transcribe CLI Tool

Knowii Voice AI includes a standalone `transcribe` CLI binary for transcribing audio files directly from the terminal. It works independently of the GUI application and is ideal for scripting, batch processing, CI/CD pipelines, and headless servers.

The CLI is included in every [Knowii Voice AI release](https://github.com/DeveloPassion/knowii-voice-ai/releases) alongside the desktop application.

## Commands

### `transcribe file` — Transcribe an Audio File

```bash
transcribe file [OPTIONS] <AUDIO_FILE>
```

**Arguments:**

| Argument       | Description                        |
| -------------- | ---------------------------------- |
| `<AUDIO_FILE>` | Path to the audio file to transcribe |

**Options:**

| Option              | Description                                                    | Default      |
| ------------------- | -------------------------------------------------------------- | ------------ |
| `--model-dir <DIR>` | Path to the model directory                                    | Auto-detected |
| `--int8`            | Use Int8 quantized model for faster CPU inference              | Off (FP32)   |
| `--engine <ENGINE>` | Transcription engine (`parakeet`, `whisper`, `moonshine`, `omnilingual`) | `parakeet`   |
| `--no-preprocess`   | Skip audio preprocessing (silence trimming + volume normalization) | Off (preprocessing enabled) |

**Examples:**

```bash
# Basic transcription
transcribe file recording.wav

# Use Int8 quantization for faster inference
transcribe file --int8 recording.mp3

# Use a specific model directory
transcribe file --model-dir /path/to/model recording.ogg

# Skip audio preprocessing
transcribe file --no-preprocess recording.wav
```

### `transcribe models list` — List Available Models

Shows all available models, their size, engine type, and download status.

```bash
transcribe models list
```

**Example output:**

```
ID                           NAME                             SIZE  ENGINE     DOWNLOADED
------------------------------------------------------------------------------------------
parakeet-tdt-0.6b-v3         Parakeet V3                     785 MB  parakeet   yes
parakeet-tdt-0.6b-v2         Parakeet V2                     697 MB  parakeet   no
whisper-tiny                 Whisper - Tiny                   74 MB  whisper    no
...
```

### `transcribe models download` — Download a Model

```bash
transcribe models download <MODEL_ID>
```

Downloads the specified model from HuggingFace. Progress is shown during download. Already-downloaded files are skipped.

```bash
# Download the default Parakeet V3 model
transcribe models download parakeet-tdt-0.6b-v3

# Download a lightweight Moonshine model
transcribe models download moonshine-tiny
```

### `transcribe models delete` — Delete a Model

```bash
transcribe models delete <MODEL_ID>
```

Removes a previously downloaded model from disk.

## Available Models

The CLI supports 21 models across 4 engine families:

### Parakeet (English — NVIDIA ONNX)

| Model ID                | Size     | Description                        |
| ----------------------- | -------- | ---------------------------------- |
| `parakeet-tdt-0.6b-v3`  | 785 MB   | State-of-the-art, fast and accurate |
| `parakeet-tdt-0.6b-v2`  | 697 MB   | Efficient, fast with good accuracy  |

### Whisper (Multilingual — ggml)

| Model ID                  | Size      | Description                  |
| ------------------------- | --------- | ---------------------------- |
| `whisper-tiny`             | 74 MB     | Very fast, basic accuracy    |
| `whisper-small`            | 465 MB    | Fast and quite accurate      |
| `whisper-medium`           | 1,463 MB  | Accurate but slow            |
| `whisper-large-v3-turbo`   | 1,549 MB  | Accurate but slow            |
| `whisper-large-v3`         | 2,952 MB  | Most accurate, very slow     |

### Whisper English-Only (ggml)

| Model ID            | Size      | Description                      |
| ------------------- | --------- | -------------------------------- |
| `whisper-tiny.en`    | 74 MB     | Fast, English-only               |
| `whisper-base.en`    | 141 MB    | Fast, English-only               |
| `whisper-small.en`   | 465 MB    | Fast and accurate, English-only  |
| `whisper-medium.en`  | 1,463 MB  | Accurate, English-only           |

### Moonshine (ONNX — Ultra-fast)

| Model ID              | Size    | Language    |
| --------------------- | ------- | ----------- |
| `moonshine-tiny`       | 107 MB  | English     |
| `moonshine-tiny-ar`    | 143 MB  | Arabic      |
| `moonshine-tiny-zh`    | 143 MB  | Chinese     |
| `moonshine-tiny-ja`    | 143 MB  | Japanese    |
| `moonshine-tiny-ko`    | 143 MB  | Korean      |
| `moonshine-tiny-uk`    | 143 MB  | Ukrainian   |
| `moonshine-tiny-vi`    | 143 MB  | Vietnamese  |
| `moonshine-base`       | 239 MB  | English     |

### Omnilingual (ONNX — 1,600+ Languages)

| Model ID               | Size    | Description                              |
| ----------------------- | ------- | ---------------------------------------- |
| `omnilingual-ctc-300m`  | 350 MB  | Fast multilingual, auto language detection |
| `omnilingual-ctc-1b`    | 985 MB  | Balanced accuracy, auto language detection |

## Audio Preprocessing

By default, the CLI preprocesses audio before transcription using **ffmpeg**:

1. **Silence trimming** — Removes leading silence that can confuse speech recognition
2. **Volume normalization** — Normalizes audio levels for consistent recognition quality
3. **Format conversion** — Converts to 16 kHz mono 16-bit PCM WAV (required by engines)

This significantly improves transcription accuracy for real-world recordings. Use `--no-preprocess` to disable this if your audio is already clean.

:::tip[ffmpeg Required]
The CLI requires **ffmpeg** to be installed for audio preprocessing and format conversion. Install it via your system package manager (`apt install ffmpeg`, `brew install ffmpeg`, etc.).
:::

## Model Storage

Models are stored in your system's data directory:

| Platform | Path                                                        |
| -------- | ----------------------------------------------------------- |
| Linux    | `~/.local/share/knowii-voice-ai/models/`                   |
| macOS    | `~/Library/Application Support/knowii-voice-ai/models/`    |
| Windows  | `C:\Users\<user>\AppData\Roaming\knowii-voice-ai\models\`  |

Models are organized hierarchically: `models/<family>/<variant>/<filename>`.

Models downloaded via the CLI are shared with the GUI application and vice versa.

## Examples

```bash
# Full workflow: download model, then transcribe
transcribe models download parakeet-tdt-0.6b-v3
transcribe file interview.mp3

# Quick transcription with Int8 quantization (faster on CPU)
transcribe file --int8 meeting-notes.wav

# Batch transcribe multiple files
for f in *.wav; do
  echo "=== $f ==="
  transcribe file --int8 "$f"
done

# Pipe output to a file
transcribe file --int8 lecture.mp3 > lecture.txt 2>/dev/null
```

## Related Documentation

- [Transcription Settings](./transcription-settings) — Configure transcription in the GUI
- [Application Data](./application-data) — Where models and data are stored
