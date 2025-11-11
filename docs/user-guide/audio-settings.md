---
sidebar_position: 5
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

1. Ensure microphone is properly connected
2. Check system audio settings recognize the device
3. Try disconnecting and reconnecting the microphone
4. Restart Knowii Voice AI
5. Check microphone permissions in system settings

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

- [Basic Usage](./basic-usage) - Learn the fundamentals
- [Advanced Settings](./advanced-settings) - Additional configuration options
- [FAQ](../faq) - Common questions

## Need Help?

If you have questions about audio settings, visit the [Support](../support) page.
