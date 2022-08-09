import Element from "/js/element.js";

export default class Modal extends Element {
  text;
  button;

  constructor(id) {
    super(id);
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