import { useEffect, useState } from "react"

export interface UseFeatureOptions {
  /**
   * URL to load JSON flags from (default: "/.featureflags.json").
   * Point this at a dev-server route or CDN that mirrors your local file.
   */
  remoteUrl?: string
  /** Poll interval in ms when the file may change (default: 400) */
  pollIntervalMs?: number
}

async function fetchFlagsJson(url: string): Promise<Record<string, boolean>> {
  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) return {}
  try {
    const data: unknown = await res.json()
    if (data === null || typeof data !== "object" || Array.isArray(data)) return {}
    const out: Record<string, boolean> = {}
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      if (typeof v === "boolean") out[k] = v
    }
    return out
  } catch {
    return {}
  }
}

export function useFeature(key: string, options: UseFeatureOptions = {}): boolean {
  const { remoteUrl = "/.featureflags.json", pollIntervalMs = 400 } = options
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let cancelled = false
    const poll = async () => {
      const flags = await fetchFlagsJson(remoteUrl)
      if (!cancelled) setEnabled(!!flags[key])
    }
    void poll()
    const id = setInterval(() => void poll(), pollIntervalMs)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [key, remoteUrl, pollIntervalMs])

  return enabled
}
