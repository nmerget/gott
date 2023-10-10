import { property } from "./decorators";

export default class ResourceTest extends godot.Resource {
  @property({ type: godot.VariantType.TYPE_INT, default: 0 })
  health: number;
  init = (mHealth: number) => {
    this.health = mHealth;
  };
}
