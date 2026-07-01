---
sidebar_position: 1
title: Installation Guide
description: Learn how to install Knowii Voice AI on Windows, macOS, and Linux. Complete setup instructions, system requirements, and troubleshooting for your local voice transcription app.
keywords:
    - installation
    - setup
    - download
    - Windows
    - macOS
    - Linux
    - system requirements
    - GPU acceleration
    - Vulkan
    - install guide
---

# Installation

## System Requirements

### Required Hardware

- **RAM**: 1GB minimum with Moonshine models, 4GB+ recommended for Whisper/Parakeet models
- **Disk Space**: 100MB to 10GB depending on chosen AI model(s)
    - Moonshine models: 100-250 MB (ideal for low-end hardware)
    - Whisper/Parakeet models: 500 MB to 10 GB
- **GPU** (optional): Vulkan-compatible GPU for faster transcription (most modern NVIDIA, AMD, and Intel GPUs)

:::tip Low-End Hardware?
If you have limited RAM or an older computer, try the **Moonshine models**. They use under 1GB of memory and provide fast transcriptions with minimal resource usage. Perfect for laptops and older systems.
:::

### Windows

- Windows 10 or Windows 11

### macOS

- macOS 10.13 (High Sierra) or later
- Both Apple Silicon (M1 and newer) and Intel Macs are supported

### Linux

- A modern 64-bit distribution (Ubuntu 22.04+, Fedora, and similar)
- Both Wayland (including Hyprland) and X11 are supported

## Download

Download the latest version of Knowii Voice AI from your [Gumroad Library](https://gumroad.com/library) or from the [Knowii Community](https://www.knowii.net) website, depending on where you bought it from.

Choose the download for your platform:

- **Windows**: `.exe` or `.msi` installer
- **macOS**: `.dmg` - pick the one for your Mac (`aarch64` for Apple Silicon, `x64` for Intel)
- **Linux**: `.deb` (Debian/Ubuntu), `.rpm` (Fedora/RHEL), or `.AppImage` (portable, runs on most distributions)

## Installation Steps

### Windows

1. **Download** the installer (`.exe` or `.msi`)
2. **Run** the installer
3. Follow the installation wizard
4. **Launch** Knowii Voice AI from the Start Menu or desktop shortcut

### macOS

1. **Download** the `.dmg` for your Mac (`aarch64` for Apple Silicon, `x64` for Intel)
2. **Open** the `.dmg` and drag **Knowii Voice AI** into your **Applications** folder
3. **Launch** it from Applications or Spotlight

Knowii Voice AI is **signed and notarized by Apple**, so it opens without security warnings.

### Linux

Choose the package that matches your distribution:

- **Debian/Ubuntu** (`.deb`):

    ```bash
    sudo apt install ./Knowii.Voice.AI_<version>_amd64.deb
    ```

- **Fedora/RHEL** (`.rpm`):

    ```bash
    sudo dnf install ./Knowii.Voice.AI-<version>-1.x86_64.rpm
    ```

- **Any distribution** (`.AppImage`) - no installation needed, just make it executable and run it:

    ```bash
    chmod +x Knowii.Voice.AI_<version>_amd64.AppImage
    ./Knowii.Voice.AI_<version>_amd64.AppImage
    ```

After installing, launch Knowii Voice AI from your application menu (or run the AppImage directly).

### Linux: enable the global shortcut (keyboard access)

On Linux, Knowii Voice AI detects its global shortcut by reading your keyboard directly. This works on **every desktop** — GNOME, KDE, Hyprland, and X11 — but it needs read access to your input devices, which most distributions don't grant by default. This is a **one-time setup**:

1. Add yourself to the `input` group:

    ```bash
    sudo usermod -aG input $USER
    ```

2. **Log out and back in** (or reboot) for the change to take effect.

Without this step the app still runs, but pressing your shortcut won't do anything.

:::note Your privacy is protected
This access simply lets the app watch for your shortcut key **locally on your machine**. It only reacts to the shortcut you configured, never records or stores your keystrokes, and never sends anything over the network. As always, everything stays on your computer.
:::

### Linux: reliable text output (recommended)

To type transcriptions into your other apps, Knowii Voice AI uses your desktop's standard input tools. For the most reliable results — especially on Wayland — install one of these (most distributions have them in their package manager):

- **Wayland** (GNOME, Hyprland, …): install **`wtype`**. On **KDE Plasma**, install **`kwtype`** instead.
- **X11**: install **`xdotool`**.

The app auto-detects and uses whichever is available. You can also choose a specific tool with the **Typing Tool** setting (Settings → Advanced → Paste). If none are installed, it falls back to a built-in method that can be unreliable on Wayland.

## First Launch

On first launch, Knowii Voice AI will:

1. **Show** the first-time setup wizard
2. **Guide you** through downloading your first AI transcription model (required)
3. **Configure** basic settings
4. **Start** running in your system tray

No account or registration is required!

## GPU Acceleration (Optional)

Knowii Voice AI supports **Vulkan** out of the box for GPU-accelerated transcription. Vulkan works with most modern GPUs (NVIDIA, AMD, Intel) and is automatically detected and enabled if available.

**CUDA support** for NVIDIA GPUs is planned for a future release. See the [Roadmap](../roadmap) for more details.

## Troubleshooting

### Windows: Installer is blocked

Right-click the installer, select "Properties", and check "Unblock" before running.

### Windows: "Windows protected your PC" warning

When launching the installer, Windows SmartScreen may display a warning: "Windows protected your PC". This is normal for new applications that don't yet have a large number of downloads.

To proceed with installation:

1. Click on **"More info"**

![Windows SmartScreen - More info](/img/screenshots/install/2025-11-11-install-01.png)

2. Click on **"Run anyway"**

![Windows SmartScreen - Run anyway](/img/screenshots/install/2025-11-11-install-02.png)

The installer will then launch normally. This warning appears because the application doesn't have an expensive code signing certificate yet, not because it's unsafe.

### Windows: Installing to Program Files

If you want to install Knowii Voice AI in the Program Files folder, you must run the installer as administrator:

1. Right-click the installer file
2. Select "Run as administrator"
3. Follow the installation wizard

Alternatively, you can install to your user directory (recommended), which doesn't require administrator privileges.

### macOS: "Knowii Voice AI can't be opened"

Because the app is notarized by Apple, this normally won't happen. If you do see a Gatekeeper prompt (for example after downloading through certain browsers), right-click (or Control-click) the app in Applications and choose **Open**, then confirm. You only need to do this once.

### Linux: AppImage won't run

- Make sure the file is executable: `chmod +x Knowii.Voice.AI_<version>_amd64.AppImage`
- If you get a FUSE error, install FUSE 2: `sudo apt install libfuse2` (Debian/Ubuntu) or the equivalent for your distribution

### Linux: missing dependencies for the .deb/.rpm

If the package manager reports missing dependencies, install them and retry. Knowii Voice AI relies on WebKitGTK, which most desktop distributions provide (`libwebkit2gtk-4.1-0` on Debian/Ubuntu).

### Application doesn't start

1. Check system requirements
2. Verify the application has permission to run
3. Check system logs for error messages

## Updating

To update Knowii Voice AI to a newer version, see the [Updating Guide](./updating) for instructions on both automatic and manual updates.

## Next Steps

Once installed, proceed to the [Getting Started Tutorial](../tutorials/getting-started) to learn how to use Knowii Voice AI.
