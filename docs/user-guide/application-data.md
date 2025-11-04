---
sidebar_position: 5
---

# Application Data

Knowii Voice AI stores all its data locally on your computer. This page explains where the data is stored and what you'll find there.

## Data Location

### Windows

On Windows, application data is stored in:

```
C:\Users\<username>\AppData\Roaming\knowii-voice-ai
```

Replace `<username>` with your Windows username.

**Quick Access**: Press `Win + R`, type `%APPDATA%\knowii-voice-ai`, and press Enter.

### Linux & macOS

Linux and macOS support is coming soon. Data locations will be documented when these platforms are available.

## What's Stored

The application data folder contains:

### Configuration File

- **settings.json**: Your application settings and preferences including:
    - Recording settings (microphone, shortcuts, push-to-talk mode)
    - Transcription settings (language, active model, word replacements)
    - Audio feedback settings (sound themes, volume)
    - History settings (save options for transcriptions and audio)
    - Advanced settings (performance, overlay position, etc.)

### Downloaded Models

- **models/**: Folder containing downloaded AI transcription models
- Models are organized in a hierarchical structure: `models/family/variant/`
    - Example: `models/whisper/small/` or `models/parakeet/tdt-0.6b-v3/`
- Whisper models are single `.bin` files
- Parakeet models consist of multiple ONNX files (encoder, decoder, etc.)
- Models can be several hundred MB to several GB depending on which ones you've downloaded
- You can safely delete model folders you no longer use to free up space (you can re-download them later if needed). Just don't do it while the application is running, or do it through the settings (Settings > Transcription)

### Transcription History

- **history.db**: SQLite database containing all transcription metadata (text, timestamps, starred status, file paths)
- **history/**: Folder containing transcription and audio files organized by date
    - Structure: `history/YYYY/MM/` (year/month folders)
    - Transcription files: `YYYY-MM-DD-HH_MM_SS - Transcription.md`
    - Audio files: `YYYY-MM-DD-HH_MM_SS - Audio.wav`
- You can manage history from the app's History tab. If you delete data from the history folder manually, you might cause inconsistencies with the application database

### Custom Audio Files

- **sounds/**: Folder for custom start/stop recording sounds
- Place your custom WAV or MP3 files in this folder
- The app will find them automatically and make them available in the settings
- You can then select them from **Settings > General** (Audio Feedback section)

## Managing Application Data

### Backing Up Your Data

To back up your Knowii Voice AI data:

1. **Close** the application
2. **Copy** the entire `knowii-voice-ai` folder to your backup location
3. Store it somewhere safe (external drive, cloud storage, etc.)

### Restoring from Backup

To restore your data:

1. **Close** the application
2. **Replace** the `knowii-voice-ai` folder with your backup
3. **Restart** the application

### Freeing Up Space

If you need to free up disk space:

- **Delete unused models**: Go to **Settings > Transcription** and remove models you don't use
- **Clear old history**: Go to **Settings > History** and delete old transcriptions or clear all history
- **Delete audio recordings**: In the History tab, you can delete audio files while keeping the text transcriptions

**Tip**: You can also delete the complete history from the **Settings > Advanced** tab.

### Reset to Default

To completely reset Knowii Voice AI:

1. **Close** the application
2. **Delete** the entire `knowii-voice-ai` folder
3. **Restart** the application - it will recreate the folder with default settings

**Warning**: This will delete all your settings, models, and history. Make a backup first if you want to keep anything.

## Privacy & Security

- All data is stored **locally on your computer**
- No data is sent to external servers (except when downloading models)
- Your transcriptions and audio recordings never leave your device
- You have complete control over your data

## Disk Space Considerations

The application data folder size depends on:

- **Models**: ~100MB to several GB per model
- **History**: Varies based on how many transcriptions you save
- **Audio recordings**: Takes more space if you keep audio files

To monitor disk usage, check the folder size in your file explorer.

## Need Help?

If you have questions about application data or encounter issues, visit the [Support](../support) page.
