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

- A new opt-in **AI Post-Processing** section in **Settings > Advanced** hands each transcription to an AI model that fixes punctuation, capitalization and obvious mistakes before it is pasted. "so um this is a a test of the cleanup pass" becomes "So this is a test of the cleanup pass."
- **It runs on your computer by default.** The default provider is [Ollama](https://ollama.com) — free, no account, nothing leaves the machine. If you would rather use a service, OpenAI, OpenRouter and the Claude API are supported, along with any OpenAI-compatible server you point it at; and if you already use the `claude` or `codex` command-line tools, it can hand the text to those and spend the subscription you already have, with no API key at all.
- **Nothing leaves your computer without a specific yes.** Choosing a provider that sends text online does not enable the feature — it asks first, naming the service, and the answer is recorded for that one provider: switch providers, or change the server address, and you are asked again. **Stop sending** withdraws it at any time. Your audio recordings are never sent anywhere.
- **Your words are never lost.** If anything goes wrong — the service is down, the key expired, the model is slow, the answer comes back mangled or tries to answer you instead of cleaning up — your original transcription is pasted unchanged and a notification says why. A safety check on the result catches a model that summarized or ran away with your text before it can reach the page.
- **History keeps both versions.** A rewritten entry shows the cleaned text with a **show the original** link underneath: the AI's version is never the only surviving copy of what you said.
- **The `claude` and `codex` tools are found even when they are not on the app's PATH.** A desktop app does not inherit your shell's `PATH`, so a tool installed through bun, npm, pnpm, volta, mise or Homebrew could be invisible to it. The app now also searches the folders those installers really use, and always shows the full path of the file it would run — so "not found" and "found the wrong one" stop looking the same. If it still cannot find yours, **Locate it myself…** lets you pick the file, and **Detect automatically** hands the job back.
- **Fallback microphones.** Pick, in order, which microphones to use when your selected one is not there — a headset that is off, a USB mic that stayed at the office. The app tries them top to bottom, then the system default, and tells you once which one it is recording with. When the selected microphone is back, it takes over again by itself.
- **Live dictation — your words appear while you speak.** A new **Live dictation** switch in Settings > Advanced > Transcription pastes each chunk of speech into the window you are working in the moment it is transcribed, at the natural pauses — typically well under a second after you pause — instead of everything at once when you stop. Stopping still finishes the last words, saves the whole text to History, and applies the trailing space and auto-submit once at the end. Cancel stops the stream but leaves on screen what is already there. It turns AI post-processing off (the cleanup needs the whole text) and works with every model and paste method; **Direct** typing is the smoothest. See [Live dictation](./user-guide/advanced-settings.md#live-dictation).
- **"Instant transcription" is now "Transcribe while recording (faster stop)".** Same behaviour, honest name: it transcribes at pauses while you talk so that the wait after you stop is short — it never pasted anything early, and the old name suggested it did. Text appearing while you speak is a separate feature, **Live dictation**, which ships in this same release (see above).
- **Notifications match the app.** The pop-up notifications now use the same surface, text colour, border and corner radius as the settings panels, and follow the light/dark appearance instead of always being dark (#352).
- **The microphone picker says what "System default" means.** The entry now reads _System default — (device name)_, naming the microphone your OS currently routes to — so a Bluetooth headset that silently became the default (and records nothing when its mic is idle) is visible before you dictate into it. On Linux the sound server's alias entries (`pipewire`, `pulse`, `jack`) are gone from the list: they opened the same default, or failed outright.
- **Pick the input channel on audio interfaces.** When your recording device has more than one input — a Scarlett, a mixer, a multi-input USB box — a new **Input Channel** setting under the device picker lets you record only the channel your microphone is on, instead of blending in whatever is plugged into the others. **All channels (mixed)** stays the default.
- **Faster typing with dotool when its daemon runs.** With `dotoold` running, the app now sends keystrokes through `dotoolc` instead of starting a fresh `dotool` — and a fresh virtual keyboard — for every dictation, paste and auto-submit. No daemon, no change.
- **Bring your own model file.** Turn on **Use My Own Model Files** in Settings > Transcription, drop a `.gguf` (any family transcribe.cpp knows) into the custom models folder, and it appears in the model list with a **Your file** badge — activate it like any other. The app never downloads, checks or deletes these files.
- **A paste delay you can tune.** Some applications take longer than others to regain focus after the shortcut and the recording indicator, and a paste that arrives first lands nowhere — or pastes your previous clipboard. The new **Paste Delay** setting (10–200 ms, default 80 ms, the value the app always used) lets you give such apps the extra beat; the clipboard restore that follows stretches with it, so it can never overtake the paste.
- **Two more paste methods.** **Clipboard (Ctrl+Shift+V)** sends the paste shortcut terminals actually use (Windows and Linux). **Clipboard only (no paste)** copies the transcription and stops: nothing is typed anywhere, you paste it when and where you want — and it is the one method available even on desktops where the app otherwise manages pasting for you.
- **The `transcribe` CLI handles long files with every model.** Parakeet, Moonshine and Omnilingual work on short stretches of audio — Moonshine used to stop at about 48 seconds with an "output truncated" error. The CLI now splits longer files for them the way the app already did, at pauses in the speech, and stitches the pieces back together with timestamps on the file's own timeline. Whisper still reads the whole file in one pass. Subtitles from Moonshine also get real cue times now instead of `00:00:00,000 --> 00:00:00,000`.
- **`transcribe file … -f md` writes a Markdown note.** A `# title` from the file name, then the transcript as prose — the engine's chunks joined into paragraphs, with a break wherever the speaker paused for a second and a half. No timestamps, so it drops straight into Obsidian.
- **Word-level timings from the `transcribe` CLI.** `transcribe file … -f json --timestamp-granularity word` now returns one entry per word, with whole-millisecond times, a stable index, and the sentence it belongs to — on the Parakeet models (both the ONNX and the transcribe.cpp/GGUF engines). The JSON carries a `contract_version` so tools built on it can check what they are reading, and segments gained integer `start_ms`/`end_ms` next to the existing seconds. Runs without the new option produce the same segments as before. See the [CLI reference](./user-guide/cli.md#word-level-timings-and-the-json-contract).
- **The overlay says when the AI is at work.** Once your speech is transcribed and the cleanup pass takes over, the overlay switches from "Transcribing…" to **🤖 Post-processing using AI** — so the extra wait (a second on a cloud service, longer on a cold local model) is visible instead of looking like a hang. It only appears when a cleanup pass is actually running.
- **The Claude API works with Haiku, and with identity-linked keys.** Anthropic's cheaper models reject the "low effort" hint the app sends, which used to fail every dictation on them; the app now notices and asks again without it. Keys created by signing in to the Anthropic Console need a workspace named on each request — set `ANTHROPIC_WORKSPACE_ID` and the app sends it.
- **A missing or logged-out `claude` or `codex` is caught when you flip the switch, not on your next dictation.** The app asks the tool whether you are signed in and refuses to enable the cleanup pass until you are, naming the command to run. Previously it warned and enabled anyway, which meant every dictation pasted unchanged after a failure notification — and a logged-out Codex spent close to twenty seconds finding that out each time.
- API keys are read from your environment, never written to the app's settings or logs. A **Test** button runs a fixed sample sentence — never your own text — so you can check a setup and see how fast it is before turning it on. See the [AI Post-Processing guide](./user-guide/ai-post-processing.md) to get started.

**Windows: Four Fixes From the Field**

- **The recording overlay stays on top.** On Windows the overlay could end up behind the app you were dictating into; it now re-asserts its place above every window each time it appears, without taking the focus away from where you are typing.
- **Microphone access is checked before you dictate.** When a Windows privacy switch (**Microphone access** or **Let desktop apps access your microphone**) is off, the app tells you at startup — a notification and a banner on **Settings > General** that names the switch — and an **Open privacy settings** button takes you to the right page. Until now the first sign was a recording that captured nothing. The same banner and button exist on macOS.
- **No more crash-on-start without the Visual C++ runtime.** The installer now ships the Microsoft runtime files next to the app, so a PC without the redistributable, or with an old one, starts the app instead of showing an APPCRASH.
- **Dictating into a window that runs as administrator no longer goes nowhere.** Windows silently drops keystrokes sent to elevated windows. The app now notices, puts the text on the clipboard and tells you why, instead of typing into the void. See [Troubleshooting](./user-guide/installation.md#windows-nothing-is-typed-into-a-window-that-runs-as-administrator).

**macOS: Accessibility Is Asked For Up Front**

- **The Accessibility permission is requested from the app, not in the middle of a paste.** macOS only lets apps with Accessibility access type into other apps. Before, the system prompt for it appeared the first time a dictation was pasted — over the app you were dictating into — and that first transcript was lost. Now the app tells you at startup when the permission is missing (a notification and a banner on **Settings > General** with a **Grant access** button), every dictation is copied to the clipboard until it is granted, and the banner disappears the moment you flip the switch, no restart needed. The same banner comes back if the permission is lost after an update. See [Installation → macOS](./user-guide/installation#macos).

**Whisper Moves to the GPU Engine**

- Every Whisper model (Tiny through Large V3, and the English-only variants) now runs on the same engine as **Parakeet V3 (GPU)**: your graphics card when there is one, your processor otherwise. Language, translate-to-English, the Whisper prompt and custom words all work as before, and the **Use GPU for Whisper** switch still forces the processor.
- The downloads are about half the size they were (Small: 270 MB instead of 488 MB; Large V3: 1.7 GB instead of 3.1 GB), with no measurable accuracy change.
- **A Whisper model you downloaded before needs to be downloaded again** after updating: the old file is removed for you, the new one is a click away in Settings > Models, and your settings are untouched.
- **Several times faster on computers without a graphics card (Windows and Linux).** Since 0.9.0 the transcription engine had been built to run on any processor at all — which meant it used none of the speed-up instructions that every processor from the last decade has. It now ships one build per processor generation and picks the right one when it starts, so a computer that transcribes on its processor gets the speed it always had in it: on a test laptop, a 56-second recording went from 34 seconds to 7 with Parakeet V3 (GPU) on the processor, and from 33 to 8 with Whisper Small. Computers with a graphics card were never affected. Nothing to configure.
- Your own `.bin` Whisper files in the custom models folder are no longer picked up; `.gguf` files are (see [Transcription settings](./user-guide/transcription-settings.md#using-your-own-model-files)).

**Moonshine Moves to the GPU Engine Too**

- Every Moonshine model now runs on the same engine as Whisper and Parakeet V3 (GPU) — graphics card when there is one, processor otherwise.
- **Six new models**: Moonshine Base now comes in Arabic, Chinese, Japanese, Korean, Ukrainian and Vietnamese, next to the Tiny variants — the more accurate size for those languages at 77 MB each.
- Each model is now a single file a third of the size it was (Tiny: 35 MB instead of 107 MB; Base: 77 MB instead of 239 MB), with no accuracy change.
- **A Moonshine model you downloaded before needs to be downloaded again** after updating: the old files are removed for you, the new one is a click away in Settings > Models, and your settings are untouched.

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

**Windows: Shortcuts Survive Sleep and Win+L**

- On Windows, the recording shortcut used to go dead after the computer slept or after you locked the session with Win+L, and only a restart of the app brought it back. The app now notices when Windows wakes up or your session is unlocked and re-registers its shortcuts a couple of seconds later, by itself.

**Hook Scripts Are Checked Before They Run**

- On Linux and macOS the transcription hook now refuses a script — or a `hooks` folder — that another user could have written (wrong owner, or group/world-writable), and tells you what to fix. The script also starts in the `hooks` folder and runs with your own environment instead of the app bundle's private library paths, which fixes tools that worked in a terminal but not from the hook.

**Dropdown Menus Show the Whole Name**

- A dropdown's menu used to be exactly as wide as the control, so in the settings grid two long model names could be cut to the same prefix and look identical. The menu now widens to fit its longest entry, within the window.

**No Error Toast for a Dictation You Cancelled**

- Cancel while the AI cleanup pass or your hook script is still running and fails, and you used to get an error notification about work you had just discarded. Failures of those two stages are now reported only if the dictation is still wanted.

**No More Pastes Landing on the Recording Indicator (Hyprland)**

- On Hyprland, a fast transcription could be pasted before the app had finished handing keyboard focus back from the recording indicator to your window — so the text went to the indicator and nowhere else, the same symptom as the Omarchy 4 bug fixed earlier, this time caused by timing. The paste now waits for that hand-back. The indicator also no longer risks being handed focus back to itself when the "transcribing" state appears.

**Cancelling Cannot Let Two Dictations Overlap Any More**

- Cancel a dictation, start and stop another one right away, and — once the cancelled one finally wound down — a third recording could start while the second was still being transcribed. The shortcut is now locked by the dictation that owns it, and a stale one finishing late no longer unlocks it.

**Shift+Insert Paste Actually Sticks**

- Choosing **Clipboard (Shift+Insert)** as the paste method on Windows or Linux could quietly revert to Ctrl+V: the setting was accepted by one part of the app and refused by another, so which one you got depended on which path saved it last. It is now honoured everywhere — which matters, because Shift+Insert is the method to try when Ctrl+V pasting does not work in a terminal.

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

**Instant Transcription (Experimental)** _(renamed "Transcribe while recording" in the next release)_

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
