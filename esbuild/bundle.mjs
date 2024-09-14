import * as esbuild from "esbuild";
import { Command } from "commander";

const options = {
  entryPoints: ["src/**/*.bundle.ts"],
  bundle: true,
  outdir: "scripts/generated",
  format: "esm",
  target: "esnext",
  minify: true,
};

const program = new Command();

program.name("bundle").description("CLI to build all *.bundle.ts files");

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
