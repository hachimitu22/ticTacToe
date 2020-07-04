class Board {
  constructor(idCells) {
        this._cells = idCells.map(id => {
        return new Cell(id);
      });
  };
  clear() {
    this._cells.forEach(e => {
      e.clear();
    });
  };
  put(id, mark) {
    function getTargetCell(id, arr) {
      return arr.find(e => {
        return e.isSameId(id);
      });
    };
    const getCell = getTargetCell(id, this._cells);
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
  returnMark(id) {
    function getTargetCell(id, arr) {
      return arr.find(e => {
        return e.isSameId(id);
      });
    };
    const getCell = getTargetCell(id, this._cells);
    return getCell.returnMark();
  }

}