class Information {
  constructor(dom) {
    this.dom = dom;
  };
  changeMessage(message) {
    this.dom.textContent = message;
  };
};