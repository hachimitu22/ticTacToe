class Board {
  constructor(domCells) {
        this._cells = domCells.map(dom => {
        return new Cell(dom);
      });
  };
  clear() {
    this._cells.forEach(e => {
      e.clear();
    });
  };
  put(dom, mark) {
    function getTargetCell(dom, arr) {
      return arr.find(e => {
        return e.isSameDom(dom);
      });
    };

    const getCell = getTargetCell(dom, this._cells);
    if(getCell.isFill()) {
      return false;
    } else {
      getCell.putMark(mark);
      return true;
    };
  };
  isFill() {
    return this._cells.every(e => {
      return e.isFill();
    });
  };
  isSame(index, mark) {
    return index.some(numbers => {
      return numbers.every(number => {
        return this._cells[number].isSameMark(mark);
      })
    })
  };
}