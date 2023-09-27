import Extend from "res://scripts/gd/Extend.gd";

// TODO: Cannot extend from gdscript, get error 'parent class must be constructor'
export default class ExtendTest extends godot.Node {
  _ready(): void {
    /* console.log("call");
    this.call("run_in_extend");
    console.log("function directly");
    this.run_in_extend();*/
  }
}
