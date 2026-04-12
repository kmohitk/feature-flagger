import type { FeatureFlags } from "./types.js"

function normalizeRemotePayload(data: unknown): FeatureFlags {
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    return {}
  }
  const out: FeatureFlags = {}
  for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
    if (typeof v === "boolean") out[k] = v
  }
  return out
}

export async function fetchRemoteFlags(url: string, init?: RequestInit): Promise<FeatureFlags> {
  const res = await fetch(url, init)
  if (!res.ok) {
    throw new Error(`Failed to fetch flags: ${res.status} ${res.statusText}`)
  }
  const data: unknown = await res.json()
  return normalizeRemotePayload(data)
}
