---
sidebar_position: 1
---

# Installation

## System Requirements

### Required Hardware

- 4GB RAM minimum (8GB or more recommended)
- 500MB free disk space (this is enough to install the recommended AI model)
- Optional: NVIDIA GPU with CUDA support for faster transcription

### Windows

- Windows 10 or Windows 11

### Linux

- Coming soon

### macOS

- Coming soon

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

1. **Show** the onboarding wizard
2. **Guide you** through downloading your first AI transcription model
3. **Configure** basic settings
4. **Start** running in your system tray

No account or registration is required!

## GPU Acceleration (Optional)

If you have an NVIDIA GPU, Knowii Voice AI can use CUDA for significantly faster transcription.

### Windows

CUDA support is automatically detected and enabled if you have NVIDIA drivers installed.

### Linux

Install NVIDIA drivers and CUDA toolkit:

```bash
# Ubuntu/Debian
sudo apt-get install nvidia-driver-535 nvidia-cuda-toolkit

# Fedora
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda
```

Restart your system after installation.

## Troubleshooting

### Windows: Installer is blocked

Right-click the installer, select "Properties", and check "Unblock" before running.

### Application doesn't start

1. Check system requirements
2. Verify the application has permission to run
3. Check system logs for error messages

## Next Steps

Once installed, proceed to the [Getting Started Tutorial](../tutorials/getting-started) to learn how to use Knowii Voice AI.
