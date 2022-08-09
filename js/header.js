import Element from "/js/element.js";

export default class Header extends Element {
  topMessage;
  bottomMessage;

  constructor(id) {
    super(id);
    this.topMessage = this.element.getElementsByTagName("h2")[0];
    this.bottomMessage = this.element.getElementsByTagName("h3")[0];
  }

  setTopMessage(message) {
    this.topMessage.textContent = message;
  }

  setBottomMessage(message) {
    this.bottomMessage.textContent = message;
  }
}