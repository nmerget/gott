import { property } from "./decorators.bundle";

export default class ResourceTest extends godot.Resource {
  @property({ type: godot.VariantType.TYPE_INT, default: 0 })
  health: number;
  init = (mHealth: number) => {
    this.health = mHealth;
  };
}
