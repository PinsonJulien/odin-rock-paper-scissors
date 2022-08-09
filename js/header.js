export default class Header {
  topMessage;
  bottomMessage;

  constructor(id) {
    const element = document.getElementById(id);
    this.topMessage = element.getElementsByTagName("h2")[0];
    this.bottomMessage = element.getElementsByTagName("h3")[0];
  }

  setTopMessage(message) {
    this.topMessage.textContent = message;
  }

  setBottomMessage(message) {
    this.bottomMessage.textContent = message;
  }
}