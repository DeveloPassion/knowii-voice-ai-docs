---
sidebar_position: 7
title: Capture Ideas Into Your Daily Note Tutorial
description: Set up a voice shortcut that adds a timestamped line to today's Obsidian daily note, in about five minutes, with Obsidian closed and no plugin.
keywords:
    - Obsidian
    - daily note
    - interstitial journaling
    - voice capture
    - quick capture
    - tutorial
---

# Capture Ideas Into Your Daily Note Tutorial

:::info Coming in the next release

The Obsidian integration is not in version 0.9.0. This tutorial is published ahead of the release it ships in (as a beta); check **Settings > About** for your version.

:::

Most ideas die in the gap between having them and writing them down. You are in a call, in your editor, in the middle of a sentence, and opening your vault to find today's note costs just enough attention that you skip it.

In this tutorial you will set up one shortcut that closes that gap. Hold it, say the idea, let go, and a line like this appears in today's daily note:

```markdown
## Log

- 09:12 Started the release checklist
- 14:05 #idea Ask the bank for the fixed rate before Friday
```

You never leave the window you are in. It takes about five minutes.

## Prerequisites

- Knowii Voice AI installed and transcribing (see the [Getting Started Tutorial](./getting-started))
- An Obsidian vault with daily notes (the core Daily Notes plugin, or Periodic Notes)

## Step 1: Pick your vault

1. Open **Settings > Integrations**.
2. Under **Vault**, choose your vault from the list. It shows the vaults Obsidian knows about on this computer; use **Browse…** if yours is not there.

Knowii Voice AI reads your daily note settings and fills in two destinations. The one you want is **Append to a note**: its **Note** field already points at today's daily note, in your folder and with your date format.

## Step 2: Point it at the right section

In the **Append to a note** card:

1. In **Under the heading**, type the heading your log lives under, exactly as it appears in your daily note, emoji included. For example `## Log`, or `## 🗒️ Notes`.
2. Set **Text layout** to **Timestamped line**. Each capture becomes one line that starts with the time.
3. Optional: set a **Marker** such as `#idea`, if you want every capture tagged.
4. Make sure **Use for captures** is selected on this card.

Look at the **Preview** under the card: it shows today's note with a sample line added where your captures will go. If the heading does not match your note exactly, the preview shows it added as a new heading at the end of the note instead; fix it until the line lands where you want it.

:::tip If your daily note does not exist yet

Knowii Voice AI does not create an empty daily note: your vault's own template would then skip it. Open today's note in Obsidian once in the morning (most people's routine anyway), or pick a **Template for a missing note** that has no Templater code. A capture made before the note exists waits in History, and **Retry** puts it in the right note later, for the right day.

:::

## Step 3: Give it a shortcut

1. Click the **Capture shortcut** field and press the keys you want, for example **Ctrl+Alt+Space**.
2. That shortcut now records a capture. Your normal dictation shortcut still types, as before.

With **Push To Talk** on (Settings > General), hold the shortcut while you speak and let go when you are done. With it off, press once to start and again to stop.

## Step 4: Try it

1. Switch to any other app.
2. Hold your capture shortcut, say "Ask the bank for the fixed rate before Friday", let go.
3. The recording indicator shows 📝 while you speak, then **Saving to Obsidian**, then a notification names the note.
4. Open today's daily note in Obsidian: the line is there, under your heading.

Nothing was typed into the app you were in. That is the point: a capture goes to your vault, a dictation goes to your cursor.

## Going further

- **A new note per idea instead.** Select **Use for captures** on the **New note per capture** card. Each capture becomes its own note in `Voice notes/`, named with the date and the first words you said.
- **Better titles.** Turn on **AI titles** to let the AI provider you set up in [AI Post-Processing](../user-guide/ai-post-processing.md) write a short title for each new note.
- **A button instead of a key.** `knowii-voice-ai --toggle-capture` starts and stops a capture, for a Stream Deck or a panel button (see the [Dictate From a Button Tutorial](./dictate-from-a-button)). The tray menu has **Capture to Obsidian** too.
- **Old dictations.** Any entry in [History](../user-guide/history.md) can be sent to your vault with **Send to Obsidian**; it lands in the daily note of the day you said it.

## Next Steps

- Read the full [Obsidian guide](../user-guide/obsidian.md): placeholders, templates, properties, and what the beta does not do yet.
- Tell me how it fits your workflow: this is a beta, and your feedback shapes what comes next.
