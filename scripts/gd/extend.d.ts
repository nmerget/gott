declare module "res://scripts/gd/Extend.gd" {
  export default class Extend extends godot.Node {
    call(func: "run_in_extend"): void;
    run_in_extend: () => void;
  }
}
