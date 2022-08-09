export default class Modal {
  element;
  text;
  button;

  constructor(id) {
    this.element = document.getElementById(id);
    this.text = this.element.getElementsByTagName("p")[0];
    this.button = this.element.getElementsByTagName("button")[0];
  }

  setText(text) {
    this.text.textContent = text;
  }

  addClass(cls) {
    this.element.classList.add(cls);
  }

  removeClass(cls) {
    this.element.classList.remove(cls);
  }
}