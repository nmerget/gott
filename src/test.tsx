import { signal } from "./decorators";
import { default as dayjs } from "dayjs";

export default class Test extends godot.Node {
  @signal
  static readonly OnTextChanged: string;

  _ready(): void {
    console.log(dayjs());
  }
}
