import { exec } from "child_process";
import { Command } from "commander";
const program = new Command();

program.name("open-vscode").description("CLI to open local vscode");

program.argument("<string>", "file path").action((str) => {
  let file = str;
  if (file.includes("/scripts/generated")) {
	file = str
	  .replace("/scripts/generated", "/src")
	  .replace(".jsx", ".tsx")
	  .replace(".js", ".ts");
  }
  exec(`code --goto ${file}`);
});

program.parse();
