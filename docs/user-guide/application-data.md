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

### Linux

On Linux, application data is stored in:

```
~/.config/knowii-voice-ai
```

Or if you have `XDG_CONFIG_HOME` set:

```
$XDG_CONFIG_HOME/knowii-voice-ai
```

### macOS

On macOS, application data is stored in:

```
~/Library/Application Support/knowii-voice-ai
```

## What's Stored

The application data folder contains:

### Configuration Files

- **settings.json**: Your application settings and preferences
- **shortcuts.json**: Custom keyboard shortcuts
- **word-replacements.json**: Custom word replacement rules

### Downloaded Models

- **models/**: Folder containing downloaded AI transcription models
- Models can be several GB in size depending on which ones you've downloaded
- You can safely delete model files you no longer use to free up space (you can re-download them later if needed)

### Transcription History

- **history/**: Folder containing your transcription history
- Each transcription is stored with its text and metadata
- Audio recordings (if saved) are also stored here
- You can manage history from the app's History tab

### Custom Audio Files

- **sounds/**: Folder for custom start/stop recording sounds
- Place your custom WAV or MP3 files here
- Files must be in WAV or MP3 format
- You can then select them from **Settings > Audio > Feedback Sounds**

### Logs

- **logs/**: Folder containing application logs
- Useful for troubleshooting issues
- Logs are rotated automatically to prevent excessive disk usage

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

- **Delete unused models**: Go to **Settings > Models** and remove models you don't use
- **Clear old history**: Go to **Settings > History** and delete old transcriptions or clear all history
- **Delete audio recordings**: In the History tab, you can delete audio files while keeping the text transcriptions

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

- **Models**: 50MB to several GB per model
- **History**: Varies based on how many transcriptions you save
- **Audio recordings**: Takes more space if you keep audio files

To monitor disk usage, check the folder size in your file explorer.

## Need Help?

If you have questions about application data or encounter issues, visit the [Support](../support) page.
