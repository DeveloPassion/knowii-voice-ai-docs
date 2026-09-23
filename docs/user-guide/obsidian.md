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
---

# Obsidian (Beta)

:::info Coming in the next release

The Obsidian integration is not in version 0.9.0. It is described here ahead of the release it ships in; check **Settings > About** for your version. It ships as a **beta**: it works, and I want your feedback on how it fits the way you use your vault.

:::

An idea shows up while you are in the middle of something else. Press a shortcut, say it, press the shortcut again, and a few seconds later it is in your vault: as a new note in your inbox folder, or as a timestamped line in today's daily note. No window switching, no typing.

That is what the Obsidian integration does. Knowii Voice AI writes the note itself, so it works with Obsidian closed and needs no plugin. Every capture is also saved to [History](./history.md), so nothing you say is lost, even when the vault is not reachable.

## Setting it up

1. Open **Settings > Integrations**.
2. Under **Vault**, choose your vault. The list shows the vaults Obsidian knows about on this computer; **Browse…** picks any other folder.
3. Knowii Voice AI reads your vault's own settings and fills in two destinations for you:
    - **Append to a note**: today's daily note, in the folder and with the date format your vault already uses (from the core Daily Notes plugin, or from Periodic Notes if you use it).
    - **New note per capture**: a note in a `Voice notes` folder, named with the date and a title.
4. Pick the one captures should go to with **Use for captures**. Each card shows a **preview**: the exact note a capture made right now would go to, and what it would look like afterwards. Nothing is written by the preview.
5. Set a **Capture shortcut**. It is not set by default, so installing the update does not take a key away from another app.

That is all. Press the capture shortcut and speak.

:::tip No shortcut needed

The tray menu has a **Capture to Obsidian** item as soon as a vault is set up, and **Stop and Save to Obsidian** while a capture is recording. For a Stream Deck button, a keybinding in your window manager or a script, run `knowii-voice-ai --toggle-capture` (see the [CLI page](./cli.md)).

:::

## What a capture does

A capture records and transcribes exactly like a dictation: your custom words, filler removal, [AI post-processing](./ai-post-processing.md) and your [transcription hook](./advanced-settings.md#transcription-hook-advanced) all apply. Push to talk works the same way too. The difference is at the end: instead of typing the text where your cursor is, Knowii Voice AI saves it as a note.

While you speak, the overlay shows a 📝 instead of the microphone, so you know this recording goes to your vault. Then it shows **Saving to Obsidian**, and a notification names the note it went to.

Want the text in your vault **and** where you are typing? Turn on **Also type the text**. The note is written first, then the text is typed as usual.

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

If today's daily note does not exist yet and no template is set, the capture is **not** delivered: an empty daily note would stop your vault's own template from filling it in later. Open today's note in Obsidian once (or choose a template), then use **Retry** in [History](./history.md). The capture waits there in the meantime.

:::

### Text layout

- **Paragraph**: your transcript as it is.
- **Timestamped line**: one line starting with the time, for a running log in your daily note: `- 14:05 Call the bank about the loan.` Add a **Marker** such as `#idea` to get `- 14:05 #idea Call the bank about the loan.`

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
- **Templater** code (`<% %>`) cannot run when Knowii Voice AI writes the file itself: it would appear in the note as it is. The preview warns you when a template has some. Use a plain template, or Knowii Voice AI's own placeholders.
- With **Properties set here**, Knowii Voice AI writes the properties you list. It never writes `created` or `updated`: plugins such as Linter keep those up to date, and two tools writing the same property fight.

## Sending from History, and retrying

Every entry in [History](./history.md) has a **Send to Obsidian** button (📝) once a vault is set up. It files the entry with the destination you use for captures, at the time you originally said it: a dictation from last Tuesday lands in last Tuesday's daily note.

Entries that went to Obsidian show **In Obsidian** (hover it to see the note). Entries that did not show **Not in Obsidian** with the reason, and a **Retry** button that sends them again to the same place, for the same day.

If History is turned off, there is nothing to retry from: when a capture cannot be delivered, its text is put on your clipboard instead, and the notification says so.

## Safety

- **Never overwrites.** New notes get a new name; appends only add lines.
- **Never a half-written note.** Each change is written to a temporary file next to the note, then swapped in at once.
- **Sync-aware.** If Syncthing, Dropbox or Nextcloud left a conflict copy of the note, the capture waits until you have sorted it out. If the note changes while the capture is being written, nothing is written and you can retry.
- **Stays in your vault.** A capture can never write outside the vault folder, or into `.obsidian`.

## What the beta does not do yet

- **Only direct file writes.** Writing through the Local REST API or obsidian-cli-rest plugins (which can run Templater) is shown as "coming soon".
- **No note types yet.** Obsidian Starter Kit vaults will get note types and sections to pick from.
- **Two destinations.** One new-note card and one append card. Named presets with their own shortcuts come later.

## Troubleshooting

**"Not saved to Obsidian: the vault folder … is not available."** The vault is on a drive that is not connected, or it moved. Choose it again in **Settings > Integrations**, then **Retry** from History.

**"… does not exist yet; open it in Obsidian once …"** See the caution about daily notes above.

**"… has a sync conflict copy …"** Resolve the conflict in Obsidian (or delete the conflict copy), then **Retry**.

**"Obsidian capture is not ready."** The capture shortcut was pressed before a vault and a destination were set up.

**The note looks wrong.** Check the preview on the destination's card: it shows exactly what a capture would write.

## Related Documentation

- [History](./history.md)
- [AI Post-Processing](./ai-post-processing.md)
- [Command-Line Interface](./cli.md)
- [Advanced Settings](./advanced-settings.md)
