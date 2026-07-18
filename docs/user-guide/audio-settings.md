---
sidebar_position: 5
title: Audio Settings
description: Configure audio devices, feedback sounds, and volume levels in Knowii Voice AI. Customize recording device selection and audio feedback preferences.
keywords:
    - audio settings
    - microphone settings
    - sound settings
    - audio feedback
    - recording device
    - microphone test
    - microphone not detected
    - microphone permissions
    - windows microphone privacy
    - volume control
    - custom sounds
---

# Audio Settings

This page covers the audio configuration options available in Knowii Voice AI. These settings allow you to control audio devices, feedback sounds, and volume levels to create a personalized recording experience.

## Devices

Configure your audio input and output devices for optimal recording quality.

### Recording Device

**Location**: Settings > Audio > Devices

Select which microphone or audio input device to use for voice recording:

- Choose from all available microphones on your system
- Default setting uses your system's default recording device
- Common options include:
    - Built-in laptop microphones
    - External USB microphones
    - Headset microphones
    - Virtual audio devices

**Tips**:

- Use a dedicated external microphone for better audio quality
- Test different microphones to find which works best for your environment
- Close to your mouth typically produces clearer recordings

:::note
If no working microphone is available when you start recording, Knowii Voice AI shows a warning so you know to connect or select one. See [Troubleshooting](#couldnt-start-recording-warning) below.
:::

### Test Your Microphone

**Location**: Settings > Audio > Devices

Not sure if your microphone is working? Use the built-in test to check before you start recording:

1. Select your microphone in the **Recording Device** dropdown
2. Click the **Test microphone** button
3. Speak normally - the level bar moves as it picks up sound, and you'll see a **"Sound detected"** confirmation
4. Click **Stop test** when you're done

If the bar stays flat while you talk, the selected microphone isn't capturing audio - try a different device, check it's plugged in, and make sure your system lets Knowii Voice AI use it.

:::tip
The test only listens for the level - it doesn't record or transcribe anything, and nothing is saved.
:::

### Output Device

**Location**: Settings > Audio > Devices

Select which audio output device to use for audio feedback sounds:

- Choose from all available audio output devices on your system
- Only active when Audio Feedback is enabled
- Default setting uses your system's default output device
- Options include:
    - Built-in speakers
    - External speakers
    - Headphones
    - Virtual audio devices

**Reset Button**: Click the reset icon to quickly restore the default output device.

## Feedback

Control audio feedback sounds that help you know when recording starts and transcription completes.

### Audio Feedback

**Location**: Settings > Audio > Feedback

Enable or disable audio feedback sounds:

- **Enabled**: Plays sounds when recording starts and when transcription completes
- **Disabled**: Silent operation with no audio cues
- When disabled, all other feedback settings are inactive

**Benefits of Audio Feedback**:

- Confirms recording has started successfully
- Notifies you when transcription is complete
- Provides reassurance without looking at the screen
- Helpful when multitasking or when the app is minimized

### Volume

**Location**: Settings > Audio > Feedback

Adjust the volume level for audio feedback sounds:

- Range: 0% to 100%
- Increments: 5%
- Default: 100%
- Only active when Audio Feedback is enabled
- Adjusting the slider plays a test sound at the new volume level

**Tips**:

- Start at 50% and adjust to your preference
- Lower volume if working in quiet environments
- Higher volume useful when working with background noise or music

### Start Recording Sound

**Location**: Settings > Audio > Feedback

Choose which sound plays when recording begins:

- Select from available sound files
- Default: `default_start.mp3`
- Only active when Audio Feedback is enabled
- Preview sounds by adjusting the volume slider

**Reset Button**: Click the reset icon to restore the default start sound.

### End Processing Sound

**Location**: Settings > Audio > Feedback

Choose which sound plays when transcription completes:

- Select from available sound files
- Default: `default_end.mp3`
- Only active when Audio Feedback is enabled
- Different from the start sound to distinguish between recording and completion

**Reset Button**: Click the reset icon to restore the default end sound.

### Custom Sounds

**Location**: Settings > Audio > Feedback

Prefer your own start and stop sounds? You can add them in just a few clicks:

1. Click the **Open Folder** button next to **Custom Sounds**. This opens your custom sounds folder in your file manager, creating it automatically if it doesn't exist yet.
2. Copy your own `.wav` or `.mp3` files into that folder.
3. Back in Knowii Voice AI, open the **Start Recording Sound** or **End Processing Sound** dropdown - your custom sounds appear in the list, ready to select.

**Tips**:

- Keep custom sounds short (a fraction of a second) so they don't overlap with your recording.
- Your custom sounds stay on your computer - nothing is uploaded anywhere.

:::tip
For a step-by-step walkthrough, see the [Customizing Sounds Tutorial](../tutorials/customizing-sounds).
:::

## Common Scenarios

### Quiet Office Environment

- Enable Audio Feedback for subtle confirmation
- Set Volume to 30-50%
- Use default sounds (designed to be unobtrusive)

### Noisy Environment

- Enable Audio Feedback for clear confirmation
- Set Volume to 80-100%
- Consider using a headset for both recording and feedback

### Silent Operation

- Disable Audio Feedback completely
- Rely on visual overlay instead (see [Advanced Settings](./advanced-settings))

### Recording Meetings

- Use external microphone for better quality
- Disable Audio Feedback to avoid disturbing others
- Check overlay position is set appropriately

## Troubleshooting

### No Sound is Playing

1. Verify Audio Feedback is enabled
2. Check Volume is above 0%
3. Verify correct Output Device is selected
4. Check system volume is not muted
5. Test with different sound files

### Microphone Not Detected

If your microphone doesn't appear in the **Recording Device** dropdown, or the **Test microphone** button doesn't seem to do anything, the cause is usually that your operating system is blocking apps from using the microphone. Start with the steps for your system.

#### Windows

Windows has a privacy setting that can stop desktop apps from using the microphone. This is the most common reason a microphone isn't detected on Windows.

1. Press the **Windows key**, type **Microphone privacy settings**, and open it.
2. Turn on **Microphone access**.
3. Turn on **Let apps access your microphone**.
4. Scroll down and turn on **Let desktop apps access your microphone** - this is the setting that matters most for Knowii Voice AI.
5. Fully close and reopen Knowii Voice AI, then open **Settings > Audio > Devices** again.

If it's still not detected, confirm Windows itself sees the microphone:

1. Press the **Windows key**, type **Sound settings**, and open it.
2. Under **Input**, make sure your microphone is listed and selected, then use **Test your microphone** to confirm the bar moves when you speak.
3. If it isn't listed, make sure it's plugged in and enabled (right-click the input area and choose **Show disabled devices**).

#### macOS

macOS requires your permission before an app can use the microphone.

1. Open **System Settings > Privacy & Security > Microphone**.
2. Make sure **Knowii Voice AI** is turned on in the list.
3. Reopen Knowii Voice AI after changing the setting.

#### Linux

1. Confirm your microphone works in your desktop's sound settings (PipeWire or PulseAudio).
2. Make sure your user account has permission to access audio devices.

#### On any system

1. Ensure the microphone is properly connected - for USB microphones, try a different port.
2. Close other apps that might be holding the microphone (video calls, meeting apps, recording software), then reopen Knowii Voice AI.
3. Disconnect and reconnect the microphone.
4. Restart Knowii Voice AI - microphones connected while the app is running appear after a restart.

:::note
Knowii Voice AI can only use a microphone that your operating system allows it to access. If none of the above helps, check that the same microphone works in another app to rule out a hardware issue.
:::

### "Couldn't start recording" Warning

If you press your shortcut and see a warning that recording couldn't start, Knowii Voice AI wasn't able to use a microphone. To fix it:

1. Open **Settings > Audio > Devices** and select a **Recording Device**
2. Make sure the microphone is connected and working in other apps
3. If you just plugged in a microphone, restart Knowii Voice AI so it appears in the list
4. Check that your system allows Knowii Voice AI to access the microphone - on Windows this is a common cause; see [Microphone Not Detected](#microphone-not-detected) above for the exact steps

### Microphone Disconnected While Recording

If your microphone drops out mid-recording - for example, you unplug a USB mic or switch a Bluetooth headset - Knowii Voice AI now recovers on its own instead of getting stuck. When the microphone becomes available again, you'll even see a **"Microphone reconnected"** confirmation. Just reconnect (or pick a working microphone in **Settings > Audio**) and record again.

### Wrong Device Selected

1. Use the Recording Device dropdown to select the correct microphone
2. Use the Output Device dropdown to select the correct speakers/headphones
3. Click reset buttons to restore system defaults
4. Restart the app if devices don't appear

### Audio Feedback Too Loud/Quiet

1. Adjust the Volume slider in Audio Settings
2. Check system volume level
3. Check output device physical volume controls
4. Try different output devices

## Tips

- Test your audio settings before important recordings
- Keep Audio Feedback enabled initially until you're comfortable with the app
- Use the volume slider to preview sounds at different levels
- Different microphones can significantly affect transcription quality
- External microphones typically provide better results than built-in ones

## Related Documentation

- [Customizing Sounds Tutorial](../tutorials/customizing-sounds) - Step-by-step guide to personalizing feedback sounds
- [Basic Usage](./basic-usage) - Learn the fundamentals
- [Advanced Settings](./advanced-settings) - Additional configuration options
- [FAQ](../faq) - Common questions

## Need Help?

If you have questions about audio settings, visit the [Support](../support) page.
