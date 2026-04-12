import { getFlag } from "@feature-flags/core"

export function isFeatureEnabled(key: string, cwd?: string): boolean {
  return getFlag(key, cwd)
}

export {
  readFlags,
  writeFlags,
  getFlagFilePath,
  FLAG_FILENAME,
  fetchRemoteFlags,
  evaluateFlags,
} from "@feature-flags/core"
export type { FeatureFlags, FlagConfig } from "@feature-flags/core"
