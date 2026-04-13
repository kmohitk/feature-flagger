#!/usr/bin/env node
import { Command } from "commander"
import chalk from "chalk"
import { fetchRemoteFlags, readFlags, writeFlags } from "@kmohitk/core"

const program = new Command()

program.name("feature-flags").description("Feature flag CLI (local-first)").version("0.1.0")

program
  .command("init")
  .description("Create an empty .featureflags.json in the current directory")
  .action(() => {
    writeFlags({})
    console.log(chalk.green("Initialized .featureflags.json"))
  })

program
  .command("list")
  .description("Print all flags as JSON")
  .action(() => {
    const flags = readFlags()
    console.log(JSON.stringify(flags, null, 2))
  })

program
  .command("enable")
  .description("Turn a flag on")
  .argument("<key>", "Flag key")
  .action((key: string) => {
    const flags = readFlags()
    flags[key] = true
    writeFlags(flags)
    console.log(chalk.green(`Enabled ${key}`))
  })

program
  .command("disable")
  .description("Turn a flag off")
  .argument("<key>", "Flag key")
  .action((key: string) => {
    const flags = readFlags()
    flags[key] = false
    writeFlags(flags)
    console.log(chalk.yellow(`Disabled ${key}`))
  })

program
  .command("sync")
  .description("Fetch flag JSON from a URL and write .featureflags.json")
  .argument("<url>", "Remote URL returning a JSON object of boolean flags")
  .action(async (url: string) => {
    try {
      const flags = await fetchRemoteFlags(url)
      writeFlags(flags)
      console.log(chalk.green("Synced flags from remote"))
    } catch (err) {
      console.error(chalk.red(err instanceof Error ? err.message : String(err)))
      process.exitCode = 1
    }
  })

program.parse()
