class TicTacToe {
  constructor(domCells, hitLines) {
    this.player = '○';
    this.domCells = domCells;
    this.hitLines = hitLines;
    this.winner = this.player;
    this._board = new Board(domCells);
  }
  initialize(){
    this.domCells.forEach(dom => {
      dom.textContent = "";
    });
    this.player = '○';
    information.changeMessage(`${this.player}の番です`);
    document.querySelector('button').disabled = true;
  }
  put(dom) {
    this._board.put(dom, this.player);
    this._changePlayer();
  }
  isGameOver() {
    return this._gameOver();
  }
  existWinner() {
    return this._isAnyHitLine();
  }
  isDraw() {
    return this._board.isFill();
  };
  _gameOver() {
    return this.isDraw() || this._isAnyHitLine();
  };
  _changePlayer() {
    this.player = this.player === '○'?'×':'○';
  };
  _isAnyHitLine() {
    return this._board.isSame(this.domCells, this.player);
  };
}
class Board {
  constructor(domCells) {
        this.domCells = domCells;
        this._cells = domCells.map(dom => { //Cellインスタンスの配列が出来てる
        return new Cell(dom);
      });
  }
  clear() {
    this.domCells.clear();
  };
  put(dom, mark) {
    function isGetTargetCell(target, arr) {
      return arr.find(e => {
        return e._dom === target;
      });
    };
    isGetTargetCell(dom, this._cells).putMark(mark);
  };
  isFill() {
    return this._cells.map(e => {
      return e.isFill();
    })
  }
  isSame(indexCells, mark) {
    return  hitLines.some(line => {
      return line.every(index => {
        return indexCells[index].textContent === mark;
      });
    });
  }
}
class Cell {
  constructor(dom) {
    this._dom = dom;
  }
  clear() {
    this._dom.textContent = '';
  }
  isSameDom(dom) {
    return dom === this._dom; 
  };
  isFill() { //=========== check 
    return this._dom !== '';
  }
  isSameMark(mark) {
    return this._dom.textContent ===  mark;
  }
  putMark(mark) {
    this._dom.textContent = mark;
  }
}

class Information {
  constructor(dom) {
    this.dom = dom;
  }
  changeMessage(message) {
    this.dom.textContent = message;
  }
}

class ContinueButton {
  constructor(dom) {
  this.btn = dom;
  }
  activate() {
    this.btn.disabled = false;
  }
  deactivate() {
    this.btn.disabled = true;
  }
}

const hitLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];
const ticTacToe = new TicTacToe(Array.from(document.querySelectorAll('.cell')), hitLines); 
const information = new Information(document.querySelector('.info').querySelector('p'));
const continueButton = new ContinueButton(document.querySelector('button'));

// 初期化
function initialize() {
  ticTacToe.initialize();
  information.changeMessage(`${ticTacToe.player}の番です`);
  continueButton.deactivate();
}
// セルクリック
function clickCell(e) {
  // if (ticTacToe.isGameOver()) {
  //   return;
  // }

  ticTacToe.put(e.target);

  if (ticTacToe.existWinner()) {
    information.changeMessage(`${ticTacToe.winner}の勝利です`);
    continueButton.activate();
  } else if (ticTacToe.isDraw()) {
    information.changeMessage(`引き分けです`);
    continueButton.activate();
  } else {
    information.changeMessage(`${ticTacToe.player}の番です`);
  }
}
// もう一度ボタン押下
function submitContinueButton() {
  initialize();
}

// イベント設定
window.onload = initialize;
var cells = document.querySelectorAll('.cell');
cells.forEach(function (cell) {
  cell.addEventListener('click', clickCell);
});
document.querySelector('button').onclick = submitContinueButton;

console.log(ticTacToe);