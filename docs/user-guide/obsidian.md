---
sidebar_position: 6.6
title: Obsidian (Beta)
description: Speak, and your words land in your Obsidian vault as a new note or a line in today's daily note. Works with Obsidian closed, nothing to install.
keywords:
    - Obsidian
    - vault
    - daily note
    - voice notes
    - capture
    - templates
    - Obsidian Starter Kit
    - note types
    - Local REST API
    - obsidian-cli-rest
    - Templater
    - presets
    - Stream Deck
    - Meta Bind
---

# Obsidian (Beta)

:::info Coming in the next release

The Obsidian integration is not in version 0.9.0. It is described here ahead of the release it ships in; check **Settings > About** for your version. It ships as a **beta**: it works, and I want your feedback on how it fits the way you use your vault.

:::

An idea shows up while you are in the middle of something else. Press a shortcut, say it, press the shortcut again, and a few seconds later it is in your vault: as a new note in your inbox folder, or as a timestamped line in today's daily note. No window switching, no typing.

That is what the Obsidian integration does. By default, Knowii Voice AI writes the note itself, so it works with Obsidian closed and needs no plugin. If you would rather have Obsidian write it (so your Templater templates run), two plugins can do that: see [How notes are written](#how-notes-are-written). Every capture is also saved to [History](./history.md), so nothing you say is lost, even when the vault is not reachable.

## Setting it up

1. Open **Settings > Integrations**.
2. Under **Vault**, choose your vault. The list shows the vaults Obsidian knows about on this computer; **Browse…** picks any other folder.
3. Knowii Voice AI reads your vault's own settings and fills in two [presets](#presets) for you:
    - **Daily note**: appends to today's daily note, in the folder and with the date format your vault already uses (from the core Daily Notes plugin, or from Periodic Notes if you use it).
    - **New note**: a new note per capture in a `Voice notes` folder, named with the date and a title.
4. Pick the one the capture shortcut uses with **Capture shortcut uses this**. Each card shows a **preview**: the exact note a capture made right now would go to, and what it would look like afterwards. Nothing is written by the preview.
5. Set a **Capture shortcut**. It is not set by default, so installing the update does not take a key away from another app.

That is all. Press the capture shortcut and speak.

:::tip No shortcut needed

The tray menu has a **Capture to Obsidian** item as soon as a vault is set up, and **Stop and Save to Obsidian** while a capture is recording. For a keybinding in your window manager or a script, run `knowii-voice-ai --toggle-capture` (see the [CLI page](./cli.md)). Stream Deck buttons and buttons in your notes can use a link: see [Start a capture from another app](#start-a-capture-from-another-app).

:::

## What a capture does

A capture records and transcribes exactly like a dictation: your custom words, filler removal, [AI post-processing](./ai-post-processing.md) and your [transcription hook](./advanced-settings.md#transcription-hook-advanced) all apply. Push to talk works the same way too. The difference is at the end: instead of typing the text where your cursor is, Knowii Voice AI saves it as a note.

While you speak, the overlay shows a 📝 instead of the microphone, so you know this recording goes to your vault. Then it shows **Saving to Obsidian**, and a notification names the note it went to.

Want the text in your vault **and** where you are typing? Turn on **Also type the text**. The note is written first, then the text is typed as usual.

## How notes are written

Under **How notes are written**, pick one of three ways:

- **Write files directly** (the default). Knowii Voice AI writes the file in your vault folder. Obsidian can be closed, and there is nothing to install. Templater code in a template cannot run this way.
- **Local REST API plugin**. Obsidian writes the note, through the [Local REST API](https://github.com/coddingtonbear/obsidian-local-rest-api) community plugin (version 5 or newer).
- **obsidian-cli-rest plugin**. Obsidian writes the note, through its own command line and the [REST and MCP server](https://github.com/dsebastien/obsidian-cli-rest) plugin.

Why go through a plugin? Because then Obsidian itself creates your notes. Your Templater templates run (dates, prompts, scripts…), and when today's daily note does not exist yet, Obsidian creates it with its own command, exactly as when you open it by hand. The price: Obsidian has to be running. When it is not, the capture waits in [History](./history.md), and **Retry** sends it once Obsidian is back.

### Setting up a plugin

1. Install and turn on the plugin in Obsidian (**Settings > Community plugins**). For obsidian-cli-rest, also turn on Obsidian's command line (**Settings > General > Command line interface**).
2. Copy the plugin's **API key** from its settings.
3. Put the key in an environment variable, `KNOWII_OBSIDIAN_API_KEY` by default, then restart Knowii Voice AI. The key is never stored in Knowii Voice AI's settings, exactly like the keys of the [AI providers](./ai-post-processing.md#claude-api-openai-openrouter) (that page also explains how to set a variable the app can see). Prefer another name? Type it under **API key variable**.
4. In **Settings > Integrations**, choose the plugin under **How notes are written**. Leave **Plugin address** empty if the plugin uses its default address: `https://127.0.0.1:27124` for Local REST API, `http://127.0.0.1:27124` for obsidian-cli-rest. Only an address on your own computer is accepted, so the key never leaves it.
5. Click **Test connection**. For obsidian-cli-rest, the test also checks that Obsidian has this vault open.

Both plugins listen on port 27124 by default. If you install both, change the port of one of them.

**Open the note after a capture** shows each new capture in Obsidian once it is saved.

### Good to know

- **Today's missing daily note is created by Obsidian.** Knowii Voice AI finds the command your vault uses to open today's note (from Periodic Notes, Daily Notes or Journal Bases) and runs it, so your template runs, then adds the capture. The **Command that creates a missing note** field on the append card shows the command it found, and lets you set another one. Obsidian opens the note while it creates it. These commands only create **today's** note: a capture for an earlier day still waits until that note exists. The same goes for weekly or monthly notes set up with a path: only a Starter Kit periodic note, or a path with a day in its date, is created this way.
- **Templater.** The template lists include Templater templates only when a plugin writes the notes. In Templater's settings, turn on **Trigger Templater on new file creation**; otherwise the notification says the Templater code was not run. What you say is never run as code: if a capture contains `<%`, an invisible character keeps Templater from reading it, whatever the template.
- **A section's blank lines.** With Local REST API, the plugin places the blank lines around the text itself. When the section is still empty, the text goes right under the heading, with no blank line in between; a section it adds for you has no blank line before the next heading.
- **obsidian-cli-rest is slower.** Every request starts Obsidian's command line, which takes a few seconds, so a capture takes a little longer to appear.
- **obsidian-cli-rest and "dangerous" commands.** Adding text under a heading (anywhere but at the end of the note), or text containing a backslash (`\`), needs **Allow dangerous commands** in the plugin's settings. Knowii Voice AI then writes the change through Obsidian's script command, as one edit that only goes through if the note did not change since Knowii Voice AI read it. Without that setting, those captures are refused with that reason; adding at the end of a note still works.

## Presets

A preset is one way of capturing: where the text goes, and how it is laid out. "Idea" makes a new note in your Ideas folder; "Task" adds a checkbox to today's note; "Journal line" adds a timestamped line under your Notes heading. Keep as many as you like.

- **Add a preset** with the buttons under the list: **Idea**, **Journal line**, **Task**, **Meeting note** or **Quote**. Each one starts filled in (today's note is the one your vault already uses), and you change what you want.
- **Name** is what you see; **Key** is how other apps and scripts ask for this preset (`idea`, `journal-line`). It is made from the name, and stays the same if you rename the preset later, so your buttons keep working. Lowercase letters, digits and dashes only.
- **Capture shortcut uses this** picks the preset the capture shortcut, the tray menu and **Send to Obsidian** use.
- **Shortcut for this preset** is optional: a key that records straight into this preset, whatever the capture shortcut uses. It is not set when you add a preset, and a key another shortcut already uses is refused.
- **Also type the text** and **AI title** follow the general settings below the list, unless you set them **on** or **off** for this preset. For example, AI titles for your ideas, and no AI call for a one-line journal entry.
- **Delete** removes the preset and its shortcut. Notes you already saved stay in your vault, and History keeps every capture. A preset cannot be deleted while it is recording.

## Where captures go

### A new note per capture

- **Folder**: where the note is created, inside the vault. Leave it empty for the vault root.
- **File name**: for example `{{date}} {{title}}`, which gives `2026-09-23 Call the bank about the loan.md`.
- **Template**: none, a template from your vault's templates folder, or **Properties set here** to add your own properties (tags, a source link…). Your transcript goes where the template has `{{transcription}}`, or at the end of the note if it has none.

A note is **never overwritten**. If the name is taken, the capture gets a number: `Idea.md`, then `Idea 1.md`, `Idea 2.md`.

### Append to a note

- **Note**: the note to add to. With `{{date}}` in it, it is a different note every day (your daily note).
- **Under the heading**: the heading your capture goes under, written exactly as it appears in the note, emoji included (`## 🗒️ Notes`). The capture is added at the end of that section. Leave it empty to add at the end of the note.
- **Template for a missing note**: what to create the note from when it does not exist yet.

When the heading is not in the note, Knowii Voice AI adds it where your template puts it; without a template, at the end of the note (and the notification says so).

:::caution A missing daily note is not created empty

If today's daily note does not exist yet and no template is set, the capture is **not** delivered: an empty daily note would stop your vault's own template from filling it in later. Open today's note in Obsidian once (or choose a template), then use **Retry** in [History](./history.md). The capture waits there in the meantime. With a plugin, Obsidian creates today's note for you (see [Good to know](#good-to-know)).

:::

### Text layout

- **Paragraph**: your transcript as it is.
- **Timestamped line**: one line starting with the time, for a running log in your daily note: `- 14:05 Call the bank about the loan.` Add a **Marker** such as `#idea` to get `- 14:05 #idea Call the bank about the loan.`
- **Task**: a checkbox, `- [ ] Call the bank about the loan.` A **Marker** goes after the checkbox: `#task`, or whatever your task plugin looks for.
- **List item**: `- Call the bank about the loan.`
- **Quote**: every line of what you said as a quote block, `> Call the bank about the loan.`

A timestamped line, a task and a list item are one line each: if you paused long enough for the transcript to have several lines, they are joined into one.

## Start a capture from another app

Every preset has a link, shown on its card with a **Copy link** button:

```
knowii-voice-ai://capture?preset=idea
```

Open it once to start a capture with that preset; open it again to stop and save. Anything that can open a link can start a capture:

- **Stream Deck**: a **Website** action with the link.
- **A button in a note**, with [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin):

    ````
    ```meta-bind-button
    label: Capture an idea
    style: primary
    actions:
      - type: open
        link: knowii-voice-ai://capture?preset=idea
    ```
    ````

- **Launchers and scripts**: `xdg-open` on Linux, `open` on macOS, `start` on Windows. Put the link in quotes, because shells read `?` and `&` themselves: `xdg-open 'knowii-voice-ai://capture?preset=idea'`, or on Windows `start "" "knowii-voice-ai://capture?preset=idea"`. In a script, the command is simpler: `knowii-voice-ai --toggle-capture --preset idea` (see the [CLI page](./cli.md)).

Two more forms: add `&action=start` or `&action=stop` for a button that only starts, or only stops (handy on a Stream Deck with two keys); and `knowii-voice-ai://cancel` throws away the capture in progress (only a capture: never a dictation, a file transcription or a download). `knowii-voice-ai://capture` without a preset uses the one the capture shortcut uses.

The link works while Knowii Voice AI is running. When it is closed, opening a link only starts the app: open the link again once it is up.

:::caution Links are off until you turn them on

Any app or web page can open a link like this, and this one turns your microphone on. So Knowii Voice AI ignores them (and tells you so) until you turn on **Allow other apps to start captures**, under the presets. A link only names a preset: it cannot carry text, choose a note, or do anything else. A capture started or stopped by a link is saved to your vault but never typed, even with **Also type the text** on: the window in front could be the page that opened the link. The overlay shows every recording, however it started. The command line works either way: it needs someone already at your computer.

:::

While one preset is recording, a link or command for another preset is refused ("Finish the current recording first"), exactly like a shortcut. A preset's link stops its capture however it started, from its shortcut or from the capture shortcut. The tray's **Stop and Save to Obsidian** stops a capture whatever preset it uses.

## Obsidian Starter Kit vaults

If your vault uses the [Obsidian Starter Kit](https://www.store.dsebastien.net/product/obsidian-starter-kit), its plugin already knows where every kind of note lives, how it is named, which properties and tags it carries, and which sections its template has. Knowii Voice AI can use all of that, so you pick "a meeting note" or "today's daily note" instead of typing folders and file names.

Turn on **Use this vault's note types** under the vault picker. The switch only shows up in a Starter Kit vault. To read the note types, Knowii Voice AI runs the small tool the Starter Kit plugin keeps inside your vault. That is why it is off until you turn it on, for each vault separately, and why it refuses to run the tool if another user on the computer could have changed it (the message tells you the one command that fixes it).

Each card then asks where the capture goes:

- **A Starter Kit note type** (new note per capture): choose the **Note type** and a **Title** (`{{title}}` by default). The note type decides the folder, the name ending (for example ` (Voice)`), the properties and the tags. **Under the section** lists the headings of the type's template; captures go right after the properties if you pick none. When the note type names a section for captures, it is selected for you.
- **A Starter Kit periodic note** (append): **The day's daily note**, or the week's, month's, quarter's or year's note, found by the Starter Kit for the day you speak, plus the section to add to (`📝 Notes`, for example).

Saving as a note type needs the Starter Kit **1.24.0** or later; periodic notes work with any version.

:::tip A note type for your captures

Want your captures in their own place? Under the note type list, **Create a note type for captures** asks the Starter Kit to add one (a name and a folder, "Voice Capture" and `Voice captures` by default). It comes with a small template that has a **Transcript** section, and captures go there. Obsidian has to be open for this, with the Starter Kit's MCP server on (it is by default); Knowii Voice AI talks to it on this computer only.

:::

The Starter Kit's own templates use Templater, which Knowii Voice AI cannot run when it writes the file itself. So a new note gets the properties and tags of its type, then your capture; and a daily note that does not exist yet is not created (see the caution above). With a plugin, Obsidian creates today's periodic note with the Starter Kit's own command, so its template runs.

## Placeholders

Use these in any field above, and in templates and properties too. They are filled in at the moment you capture, and kept: a capture you retry tomorrow still goes to today's note.

| Placeholder                                        | Becomes                                                                                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{date}}`                                         | `2026-09-23`                                                                                                                                  |
| `{{date\|FORMAT}}`                                 | the date in your own format, with Obsidian's date tokens: `{{date\|YYYY/MM/YYYY-MM-DD}}` gives `2026/09/2026-09-23` (and creates the folders) |
| `{{time}}`, `{{time\|FORMAT}}`                     | `14:05`, or your format                                                                                                                       |
| `{{year}}`, `{{month}}`, `{{week}}`, `{{quarter}}` | `2026`, `09`, `39` (ISO week), `3`                                                                                                            |
| `{{title}}`                                        | the note's title (see below)                                                                                                                  |
| `{{transcription}}`                                | what you said                                                                                                                                 |
| `{{duration}}`                                     | how long you spoke: `1:05`                                                                                                                    |
| `{{language}}`                                     | the language you set in Transcription settings, when it is not automatic                                                                      |

If you use QuickAdd, its `{{VALUE}}`, `{{DATE}}`, `{{DATE:FORMAT}}` and `{{TIME}}` work too. A placeholder Knowii Voice AI does not know is left as it is.

## Titles

By default the title is the first eight words you said: "Call the bank about the loan on Friday" for "Call the bank about the loan on Friday, and ask for the rate."

Turn on **AI titles** and your [AI provider](./ai-post-processing.md) writes a short title instead. It is one more request per capture, which is why it is off by default. It follows the same rules as the cleanup pass: a cloud provider needs your explicit yes first, and if the AI is slow (more than 20 seconds) or answers with something that is not a title, the first words are used and your capture goes through anyway.

## Templates and properties

- A template from your vault is used as it is. Its properties are copied line by line, never reformatted.
- **Templater** code (`<% %>`) cannot run when Knowii Voice AI writes the file itself: it would appear in the note as it is. That is why Templater templates are only offered when a plugin writes the notes (see [How notes are written](#how-notes-are-written)). Otherwise, use a plain template, or Knowii Voice AI's own placeholders.
- With **Properties set here**, Knowii Voice AI writes the properties you list. It never writes `created` or `updated`: plugins such as Linter keep those up to date, and two tools writing the same property fight.

## Sending from History, and retrying

Every entry in [History](./history.md) has a **Send to Obsidian** button (📝) once a vault is set up. It files the entry with the preset the capture shortcut uses, at the time you originally said it: a dictation from last Tuesday lands in last Tuesday's daily note.

Entries that went to Obsidian show **In Obsidian** (hover it to see the note). Entries that did not show **Not in Obsidian** with the reason, and a **Retry** button that sends them again to the same place, for the same day.

If History is turned off, there is nothing to retry from: when a capture cannot be delivered, its text is put on your clipboard instead, and the notification says so.

## Safety

- **Never overwrites.** New notes get a new name; appends only add lines.
- **Never a half-written note.** Written directly, each change goes to a temporary file next to the note, then is swapped in at once. Through a plugin, a change in the middle of a note only goes through if the note did not change since it was read; otherwise nothing is written and you can retry.
- **Sync-aware.** If Syncthing, Dropbox or Nextcloud left a conflict copy of the note, the capture waits until you have sorted it out. If the note changes while the capture is being written, nothing is written and you can retry.
- **Stays in your vault.** A capture can never write outside the vault folder, or into `.obsidian`.

## What the beta does not do yet

- **The tray and Send to Obsidian use one preset**: the one the capture shortcut uses. Pick another preset with its own shortcut or its link.

## Troubleshooting

**"Not saved to Obsidian: the vault folder … is not available."** The vault is on a drive that is not connected, or it moved. Choose it again in **Settings > Integrations**, then **Retry** from History.

**"… does not exist yet; open it in Obsidian once …"** See the caution about daily notes above.

**"… has a sync conflict copy …"** Resolve the conflict in Obsidian (or delete the conflict copy), then **Retry**.

**"… the Starter Kit's osk-cli is writable by other users …"** The tool in your vault's Starter Kit folder can be changed by someone else on this computer, so it is not run. Run the `chmod go-w` command from the message on the file it names, then turn the switch on again.

**"… note-type destinations need Obsidian Starter Kit 1.24.0 or later …"** Update the Starter Kit plugin in Obsidian (**Settings > Community plugins**).

**"Obsidian is not reachable …"** when creating a note type: open the vault in Obsidian, and check that the MCP server is on in the Starter Kit's settings.

**"… plugin did not answer …: is Obsidian running with the plugin on?"** Start Obsidian, check that the plugin is on and that **Plugin address** matches its settings, then **Retry** from History.

**"no API key: set the environment variable …"** or **"… refused the API key …"** The key is missing, wrong, or the app did not see the variable. Copy the key from the plugin's settings again, set the variable, and restart Knowii Voice AI (see [Setting up a plugin](#setting-up-a-plugin)).

**"… version … is too old …"** Update the Local REST API plugin to version 5 or newer in Obsidian.

**"… cannot find the Obsidian command line …"** Turn on **Command line interface** in Obsidian's settings (**General**).

**"… needs "Allow dangerous commands" …"** See [Good to know](#good-to-know): turn the setting on in the obsidian-cli-rest plugin, or add captures at the end of the note.

**"Obsidian ran "…", but … did not appear."** The command created a different note than the one the destination points to. Check the destination's **Note** path, or set the right **Command that creates a missing note**.

**"Obsidian's vault … is at …, not …"** Obsidian knows another vault by that name. Open the vault you chose in Obsidian, or pick the one Obsidian has open.

**"… did not answer in time, so the note may or may not have been written …"** Obsidian was too slow to confirm. Look at the note first: if the capture is not there, use **Send to Obsidian** on the History entry.

**"… mixes Windows and Unix line endings …"** Knowii Voice AI would have to rewrite the whole note to add your capture through a plugin, so it does not. Save the note with one kind of line ending (most editors can convert it), or write files directly.

**"The template contains Templater code, which was not run."** Turn on **Trigger Templater on new file creation** in Templater's settings.

**"Obsidian capture is not ready."** The capture shortcut was pressed before a vault and a preset were set up.

**"A link asked to start a capture, but links are off."** Turn on **Allow other apps to start captures** in **Settings > Integrations**, if you meant to use the link.

**"No preset is called "…"."** The link or `--preset` names a key no preset has. The message lists the keys you have; each preset's card shows its own. Keys do not change when you rename a preset, but they do when you edit the **Key** field.

**Opening the link does nothing, or opens your browser (AppImage).** The AppImage tells your desktop about the link when you turn **Allow other apps to start captures** on, and again at every start while it is on (the AppImage file changes with every update). If you moved the file, start it once. Keep the AppImage in a folder whose path has no spaces: on desktops such as Hyprland or Sway, `xdg-open` cannot start a program from a path with spaces, and opens the link in your browser instead. Turning the switch off removes Knowii Voice AI as the app for these links. Installed packages (`.deb`, `.rpm`, Windows, macOS) register the link when they are installed.

**Opening the link starts Knowii Voice AI but no capture.** The app was closed: the link only starts it. Open the link again.

**"… already uses this shortcut."** Each key combination can only start one thing. Pick another key, or remove it from the other shortcut first.

**The note looks wrong.** Check the preview on the destination's card: it shows exactly what a capture would write.

## Related Documentation

- [History](./history.md)
- [AI Post-Processing](./ai-post-processing.md)
- [Command-Line Interface](./cli.md)
- [Advanced Settings](./advanced-settings.md)
