---
sidebar_position: 6
title: Advanced Settings
description: Fine-tune Knowii Voice AI with advanced configuration options including application behavior, performance settings, history management, and overlay customization.
keywords:
    - advanced settings
    - configuration
    - performance
    - customization
    - overlay
    - startup options
    - history settings
---

# Advanced Settings

Everything here is optional. You can run Knowii Voice AI for months without opening this page. Come back when you want the app to start with your session, when the overlay lands in the wrong place, when pasting misbehaves on Linux, or when you need the logs.

## Application Behavior

Control how Knowii Voice AI starts and runs:

### Start Hidden

**Location**: Settings > Advanced

- Launch directly to system tray without showing the main window
- Useful if you want the app running silently in the background
- The app will be fully functional and ready to use via the system tray icon

### Show Tray Icon

**Location**: Settings > Advanced

- Show or hide the icon in your system tray (near the clock). On by default
- Turning it off removes the icon immediately — no restart needed — and turning it back on restores it
- With the tray icon hidden, the app protects you from losing the window: closing it **minimizes** instead of hiding it, "Start Hidden" is ignored at the next launch (the window always appears), and you can quit from the button at the bottom of the main window
- Useful for minimal setups — for example a status bar that triggers dictation through the [CLI](./cli#control-a-running-app) instead of the tray

### Launch on Startup

**Location**: Settings > Advanced

- Automatically start when you log in to your computer
- App will be ready to use immediately when you need it
- Combined with "Start Hidden", the app starts with your session and stays out of sight

### Check for Updates Automatically

**Location**: Settings > Advanced

- When on (the default), the app looks for a new version once at startup
- Turn it off and the app makes no automatic network requests at all — checking for updates is its only recurring one
- You can always check manually from the system tray menu, the status bar, or **Settings > About**, and [update by hand](./updating#manually) whenever you like

## Display Options

### Appearance

**Location**: Settings > Advanced > Display

Choose how Knowii Voice AI looks:

- **Dark** (default): the classic look the app has always had
- **Light**: a bright variant of the interface
- **System**: follows your operating system's theme, switching automatically when it changes

The choice applies immediately to the app window and the recording overlay.

### Overlay Enabled

**Location**: Settings > Advanced > Display

Enable or disable the visual overlay that provides feedback during recording and transcription:

- **Enabled** (default): Shows the overlay during recording and transcription
- **Disabled**: Hides the overlay completely
    - Useful during screen recordings, presentations, or screen sharing
    - No visual indication will appear during transcription

The overlay displays:

- Recording indicator when you're actively recording
- Transcription progress when processing
- Cancel option to abort the current operation

### Overlay Position

**Location**: Settings > Advanced > Display

_Only available when Overlay Enabled is turned on_

Choose where the recording overlay appears on your screen:

**Center Positions**:

- **Bottom Center** (default): Status shown at the bottom center of your screen
- **Top Center**: Status shown at the top center of your screen

**Corner Positions**:

- **Top Left**: Status shown in the top-left corner
- **Top Right**: Status shown in the top-right corner
- **Bottom Left**: Status shown in the bottom-left corner
- **Bottom Right**: Status shown in the bottom-right corner

The overlay keeps clear of taskbars, menu bars, and panels, so it never lands on top of something else.

## Transcription Options

### Translate to English

**Location**: Settings > Advanced > Transcription

- Automatically translate speech from other languages to English
- Only available with Whisper models (not supported by Parakeet)
- Useful for multilingual workflows where you speak in one language but need English output
- Examples: Speaking French but need English documentation, translating meeting notes, etc.

**Note**: Translation requires more processing time than standard transcription.

### Instant Transcription (Experimental)

**Location**: Settings > Advanced > Transcription

- Off by default. When on, Knowii Voice AI transcribes your speech at natural pauses **while you are still talking**, instead of waiting until you stop.
- When you stop, only the last few words still need processing, so your text appears almost instantly — even after a long dictation.
- Nothing is pasted early: the text still arrives in one piece, exactly like before. The recording saved to your history is also unchanged.
- Works with every model.
- Trade-off: the audio is cut at pauses, so the model occasionally loses a bit of context across a pause. If you notice odd wording around pauses, turn it off — the default whole-recording mode is unchanged.

**Tip**: this shines on long dictations. A two-minute thought that used to take several seconds to transcribe is ready the moment you release the key.

### Transcription Hook (Advanced)

**Location**: Settings > Advanced > Transcription

- Off by default. When on, every transcription is handed to a small program **you** write before it is pasted — your program receives the text and whatever it prints back is what gets pasted (and saved to History).
- This is a power-user feature in the spirit of git hooks. A few things people use it for:
    - Clean up the text your way: strip trailing periods, lowercase the first letter, expand personal shorthand
    - Pipe the text through a local AI (like Ollama) to rewrite, translate, or summarize it
    - Send the text somewhere else — open a link with it, call a webhook, append it to a file
- **Setting it up**: turn the toggle on, click **Open Hooks Folder**, and create a script named `transcription` in that folder (on Windows: `transcription.bat`, `transcription.cmd`, or `transcription.exe`). On Linux and macOS, make it executable (`chmod +x transcription`). The script reads the text from standard input and prints the replacement text to standard output.
- **Your words are safe**: if the script is missing, crashes, or takes longer than 30 seconds, the original transcription is pasted unchanged. If the app window is open you'll see an error explaining what went wrong; otherwise the reason is recorded in **Settings > Advanced > Application Logs**.
- If your script prints nothing (and exits successfully), nothing is pasted and nothing is saved — useful when the script delivers the text somewhere itself.

Example script (Linux/macOS) that removes a trailing period:

```bash
#!/bin/sh
sed 's/\.$//'
```

**Privacy note**: the hook runs entirely on your computer. Knowii Voice AI never sends your text anywhere — but your own script can, so only use scripts you trust.

## Paste Options

### Paste Method

**Location**: Settings > Advanced > Paste

Controls how transcribed text is inserted into applications:

- **Clipboard (Ctrl+V)** (default on Windows/macOS): Simulates Ctrl/Cmd+V keystrokes to paste
    - Most compatible with applications
    - Works in virtually all text fields
    - Temporarily modifies clipboard (see Clipboard Handling below for behavior options)

- **Clipboard (Shift+Insert)** (Windows/Linux only): Simulates Shift+Insert keystrokes to paste
    - More universal for terminal applications
    - Works better in some Linux/X11 applications
    - Alternative to Ctrl+V for applications that don't respond well to it
    - Temporarily modifies clipboard (see Clipboard Handling below for behavior options)

- **Direct** (default on Linux): Types the text straight into the focused field
    - Bypasses clipboard completely
    - On Linux, uses your desktop's typing tool (`wtype`/`kwtype`/`xdotool`) for reliable results. See **Typing Tool** below
    - Useful for troubleshooting clipboard-related issues

**When to change:**

- If transcriptions aren't being pasted correctly
- If clipboard conflicts occur with other applications
- For troubleshooting pasting issues in specific applications
- If using terminal applications on Linux/Windows (try Shift+Insert method)

### Typing Tool (Linux only)

**Location**: Settings > Advanced > Paste

Chooses which system tool Knowii Voice AI uses to type transcriptions and send paste shortcuts on Linux. This matters because typing text reliably differs between Wayland and X11.

- **Auto** (default): Automatically picks the best tool available on your system: `wtype` (or `kwtype` on KDE) on Wayland, `xdotool` on X11.
- **wtype / kwtype / dotool / ydotool / xdotool**: Force a specific tool.

The dropdown **only lists the tools actually installed** on your computer. If your list shows just "Auto", install one of the tools (see the [Installation guide](./installation#linux-reliable-text-output)). Otherwise the app falls back to a built-in method that can be unreliable on Wayland (text may fail to appear).

**When to change:**

- If dictated text doesn't appear in your apps on Linux
- If you have multiple tools installed and want to force a particular one

### Clipboard Handling

**Location**: Settings > Advanced > Paste

Control what happens to your clipboard after transcription:

- **Don't Modify Clipboard** (default): Preserves your current clipboard contents
    - Transcription is pasted but your clipboard remains unchanged
    - Useful if you have something important copied that you don't want to lose
    - **Note**: this works for text. If your clipboard holds an image or files, it can't be put back after a clipboard-based paste, so the transcription stays on the clipboard instead

- **Copy to Clipboard**: Leaves transcription in clipboard after pasting
    - Allows you to paste the same transcription multiple times
    - Useful for repeated pasting or when you want to keep the text in clipboard

### Trailing Space After Paste

**Location**: Settings > Advanced > Paste

**Default**: Off

Append a space after each pasted transcription. Turn this on if you dictate in several takes and your snippets end up glued together — each new dictation then lands one space after the previous one.

### Auto-Submit After Paste

**Location**: Settings > Advanced > Paste

**Default**: Off

Press the submit key automatically right after your transcription is pasted — dictate a message and it sends itself. Made for chat apps and AI assistants: speak, release the shortcut, and the message goes out with no keyboard touch.

When enabled, a **Submit Key** dropdown appears:

- **Enter** (default): Submits in most chat apps
- **Ctrl+Enter** (Cmd+Enter on macOS): For apps where plain Enter adds a new line instead of sending

:::caution
With this on, every dictation is sent immediately — there is no moment to review or edit the text first. Keep it off for dictating into documents or emails.
:::

## Input Devices (Linux only)

**Location**: Settings > Advanced

### Disable Shortcut Suppression

**Default**: Off

On Linux, Knowii Voice AI listens to your keyboard directly so your shortcut works in every app. While listening, it takes temporary exclusive control of the devices it recognises as keyboards, so your shortcut keys don't also land in whatever you're typing in.

On rare hardware (usually gaming mice and fancy keyboards, which present themselves as a keyboard _and_ a mouse through the same connection) this can affect the wrong device.

Turn this **on** if, while the app is running:

- the mouse pointer stops moving but clicks still work,
- a key, media button, or scroll wheel stops responding, or
- trackpad gestures stop working.

With it on, your shortcut still works and your devices are left completely alone. The trade-off is that the shortcut's keys also reach the app you're typing in, so you may see a stray character or hear a beep when you trigger it.

:::note
This setting takes effect the next time you start the app.
:::

:::tip
Most people never need this. Devices that report pointer movement are already left alone automatically. See [My mouse or keyboard behaves strangely while the app is running](../faq#my-mouse-or-keyboard-behaves-strangely-while-the-app-is-running-linux) in the FAQ.
:::

## History Management

**Location**: Settings > Advanced

Control how transcriptions are saved and managed:

### Enable History

- Stores transcriptions in the database
- Allows you to view, search, and manage past transcriptions
- Access history from the History tab in the main window
- When disabled, transcriptions are not saved anywhere

### Save Transcriptions to Disk

_Requires History to be enabled_

- Saves transcription text as markdown files
- Files organized by date in `history/YYYY/MM/` folders
- Example: `2025-01-15-14_30_45 - Transcription.md`
- Useful for backups or accessing transcriptions outside the app

### Save Audio to Disk

_Requires History to be enabled_

- Saves audio recordings as WAV files
- Allows playback of original recordings from history
- Files stored alongside transcriptions: `2025-01-15-14_30_45 - Audio.wav`
- Warning: Audio files can consume significant disk space

### Keep Recordings

_Requires History and "Save Audio to Disk" to be enabled_

- Automatically deletes audio recordings older than the chosen window: **Forever** (the default — nothing is ever deleted), 1 day, 1 week, 1 month, or 3 months
- Only the audio files are removed — the transcription text and the history entry stay
- **Starred entries are never touched**: star a transcription to keep its recording no matter what
- A privacy and disk-space win: recordings are by far the largest files the app produces
- Cleanup runs at startup, after each transcription, and immediately when you pick a shorter window

### Open Recordings Folder

_Requires History and "Save Audio to Disk" to be enabled_

- Opens the folder where your audio recordings are stored in your file manager
- Respects a custom audio folder if you configured one; otherwise opens the default history folder

### Limit History

_Requires History to be enabled_

- Keeps only the most recent unstarred transcriptions
- Default limit: 100 most recent entries
- Starred transcriptions are always kept regardless of this setting
- Helps manage disk space automatically
- Older unstarred transcriptions are automatically deleted

### Clear All History

_Requires History to be enabled_

**Warning**: This action is permanent and cannot be undone!

- Permanently deletes all transcriptions (including starred entries)
- Deletes all associated files (text and audio)
- Clears the database completely
- Use with caution, and consider backing up your data first

## Performance Settings

### Model Unload Timeout

**Location**: Settings > Advanced > Performance

Control when the AI model is automatically unloaded from memory to free up system resources:

- **Never**: Model stays loaded in memory (fastest, uses more RAM/VRAM)
- **Immediately**: Unload right after each transcription (slowest, minimal memory usage)
- **After 2/5/10/15 minutes**: Balanced options
- **After 1 hour**: For regular but not constant use

**Recommendations**:

- **Never**: If you use transcription frequently throughout the day and have sufficient RAM
- **After 2-5 minutes**: Balanced option for moderate use
- **After 10-15 minutes**: Good for occasional use
- **Immediately**: Only if you're very constrained on memory

When a model is unloaded, the next transcription will have a delay while the model reloads.

:::info
The AI model now stays ready throughout a recording. Even if you've chosen to unload the model quickly, it won't be unloaded in the middle of a recording, so your transcription is never interrupted while you're speaking.
:::

### Use GPU for Whisper

**Location**: Settings > Advanced > Performance

When you use a Whisper model, Knowii Voice AI normally runs it on your graphics card for faster transcription. If your graphics card or its drivers cause trouble — crashes, garbled text, or transcriptions that never finish — turn this off to run Whisper on your processor instead. Transcription becomes slower but very reliable.

The change applies the next time the model loads. To apply it right away, switch to another model and back, or restart the application.

:::tip
Leave this on unless you are experiencing problems. On machines without a compatible graphics card, Knowii Voice AI already falls back to the processor automatically.
:::

## Application Logs

**Location**: Settings > Advanced > Application Logs

View the most recent application activity directly inside the app, with no need to find log files on your computer:

- **Refresh**: Loads the latest log lines
- **Copy**: Copies the logs to your clipboard so you can paste them into an email or a bug report

This is the fastest way to gather information when [reporting a problem](../support#copy-logs-from-inside-the-app-easiest). The logs never contain the words you dictated. They only describe what the app is doing.

## Tips

- Start with default settings and adjust based on your needs
- Monitor disk space if saving audio files
- Use "Limit History" to prevent excessive disk usage
- Combine "Start Hidden" and "Launch on Startup" so the app is always ready and never in the way
- Disable the overlay during screen recordings, presentations, or screen sharing
- Use corner positions for the overlay if center positions interfere with your work

## Related Documentation

- [Basic Usage](./basic-usage): learn the fundamentals
- [Application Data](./application-data): where data is stored
- [FAQ](../faq): common questions

## Need Help?

If you have questions about advanced settings, visit the [Support](../support) page.
