class ContinueButton {
  constructor(dom) {
  this.btn = dom;
  };
  activate() {
    this.btn.disabled = false;
  };
  deactivate() {
    this.btn.disabled = true;
  };
};