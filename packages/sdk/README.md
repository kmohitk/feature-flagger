# feature-flags-sdk

SDK for consuming feature flags in Node.js and React apps.

Backed by `feature-flags-core`.

## Install

```bash
npm install feature-flags-sdk
```

For React usage:

```bash
npm install react react-dom
```

## Node / Server Usage

```ts
import { isFeatureEnabled } from "feature-flags-sdk"

if (isFeatureEnabled("newAPI")) {
  console.log("Using new API")
}
```

You can also use:
- `readFlags(cwd?)`
- `writeFlags(flags, cwd?)`
- `evaluateFlags(keys, cwd?)`
- `fetchRemoteFlags(url, init?)`
- `FLAG_FILENAME`, `getFlagFilePath(cwd?)`

## React Usage

```tsx
import { useFeature } from "feature-flags-sdk/react"

export default function App() {
  const newUI = useFeature("newUI")
  return newUI ? <h1>New UI</h1> : <h1>Old UI</h1>
}
```

### `useFeature(key, options?)`

Options:
- `remoteUrl` (default: `"/.featureflags.json"`)
- `pollIntervalMs` (default: `400`)

The hook polls a JSON endpoint in the browser. Serve your flag file at that URL from your dev server or backend.

## Example: custom endpoint

```tsx
const beta = useFeature("betaCheckout", {
  remoteUrl: "/api/feature-flags",
  pollIntervalMs: 1000,
})
```
