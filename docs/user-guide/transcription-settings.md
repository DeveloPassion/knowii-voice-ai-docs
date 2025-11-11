---
sidebar_position: 3
---

# Transcription Settings

This page covers the transcription configuration options available in Knowii Voice AI. These settings allow you to choose the AI model, configure language preferences, and improve transcription accuracy with custom vocabulary.

## Model Selection

**Location**: Settings > Transcription

Choose which AI model to use for speech recognition:

### Available Models

Knowii Voice AI supports multiple transcription models with different characteristics:

#### Parakeet Models

- **Parakeet V3** (Recommended): NVIDIA's state-of-the-art model
    - Fast and accurate
    - Supports 25 European languages
    - Automatic language detection
    - 785 MB download
    - Excellent balance of speed and accuracy

#### Whisper Models (Multi-Language)

Support 99 languages including English, Spanish, French, German, Chinese, Japanese, and many more:

- **Tiny**: Very fast, basic accuracy (78 MB, ~0.5GB RAM)
- **Small**: Fast and quite accurate (488 MB, ~2GB RAM)
- **Medium**: Accurate but slower (1520 MB, ~5GB RAM)
- **Large V3 Turbo**: Accurate but slow (1620 MB, ~6GB RAM)
- **Large V3**: Highest accuracy but slowest (3100 MB, ~10GB RAM)

#### Whisper Models (English-Only)

Optimized specifically for English transcription:

- **Tiny (English only)**: Very fast (78 MB, ~0.5GB RAM)
- **Base (English only)**: Fast (148 MB, ~1GB RAM)
- **Small (English only)**: Fast and accurate (488 MB, ~2GB RAM)
- **Medium (English only)**: Accurate (1520 MB, ~5GB RAM)

### How to Choose a Model

**For most users:**

- Start with **Parakeet V3** if you speak European languages
- Use **Small** Whisper model for other languages
- Upgrade to larger models if accuracy is insufficient

**For English-only users:**

- Use **Small (English only)** for best balance
- Upgrade to **Medium (English only)** for higher accuracy

**For multilingual use:**

- **Parakeet V3** for European languages (automatic detection)
- **Small** or **Medium** Whisper for global language support

**Hardware considerations:**

- Limited RAM: Choose Tiny or Small models
- Powerful system: Large models provide best accuracy
- SSDs recommended for faster model loading

### Downloading Models

Models are downloaded from the Settings > Transcription page:

1. Scroll to the **Available Models** section
2. Click **Download** on your chosen model
3. Wait for download and installation to complete
4. Model automatically becomes available for selection

**Note**: You can download multiple models and switch between them at any time.

## Language

**Location**: Settings > Transcription

Select the language for speech recognition:

### Auto Detect (Default)

- Automatically detects the spoken language
- Works with multi-language models (Parakeet, Whisper multi-language)
- Recommended for most users
- No manual language selection needed

### Manual Language Selection

When using multi-language Whisper models, you can specify the language:

- Improves accuracy if you always speak the same language
- Reduces processing time slightly
- Available languages depend on the selected model
- Searchable dropdown with 99+ languages

**Reset Button**: Click the reset icon to return to Auto Detect.

### Model-Specific Behavior

**English-only models (.en variants):**

- Language automatically set to English
- Cannot change to other languages
- Language selector is disabled

**Parakeet models:**

- Automatically detect language
- Language selector is disabled
- Supports 25 European languages

**Multi-language Whisper models:**

- Auto Detect by default
- Can manually specify language for better accuracy
- Full language selector available

### Supported Languages

The available languages depend on your selected model:

**Parakeet V3 (25 European languages):**

- Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Irish, Italian, Latvian, Lithuanian, Maltese, Polish, Portuguese, Romanian, Slovak, Slovenian, Spanish, Swedish

**Whisper Models (99 languages):**

- All major world languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Arabic, Chinese, Japanese, Korean, Hindi, and many more
- See the full list in the language selector dropdown

## Custom Words

**Location**: Settings > Transcription

Add specialized vocabulary to improve transcription accuracy:

### How It Works

- Add words that are frequently misheard or incorrectly transcribed
- AI model prioritizes these words during transcription
- Useful for technical terms, names, acronyms, and domain-specific vocabulary

### Adding Custom Words

1. Type the word in the input field
2. Press Enter or click **Add**
3. Word appears as a tag below the input
4. Word is immediately active for future transcriptions

**Requirements:**

- Single words only (no spaces allowed)
- Maximum 50 characters per word
- No special HTML characters (`<>"'&`)
- Case-sensitive (add variations if needed)

