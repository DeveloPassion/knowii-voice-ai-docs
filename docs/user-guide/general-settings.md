---
sidebar_position: 2
title: General Settings
description: Configure core Knowii Voice AI settings including keyboard shortcuts, Push-to-Talk mode, and recording controls for voice-to-text transcription.
keywords:
    - general settings
    - keyboard shortcuts
    - push to talk
    - recording controls
    - hotkeys
    - shortcut keys
    - configuration
---

# General Settings

This page covers the general configuration options available in Knowii Voice AI. These core settings control how you interact with the application and trigger voice recordings.

## Recording Controls

Configure how you start and stop voice recordings.

### Shortcut

**Location**: Settings > General

Set a custom keyboard shortcut to start and stop voice recording:

- Default shortcut varies by operating system
- Works system-wide (even when the app is minimized or in the background)
- Shortcut behavior depends on the Push To Talk setting:
    - **Push To Talk disabled**: Press once to start recording, press again to stop
    - **Push To Talk enabled**: Hold the shortcut to record, release to stop

**How to Set a Shortcut**:

1. Click on the shortcut input field
2. Press the key combination you want to use (e.g., Ctrl+Shift+Space)
3. The shortcut is automatically saved
4. Click the reset button to restore the default shortcut

**Tips**:

- Choose a shortcut that doesn't conflict with other applications
- Use modifier keys (Ctrl, Shift, Alt/Option, Command) for better reliability
- Test the shortcut to ensure it works system-wide
- Avoid shortcuts used by your operating system or frequently-used applications

**Common Shortcut Examples**:

- `Ctrl+Shift+Space` - Popular choice, easy to reach
- `Ctrl+Alt+R` - Simple and memorable (R for Record)
- `Command+Shift+Space` - macOS-friendly alternative
- `Ctrl+Shift+V` - Alternative using V for Voice

### Push To Talk

**Location**: Settings > General

Enable or disable Push To Talk mode:

- **Disabled** (default): Toggle mode - press shortcut once to start, press again to stop
- **Enabled**: Push To Talk mode - hold shortcut to record, release to stop

**Toggle Mode** (Push To Talk disabled):

- Press the shortcut → recording starts
- Press the shortcut again → recording stops and transcription begins
- Useful for longer recordings or hands-free operation
- You can do other tasks while recording continues
- Recording duration limited only by your needs

**Push To Talk Mode** (Push To Talk enabled):

- Hold down the shortcut → recording starts and continues
- Release the shortcut → recording stops and transcription begins
- Recording only happens while holding the key combination
- Useful for quick, short recordings
- Prevents accidentally leaving recording running
- Similar to walkie-talkie or push-to-talk radio operation

**Which Mode Should You Use?**

**Use Toggle Mode (Push To Talk disabled) when:**

- Recording longer passages or dictation
- You need to use your keyboard while recording
- Transcribing meetings or conversations
- Recording hands-free while multitasking
- Speaking for more than a few seconds

**Use Push To Talk Mode when:**

- Making quick, short voice notes
- You want precise control over recording start/stop
- Concerned about accidentally recording unwanted audio
- Recording in bursts with pauses between
- Prefer physical confirmation that recording is active

## Common Scenarios

### Quick Voice Notes

**Recommended settings:**

- Enable Push To Talk
- Choose an easy-to-reach shortcut (e.g., `Ctrl+Shift+Space`)
- Enable Audio Feedback for confirmation

**Usage:**

1. Hold shortcut
2. Speak your note
3. Release shortcut
4. Text is pasted automatically

### Long-Form Dictation

**Recommended settings:**

- Disable Push To Talk (use Toggle mode)
- Choose a memorable shortcut
- Consider disabling audio feedback to avoid interruptions

**Usage:**

1. Press shortcut to start
2. Dictate your content
3. Press shortcut again to stop
4. Text is pasted automatically

### Meeting Transcription

**Recommended settings:**

- Disable Push To Talk (use Toggle mode)
- Use a less-common shortcut to avoid accidental triggers
- Disable Audio Feedback to avoid disturbing the meeting

**Usage:**

1. Press shortcut at meeting start
2. Let it record the entire meeting
3. Press shortcut at meeting end
4. Text is pasted to your notes application

### Hands-Free Operation

**Recommended settings:**

- Disable Push To Talk (use Toggle mode)
- Map shortcut to a foot pedal or external device if available
- Enable Audio Feedback for confirmation

## Troubleshooting

### Shortcut Not Working

1. Verify the shortcut is correctly set in Settings > General
2. Check if another application is using the same shortcut
3. Try a different key combination
4. Ensure Knowii Voice AI is running (check system tray)
5. Restart the application
6. Check system permissions for global keyboard shortcuts

### Shortcut Conflicts

If your shortcut conflicts with another application:

1. Identify which application is conflicting
2. Either change the Knowii Voice AI shortcut
3. Or change the shortcut in the conflicting application
4. Common conflicts:
    - System shortcuts (e.g., Ctrl+Alt+Del on Windows)
    - Browser extensions
    - Other productivity tools
    - IDE shortcuts

### Push To Talk Not Working Properly

1. Ensure Push To Talk is enabled in Settings > General
2. Hold the shortcut longer - don't release immediately
3. Check if your keyboard supports multiple key combinations
4. Try a simpler shortcut combination
5. Verify no other application is intercepting the shortcut

### Recording Starts Unexpectedly

1. Check if Push To Talk is enabled (may want Toggle mode instead)
2. Verify your shortcut isn't too easy to trigger accidentally
3. Choose a more complex key combination
4. Consider using modifier keys (Ctrl, Shift, Alt/Option)

## Tips

- Start with Toggle mode and switch to Push To Talk if you prefer more control
- Test your shortcut before important recordings
- Choose shortcuts that feel natural and are easy to remember
- Use Audio Feedback initially to confirm recording start/stop
- Consider your typical use case when choosing between Toggle and Push To Talk
- Document your shortcut somewhere if you use a custom one

## Related Documentation

- [Basic Usage](./basic-usage) - Learn the fundamentals
- [Audio Settings](./audio-settings) - Configure audio devices and feedback
- [Advanced Settings](./advanced-settings) - Additional configuration options
- [FAQ](../faq) - Common questions

## Need Help?

If you have questions about general settings, visit the [Support](../support) page.
