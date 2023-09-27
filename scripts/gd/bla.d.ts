declare module "res://scripts/gd/Bla.gd" {
  class Bla {
    call(func: "run_in_bla"): void;

    static new() {
      return this;
    }
  }
  export = Bla;
}
