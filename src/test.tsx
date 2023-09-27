import { default as dayjs } from "dayjs";
import { signal } from "./decorators";

import Bla from "res://scripts/gd/Bla.gd";

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
  }

  changeTextInLabel = () => {
    this.label.text = dayjs().toString();
  };

  logExtend = () => {
    console.log("logExtend");
  };
}
