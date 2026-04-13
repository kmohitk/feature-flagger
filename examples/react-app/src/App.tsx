import { useFeature } from "feature-flags-sdk/react"

export default function App() {
  const newUI = useFeature("newUI")

  return newUI ? <h1>New UI</h1> : <h1>Old UI</h1>
}
