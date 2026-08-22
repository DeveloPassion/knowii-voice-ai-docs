---
sidebar_position: 6
title: Dictate From a Button Tutorial
description: Trigger Knowii Voice AI from a panel button, a window manager keybinding, or a Stream Deck using the command-line flags, on Linux, Windows, and macOS.
keywords:
    - panel button
    - waybar
    - polybar
    - hyprland
    - keybinding
    - stream deck
    - toggle transcription
    - gnome shortcut
    - kde shortcut
    - automation
---

# Dictate From a Button Tutorial

The keyboard shortcut is the fast path to dictation. But sometimes you want a second trigger: a button in your status bar, a key on a Stream Deck, or a keybinding managed by your window manager instead of by the app.

All of these work through two flags on the app's executable:

```bash
knowii-voice-ai --toggle-transcription   # start recording; run again to stop and transcribe
knowii-voice-ai --cancel                 # discard whatever is in progress
```

The app only ever runs once. Launching it again with a flag hands the instruction to the running instance and exits, so a button press is instant, never spawns a second app, and never pulls the window in front of what you are doing. Full reference: [Controlling the desktop app](../user-guide/cli#controlling-the-desktop-app).

In this tutorial, you will wire dictation to whatever trigger you like. Pick your platform below.

## Prerequisites

- Knowii Voice AI installed, running, and transcribing (see the [Getting Started Tutorial](./getting-started))
- The `knowii-voice-ai` executable reachable from your trigger (on Linux deb/RPM installs it is on `PATH`; elsewhere use the full path from the [CLI page](../user-guide/cli#where-to-find-it))

## Hyprland: a window manager keybinding

Add to `~/.config/hypr/hyprland.conf`:

```ini
bind = SUPER, D, exec, knowii-voice-ai --toggle-transcription
bind = SUPER SHIFT, D, exec, knowii-voice-ai --cancel
```

Reload Hyprland and dictation is on Super+D, managed by the compositor rather than the app. This is handy on Wayland setups where you prefer all global keys in one place.

## Waybar: a panel button

Add a custom module to `~/.config/waybar/config`:

```json
"custom/dictate": {
    "format": "🎙",
    "tooltip": "Dictate with Knowii Voice AI",
    "on-click": "knowii-voice-ai --toggle-transcription",
    "on-click-right": "knowii-voice-ai --cancel"
}
```

Add `"custom/dictate"` to your modules list and restart Waybar. Left-click toggles dictation, right-click cancels. The same pattern works in Polybar, i3blocks, or any bar that runs a command on click.

## GNOME: a custom shortcut

1. **Settings → Keyboard → View and Customize Shortcuts → Custom Shortcuts**
2. Add a shortcut: name it "Dictate", command `knowii-voice-ai --toggle-transcription`, and bind a key combination
3. Optionally add a second one for `--cancel`

## KDE Plasma: a custom shortcut

1. **System Settings → Shortcuts → Custom Shortcuts** (or **Keyboard → Shortcuts** on newer Plasma)
2. Add a new command shortcut running `knowii-voice-ai --toggle-transcription`
3. Bind your key; repeat for `--cancel` if you want a discard key

## Stream Deck

Assign a **System → Open** action (or the "Open Application" equivalent in your Stream Deck software) to a key, pointing at the executable with the flag:

- **Windows**: `%LOCALAPPDATA%\Programs\knowii-voice-ai\knowii-voice-ai.exe --toggle-transcription`
- **macOS**: create a small shell script or an Automator app that runs `/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/knowii-voice-ai --toggle-transcription`, and point the key at it

One key to start, press again to stop. A second key with `--cancel` makes a nice "never mind" button.

## Windows: a desktop shortcut with a hotkey

1. Right-click the desktop → **New → Shortcut**
2. Target: `"%LOCALAPPDATA%\Programs\knowii-voice-ai\knowii-voice-ai.exe" --toggle-transcription`
3. In the shortcut's **Properties → Shortcut key**, assign a combination

Windows shortcut hotkeys can be slow to fire; for something snappier, an AutoHotkey one-liner does the same job:

```autohotkey
^!d::Run '"%LocalAppData%\Programs\knowii-voice-ai\knowii-voice-ai.exe" --toggle-transcription'
```

## macOS: Shortcuts or Raycast

- **Shortcuts app**: create a shortcut with a "Run Shell Script" action running the executable with `--toggle-transcription`, then assign it a keyboard shortcut or put it in the menu bar.
- **Raycast / Alfred**: add a script command with the same line; trigger it from the launcher or a hotkey.

## Good to know

- `--toggle-transcription` always behaves as a toggle, even with Push To Talk enabled in the app: a button has no key to hold, so press once to start, once to stop. Your in-app shortcut keeps its configured behavior.
- If the app is not running yet, the command starts it normally without recording; press your trigger again once it is up.
- These triggers coexist with the in-app shortcut. Nothing needs to be disabled.

## Next Steps

- [Command-Line Interface](../user-guide/cli): the full flag reference, including `--start-hidden` and `--no-tray` for autostart setups
- [General Settings](../user-guide/general-settings): the in-app shortcut and Push To Talk
- [Transcribe CLI Tutorial](./transcribe-cli): the other command-line side, transcribing files
