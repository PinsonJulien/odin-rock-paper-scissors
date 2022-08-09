export default class PlayerCard {
  icon;
  score;

  constructor(id) {
    const element = document.getElementById(id);
    this.icon = element.getElementsByClassName("player-icon")[0];
    this.score = element.getElementsByClassName("player-score")[0];
  }

  setIcon (icon) {
    this.icon.textContent = icon;
  }

  setScore (score) {
    this.score.textContent = score;
  }
}
