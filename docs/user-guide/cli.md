---
sidebar_position: 7.5
title: Command-Line Interface (CLI)
description: Learn how to use the Knowii Voice AI command-line interface to configure log levels and access advanced options for troubleshooting and debugging.
keywords:
    - command line
    - CLI
    - log levels
    - debugging
    - troubleshooting
    - advanced configuration
    - terminal
---

# Command-Line Interface (CLI)

Knowii Voice AI includes a command-line interface (CLI) that allows you to configure advanced options when starting the application. This is particularly useful for troubleshooting, debugging, and getting detailed logs to help resolve issues.

## Accessing the CLI

### Windows

1. **Open Command Prompt** or **PowerShell**
2. **Navigate to** the application directory (where `knowii-voice-ai.exe` is installed)
3. **Run** the executable with CLI arguments:

```cmd
knowii-voice-ai.exe --log-level debug
```

**Typical installation path:**

```cmd
cd "%USERPROFILE%\AppData\Local\Programs\knowii-voice-ai"
knowii-voice-ai.exe --help
```

### macOS

1. **Open Terminal** (Applications > Utilities > Terminal)
2. **Navigate to** the application bundle
3. **Run** the executable with CLI arguments:

```bash
/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/knowii-voice-ai --log-level debug
```

Or create an alias for convenience:

```bash
alias knowii-voice-ai="/Applications/Knowii\ Voice\ AI.app/Contents/MacOS/knowii-voice-ai"
knowii-voice-ai --help
```

### Linux

1. **Open your terminal**
2. **Navigate to** the installation directory or use the full path
3. **Run** the executable with CLI arguments:

```bash
knowii-voice-ai --log-level debug
```

Or if installed system-wide:

```bash
/usr/local/bin/knowii-voice-ai --help
```

## Available Commands

### Show Help

Display all available CLI options:

```bash
knowii-voice-ai --help
```

**Output:**

```
AI-powered voice transcription application

Usage: knowii-voice-ai [OPTIONS]

Options:
      --log-level <LEVEL>  Set the log level (trace, debug, info, warn, error, off) [default: info]
  -h, --help               Print help
```

### Configure Log Level

The `--log-level` option controls how much information is written to the application logs.

**Syntax:**

```bash
knowii-voice-ai --log-level <LEVEL>
```

**Available log levels** (from most verbose to least):

| Level   | Description                                              | When to Use                                  |
| ------- | -------------------------------------------------------- | -------------------------------------------- |
| `trace` | Extremely detailed logs including internal state changes | Deep debugging, development                  |
| `debug` | Detailed diagnostic information                          | Troubleshooting issues, creating bug reports |
| `info`  | General informational messages (default)                 | Normal operation                             |
| `warn`  | Warning messages about potential issues                  | Monitoring for problems                      |
| `error` | Error messages only                                      | Production, minimal logging                  |
| `off`   | No logging                                               | Not recommended                              |

**Examples:**

```bash
# Run with debug logging (recommended for troubleshooting)
knowii-voice-ai --log-level debug

# Run with trace logging (very detailed)
knowii-voice-ai --log-level trace

# Run with minimal logging (errors only)
knowii-voice-ai --log-level error

# Run with default logging (info)
knowii-voice-ai
```

## Common Use Cases

### Troubleshooting Issues

When experiencing problems with Knowii Voice AI:

1. **Close the application** if it's already running
2. **Open your terminal/command prompt**
3. **Start the application with debug logging:**

```bash
knowii-voice-ai --log-level debug
```

4. **Reproduce the issue** while the application is running
5. **Check the logs** in the [application data directory](./application-data)
6. **Share the logs** when reporting issues (see below)

### Creating Bug Reports

For the most helpful bug reports:

1. **Run with debug or trace logging:**

```bash
knowii-voice-ai --log-level debug
```

2. **Reproduce the issue**
3. **Collect the log files** from:
    - Windows: `C:\Users\<username>\AppData\Roaming\knowii-voice-ai\logs\`
    - macOS: `~/Library/Application Support/knowii-voice-ai/logs/`
    - Linux: `~/.local/share/knowii-voice-ai/logs/`

4. **Include the following files** in your bug report:
    - `knowii-voice-ai.log` - Main application log
    - `knowii-voice-ai-bootstrap.log` - Startup log
    - `knowii-voice-ai-crash.log` - If the app crashed

### Monitoring Application Behavior

For ongoing monitoring or development:

```bash
# Run with info level and pipe to a file
knowii-voice-ai --log-level info 2>&1 | tee knowii-debug.log

# Or use trace for maximum detail
knowii-voice-ai --log-level trace 2>&1 | tee knowii-trace.log
```

## Understanding Log Levels

### Default (Info)

**What you see:**

- Application startup/shutdown
- Model loading events
- Recording start/stop
- Transcription completion
- Major state changes

**Use for:**

- Normal operation
- General awareness of application activity

### Debug

**What you see (includes Info plus):**

- Detailed function calls
- State transitions
- Configuration changes
- Audio processing details
- Shortcut registration/triggering

**Use for:**

- Investigating unexpected behavior
- Understanding why something isn't working
- Creating detailed bug reports
- Support requests

### Trace

**What you see (includes Debug plus):**

- Internal state dumps
- Every audio buffer processed
- Detailed timing information
- Low-level system interactions
- Complete execution flow

**Use for:**

- Deep technical debugging
- Performance analysis
- Development troubleshooting
- **Warning:** Creates very large log files

### Warn/Error

**What you see:**

- Only warnings and errors
- No normal operation logs

**Use for:**

- Production environments
- Minimal log file size
- Monitoring for problems only

## Tips and Best Practices

:::tip[Quick Troubleshooting]
Always start with `--log-level debug` when investigating issues. It provides enough detail without overwhelming you with trace-level logs.
:::

:::caution[Log File Size]
Trace logging creates very large log files. Use it only when needed and clean up old logs regularly from the [application data directory](./application-data#logs).
:::

:::info[Default Behavior]
Without the `--log-level` flag, the application runs with `info` level logging, which is appropriate for everyday use.
:::

## Related Documentation

- [Debug Settings](./debug-settings) - In-app debugging options
- [Application Data](./application-data) - Where logs are stored
- [Support](../support) - Get help with issues

## Need Help?

If CLI options aren't resolving your issue:

- Check the [FAQ](../faq) for common problems
- Email support@knowii.net with your log files
- Visit the [Knowii Community](https://www.knowii.net) for community support

When contacting support, **always include logs captured with `--log-level debug`** to help diagnose issues faster.
