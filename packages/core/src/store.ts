import fs from "node:fs"
import path from "node:path"
import type { FeatureFlags } from "./types.js"

export const FLAG_FILENAME = ".featureflags.json"

export function getFlagFilePath(cwd: string = process.cwd()): string {
  return path.join(cwd, FLAG_FILENAME)
}

export function readFlags(cwd?: string): FeatureFlags {
  const file = getFlagFilePath(cwd)
  if (!fs.existsSync(file)) return {}
  const data = fs.readFileSync(file, "utf-8")
  try {
    const parsed = JSON.parse(data) as unknown
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {}
    }
    const out: FeatureFlags = {}
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof v === "boolean") out[k] = v
    }
    return out
  } catch {
    return {}
  }
}

export function writeFlags(flags: FeatureFlags, cwd?: string): void {
  const file = getFlagFilePath(cwd)
  fs.writeFileSync(file, JSON.stringify(flags, null, 2), "utf-8")
}
