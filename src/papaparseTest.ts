import npm from "./npm-modules.bundle";

export default class PapaparseTest extends godot.Node {
  _ready(): void {
    const file = new godot.FileAccess();
    file.open("res://resources/test.csv", godot.FileAccess.ModeFlags.READ);
    let fileContent: string = "";
    while (!file.eof_reached()) {
      fileContent += `${file.get_line()}\n`;
    }
    const csvFile = npm.Papa.parse(fileContent);
    console.log(JSON.stringify(csvFile));
  }
}
