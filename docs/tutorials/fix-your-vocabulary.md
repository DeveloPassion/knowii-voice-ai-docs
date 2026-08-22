---
sidebar_position: 4
title: Fix Your Vocabulary Tutorial
description: Step-by-step tutorial to stop Knowii Voice AI from butchering your product names, acronyms, and technical terms, using custom words, word replacements, phonetic replacements, and the Whisper prompt.
keywords:
    - custom words
    - word replacements
    - phonetic replacements
    - whisper prompt
    - vocabulary
    - jargon
    - acronyms
    - product names
    - transcription accuracy
    - wrong words
---

# Fix Your Vocabulary Tutorial

Speech models are trained on everyday language. Your world is not everyday language: it has product names, acronyms, colleagues with unusual names, and technical terms the model has never met. So "Kubernetes" comes out as "coober netties" and your product name becomes soup.

Knowii Voice AI has four tools for this, each for a different kind of mistake. In this tutorial you will learn which tool fixes which mistake, and set up your own vocabulary.

All four live in **Settings → Transcription**. Full reference: [Transcription Settings](../user-guide/transcription-settings).

## Prerequisites

- Knowii Voice AI set up and transcribing (see the [Getting Started Tutorial](./getting-started))
- A few real transcriptions where the same terms keep coming out wrong

## Step 1: Collect your problem words

Open your [history](../user-guide/history) and skim your recent transcriptions. Write down every recurring mistake as a pair: what the app wrote, and what you meant.

Sort each pair into one of three buckets:

1. **Close but wrong**: the output sounds like your term ("cooper netis" for "Kubernetes")
2. **Consistently wrong in the same way**: the exact same wrong text every time ("N 8 N" for "n8n")
3. **Wrong alphabet**: you dictate in one language, but a name comes out in that language's script ("эн восемь эн" instead of "N8N")

Each bucket has its own tool.

## Step 2: Close but wrong? Use Custom Words

**Settings → Transcription → Custom Words.** Add the correct spelling of each term: `Kubernetes`, `Obsidian`, `DeveloPassion`, your colleagues' names.

After each transcription, the app compares the output against your list and corrects anything that sounds close enough. One entry fixes every future variation of the mistake, because matching happens by sound, not by exact text.

Two things to know:

- With a **Whisper model**, your custom words are also fed to the model up front, so many mistakes never happen in the first place.
- If corrections fire too eagerly or not eagerly enough, the sensitivity lives in **Settings → Debug → Word Correction Threshold** (see [Debug Settings](../user-guide/debug-settings)).

## Step 3: Same wrong text every time? Use Word Replacements

**Settings → Transcription → Word Replacements.** Add an exact find-and-replace pair: when the transcription contains `jira ticket`, replace it with `Jira ticket`.

Unlike custom words, nothing is fuzzy here. The rule fires when the exact words appear (whole words, capitalization ignored) and never otherwise. That makes it the right tool when the model is reliably, predictably wrong, and the wrong output would also be a plausible real phrase you would never say.

Rule of thumb: try a custom word first. If the model keeps producing one specific wrong phrase anyway, pin it down with a replacement.

## Step 4: Wrong alphabet? Use Phonetic Replacements

**Settings → Transcription → Phonetic Replacements.** For each term, add the way it gets transcribed in the other script and the way you want it written: map `эн восемь эн` to `N8N`.

This is for multilingual dictation: you speak Russian or French or German, but product names and acronyms should come out in their canonical Latin form regardless.

## Step 5: Give Whisper a standing instruction

**Settings → Transcription → Whisper Prompt** (Whisper models only). A short free-form hint that biases the model before it hears anything: vocabulary, punctuation style, capitalization.

Example: `Add proper punctuation. Vocabulary: Kubernetes, Grafana, n8n, DeveloPassion, Knowii.`

Keep it short and specific. It complements the other tools rather than replacing them: the prompt nudges the model, the corrections clean up whatever still slips through.

## Step 6: Test the whole chain

Dictate a sentence that contains several of your problem terms, then check the result in your history. For each term that still comes out wrong, go back to Step 1: which bucket is the remaining mistake in? Add or sharpen the matching rule.

Vocabulary tuning converges fast. After two or three rounds, the recurring mistakes are gone, and each new term you meet costs you one entry.

## Bonus: two more cleanups worth switching on

While you are in **Settings → Transcription**:

- **Remove Filler Words** cleans up "uh", "um", and stutters. Off by default; the filler list adapts to your transcription language, and you can supply your own.
- **Write Digit Sequences as Numbers** turns "one one two two" into "1122". Great for dictating codes and phone numbers; sequences shorter than three digits are left alone.

## Next Steps

- [Transcription Settings](../user-guide/transcription-settings): the full reference for everything used here
- [Fix your recordings too](./record-system-sound): capture system audio, not just your microphone
- [FAQ](../faq) for common questions
