---
sidebar_position: 7
---

# Debug Settings

:::danger[Warning: Advanced Users Only]
Debug settings are intended for troubleshooting and advanced configuration. **Only change these settings if you're experiencing specific issues or if I've asked you to adjust them for support purposes.** Incorrect settings can cause transcription failures, pasting issues, or unexpected behavior.
:::

Debug settings provide low-level configuration options for troubleshooting issues and fine-tuning the application's behavior.

## Accessing Debug Settings

The Debug tab is hidden by default. To show or hide it:

1. **Press** `Ctrl+Shift+D`
2. The **Debug** tab will appear in the settings sidebar (between Advanced and About)
3. **Press the shortcut again** to hide the Debug tab

:::tip
You can toggle debug mode on/off at any time using the keyboard shortcut. The setting persists across application restarts.
:::

## Debug Options

### Paste Method

**Location**: Settings > Debug > Paste Method

Controls how transcribed text is inserted into applications:

- **Clipboard (Ctrl+V)** (default on Windows/macOS): Simulates Ctrl/Cmd+V keystrokes to paste
    - Most compatible with applications
    - Works in virtually all text fields
    - Temporarily modifies clipboard (see [Advanced Settings](./advanced-settings#clipboard-handling) for clipboard behavior options)

- **Clipboard (Shift+Insert)** (Windows/Linux only): Simulates Shift+Insert keystrokes to paste
    - More universal for terminal applications
    - Works better in some Linux/X11 applications
    - Alternative to Ctrl+V for applications that don't respond well to it
    - Temporarily modifies clipboard (see [Advanced Settings](./advanced-settings#clipboard-handling) for clipboard behavior options)

- **Direct** (default on Linux): Inputs keystrokes directly into text field
    - Bypasses clipboard completely
    - May not work in all applications
    - Useful for troubleshooting clipboard-related issues

:::warning
The "Direct" paste method may not work correctly in all applications. Only use this option if you're experiencing issues with the default clipboard method or if I've recommended it for troubleshooting.
:::

**When to change:**

- If transcriptions aren't being pasted correctly
- If clipboard conflicts occur with other applications
- For troubleshooting pasting issues in specific applications
- If using terminal applications on Linux/Windows (try Shift+Insert method)

### Word Correction Threshold

**Location**: Settings > Debug > Word Correction Threshold

Controls how aggressively [custom words](./basic-usage#custom-words) are applied during transcription:

- **Range**: 0.0 to 1.0
- **Default**: 0.18
- **Lower values** (closer to 0.0): Less aggressive corrections
    - Custom words only applied when very confident
    - Reduces false corrections
    - May miss some intended corrections

- **Higher values** (closer to 1.0): More aggressive corrections
    - Custom words applied more liberally
    - Catches more intended corrections
    - May cause false corrections

:::info
This setting only affects transcriptions when you have custom words configured in **Settings > Transcription > Custom Words**. If you haven't added any custom words, this setting has no effect.
:::

**When to adjust:**

- If custom words aren't being applied when they should be (increase value)
- If words are being incorrectly replaced (decrease value)
- For fine-tuning transcription accuracy with domain-specific vocabulary

**Recommended approach:**

1. Start with the default (0.18)
2. Test with your custom words
3. Adjust in small increments (0.05-0.10) if needed
4. Test again after each adjustment

### Always-On Microphone

**Location**: Settings > Debug > Always-On Microphone

Keeps the microphone stream active continuously:

- **Default**: Disabled (off)
- **When enabled**: Microphone remains open even when not recording
    - **Benefit**: Lower latency when starting recordings
    - **Drawback**: Prevents computer from entering sleep mode
    - **Resource usage**: Continuous microphone stream uses system resources

:::danger[Important Considerations]
When Always-On Microphone is enabled:

- Your computer may not automatically sleep or hibernate
- Increases battery consumption on laptops
- Microphone remains active (though not recording) at all times
- Other applications may not be able to access the microphone

**Only enable this if you absolutely need the reduced latency and understand the trade-offs.**
:::

**When to enable:**

- If you experience significant delays when starting recordings
- For testing microphone latency issues
- When you need instant recording response time
- When power consumption and sleep mode aren't concerns

**When to keep disabled:**

- On laptops (battery life concern)
- If you rely on automatic sleep mode
- If other applications need microphone access
- For normal daily use (default behavior is sufficient)

## Troubleshooting with Debug Settings

### Pasting Issues

If transcriptions aren't being pasted correctly:

1. Try switching **Paste Method** between the available options:
    - On Windows/Linux: Try "Clipboard (Shift+Insert)" if Ctrl+V doesn't work
    - Try "Direct" mode if clipboard methods don't work
2. Test in the problematic application
3. If one method works better than others, report the details to me at support@knowii.net

### Custom Words Not Working

If your custom words aren't being applied:

1. Verify custom words are configured in **Settings > Transcription > Custom Words**
2. Try increasing **Word Correction Threshold** to 0.25-0.30
3. Test with a recording that should trigger the custom word
4. Adjust threshold up or down based on results

### Recording Latency

If you experience delays when starting recordings:

1. Enable **Always-On Microphone**
2. Test the recording latency
3. Decide if the latency improvement justifies the trade-offs
4. Disable if the improvement isn't significant enough

## Resetting Debug Settings

Each debug setting has a **reset button** (circular arrow icon) next to it that restores the default value for that specific setting.

## Related Documentation

- [Basic Usage](./basic-usage) - General application usage
- [Advanced Settings](./advanced-settings) - Other configuration options
- [Support](../support) - Get help if you're experiencing issues

## Need Help?

If you're unsure about debug settings or need assistance troubleshooting:

- Check the [FAQ](../faq) for common issues
- Email me at support@knowii.net with details about the issue you're experiencing
- Visit the [Knowii Community](https://www.knowii.net) for community support
