# ⚡ Feature Flags — Local-first CLI + SDK

> Toggle features instantly. No SaaS. No redeploys.

A lightweight alternative to LaunchDarkly that works **locally by default** and scales to **remote config** when you need it.

---

## 🚀 Why This Exists

Feature flags are critical for:

* safe deployments
* gradual rollouts
* testing incomplete features

But tools like LaunchDarkly are:

* expensive 💸
* overkill for small teams
* require external infra

👉 This library gives you:

* **zero-config local flags**
* **CLI control**
* **React + Node SDK**
* optional **remote sync**

---

## 🎬 Demo (30 seconds)

```bash
feature-flags init
feature-flags enable newDashboard
```

```tsx
const enabled = useFeature("newDashboard")

return enabled ? <NewUI /> : <OldUI />
```

✅ No redeploy
✅ Updates instantly
✅ Works offline

---

## 📦 Install

```bash
npm install feature-flags-sdk
npm install -g feature-flags-cli
```

The global CLI binary is **`feature-flags`** (from package `feature-flags-cli`).

---

## ⚡ Quick Start

### 1. Initialize

```bash
feature-flags init
```

Creates:

```json
.featureflags.json
```

---

### 2. Toggle Features

```bash
feature-flags enable newUI
feature-flags disable newUI
feature-flags list
```

---

### 3. Use in React

```tsx
import { useFeature } from "feature-flags-sdk/react"

function App() {
  const newUI = useFeature("newUI")

  return newUI ? <NewUI /> : <OldUI />
}
```

---

### 4. Use in Node

```ts
import { isFeatureEnabled } from "feature-flags-sdk"

if (isFeatureEnabled("newAPI")) {
  // new logic
}
```

---

## 🧠 How It Works

* Flags are stored locally in:

  ```
  .featureflags.json
  ```
* CLI updates the file
* SDK reads + watches file
* React hook auto re-renders on change

---

## 🔥 Key Features

### ✅ Local-first (No Internet Required)

Works out of the box — no signup, no API keys.

---

### ✅ Instant Updates (Hot Reload)

Change a flag → UI updates immediately.

---

### ✅ CLI Control

```bash
feature-flags enable checkoutV2
```

---

### ✅ Framework Agnostic

* React
* Next.js
* Node
* Express

---

### ✅ Optional Remote Sync

```bash
feature-flags sync https://your-api.com/flags
```

---

## 🧩 Use Cases

### 🧪 Test incomplete features

```ts
if (flags.newCheckout) {
  showNewFlow()
}
```

---

### 🚀 Gradual rollout

Ship code → enable later

---

### 🐛 Kill switch

Disable broken features instantly

---

### 👥 Team workflows

QA can toggle features without code changes

---

## 📁 Example Config

```json
{
  "newUI": true,
  "betaCheckout": false
}
```

---

## 🛣️ Roadmap

* [ ] Percentage rollouts
* [ ] User targeting
* [ ] Environment-based flags
* [ ] Dashboard UI
* [ ] Edge / middleware support

---

## ⚙️ CLI Commands

```bash
feature-flags init
feature-flags list
feature-flags enable <flag>
feature-flags disable <flag>
feature-flags sync <url>
```

---

## 📤 Publishing to npm (maintainers)

The **repo root** is a private workspace (`feature-flags`). It has **no publishable tarball** as a single package—do **not** run `npm publish` there. That led to `EBADSEMVER` / `invalid semver` because the root had no meaningful `version` for a release.

Publish the **`feature-flags-*` packages** **in dependency order** using **pnpm** (it rewrites `workspace:*` to real versions in the packed `package.json`):

```bash
pnpm run build
pnpm --filter feature-flags-core publish
pnpm --filter feature-flags-cli publish
pnpm --filter feature-flags-sdk publish
```

Or run the script:

```bash
pnpm run publish:packages
```

Use **`npm publish` only** inside a package folder **after** you manually replace `workspace:*` with a concrete semver (e.g. `"0.1.0"`); otherwise npm may reject the manifest.

---

## 🏗️ Philosophy

* **Local-first > cloud-first**
* **Simple > configurable**
* **Developer experience > enterprise features**

---

## 🤝 Contributing

PRs welcome.
If you’ve ever struggled with feature flags, your input matters.

---

## ⭐ Support

If this helped you:

* Star the repo
* Share with your team
* Build something cool with it

---

## 🧑‍💻 Author

Built for developers who want **control without complexity**.

---

## 📣 DevRel Tip

If you’re using this in production, write about it.
Feature flags are one of the most underrated engineering tools.

---
