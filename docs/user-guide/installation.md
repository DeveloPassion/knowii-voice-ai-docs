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
- The `.deb`/`.rpm` pull in everything needed automatically (including the tray library). Two extras depend on your setup:
    - **GNOME users:** install the AppIndicator extension so the tray icon shows — see [no tray icon on GNOME](#linux-no-tray-icon-on-gnome).
    - **GPU acceleration:** needs a Vulkan driver — see [GPU Acceleration](#gpu-acceleration-optional). (Optional; the app runs on the CPU otherwise.)

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

### Linux: which package should I choose?

**Prefer the native package for your distribution (`.deb` or `.rpm`) whenever one exists.** It configures everything automatically — including keyboard access and reliable text output on GNOME/Wayland — with no manual steps. Use the AppImage only when there's no native package for your distribution.

| Your situation                                     | Best choice         | Why                                                                                         |
| -------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Debian, Ubuntu, Linux Mint, Pop!\_OS               | **`.deb`**          | Sets up keyboard access and text output automatically — nothing to configure                |
| Fedora, RHEL, CentOS, openSUSE                     | **`.rpm`**          | Same automatic setup as the `.deb`                                                          |
| Arch, NixOS, or any distro without a `.deb`/`.rpm` | **AppImage**        | Portable and runs anywhere — but needs a one-time manual setup on GNOME/Wayland (see below) |
| You're on **GNOME (Wayland)** and want zero setup  | **`.deb` / `.rpm`** | These install and manage everything needed to type your transcriptions, with no prompts     |

:::tip GNOME/Wayland users
If you can install the `.deb` or `.rpm`, do — they make text output work seamlessly on GNOME with no permission prompts. The portable AppImage can't configure your system, so on GNOME it needs the one-time setup described under [reliable text output](#linux-reliable-text-output).
:::

### Linux: enable the global shortcut (keyboard access)

On Linux, Knowii Voice AI detects its global shortcut by reading your keyboard directly. This works on **every desktop** — GNOME, KDE, Hyprland, and X11 — but it needs read access to your input devices.

- **`.deb` / `.rpm`**: nothing to do. The package configures this automatically during installation, and it takes effect immediately — **no logout or reboot required**. Just install and run.
- **AppImage**: a portable file can't configure your system, so do this **one-time** step manually:
    1. Add yourself to the `input` group:

        ```bash
        sudo usermod -aG input $USER
        ```

    2. **Log out and back in** (or reboot) for the change to take effect.

    (Or simply install the `.deb`/`.rpm` instead, which needs no setup.)

Without keyboard access the app still runs, but pressing your shortcut won't do anything.

:::note Your privacy is protected
This access simply lets the app watch for your shortcut key **locally on your machine**. It only reacts to the shortcut you configured, never records or stores your keystrokes, and never sends anything over the network. As always, everything stays on your computer.
:::

### Linux: reliable text output

To type transcriptions into your other apps, Knowii Voice AI uses the right method for your desktop automatically.

#### On GNOME (Wayland) — built in

On GNOME, Knowii Voice AI types your transcriptions itself, directly and reliably:

- It types out your text **matching your keyboard layout** — AZERTY, QWERTZ, Dvorak, and others all work correctly.
- It works everywhere, **including terminals**.
- There is **no "Allow Remote Interaction" (Remote Desktop) prompt** to click.
- Nothing extra to install — **no `ydotool`, no background daemon**.

The only thing it needs is permission to use your system's virtual keyboard (`/dev/uinput`):

- **`.deb` / `.rpm`**: **automatic — nothing to do.** The package grants this access for you during installation. Just install and run.
- **AppImage**: a portable file can't configure your system, so run this **one-time** command to grant the access, then **log out and back in once**:

    ```bash
    echo 'KERNEL=="uinput", SUBSYSTEM=="misc", OPTIONS+="static_node=uinput", TAG+="uaccess"' \
      | sudo tee /etc/udev/rules.d/72-knowii-voice-ai-uinput.rules
    sudo udevadm control --reload-rules
    sudo udevadm trigger --subsystem-match=misc --action=change
    ```

:::tip The easiest option on GNOME
Installing the **`.deb` or `.rpm`** grants everything automatically — no commands to run. Choose it over the AppImage if your distribution supports it.
:::

#### On KDE, Hyprland/Sway, and X11 — install your desktop's tool

On these desktops, Knowii Voice AI uses your desktop's standard input tool. Install the one for **your desktop** with your package manager (`dnf`, `apt`, `pacman`, `zypper` — the package name is the same everywhere):

| Desktop                       | Install   | One-time setup              |
| ----------------------------- | --------- | --------------------------- |
| **X11** (any desktop)         | `xdotool` | None — works out of the box |
| **KDE Plasma** (Wayland)      | `kwtype`  | None                        |
| **Hyprland / Sway** (wlroots) | `wtype`   | None                        |

The app auto-detects installed, compatible tools (it won't offer tools that can't work on your desktop). You can also choose a specific one under **Settings → Advanced → Paste → Typing Tool**. If none is installed, Knowii Voice AI shows a warning (and a banner in General and Advanced settings) with the exact command for your system.

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

:::note Linux: install a Vulkan driver for GPU acceleration
GPU acceleration on Linux needs a **Vulkan driver** (an ICD) for your GPU. The `.deb`/`.rpm` already pull in `mesa-vulkan-drivers` for you as a recommended dependency, so most installs are ready to go. You only need to install a driver by hand if you used the **AppImage**, skipped recommended dependencies, or run an **NVIDIA** GPU:

- **Fedora / RHEL**: `sudo dnf install mesa-vulkan-drivers` (Intel/AMD). NVIDIA users get Vulkan from the NVIDIA driver package.
- **Debian / Ubuntu**: `sudo apt install mesa-vulkan-drivers` (Intel/AMD), or your GPU vendor's driver.

The driver only matters for **Whisper** models — Moonshine and Parakeet always run on the CPU. Without a Vulkan driver the app still works; it simply transcribes on the CPU.
:::

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

Installing with your package manager (`sudo dnf install ./*.rpm`, `sudo apt install ./*.deb`) pulls in everything automatically. The app relies on:

- **WebKitGTK** (`libwebkit2gtk-4.1`) and **GTK 3** — present on any desktop.
- **`libappindicator-gtk3`** (for the system-tray icon) — **not** preinstalled on stock Fedora Workstation; `dnf`/`apt` install it for you automatically.
- **Vulkan loader** (`libvulkan`, from `vulkan-loader` on Fedora / `libvulkan1` on Debian/Ubuntu) — the app links against it and **won't start without it**, so the `.deb`/`.rpm` declare it as a required dependency and always pull it in.
- **Mesa Vulkan drivers** (`mesa-vulkan-drivers`) — a _recommended_ dependency, installed by default. Needed only for GPU-accelerated transcription with **Whisper** models (see [GPU Acceleration](#gpu-acceleration-optional)); Moonshine/Parakeet run on the CPU and don't need it.
- Audio (PipeWire / ALSA) — present on desktops.

If the package manager reports a missing dependency, install it and retry. If you install the `.rpm`/`.deb` **offline** (e.g. `sudo rpm -i` without a network), the required dependencies aren't resolved for you — install the Vulkan loader (`vulkan-loader` on Fedora / `libvulkan1` on Debian/Ubuntu) and `libappindicator-gtk3` (Fedora) / `libayatana-appindicator3-1` (Debian/Ubuntu) first, or the app may fail to start.

### Linux: no tray icon on GNOME

Knowii Voice AI lives in your system tray (for Settings, Quit, and the **Start hidden** option). **Vanilla GNOME does not show tray icons** without an extension:

1. Install the **AppIndicator and KStatusNotifierItem Support** GNOME extension (from [extensions.gnome.org](https://extensions.gnome.org/extension/615/appindicator-support/), or `sudo dnf install gnome-shell-extension-appindicator` on Fedora, then enable it in the **Extensions** app).
2. Log out and back in (or restart GNOME Shell).

:::caution
Until the tray icon is available, avoid the **Start hidden** / **hide on close** options on GNOME — with no tray icon there's no way to bring the window back. KDE, Hyprland, and X11 desktops generally show the tray icon without extra setup.
:::

### Linux: my shortcut does nothing

The app needs read access to your keyboard to detect its global shortcut. If pressing the shortcut does nothing:

- **`.deb`/`.rpm`**: this is set up automatically — try fully quitting and reopening the app once after installing.
- **AppImage**: complete the one-time [keyboard access](#linux-enable-the-global-shortcut-keyboard-access) step, or install the `.deb`/`.rpm` instead.

### Application doesn't start

1. Check system requirements
2. Verify the application has permission to run
3. Check system logs for error messages

## Updating

To update Knowii Voice AI to a newer version, see the [Updating Guide](./updating) for instructions on both automatic and manual updates.

## Next Steps

Once installed, proceed to the [Getting Started Tutorial](../tutorials/getting-started) to learn how to use Knowii Voice AI.
