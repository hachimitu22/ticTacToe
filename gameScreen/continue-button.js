class ContinueButton {
  constructor() {
    this.disabled = true;
  };
  activate() {
    this.disabled = false;
    return this.disabled;
  };
  deactivate() {
     this.disabled = true;
     return this.disabled;
  };
};