### Removing Custom Words

Click the X button on any word tag to remove it from your custom vocabulary.

### Best Practices

**Good examples of custom words:**

- Technical terms: "Kubernetes", "PostgreSQL", "TypeScript"
- Company names: "Anthropic", "OpenAI"
- Product names: "iPhone", "GitHub"
- Acronyms: "API", "SDK", "CI/CD"
- Uncommon names: "Knowii", "Docusaurus"
- Domain jargon: "transcription", "embeddings"

**Tips:**

- Add variations if needed: "GitHub" and "Github"
- Include both singular and plural if frequently used
- Add words after noticing repeated transcription errors
- Don't add too many words (20-30 is typically sufficient)
- Remove words you no longer use frequently

## Common Scenarios

### English-Only User

**Recommended settings:**

- Model: Small (English only) or Medium (English only)
- Language: English (automatically set)
- Custom Words: Add technical terms from your field

### Multilingual European User

**Recommended settings:**

- Model: Parakeet V3
- Language: Auto Detect (automatically set)
- Custom Words: Add names and technical terms in your languages

### Global Multilingual User

**Recommended settings:**

- Model: Small or Medium Whisper (multi-language)
- Language: Auto Detect or specify your primary language
- Custom Words: Add names and terms in your languages

### Technical Professional

**Recommended settings:**

- Model: Medium or larger (higher accuracy needed)
- Language: Auto Detect or your primary language
- Custom Words: Extensive list of technical terms, APIs, frameworks

### Content Creator

**Recommended settings:**

- Model: Large V3 or Large V3 Turbo (best accuracy)
- Language: Specify language for consistency
- Custom Words: Brand names, product names, catchphrases

## Available Models Section

**Location**: Settings > Transcription > Available Models

This section shows all AI models that can be downloaded:

- **Model name and description**: What the model is designed for
- **Download button**: Install models you don't have yet
- **Model details**: Size, languages supported, accuracy level
- **Status indicators**: Downloaded, active, or available for download

### Managing Models

**Downloading new models:**

1. Browse the Available Models list
2. Click Download on the model you want
3. Wait for download to complete
4. Model appears in the Model selector dropdown

**Switching models:**

1. Select different model from the Model dropdown
2. Model loads automatically (first use has a delay)
3. Model stays loaded until timeout (see [Advanced Settings](./advanced-settings))

**Removing models:**

- Models can be removed through the application data folder
- See [Application Data](./application-data) for details

## Troubleshooting

### Transcription Accuracy Issues

1. **Try a larger model** - More accurate but slower
2. **Add custom words** - For frequently misheard terms
3. **Specify language** - Instead of Auto Detect
4. **Improve audio quality** - Better microphone, reduce background noise
5. **Speak clearly** - Moderate pace, clear pronunciation

### Wrong Language Detected

1. **Manually select language** - Instead of Auto Detect
2. **Use language-specific model** - English-only for English
3. **Speak more before stopping** - Model needs enough audio to detect
4. **Check model supports your language** - See supported languages list

### Model Won't Download

1. Check internet connection
2. Verify sufficient disk space (see model size)
3. Check firewall isn't blocking download
4. Try downloading again
5. Check [Application Data](./application-data) folder permissions

### Model Loading Slow

1. **First load is slower** - Model needs to load into memory
2. **Adjust unload timeout** - See [Advanced Settings](./advanced-settings)
3. **Use smaller model** - Faster loading time
4. **Upgrade to SSD** - Much faster model loading

### Custom Words Not Working

1. Verify word was added successfully (appears as tag)
2. Check spelling matches exactly how you pronounce it
3. Add phonetic variations if needed
4. Try the word in isolation to test recognition
5. Use larger model for better custom word recognition

## Tips

- Start with recommended models and adjust based on your needs
- Download multiple models for different use cases
- Use Auto Detect unless you have accuracy issues
- Add custom words as you encounter transcription errors
- Larger models require more RAM but provide better accuracy
- English-only models are faster than multi-language equivalents for English
- Test different models to find the best fit for your voice and use case
- Keep your most-used model loaded by adjusting unload timeout

## Related Documentation

- [Installation](./installation) - Installing and downloading models
- [Basic Usage](./basic-usage) - Using transcription features
- [Advanced Settings](./advanced-settings) - Model unload timeout and performance
- [Application Data](./application-data) - Where models are stored
- [FAQ](../faq) - Common questions about models and accuracy

## Need Help?

If you have questions about transcription settings, visit the [Support](../support) page.
