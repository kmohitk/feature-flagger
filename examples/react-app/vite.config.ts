import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const exampleRoot = path.resolve(__dirname, "..")
const flagFile = path.join(exampleRoot, ".featureflags.json")

export default defineConfig({
  plugins: [
    react(),
    {
      name: "serve-feature-flags",
      configureServer(server) {
        server.middlewares.use("/.featureflags.json", (_req, res) => {
          res.setHeader("Content-Type", "application/json")
          res.setHeader("Cache-Control", "no-store")
          if (fs.existsSync(flagFile)) {
            res.end(fs.readFileSync(flagFile))
          } else {
            res.end("{}")
          }
        })
      },
    },
  ],
})
