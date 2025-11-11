---
sidebar_position: 6
---

# Advanced Settings

This page covers the advanced configuration options available in Knowii Voice AI. These settings allow you to fine-tune the application's behavior, performance, and data management.

## Application Behavior

Control how Knowii Voice AI starts and runs:

### Start Hidden

**Location**: Settings > Advanced

- Launch directly to system tray without showing the main window
- Useful if you want the app running silently in the background
- The app will be fully functional and ready to use via the system tray icon

### Launch on Startup

**Location**: Settings > Advanced

- Automatically start when you log in to your computer
- App will be ready to use immediately when you need it
- Combined with "Start Hidden", creates a seamless background experience

## Display Options

### Overlay Position

**Location**: Settings > Advanced

The recording overlay provides visual feedback during recording and transcription. You can control where it appears:

- **Bottom** (default): Shows recording/transcription status at the bottom of your screen
- **Top**: Shows status at the top of your screen
- **None**: Disables the visual overlay completely (useful for recordings/presentations)

The overlay shows:

- Recording indicator when you're actively recording
- Transcription progress when processing
- Cancel option to abort the current operation

## Transcription Options

### Translate to English

**Location**: Settings > Advanced

- Automatically translate speech from other languages to English
- Only available with Whisper models (not supported by Parakeet)
- Useful for multilingual workflows where you speak in one language but need English output
- Examples: Speaking French but need English documentation, translating meeting notes, etc.

**Note**: Translation requires more processing time than standard transcription.

### Clipboard Handling

**Location**: Settings > Advanced

Control what happens to your clipboard after transcription:

- **Don't Modify Clipboard** (default): Preserves your current clipboard contents
    - Transcription is pasted but your clipboard remains unchanged
    - Useful if you have something important copied that you don't want to lose

- **Copy to Clipboard**: Leaves transcription in clipboard after pasting
    - Allows you to paste the same transcription multiple times
    - Useful for repeated pasting or when you want to keep the text in clipboard

## History Management

**Location**: Settings > Advanced

Control how transcriptions are saved and managed:

### Enable History

- Stores transcriptions in the database
- Allows you to view, search, and manage past transcriptions
- Access history from the History tab in the main window
- When disabled, transcriptions are not saved anywhere

### Save Transcriptions to Disk

_Requires History to be enabled_

- Saves transcription text as markdown files
- Files organized by date in `history/YYYY/MM/` folders
- Example: `2025-01-15-14_30_45 - Transcription.md`
- Useful for backups or accessing transcriptions outside the app

### Save Audio to Disk

_Requires History to be enabled_

- Saves audio recordings as WAV files
- Allows playback of original recordings from history
- Files stored alongside transcriptions: `2025-01-15-14_30_45 - Audio.wav`
- Warning: Audio files can consume significant disk space

### Limit History

_Requires History to be enabled_

- Keeps only the most recent unstarred transcriptions
- Default limit: 100 most recent entries
- Starred transcriptions are always kept regardless of this setting
- Helps manage disk space automatically
- Older unstarred transcriptions are automatically deleted

### Clear All History

_Requires History to be enabled_

**Warning**: This action is permanent and cannot be undone!

- Permanently deletes all transcriptions (including starred entries)
- Deletes all associated files (text and audio)
- Clears the database completely
- Use with caution - consider backing up your data first

## Performance Settings

### Model Unload Timeout

**Location**: Settings > Advanced > Performance

Control when the AI model is automatically unloaded from memory to free up system resources:

- **Never**: Model stays loaded in memory (fastest, uses more RAM/VRAM)
- **Immediately**: Unload right after each transcription (slowest, minimal memory usage)
- **After 2/5/10/15 minutes**: Balanced options
- **After 1 hour**: For regular but not constant use

**Recommendations**:

- **Never**: If you use transcription frequently throughout the day and have sufficient RAM
- **After 2-5 minutes**: Balanced option for moderate use
- **After 10-15 minutes**: Good for occasional use
- **Immediately**: Only if you're very constrained on memory

When a model is unloaded, the next transcription will have a delay while the model reloads.

## Tips

- Start with default settings and adjust based on your needs
- Monitor disk space if saving audio files
- Use "Limit History" to prevent excessive disk usage
- Combine "Start Hidden" and "Launch on Startup" for seamless background operation
- Disable the overlay during screen recordings or presentations

## Related Documentation

- [Basic Usage](./basic-usage) - Learn the fundamentals
- [Application Data](./application-data) - Where data is stored
- [FAQ](../faq) - Common questions

## Need Help?

If you have questions about advanced settings, visit the [Support](../support) page.
