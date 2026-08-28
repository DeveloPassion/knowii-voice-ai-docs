---
title: Verifying Your Download
description: Check the cryptographic signature of a Knowii Voice AI installer before running it. Every release is signed, and you can verify authenticity yourself with the public key.
keywords:
    - signature
    - verify download
    - minisign
    - security
    - authenticity
    - public key
    - signed releases
---

# Verifying Your Download

Every Knowii Voice AI release is cryptographically signed. When the app updates itself, it verifies that signature automatically and refuses anything that doesn't match — you never have to think about it. This page is for the extra-careful moment when you download an installer **manually** (from the [releases page](https://github.com/DeveloPassion/knowii-voice-ai/releases)) and want proof that the file really came from us and wasn't tampered with along the way.

## The public key

Releases are signed with a [minisign](https://jedisct1.github.io/minisign/) key. The matching public key — the same one embedded in the app for automatic updates — is:

```
RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

(Key ID `73F6B6D6C080A4B1`.)

## What is signed

Next to each installer on the releases page sits a small `.sig` file with the same name — for the Linux `.deb`, `.rpm`, and `.AppImage`, the Windows `-setup.exe`, and the macOS `.app.tar.gz` update archives.

The macOS `.dmg` has no `.sig` file: it is signed and notarized through Apple instead, and macOS verifies that automatically when you open it.

## How to verify

You need the free `minisign` tool:

- **Linux**: `sudo apt install minisign` (Debian/Ubuntu), `sudo dnf install minisign` (Fedora), `sudo pacman -S minisign` (Arch)
- **macOS**: `brew install minisign`
- **Windows**: `scoop install minisign` or download it from the [minisign releases](https://github.com/jedisct1/minisign/releases)

Download the installer **and** its `.sig` file into the same folder, then:

**Linux / macOS:**

```bash
# The .sig file is base64-wrapped; unwrap it first
base64 -d "Knowii.Voice.AI_0.9.0_amd64.deb.sig" > installer.minisig

# Verify the installer against the public key
minisign -Vm "Knowii.Voice.AI_0.9.0_amd64.deb" -x installer.minisig \
    -P RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

**Windows (PowerShell):**

```powershell
# Unwrap the base64 .sig file
$sig = Get-Content "Knowii.Voice.AI_0.9.0_x64-setup.exe.sig" -Raw
[IO.File]::WriteAllBytes("installer.minisig", [Convert]::FromBase64String($sig))

# Verify the installer against the public key
minisign -Vm "Knowii.Voice.AI_0.9.0_x64-setup.exe" -x installer.minisig `
    -P RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

Replace the file names with the ones you downloaded. A successful check prints:

```
Signature and comment signature verified
```

That's your proof: the file is byte-for-byte the one we built and signed.

## If verification fails

Don't run the installer. A failed check usually means an incomplete download — download the installer and its `.sig` again and retry. If it still fails, [let us know](https://github.com/DeveloPassion/knowii-voice-ai-docs/issues) and mention where you downloaded the file from: the only official sources are the [GitHub releases page](https://github.com/DeveloPassion/knowii-voice-ai/releases) and the app's built-in updater.
