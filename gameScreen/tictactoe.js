class TicTacToe {
  constructor(idCells, hitLines) {
    this.hitLines = hitLines;
    this.player = '○';
    this.winner = '';
    this._board = new Board(idCells);
  };
  initialize(){
    this._board.clear();
    this.player = '○';
    this.winner = '';
  };
  put(id) {
    if (this._board.put(id, this.player)) {
      if (this._isAnyHitLine()) {
        this.winner = this.player;
      } else {
        this._changePlayer();
      }
    };
  };
  isGameOver() {
    return this._gameOver();
  };
  existWinner() {
    if(this.winner !== '') {
      return true;
    } else if(this.winner === '') {
      return false;
    }
  }
  isDraw() {
    if(this._board.isFill() && this.winner === '') {
      return true;
    } else {
      return false;
    }
  };
  _gameOver() {
    return this.isDraw() || this.existWinner();
  };
  _changePlayer() {
    this.player = this.player === '○'?'×':'○';
  };
  _isAnyHitLine() {
    return this._board.isSame(this.hitLines, this.player);
  };
  getMark(id) {
    return this._board.returnMark(id);
  }
}