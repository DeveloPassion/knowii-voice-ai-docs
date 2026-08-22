---
sidebar_position: 5
title: Record Your System Sound Tutorial
description: Capture what your computer plays (calls, meetings, videos) and turn it into text with Knowii Voice AI, either by recording a file and transcribing it, or by routing system audio into the app.
keywords:
    - system sound
    - system audio
    - loopback
    - record calls
    - record meetings
    - monitor source
    - stereo mix
    - voicemeeter
    - blackhole
    - transcribe meeting
---

# Record Your System Sound Tutorial

Your microphone hears you. It does not hear the other side of a call, the webinar you are attending, or the video you are watching. That audio lives inside your computer, and capturing it needs one extra step.

There are two ways to get there. Start with the first one: it is simpler and more reliable.

## Prerequisites

- Knowii Voice AI installed and set up (see the [Getting Started Tutorial](./getting-started))
- For the routing approach: a few minutes of one-time audio setup on your platform

## Approach 1: Record a file, then transcribe it (recommended)

Since 0.8.0, Knowii Voice AI [transcribes files](../user-guide/file-transcription). That turns system-sound capture into a two-step recipe with no audio plumbing:

1. **Record the audio with any recorder.**
    - Meeting apps first: Zoom, Teams, and most meeting tools have a built-in recording feature that captures all participants cleanly. Use it when you can.
    - Otherwise, a screen recorder with system audio does the job: OBS Studio (Windows, macOS, Linux), QuickTime with an audio-routing device (macOS), or GNOME's built-in screen recorder (Linux).
2. **Drop the recording onto Knowii Voice AI.** The transcription lands in your [history](../user-guide/history). Long recordings are handled fine; they are processed in segments cut at pauses in the speech.

This approach keeps a permanent audio copy, survives crashes and interruptions, and captures both sides of a call in one file. For recurring use, the [`transcribe` CLI](../user-guide/cli) batch-processes a whole folder of recordings in one command.

:::caution[Recording other people]
Calls and meetings involve other participants. Depending on where you live and work, recording may require their consent. Announce it, or use the meeting tool's built-in recording, which notifies everyone.
:::

## Approach 2: Route system audio into the app (live dictation from system sound)

If you want the normal dictation flow (shortcut, transcribe, paste) but fed by system audio instead of the microphone, give your system a "loopback" input device that carries what you hear, then select it as the recording device in **Settings → Audio → Recording Device** (see [Audio Settings](../user-guide/audio-settings)).

The setup is platform-specific and this is a one-time job.

### Linux (PipeWire / PulseAudio)

Every output device already has a hidden twin: a monitor source that carries whatever the device plays.

1. Leave Knowii Voice AI's recording device on **Default**.
2. Point the default input at the monitor of your output, then record:

```bash
# List sinks, note the name of your output device
pactl list short sinks

# Make its monitor the default input (example name shown)
pactl set-default-source alsa_output.pci-0000_00_1f.3.analog-stereo.monitor
```

3. When you are done, set your real microphone back as the default source (or use `pavucontrol`, Recording tab, while a recording is running).

### Windows

Two options, from simple to sturdy:

- **Stereo Mix**: some sound cards ship a "Stereo Mix" recording device. Enable it under Sound settings → Recording devices, then select it as the recording device in Knowii Voice AI. If your hardware does not offer it, use the next option.
- **VoiceMeeter** (free): a virtual mixer that exposes everything it hears as a recording device. Route your applications' output through VoiceMeeter, then select its virtual output as the recording device in Knowii Voice AI. This also lets you mix your microphone and the system sound into one stream, so both sides of a call are captured.

### macOS

macOS has no built-in loopback; install a free virtual device:

1. Install [BlackHole](https://existential.audio/blackhole/) (2ch is enough).
2. To keep hearing the audio yourself, create a **Multi-Output Device** in Audio MIDI Setup that includes both your speakers and BlackHole, and set it as the system output.
3. In Knowii Voice AI, select **BlackHole** as the recording device.

## Which approach when?

| Situation                                        | Use                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Meeting or call you want fully transcribed       | Approach 1, meeting tool's recorder, drop the file                     |
| Backlog of recordings, podcasts, videos          | Approach 1, with the [`transcribe` CLI](../user-guide/cli) for batches |
| Quick quote from a video, straight to your notes | Approach 2, dictation flow over the loopback device                    |
| You and the other side, mixed live               | Approach 2 with VoiceMeeter (Windows) or an aggregate device (macOS)   |

## Next Steps

- [File Transcription](../user-guide/file-transcription): everything the drop-to-transcribe flow can do
- [Audio Settings](../user-guide/audio-settings): recording device selection and the microphone test
- [Fix Your Vocabulary](./fix-your-vocabulary): make the transcripts of your calls use the right names and terms
