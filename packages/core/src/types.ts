export type FeatureFlags = Record<string, boolean>

export interface FlagConfig {
  [key: string]: boolean
}
