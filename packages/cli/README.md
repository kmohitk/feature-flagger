# feature-flags-cli

CLI for managing local feature flags in `.featureflags.json`.

Installs the binary:
- `feature-flags`

## Install

```bash
npm install -g feature-flags-cli
```

or as a dev dependency:

```bash
npm install -D feature-flags-cli
```

Then run with `npx feature-flags ...`.

## Commands

### Initialize

```bash
feature-flags init
```

Creates an empty `.featureflags.json` in the current directory.

### List flags

```bash
feature-flags list
```

### Enable a flag

```bash
feature-flags enable newUI
```

### Disable a flag

```bash
feature-flags disable newUI
```

### Sync from remote JSON

```bash
feature-flags sync https://example.com/flags.json
```

The URL should return a JSON object with boolean values.

## Notes

- Commands operate relative to `process.cwd()`.
- Run the CLI in the app folder where you want `.featureflags.json` stored.
