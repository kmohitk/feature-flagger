import { getFlag } from "@kmohitk/core"

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
} from "@kmohitk/core"
export type { FeatureFlags, FlagConfig } from "@kmohitk/core"
