import Card from "./card";

export default class FarmerCard extends Card {
  _ready() {
    super._ready();
    console.log("FarmerCard _ready");
  }
}
