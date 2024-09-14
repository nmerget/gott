// @ts-ignore
import TestJson from "res://config/test.json";

type TestType = {
  test: boolean;
};
export default class ReadTest extends godot.Node {
  static _singleton: ReadTest;

  static get singleton() {
    return ReadTest._singleton;
  }

  constructor() {
    super();
    if (!ReadTest._singleton) {
      ReadTest._singleton = this;
    }
  }

  testType: TestType = TestJson as TestType;
  logTestType() {
    console.log(this.testType.test);
    console.log(JSON.stringify(this.testType));
  }
}
