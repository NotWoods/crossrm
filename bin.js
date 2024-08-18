#!/usr/bin/env node
// @ts-check
import { parseArgs } from "node:util";
import { rm } from "node:fs/promises";

const options =
  /** @satisfies {import('node:util').ParseArgsConfig['options']} */ ({
    force: { type: "boolean", short: "f", default: true },
    recursive: { type: "boolean", short: "r", default: true },
  });

const args = parseArgs({
  options,
  allowPositionals: true,
  allowNegative: true,
});

await Promise.all(args.positionals.map((path) => rm(path, args.values)));
