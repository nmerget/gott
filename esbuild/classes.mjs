import * as esbuild from "esbuild";
import { glob } from "glob";
import { Command } from "commander";

const entryPoints = await glob("src/**/*.ts", { ignore: "src/**/*.bundle.ts" });
const options = {
  entryPoints,
  outdir: "scripts/generated",
  format: "esm",
  target: "esnext",
  outExtension: { ".js": ".mjs" },
};

const program = new Command();

program
  .name("classes")
  .description("CLI to build all *.ts files except of *.bundle.ts");

program
  .option("-w, --watch [watch]", "enable watch")
  .option("-m, --minify [minify]", "enable minification")
  .action(async ({ watch, minify }) => {
    const finalOptions = { ...options, minify };

    if (watch) {
      const context = await esbuild.context(finalOptions);
      await context.watch();
      console.log("watching...");
    } else {
      await esbuild.build(finalOptions);
    }
  });

program.parse();
