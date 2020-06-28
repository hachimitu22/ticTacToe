class TicTacToe {
  constructor(domCells, hitLines) {
    this.domCells = domCells;
    this.hitLines = hitLines;
    this.player = '○';
    this.winner;
    this._board = new Board(domCells);
  };
  initialize(){
    this._board.clear();
    this.player = '○';
  };
  put(dom) {
      if(this._board.put(dom, this.player)) {
        this.winner = this.player;
        this._changePlayer();
      };
  };
  isGameOver() {
    return this._gameOver();
  };
  existWinner() {
    return this._isAnyHitLine();
  };
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
    return this._board.isSame(this.hitLines, this.winner);
  };
}