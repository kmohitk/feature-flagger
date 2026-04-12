import { readFlags } from "./store.js"
import type { FeatureFlags } from "./types.js"

export function getFlag(key: string, cwd?: string): boolean {
  const flags = readFlags(cwd)
  return !!flags[key]
}

export function evaluateFlags(keys: string[], cwd?: string): FeatureFlags {
  const flags = readFlags(cwd)
  const out: FeatureFlags = {}
  for (const k of keys) {
    out[k] = !!flags[k]
  }
  return out
}
