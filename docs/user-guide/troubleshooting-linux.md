---
sidebar_position: 7.2
title: Linux Troubleshooting
description: Fix a blank window, graphics glitches, or startup crashes when running Knowii Voice AI on Linux. Workarounds for NVIDIA drivers, virtual machines, and WebKit rendering issues.
keywords:
    - Linux
    - troubleshooting
    - blank window
    - white window
    - NVIDIA
    - crash on startup
    - WEBKIT_DISABLE_DMABUF_RENDERER
    - graphics glitches
    - virtual machine
---

# Linux Troubleshooting

Linux desktops come in many flavors, and a handful of graphics-driver combinations can trip up the engine Knowii Voice AI uses to draw its window. This page collects the fixes for the problems Linux users actually run into. For installation problems (missing dependencies, AppImage permissions, tray icons on GNOME), see the [Installation Guide](./installation#troubleshooting) instead.

## The window is blank, white, or full of glitches

If the app starts but the window is empty, white, black, or shows garbled graphics, the usual culprit is the DMA-BUF renderer in WebKitGTK — the component that draws the app's interface. It misbehaves on some setups, most often:

- NVIDIA graphics cards with the proprietary driver
- Virtual machines
- Hybrid graphics (laptop with two GPUs)

**The fix**: turn that renderer off with an environment variable. Try it once from a terminal:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1 knowii-voice-ai
```

If the window now renders correctly, make the fix permanent so it applies when you launch the app from your applications menu:

1. Copy the app's launcher into your personal applications folder:

    ```bash
    cp /usr/share/applications/Knowii\ Voice\ AI.desktop ~/.local/share/applications/
    ```

2. Open the copied file in a text editor and change the `Exec=` line to prepend the variable:

    ```ini
    Exec=env WEBKIT_DISABLE_DMABUF_RENDERER=1 knowii-voice-ai
    ```

3. Log out and back in (or run `update-desktop-database ~/.local/share/applications` if available). Your personal launcher now takes precedence over the system one.

**Still glitchy?** Some older or unusual graphics stacks need the compositing mode disabled as well. Try:

```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 knowii-voice-ai
```

You can combine both variables. These only affect how the interface is drawn — transcription quality and speed are untouched.

## The app crashes right after launching

- **Current versions handle GNOME automatically.** Older releases crashed at launch on GNOME Wayland (`Gdk-Message: Error 71 (Protocol error)`). Knowii Voice AI now detects GNOME and takes a compatible rendering path on its own — if you see this crash, [update to the latest version](./updating) first.
- **Check the Vulkan loader.** The app needs `libvulkan` to start at all. Installing the `.deb`/`.rpm` through your package manager pulls it in automatically, but offline installs can miss it — see [Linux: missing dependencies](./installation#linux-missing-dependencies-for-the-debrpm).
- **AppImage won't even start?** Make it executable and check FUSE — see [Linux: AppImage won't run](./installation#linux-appimage-wont-run).
- **Try the graphics workaround.** A crash at launch on NVIDIA or in a VM can have the same DMA-BUF cause as the blank window above — try `WEBKIT_DISABLE_DMABUF_RENDERER=1`.

## Gathering clues

When something misbehaves, the app's own logs usually say why:

- Launch the app from a terminal (`knowii-voice-ai`) and read what it prints.
- Check the log files in `~/.local/share/knowii-voice-ai/logs/` — or read them in the app under **Settings > Advanced > Application Logs**, where **Refresh** reloads them and **Copy** puts them on your clipboard for a bug report.

If you're stuck, [open an issue](https://github.com/DeveloPassion/knowii-voice-ai-docs/issues) and include the log lines around the failure, your distribution, desktop environment (GNOME, KDE, Hyprland, ...), and graphics card.
