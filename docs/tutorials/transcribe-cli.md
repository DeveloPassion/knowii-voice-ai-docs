---
sidebar_position: 3
title: Transcribe CLI Tutorial
description: Step-by-step tutorial for the transcribe command-line tool. Turn audio and video files into subtitles or text, batch-process a whole folder, and manage models from your terminal.
keywords:
    - transcribe tutorial
    - transcribe CLI
    - command line transcription
    - subtitles from video
    - srt file
    - batch transcription
    - transcribe folder
    - meeting recording
    - podcast transcript
    - offline transcription
---

# Transcribe CLI Tutorial

The Knowii Voice AI desktop app is built around your microphone: you speak, it types. But a lot of the audio worth reading was never spoken into your mic. Meeting recordings. Interviews. Podcast episodes. That conference talk you saved two years ago and never rewatched.

`transcribe` is the tool for those. It's a command-line program that ships with Knowii Voice AI, runs entirely on your machine, and turns media files into subtitles or plain text.

In this tutorial, you will:

- Check that `transcribe` is available and download your first model
- Subtitle a single video file
- Get a plain-text transcript you can paste into your notes
- Transcribe a whole folder in one command
- Handle a recording in another language

Nothing here leaves your computer. No upload, no account, no per-minute billing.

## Prerequisites

- Knowii Voice AI installed (see the [Getting Started Tutorial](./getting-started))
- A terminal: Command Prompt or PowerShell on Windows, Terminal on macOS and Linux
- One audio or video file to practice on
- Enough disk space for a model (the one used below is about 3 GB; smaller ones exist)

## Step 1: Check that `transcribe` is there

`transcribe` is installed alongside the main Knowii Voice AI executable. Open your terminal and run:

```bash
transcribe --help
```

You should see the list of subcommands. If instead you get "command not found", your shell doesn't know where to look yet. Two ways to fix that:

**Call it by its full path:**

| Platform | Command                                                                |
| -------- | ---------------------------------------------------------------------- |
| Windows  | `"%LOCALAPPDATA%\Programs\knowii-voice-ai\transcribe.exe" --help`      |
| macOS    | `"/Applications/Knowii Voice AI.app/Contents/MacOS/transcribe" --help` |
| Linux    | The folder holding the `knowii-voice-ai` binary from your package      |

**Or make it permanent** by adding that folder to your `PATH`. On macOS, an alias in your `~/.zshrc` is quicker:

```bash
alias transcribe="/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/transcribe"
```

The rest of this tutorial assumes plain `transcribe` works.

## Step 2: Get a model

Transcription needs a model, and models are downloaded once and reused forever. See what is on offer:

```bash
transcribe models list
```

```
Models directory: /home/you/.local/share/knowii-voice-ai/models
ID                         ENGINE        SIZE  DL   NAME
parakeet-tdt-0.6b-v3       Parakeet      785M    -  Parakeet V3
whisper-tiny               Whisper        74M    -  Whisper - Tiny
whisper-large-v3           Whisper      2952M    -  Whisper - Large V3
...
```

A `✓` in the `DL` column means you already have it. If you have used the app before, one of these is probably already downloaded, and you can skip ahead.

For subtitles, use Whisper. It produces timestamped segments, which is exactly what a subtitle file is:

```bash
transcribe models download whisper-large-v3
```

That model is the most accurate, and the biggest. On a slower machine, `whisper-medium` or even `whisper-small` will do fine and finish sooner. Start with what your disk and patience allow. You can always download another one later.

:::tip[The app and the CLI share models]
Models you download here appear in the desktop app, and models you downloaded in the app work here. There's one folder, one catalog, no duplication.
:::

## Step 3: Subtitle your first video

Point `transcribe` at a file and name the model:

```bash
transcribe file talk.mp4 --model whisper-large-v3
```

Wait for it to finish, then look next to `talk.mp4`. There's now a `talk.srt`.

Open the video in VLC, mpv, or any player that reads subtitles, and the text appears in sync with the audio. Upload the pair to YouTube and the captions come along.

Notice what you didn't have to do: no format conversion, no `ffmpeg`, no extracting the audio track first. `transcribe` reads mp4, mkv, mov, m4a, mp3, wav, ogg, opus, flac, and more, directly.

## Step 4: Get plain text instead

Subtitles are great for video. For notes, you want prose without the timestamps. That's the `--format` flag:

```bash
transcribe file interview.m4a --model whisper-large-v3 --format txt
```

This writes `interview.txt`. To skip the file entirely and print straight to your terminal, send the output to `-`:

```bash
transcribe file interview.m4a --model whisper-large-v3 --format txt --output -
```

Which means you can pipe it anywhere:

```bash
# Straight into your clipboard on Linux
transcribe file interview.m4a --model whisper-large-v3 --format txt --output - | wl-copy

# Or into a note in your vault
transcribe file interview.m4a --model whisper-large-v3 --format txt --output - > ~/notes/interview.md
```

This is where a CLI earns its keep. The transcript becomes text in a pipeline, and every tool you already use works on it.

## Step 5: Do a whole folder at once

One file is a demo. A backlog is the real use case.

```bash
transcribe file *.mp4 --model whisper-large-v3 --format vtt --output ./subs/
```

Every `.mp4` in the current folder gets transcribed, and the results land in `./subs/`. Start it, go make coffee, come back to a folder full of subtitles.

Fifty meeting recordings you never had time to review become fifty searchable text files while you're doing something else.

## Step 6: Work in another language

Whisper detects the language on its own, so a French recording usually just works:

```bash
transcribe file entretien.mp3 --model whisper-large-v3
```

If detection guesses wrong, or if the recording opens with silence and gives it nothing to go on, say it outright:

```bash
transcribe file entretien.mp3 --model whisper-large-v3 --language fr
```

And when you want the English version of a non-English recording, ask for a translation:

```bash
transcribe file entretien.mp3 --model whisper-large-v3 --translate
```

You get English subtitles from French audio, in one pass.

:::tip[Feed it your vocabulary]
Recordings full of product names, acronyms, or technical terms transcribe better if you tell the model what to expect:

```bash
transcribe file standup.m4a --model whisper-large-v3 --initial-prompt "Kubernetes, Grafana, Prometheus, OTEL"
```

The prompt biases the model's vocabulary. Nothing else costs so little for so much accuracy.
:::

## Step 7: Make it faster

Whisper is accurate and not especially quick. When you care more about speed, switch engines:

```bash
transcribe file clip.mkv --model parakeet-tdt-0.6b-v3 --int8
```

Parakeet is a much faster ONNX engine, and `--int8` runs it quantized, faster still. Moonshine is faster again for short English clips.

The trade-off is real: Whisper gives you the best timestamps and the best accuracy on hard audio, which is why it stays the default for subtitles. Use Parakeet or Moonshine when you want a rough transcript of a long recording and you want it now.

## What you can build from here

Once transcription is one command, it slots into everything else:

- **A shell loop** that transcribes every new recording in a watched folder
- **A cron job** that processes yesterday's meetings overnight
- **A note-taking pipeline** that drops transcripts straight into your vault, ready to be searched and linked
- **A subtitle step** in your video editing workflow, before anything is published

Start simple. Transcribe one file, see the output, then automate the part you found yourself repeating. The tool rewards that order.

## Next Steps

- [CLI reference](../user-guide/cli): every flag, every subcommand
- [Transcription Settings](../user-guide/transcription-settings): how models and engines behave in the app
- [Getting Started Tutorial](./getting-started): the desktop dictation basics
- [FAQ](../faq): common questions

Questions? Email support@knowii.net or join the [Knowii Community](https://www.knowii.net).
