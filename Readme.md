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
feature init
feature enable newDashboard
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
npm install feature-sdk
npm install -D feature-cli
```

---

## ⚡ Quick Start

### 1. Initialize

```bash
feature init
```

Creates:

```json
.featureflags.json
```

---

### 2. Toggle Features

```bash
feature enable newUI
feature disable newUI
feature list
```

---

### 3. Use in React

```tsx
import { useFeature } from "feature-sdk/react"

function App() {
  const newUI = useFeature("newUI")

  return newUI ? <NewUI /> : <OldUI />
}
```

---

### 4. Use in Node

```ts
import { isFeatureEnabled } from "feature-sdk"

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
feature enable checkoutV2
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
feature sync https://your-api.com/flags
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
feature init
feature list
feature enable <flag>
feature disable <flag>
feature sync <url>
```

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
