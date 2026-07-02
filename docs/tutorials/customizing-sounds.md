---
sidebar_position: 2
title: Customizing Sounds Tutorial
description: Step-by-step tutorial to personalize Knowii Voice AI audio feedback. Pick different built-in sounds, adjust the volume, and add your own custom sounds.
keywords:
    - custom sounds
    - customize sounds
    - sound customization
    - audio feedback
    - recording sounds
    - start sound
    - end sound
    - personalize
---

# Customizing Sounds Tutorial

Knowii Voice AI plays a short sound when recording starts and another when your transcription is ready. These audio cues let you keep working without watching the screen - and you can fully personalize them.

In this tutorial, you will:

- Choose different built-in sounds
- Adjust the feedback volume
- Add your own custom sounds

## Prerequisites

- Knowii Voice AI installed and set up (see the [Getting Started Tutorial](./getting-started))
- For the custom sounds part: one or more `.wav` or `.mp3` files you'd like to use

## Step 1: Open the Audio Settings

1. **Right-click** the Knowii Voice AI icon in the system tray and select **Settings...**
2. Go to the **Audio** tab
3. Scroll down to the **Feedback** section

## Step 2: Make Sure Audio Feedback is Enabled

The **Audio Feedback** toggle controls whether any sounds play at all:

1. Check that **Audio Feedback** is enabled
2. If it's disabled, turn it on - the other sound settings become available

:::note
When Audio Feedback is disabled, Knowii Voice AI operates silently and all the sound settings below are inactive.
:::

## Step 3: Try a Different Built-in Sound

Knowii Voice AI ships with a collection of built-in sounds you can choose from:

1. Open the **Start Recording Sound** dropdown
2. Select any sound from the list
3. Nudge the **Volume** slider - it plays a preview so you can hear your selection
4. Repeat for the **End Processing Sound** dropdown

:::tip
Pick two clearly different sounds for start and end - that way you always know whether the app just started recording or finished transcribing, without looking at the screen.
:::

## Step 4: Adjust the Volume

The **Volume** slider controls how loud the feedback sounds play:

1. Drag the slider to your preferred level (0% to 100%, in 5% steps)
2. Each adjustment plays a test sound at the new volume, so you can fine-tune by ear

**Suggestions**:

- Quiet office: 30-50%
- Noisy environment: 80-100%

## Step 5: Add Your Own Sounds

Want to use your own sounds instead of the built-in ones? It only takes a minute:

1. In the **Feedback** section, click the **Open Folder** button next to **Custom Sounds**. Your custom sounds folder opens in your file manager (it's created automatically if it doesn't exist yet).
2. Copy your own `.wav` or `.mp3` files into that folder.
3. Back in Knowii Voice AI, open the **Start Recording Sound** or **End Processing Sound** dropdown - your sounds now appear at the top of the list, marked with **(Custom)**.
4. Select your custom sound, then nudge the **Volume** slider to preview it.

:::tip Name your files nicely
The file name becomes the name shown in the dropdown: underscores turn into spaces and each word is capitalized. For example, `gentle_chime.mp3` appears as **Gentle Chime (Custom)**.
:::

:::info Where the folder lives
The Open Folder button always takes you to the right place, but if you're curious, custom sounds are stored in the `sounds` folder inside the application data directory. See [Application Data](../user-guide/application-data) for the exact location on Windows, macOS, and Linux.
:::

## Step 6: Test Your New Sounds

Time to hear your customization in action:

1. Click in any text field (e.g., a note or an email draft)
2. **Press and hold** your recording shortcut (`Ctrl+Space` by default)
3. You'll hear your new start sound
4. Say a few words, then release the shortcut
5. When the transcription is pasted, you'll hear your new end sound

## Going Back to the Defaults

Changed your mind? Each sound setting has a **reset icon** next to it:

- Click the reset icon next to **Start Recording Sound** to restore the default start sound
- Click the reset icon next to **End Processing Sound** to restore the default end sound

Your custom sound files stay in the custom sounds folder, so you can switch back to them anytime. To remove them from the dropdowns entirely, delete the files from the folder.

## Tips

- **Keep custom sounds short** (a fraction of a second) so they don't overlap with your recording
- **Use distinct start and end sounds** so you can tell them apart by ear
- **Your sounds stay private** - custom sounds live on your computer and are never uploaded anywhere

## Troubleshooting

### My custom sound doesn't appear in the dropdown

1. Check that the file ends in `.wav` or `.mp3` - other formats are not supported
2. Make sure you copied the file into the folder opened by the **Open Folder** button (not a subfolder)
3. Close and reopen the Settings window to refresh the list

### No sound plays

1. Verify **Audio Feedback** is enabled
2. Check the **Volume** slider is above 0%
3. Verify the correct **Output Device** is selected in **Settings > Audio > Devices**
4. See the [Audio Settings troubleshooting section](../user-guide/audio-settings#troubleshooting) for more help

## Related Documentation

- [Audio Settings](../user-guide/audio-settings) - Full reference for all audio options
- [Application Data](../user-guide/application-data) - Where your files are stored
- [Getting Started Tutorial](./getting-started) - Learn the basics

## Need Help?

If you have questions about customizing sounds, visit the [Support](../support) page.
