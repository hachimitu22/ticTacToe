class Cell {
  constructor(dom) {
    this._dom = dom;
  };
  clear() {
    this._dom.textContent = '';
  };
  isSameDom(dom) {
    return dom === this._dom; 
  };
  isFill() {
    return this._dom.textContent !== '';
  };
  isSameMark(mark) {
    return this._dom.textContent ===  mark;
  };
  putMark(mark) {
    this._dom.textContent = mark;
  };
}