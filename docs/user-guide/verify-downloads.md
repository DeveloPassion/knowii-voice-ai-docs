---
sidebar_position: 9.5
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

Every Knowii Voice AI release is cryptographically signed.

**In everyday use you don't have to do anything.** When the app updates itself, it checks that signature automatically and refuses any download that doesn't match. That protection is always on and can't be switched off.

This page is for the extra-careful moment when you install **manually** and want to confirm for yourself that the file really came from us. You'll need the installer **and** a matching `.sig` signature file — if your download didn't include one, skip to [If you don't have a `.sig` file](#if-you-dont-have-a-sig-file).

## The public key

Releases are signed with a [minisign](https://jedisct1.github.io/minisign/) key. The matching public key — the same one embedded in the app for automatic updates — is:

```
RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

(Key ID `73F6B6D6C080A4B1`.)

## What is signed

A signature file is a small file sitting next to the installer, with the same name plus `.sig`. Signatures are produced for the Linux `.deb`, `.rpm`, and `.AppImage`, the Windows `-setup.exe`, and the macOS `.app.tar.gz` update archives.

The macOS `.dmg` has no `.sig` file: it is signed and notarized through Apple instead, and macOS verifies that automatically when you open it.

## How to verify

You need the free `minisign` tool:

- **Linux**: `sudo apt install minisign` (Debian 12+ / Ubuntu 24.04+), `sudo dnf install minisign` (Fedora), `sudo pacman -S minisign` (Arch). On older Debian/Ubuntu releases the package isn't available — grab the binary from the [minisign releases](https://github.com/jedisct1/minisign/releases) instead.
- **macOS**: `brew install minisign`
- **Windows**: `scoop install minisign` or download it from the [minisign releases](https://github.com/jedisct1/minisign/releases)

Download the installer **and** its `.sig` file into the same folder, then:

**Linux / macOS:**

```bash
# The .sig file is base64-wrapped; unwrap it first.
# (On macOS, use -D instead of -d if your system rejects -d.)
base64 -d "Knowii.Voice.AI_0.9.0_amd64.deb.sig" > installer.minisig

# Verify the installer against the public key
minisign -Vm "Knowii.Voice.AI_0.9.0_amd64.deb" -x installer.minisig \
    -P RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

**Windows (PowerShell):**

```powershell
# Unwrap the base64 .sig file
$sig = Get-Content "Knowii.Voice.AI_0.9.0_x64-setup.exe.sig" -Raw
[IO.File]::WriteAllBytes("$PWD\installer.minisig", [Convert]::FromBase64String($sig))

# Verify the installer against the public key
minisign -Vm "Knowii.Voice.AI_0.9.0_x64-setup.exe" -x installer.minisig `
    -P RWSxpIDA1rb2czTBbfwlmm2Vw4QyjmZYBQ77KgZS/HcmnCU2SBLJEF8y
```

Replace the file names with the ones you downloaded. A successful check prints:

```
Signature and comment signature verified
```

That's your proof: the file is byte-for-byte the one we built and signed.

## If you don't have a `.sig` file

Signature files aren't part of every download channel. If your installer came without one, you still have two solid guarantees:

- **Updates are always verified.** Every update the app downloads for itself is signature-checked before it is installed, using the key above.
- **On macOS and Windows the installer carries its own platform signature.** The macOS `.dmg` is signed and notarized by Apple, and the Windows installer is code-signed — your operating system checks both automatically when you open the file.

To be certain of a manual download, get your installer from where you bought it: your [Gumroad Library](https://gumroad.com/library) or the [Knowii Community](https://www.knowii.net) website, as described in the [Installation Guide](./installation#download).

## If verification fails

Don't run the installer. A failed check usually means an incomplete download — download the installer and its `.sig` again and retry. If it still fails, [let us know](https://github.com/DeveloPassion/knowii-voice-ai-docs/issues) and mention where you downloaded the file from.
