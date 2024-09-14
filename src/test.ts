import npm from "./npm-modules.bundle";
import { property, signal } from "./decorators.bundle";
import Bla from "res://scripts/gd/Bla.gd";
import ReadTest from "./readTest";
import ResourceTest from "./resourceTest";

export default class Test extends godot.Node {
  @signal
  static readonly onReady: string;

  label: godot.Label;

  @property({ type: godot.VariantType.TYPE_OBJECT })
  public stats: ResourceTest;

  _ready(): void {
    console.log("Test ready!!")
    this.label = this.get_node("Label") as godot.Label;
    this.emit_signal(Test.onReady);
    const bla: Bla = Bla.new();
    bla.call("run_in_bla");

    ReadTest.singleton.logTestType();

    // TODO: Test this
    if (this.stats) {
      this.stats.init(10);
      console.log(this.stats.health);
    }
  }

  changeTextInLabel = () => {
    this.label.text = npm.dayjs().toString();
  };

  logExtend = () => {
    console.log("logExtend");
  };
}
