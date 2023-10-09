import npm from "./npm-modules";
import { signal } from "./decorators";
import Bla from "res://scripts/gd/Bla.gd";
import ReadTest from "./readTest";

export default class Test extends godot.Node {
  // define a signal
  @signal
  static readonly onReady: string;

  label: godot.Label;
  _ready(): void {
    this.label = this.get_node(godot.Label);
    this.emit_signal(Test.onReady);
    const bla: Bla = Bla.new();
    bla.call("run_in_bla");

    ReadTest.singleton.logTestType();
  }

  changeTextInLabel = () => {
    this.label.text = npm.dayjs().toString();
  };

  logExtend = () => {
    console.log("logExtend");
  };
}
