import Element from "/js/element.js";

export default class PlayerCard extends Element {
  icon;
  score;

  constructor(id) {
    super(id);
    this.icon = this.element.getElementsByClassName("player-icon")[0];
    this.score = this.element.getElementsByClassName("player-score")[0];
  }

  setIcon (icon) {
    this.icon.textContent = icon;
  }

  setScore (score) {
    this.score.textContent = score;
  }
}
