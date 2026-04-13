# feature-flags-core

Core primitives for a local-first feature flag system.

This package handles:
- reading flags from `.featureflags.json`
- writing flag values
- evaluating flags
- optional remote flag fetch

## Install

```bash
npm install feature-flags-core
```

## Quick Usage

```ts
import { readFlags, writeFlags, getFlag } from "feature-flags-core"

writeFlags({ newUI: true, newAPI: false })

const all = readFlags()
const isNewUIEnabled = getFlag("newUI")
```

## API

### `readFlags(cwd?)`
Reads `.featureflags.json` from `process.cwd()` by default.

- Returns `{}` if the file does not exist.
- Returns `{}` if JSON is invalid.
- Keeps only boolean values.

### `writeFlags(flags, cwd?)`
Writes the provided object to `.featureflags.json`.

### `getFlag(key, cwd?)`
Returns `true` or `false` for one flag key.

### `evaluateFlags(keys, cwd?)`
Returns a subset map for selected keys.

### `fetchRemoteFlags(url, init?)`
Fetches a JSON object from a URL and normalizes it to `Record<string, boolean>`.

### Constants and types
- `FLAG_FILENAME` (`.featureflags.json`)
- `getFlagFilePath(cwd?)`
- `FeatureFlags`
- `FlagConfig`

## Example `.featureflags.json`

```json
{
  "newUI": true,
  "newAPI": false
}
```
