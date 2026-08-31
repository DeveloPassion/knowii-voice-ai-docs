---
sidebar_position: 99
title: Release Notes - Knowii Voice AI
description: Latest features, improvements, and bug fixes in Knowii Voice AI. See what's new in each version and learn how to update to the latest release.
keywords:
    - release notes
    - changelog
    - what's new
    - updates
    - version history
    - new features
    - improvements
---

# Release Notes

What shipped, when, and what it changes for you.

## Upcoming Release

### New Features

**Clean Up Your Dictations With AI — Locally, or Not At All**

- A new opt-in **AI Post-Processing** section in **Settings > Advanced** hands each transcription to an AI model that fixes punctuation, capitalization and obvious mistakes before it is pasted. "so um this is a a test of the cleanup pass" becomes "This is a test of the cleanup pass."
- **It runs on your computer by default.** The default provider is [Ollama](https://ollama.com) — free, no account, nothing leaves the machine. If you would rather use a service, OpenAI, OpenRouter and the Claude API are supported, along with any OpenAI-compatible server you point it at; and if you already use the `claude` or `codex` command-line tools, it can hand the text to those and spend the subscription you already have, with no API key at all.
- **Nothing leaves your computer without a specific yes.** Choosing a provider that sends text online does not enable the feature — it asks first, naming the service, and the answer is recorded for that one provider: switch providers, or change the server address, and you are asked again. **Stop sending** withdraws it at any time. Your audio recordings are never sent anywhere.
- **Your words are never lost.** If anything goes wrong — the service is down, the key expired, the model is slow, the answer comes back mangled or tries to answer you instead of cleaning up — your original transcription is pasted unchanged and a notification says why. A safety check on the result catches a model that summarized or ran away with your text before it can reach the page.
- **History keeps both versions.** A rewritten entry shows the cleaned text with a **show the original** link underneath: the AI's version is never the only surviving copy of what you said.
- **The `claude` and `codex` tools are found even when they are not on the app's PATH.** A desktop app does not inherit your shell's `PATH`, so a tool installed through bun, npm, pnpm, volta, mise or Homebrew could be invisible to it. The app now also searches the folders those installers really use, and always shows the full path of the file it would run — so "not found" and "found the wrong one" stop looking the same. If it still cannot find yours, **Locate it myself…** lets you pick the file, and **Detect automatically** hands the job back.
- API keys are read from your environment, never written to the app's settings or logs. A **Test** button runs a fixed sample sentence — never your own text — so you can check a setup and see how fast it is before turning it on. See the [AI Post-Processing guide](./user-guide/ai-post-processing.md) to get started.

**Parakeet V3 (GPU) — Much Faster Transcription on Machines With a Graphics Card**

- A new entry in the model list, **Parakeet V3 (GPU)**, delivers the same accuracy as Parakeet V3 while using your graphics card when one is available — in our tests, dictations came back up to 3× faster, and the model itself loads in a fraction of the time. No graphics card? It quietly runs on your processor instead, at the usual speed.
- It arrives as a separate download in **Settings > Models**, so your current model keeps working untouched — download it, activate it, and compare.

**GPU On/Off Switch for Whisper**

- A new **Use GPU for Whisper** toggle in **Settings > Advanced > Performance** lets you force Whisper transcription onto your processor. It is the escape hatch for machines where the graphics card or its drivers cause crashes or garbled results — slower, but rock solid. It stays on by default, and applies the next time the model loads.

**Trailing Space After Paste**

- Another small opt-in in **Settings > Advanced > Paste**: append a space after each pasted transcription, so dictating in several takes no longer glues your sentences together.

**Auto-Submit After Paste — Hands-Free Chat**

- A new opt-in **Auto-Submit After Paste** setting in **Settings > Advanced > Paste** presses the submit key for you right after your transcription lands — dictate a message to a chat app or AI assistant and it sends itself. Choose **Enter** or **Ctrl+Enter** (Cmd+Enter on macOS) to match how your app sends messages. Off by default, so nothing changes unless you turn it on.

**Auto-Delete Old Recordings**

- A new **Keep Recordings** setting in **Settings > Advanced > History** automatically deletes audio recordings older than a window you choose — 1 day, 1 week, 1 month, or 3 months. Recordings are by far the largest files the app produces, so this keeps disk usage (and your voice archive) under control without giving up the transcriptions: only the audio goes, the text stays, and **starred entries are never touched**. The default is Forever — nothing changes unless you opt in.
- An **Open Recordings Folder** button next to it jumps straight to where your recordings live, custom audio folder included.

**Your Recording Survives a Failed Transcription — and You Can Re-transcribe It**

- The recording is now saved to History **before** transcription starts, not after. If transcription fails — an engine error, a crash — your words are no longer lost: the entry appears in History with its audio and a "No transcription yet" note.
- A new **re-transcribe** button (circular arrows) on every History entry that still has its recording runs transcription again with your active model. Use it to recover a failed transcription, or to redo an inaccurate one with a better model. Progress shows in the floating panel, and the entry's text updates in place when it finishes.

**Change the Transcription Language From the Tray**

- A new **Language** submenu in the tray menu lets you switch the transcription language in two clicks — handy when you dictate in several languages during the day. It lists exactly the languages your active model supports, with the current one checked, and stays out of the way for models that auto-detect the language (like Parakeet). The Settings window follows along automatically.

**A Proper Tooltip on the Tray Icon**

- Hovering the tray icon on Windows and macOS now shows what the app is doing — "Knowii Voice AI", "Recording", or "Transcribing" — instead of nothing.

**Minimize to the Tray**

- A new **Minimize to Tray** toggle in **Settings > Advanced** makes the minimize button tuck the window into the system tray instead of the taskbar or dock — the app stays out of your window switcher until you call it back from the tray icon. Off by default, and automatically ignored when there is no tray icon to bring the window back from.

**Hide the Tray Icon Entirely**

- A new **Show Tray Icon** toggle in **Settings > Advanced** lets you run without a system tray icon — for minimal setups where a panel button or the CLI drives dictation. The app keeps you safe while the icon is hidden: closing the window minimizes it instead of hiding it, "Start Hidden" is ignored so the window always appears at launch, and you can quit from the button in the main window. The change applies instantly, in both directions, without a restart.

**Copy Your Last Transcript From the Tray**

- A new **Copy Last Transcript** entry in the tray menu puts your most recent transcription back on the clipboard in one click. It is the quick recovery when a paste didn't land where you expected — the focus moved, the target app refused the paste — and your words seemed gone: they are in your history, and now one tray click away.

**Switch or Unload Models From the Tray**

- The tray menu now has a **Switch Model** submenu listing every model you have downloaded, with the active one checked — switch models in two clicks, without opening the main window. Handy when you alternate between a fast model for quick notes and a more accurate one for long dictations.
- A new **Unload Model** entry sits right below it: it frees the memory the model occupies while keeping it selected, so it loads again automatically the next time you dictate. If a switch fails, the app keeps your previous model active so dictation keeps working.

**Light, Dark, and System Appearance**

- A new **Appearance** selector in **Settings > Advanced > Display** lets you pick **Dark** (the classic look, still the default), **Light**, or **System** — which follows your operating system's theme and switches automatically when it does. The app window and the recording overlay both follow your choice.

**Transcription Hook — Pipe Your Text Through Your Own Script**

- A new opt-in **Transcription Hook** in **Settings > Advanced > Transcription** hands every transcription to a script you write before it is pasted: your script receives the text and whatever it prints back is what gets pasted. Clean up the wording your way, pipe it through a local AI, or forward it to another app — it is an extension point in the spirit of git hooks, and it all stays on your computer.
- Failure-proof by design: if your script is missing, crashes, or hangs, the original text is pasted unchanged and the reason is recorded in the app's logs. See the [Advanced Settings guide](./user-guide/advanced-settings.md#transcription-hook-advanced) to get started.

**Turn Off Automatic Update Checks**

- A new **Check for Updates Automatically** toggle in **Settings > Advanced** puts you in full control of the app's only recurring network request. Turn it off and Knowii Voice AI contacts nothing on its own — checking for updates then only happens when you ask, from the tray menu or **Settings > About**. On by default, so you keep getting new versions unless you decide otherwise.

### Fixes

**No More Crash When Something Captures the App's Output**

- Starting Knowii Voice AI from a script, a launcher, or a shell pipeline that reads its console output could abort the app moments after launch, the instant that reader closed. Console logging now shrugs off a closed output stream instead of taking the app down with it.

**Small Polish**

- Dropdown menus grew up: they now open upward or downward depending on the room around them, sit flush against their control, follow the page when you scroll, and are fully keyboard-driven — arrow keys move through the options, Enter picks one, Escape closes.
- Playing a recording in History now pauses whichever other recording was playing — no more two voices talking over each other.
- Adding a word that is already in your Custom Words list now tells you so, instead of silently doing nothing.
- On macOS, the app now keeps the native overlay scrollbars instead of forcing its own.

**Searching Your History No Longer Fights You**

- Typing in the History search box used to lose focus after a few letters while the whole page flashed a loading state — the list reloaded on every keystroke and took the search field down with it. The search box now keeps focus and the list updates smoothly in place once you pause typing.

**Dictation Pastes Again on Recent Hyprland (Omarchy 4)**

- On Hyprland 0.56 and later, which is what Omarchy 4 ships, transcriptions stopped arriving in your applications. The words were recognised correctly, they simply never landed anywhere, and they were gone from the clipboard too, so there was nothing left to paste by hand. The recording indicator also appeared in the wrong place.
- Hyprland 0.56 changed the way other programs talk to it, and Knowii Voice AI was still speaking the old language. Every window instruction it sent was quietly ignored, which left the recording indicator holding your keyboard focus. The paste went to the indicator instead of to you.
- Both are fixed, and older Hyprland versions keep working exactly as before. If you switched the recording indicator off to work around this, you can turn it back on.

**Cancel Now Discards What You Said**

- Pressing your cancel shortcut once transcription had already started stopped the recording, but the text still showed up in your application a moment later. Cancel now means discard: nothing is pasted, and nothing is written to your history.
- Also closed: two rare timing windows where pressing cancel at almost the same instant a recording ended could still let the text slip through. Cancel now wins that race, every time.

## Version 0.9.0 (August 23, 2026)

### New Features

**Instant Transcription (Experimental)**

- Turn on **Settings > Advanced > Transcription > Instant transcription** and Knowii Voice AI transcribes your speech at natural pauses while you are still talking. When you stop, only the last few words remain to process — your text appears almost instantly, even after minutes of dictation.
- Nothing changes in how the text arrives: one paste, at the end, like always. Your saved recordings are untouched.
- Off by default. The classic whole-recording mode stays exactly as it was.

### Improvements

**Confirm With Enter, Cancel With Escape**

- Confirmation dialogs (deleting a history entry, clearing unstarred entries) now respond to the keyboard: Enter confirms, Escape cancels. No more reaching for the mouse to answer a yes/no question.

**A Quieter, Sharper Recording Indicator**

- The recording indicator no longer keeps your computer busy after it disappears: once it fades out, it stops all background drawing work. Less CPU, less battery, nothing to notice — which is the point.
- On Windows, the indicator could show up cropped after unplugging a monitor, switching displays, or changing the display scale. It now redraws correctly wherever it lands.

**Long Dictations No Longer Lose Text**

- With models like Parakeet, recordings longer than a couple of minutes could come back garbled, incomplete, or empty — the model simply cannot process that much audio in one go. Long dictations are now split at pauses in your speech behind the scenes, transcribed piece by piece, and delivered as one text. Ten-minute monologues welcome.

**Your Dictation Survives a Model Hiccup**

- Knowii Voice AI loads the transcription model in the background while you speak, so transcription starts the moment you stop. Until now, if that background load failed, your dictation was lost with an error. The app now retries the load before transcribing: you might wait a few extra seconds, but your words come through.

**Windows Crash on Startup After 0.8.0 — Fixed**

- Version 0.8.0 could crash on startup on Windows 10 and 11. The bundled transcription engine had been built for very recent processors only, so it failed instantly on anything older. It is now built for a portable baseline and runs on every supported CPU. If 0.8.0 crashed for you, update to 0.9.0.

## Version 0.8.0 (August 22, 2026)

### New Features

**Transcribe Your Files, Right in the App**

- Drop audio or video files onto the Knowii Voice AI window and they are transcribed into your [history](./user-guide/history): meeting recordings, interviews, podcasts, videos. No `ffmpeg`, no conversion, nothing uploaded anywhere.
- Prefer the tray? **Transcribe File...** opens a file picker and works even while the main window is hidden.
- Drop several files at once and they are processed as a queue, with a progress card showing which file is running and what comes next. The card's ✕ skips the current file; **Cancel all**, the tray, or your cancel shortcut stop the whole job.
- Long recordings are cut at pauses in the speech, never in the middle of a word, and a transcribed hour of audio stays tidy in your history thanks to a Show more toggle.
- File transcriptions are never pasted into other apps and never show the recording overlay. They land in history, period. See [File Transcription](./user-guide/file-transcription).

**The `transcribe` CLI Now Ships With the App**

- Every installer now includes the standalone [`transcribe` command](./user-guide/cli): subtitles (`srt`, `vtt`), plain text, JSON, batch folders, model management, all offline. On deb and RPM installs it lands at `/usr/bin/transcribe`, ready to use.
- New to it? The [Transcribe CLI Tutorial](./tutorials/transcribe-cli) takes you from zero to your first subtitle file.

**Cleaner, More Accurate Transcriptions**

- **Word Replacements**: For terms that are always transcribed the same wrong way, add an exact find-and-replace rule (Settings → Transcription). It matches whole words, ignores capitalization, and fixes those stubborn terms every time.
- **Phonetic Replacements**: Dictating in one language but using names or acronyms from another? Fix terms that come out in the wrong alphabet. For example, map the transcribed sound "эн восемь эн" to "N8N".
- **Remove Filler Words** (optional): Automatically clean up hesitations like "uh", "um", and "hmm", and shorten stutters such as "doc doc doc" to "doc". Off by default; the words removed adapt to your transcription language, and you can supply your own list.
- **Whisper Prompt** (optional): Give Whisper models a short hint about punctuation, capitalization, or vocabulary, for example "Add proper punctuation and capitalization".

**Write Digit Sequences as Numbers**

- New option in Settings → Transcription: automatically convert runs of spoken digits ("one one two two") into numbers ("1122"). Only applies to 3 or more digits in a row, so normal sentences are never changed. Great for dictating account numbers, phone numbers, and codes.

**View and Copy Logs From Inside the App**

- New **Application Logs** section under Settings → Advanced. See the most recent activity and copy it to your clipboard with one click, so reporting a problem no longer means hunting for log files on your disk. The logs never contain the words you dictated.

**Start and Stop Dictation From a Command**

- `knowii-voice-ai --toggle-transcription` starts recording in the running app (run it again to stop and transcribe), and `knowii-voice-ai --cancel` throws away whatever is in progress. Wire them to a panel button, a window manager keybinding, or a script. See [Control a running app](./user-guide/cli#control-a-running-app) for Hyprland and Waybar examples. These commands never pull the window in front of what you are doing.
- Two new startup options: `--start-hidden` starts straight to the system tray for this launch, and `--no-tray` starts without a tray icon at all.

### Improvements

**Better Audio Quality**

- Knowii Voice AI now records at your microphone's natural quality and prepares the audio for transcription itself, giving the AI model cleaner audio to work with.
- **More microphones just work**, including USB and Bluetooth mics that only support a single recording quality.
- **Nothing gets cut off**: the very end of what you say is always captured, even when you stop recording quickly.
- Each recording starts fresh, so audio from a previous recording can never bleed into the next one.

**Ignores Silent Recordings**

- If you tap your shortcut by accident or record without speaking, the app now produces no text instead of letting the AI model invent phrases out of silence. Just record again and speak normally.

**Smoother Recording Overlay (Linux)**

- The live audio level display is now updated at a steady, efficient rate, keeping the recording overlay smooth while using noticeably less memory during long sessions.

**Recording Starts Faster**

- Pressing your shortcut now opens the microphone noticeably sooner, so less of your first word can slip by before recording actually begins. The app gets ready while it starts up, instead of doing the work at the moment you press the key.

### Reliability & Stability

This release is about not breaking. When something unexpected happens, the app recovers instead of crashing or freezing.

- **Never gets permanently stuck**: If a transcription ever takes far too long, the app now recovers on its own and returns to a ready state, with a clear message, instead of freezing.
- **Recovers if your microphone drops out**: Unplugging a USB mic or switching a Bluetooth headset mid-recording no longer breaks things. Reconnect or pick another microphone and carry on.
- **Clearer error messages**: You now get a clear notification when text can't be pasted, a model fails to load, a transcription fails, or the microphone can't be accessed, so you always know what happened.
- **Keeps running through hiccups**: The app degrades gracefully in edge cases (including when the system tray isn't available) rather than shutting down, and settings are automatically salvaged if the settings file ever gets corrupted.
- **Broader hardware support**: Fixed a startup crash on some older processors.
- **Verified model downloads**: every model file is checked against a known checksum after download, interrupted downloads restart cleanly instead of corrupting the file, and truncated downloads are detected and retried from a mirror.

### Bug Fixes

**No More Repeated Digits or Words (Parakeet)**

- Fixed a bug where spoken digit sequences (account numbers, phone numbers) could come out with repeated characters or words, e.g. "11768211" becoming "1176821111111". Slowly spoken numbers were the most affected. Transcriptions with Parakeet models are now accurate regardless of the paste method used.

**More Reliable Clipboard Protection**

- If your clipboard held an image or files, a clipboard-based paste used to wipe it clean. The transcription now stays on the clipboard as text instead. Copied text is still restored as before.

**No More Accidental Double Recordings**

- Pressing your recording shortcut while a previous transcription is still being processed is now safely ignored, instead of silently starting a new recording that could split your dictation in two.

**Mouse and Trackpad No Longer Affected While the App Runs (Linux)**

- Fixed an issue where wireless mice (and similar devices that combine a keyboard and pointer, like Logitech receivers) could stop moving while Knowii Voice AI was running
- Fixed trackpad swipe gestures (e.g. switching workspaces) breaking after a transcription was pasted on Hyprland and Sway
- Fixed a rare case where the trackpad could stay unresponsive if the app started while a key was held down

## Version 0.7.0 (July 2, 2026)

This release makes Knowii Voice AI rock-solid on Linux, and brings quality-of-life improvements to all platforms.

### New Features

**Microphone Test**

- Test your microphone directly from Settings → Audio to verify it's picked up correctly before you start recording

**Reworked Global Shortcuts and Text Output on Linux**

- Global shortcuts now work reliably across Linux desktops (GNOME, KDE, Hyprland, and more) thanks to a new low-level shortcut engine
- Transcribed text is now typed using your actual keyboard layout on Wayland
- Shortcut keys are suppressed while recording, so they no longer leak into the active application
- The `.deb` and `.rpm` packages automatically set up the required keyboard permissions; AppImage users get clear in-app guidance to do the same
- The app now warns you when no compatible typing tool is installed

**Clearer Error Feedback**

- A clear warning is shown when a recording fails to start
- A clear warning is shown when global shortcuts fail to initialize

**Faster Dropdown Navigation**

- Searchable dropdowns (like the language and model pickers) now support type-ahead: just start typing to jump to the right entry

### Improvements

- **GNOME without a system tray**: The app now degrades gracefully and explains what to do when no system-tray host is available
- **Quieter offline behavior**: Checking for updates while offline no longer floods the logs with errors

### Bug Fixes

- Restored the main window titlebar on GNOME and KDE
- Fixed a launch crash on GNOME (Wayland)
- Fixed the recording overlay configuration on recent Hyprland versions
- Linux packages now declare the required Vulkan runtime dependencies, so GPU acceleration works out of the box
- Fixed shortcuts occasionally double-triggering after the app resumed them

---

## Version 0.6.1 (June 17, 2026)

### Improvements

**Reliable Windows Builds**

- Updated the Windows packaging so installers continue to build correctly with the latest build tools
- Ensures every release ships a complete set of Windows, macOS, and Linux downloads together

This is a maintenance release on top of 0.6.0. Nothing changed in the features or in how you use the app.

---

## Version 0.6.0 (June 17, 2026)

This is a major release: Knowii Voice AI is now available on **macOS and Linux** in addition to Windows, with several new transcription models and quality-of-life improvements.

### New Features

**Now Available on macOS and Linux**

- **macOS**: Native builds for both Apple Silicon (M1 and newer) and Intel Macs, **signed and notarized by Apple**, so it installs without warnings
- **Linux**: Native packages in three formats (`.deb`, `AppImage`, and `.rpm`), with Wayland/Hyprland compatibility
- Windows remains fully supported, with the same private, on-device experience now on every major platform

**More Transcription Models**

- **Omnilingual**: Automatic language detection across 1,600+ languages, including rare and underrepresented ones
- **Moonshine**: the fastest option, for lower-end machines and quick notes
- **Parakeet v2**: Updated NVIDIA Canary models with improved accuracy and timestamps

**Command-Line Interface**

- A standalone `transcribe` command lets you transcribe audio files and manage models from the terminal. No window required
- Handy for scripts, automation, and power users

**Quick Folder Access**

- New **Open Folder** buttons to jump straight to your **app data folder** (Settings → About), your **custom sounds folder** (Settings → Audio), and your **history folder** (History)
- Folders are created automatically if they don't exist yet

**Recording Overlay Options**

- Turn the on-screen recording overlay on or off
- Choose from more overlay positions to fit your workflow

**Faster Model Downloads**

- Models now download in parallel and from mirror locations, so getting set up is quicker and more reliable

### Improvements

- **Snappier History**: The History screen now loads in pages and lazy-loads audio, so it stays fast even with lots of transcriptions
- **Tidier Data Storage**: Your data, logs, and settings are now grouped together in a single application data location, making backups and troubleshooting easier
- **Sound Previews**: Changing your start/stop sounds now plays a quick preview so you can hear your choice immediately
- **Windows**: Double-click the tray icon to open the main window

### Bug Fixes

- Fixed push-to-talk on Linux (Hyprland)
- Fixed a Windows crash when a microphone rejected the 16 kHz recording setting
- Improved file download handling and notifications
- Fixed a double-logging issue

---

## Version 0.5.0 (November 12, 2025)

### Improvements

**Unified Update Experience**

- Update checks are now consistent across the entire app. The status bar footer, the Settings → About page, and the system tray menu all behave the same way
- All update entry points now show the same information and work the same way

**Enhanced Troubleshooting**

- Log files are now automatically generated for better troubleshooting and diagnostics
- Log files are stored in a `logs` folder within your application data folder (`%APPDATA%\knowii-voice-ai\logs` on Windows)
- See the [Support page](/support#how-to-find-log-files) for instructions on locating log files when reporting issues

### Bug Fixes

**Update System Reliability**

- Fixed critical issues with the automatic update system that cause the application to start on startup
- Improved error handling throughout the update process

**Note**: You have to download this version manually. Moving forward though, the update system should work reliably.

---

## Version 0.4.0 (November 11, 2025)

### New Features

**Enhanced Model Support**

- Added English-optimized variants of Whisper models for faster and more accurate English transcriptions
- Added Whisper Tiny model option for even faster transcriptions on lower-end hardware
- Automatic language matching: the app now ensures your selected language is compatible with your chosen transcription model

**Improved Paste System**

- New paste insert mode that types transcriptions character by character (useful for applications where clipboard paste doesn't work)
- Paste settings moved to Advanced tab for ease of access

**Better User Interface**

- Audio settings moved to a dedicated tab for easier navigation
- Custom word replacements extracted to a separate, more accessible component

---

## Version 0.3.0 (November 8, 2025)

### New Features

**Automatic Update System**

- Built-in update checker that notifies you when new versions are available
- Download updates directly from the app (check Settings → About or the tray menu)

**Audio Features**

- Add custom sounds to play when recording starts/stops
- New set of built-in sounds

### Security Enhancements

- Cryptographic signature verification ensures updates are authentic and safe

---

## Version 0.2.0 (November 5, 2025)

### New Features

**Documentation Access**

- Direct link to documentation in the About screen for quick access to help and guides

**Improved User Experience**

- Added missing "Auto" language detection option in the onboarding flow
- Enhanced main window and overlay visual design for a more polished look

---

## Earlier Versions

### Version 0.1.0 (November 4, 2025)

The initial release of Knowii Voice AI included:

**Core Features**

- Local voice-to-text transcription
- Support for multiple transcription models (Whisper and Parakeet)
- Push-to-talk recording with customizable keyboard shortcuts
- Transcription history with search, filtering, starring, and editing
- Audio playback of recorded transcriptions
- Voice Activity Detection (VAD) with real-time audio level visualization
- Custom word replacement for fixing common transcription errors
- System tray integration

**Platform Support**

- Windows support
- Test builds available for Linux

**User Interface**

- Modern, responsive design that works on all screen sizes
- Recording overlay with configurable position
- Onboarding flow for new users
- Settings organization across multiple tabs (General, Transcription, Audio, History, Advanced, Debug)
- Model download and management

**Audio Features**

- Audio feedback sounds for recording start/stop
- Multiple sound themes
- Volume control for audio feedback
- Support for custom sound files

**Advanced Features**

- Multiple microphone mode options (Always On, On Demand)
- Device selection for input and output
- Configurable model auto-unload timeouts
- Debug mode for troubleshooting

---

## How to Update

To update to the latest version, see the [Updating Guide](./user-guide/updating) for detailed instructions on both automatic and manual updates.

---

## Stay Informed

To receive notifications about new releases:

- **Enable update checks** in Settings → About
- **Watch** the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai-docs)
- **Visit** the [website](https://voice-ai.knowii.net) for announcements
- **Join** the [Knowii Community](https://www.knowii.net)

---

_For technical details and full changelog, visit the [GitHub repository](https://github.com/DeveloPassion/knowii-voice-ai)._
