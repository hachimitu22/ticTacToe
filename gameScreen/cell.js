class Cell {
  constructor(id) {
    this.id = id;
    this.text = '';
  };
  clear() {
    this.text = '';
  };
  isSameId(id) {
    return id === this.id;
  };
  isFill() {
    return this.text !== '';
  };
  isSameMark(mark) {
    return this.text ===  mark;
  };
  putMark(mark) {
    this.text = mark;
  };
  returnMark() {
      return this.text;
  }
}