import { isFeatureEnabled } from "feature-flags-sdk"

if (isFeatureEnabled("newAPI")) {
  console.log("Using new API")
} else {
  console.log("Using legacy API")
}
