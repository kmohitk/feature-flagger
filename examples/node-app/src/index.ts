import { isFeatureEnabled } from "@kmohitk/sdk"

if (isFeatureEnabled("newAPI")) {
  console.log("Using new API")
} else {
  console.log("Using legacy API")
}
