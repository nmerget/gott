import { exec } from "child_process";
import { Command } from "commander";
const program = new Command();

program.name("open").description("CLI to open local IDE");

program
  .option("-i, --ide [ide]", "local ide")
  .option("-f, --file <file>", "file path")
  .action(({ ide, file }) => {
    if (file.includes("/scripts/generated")) {
      file = file
        .replace("/scripts/generated", "/src")
        .replace(".mjs", ".ts")
        .replace(".js", ".ts");
    }

    if (ide === "idea" || ide === "intellij") {
      exec(`idea ${file}`);
    } else {
      exec(`code --goto ${file}`);
    }
  });

program.parse();
