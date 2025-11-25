---
sidebar_position: 1
title: Installation Guide
description: Learn how to install Knowii Voice AI on Windows. Complete setup instructions, system requirements, and troubleshooting for your local voice transcription app.
keywords:
    - installation
    - setup
    - download
    - Windows
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

### Linux

- Not supported yet

### macOS

- Not supported yet

## Download

Download the latest version of Knowii Voice AI from your [Gumroad Library](https://gumroad.com/library) or from the [Knowii Community](https://www.knowii.net) website, depending on where you bought it from.

Choose the installer for your platform:

- **Windows**: `.exe` or `.msi` installer

## Installation Steps

### Windows

1. **Download** the installer (`.exe` or `.msi`)
2. **Run** the installer
3. Follow the installation wizard
4. **Launch** Knowii Voice AI from the Start Menu or desktop shortcut

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

### Application doesn't start

1. Check system requirements
2. Verify the application has permission to run
3. Check system logs for error messages

## Updating

To update Knowii Voice AI to a newer version, see the [Updating Guide](./updating) for instructions on both automatic and manual updates.

## Next Steps

Once installed, proceed to the [Getting Started Tutorial](../tutorials/getting-started) to learn how to use Knowii Voice AI.
