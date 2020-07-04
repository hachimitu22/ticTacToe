(function () {

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
const idCells = ['cell1','cell2','cell3','cell4','cell5','cell6','cell7','cell8','cell9']

// const ticTacToe = new TicTacToe(Array.from(document.querySelectorAll('.cell')), hitLines); 
// const information = new Information(document.querySelector('.info').querySelector('p'));
// const continueButton = new ContinueButton(document.querySelector('button'));

const ticTacToe = new TicTacToe(idCells, hitLines); 
const information = new Information();
const continueButton = new ContinueButton();
const infoElement = document.querySelector('.info').querySelector('p');
const btnElement = document.querySelector('button');

// 初期化
function initialize() {
  ticTacToe.initialize();
  cells.forEach(cell => {
    cell.textContent = ticTacToe.getMark(cell.id);
  });
  infoElement.textContent = information.changeMessage(`${ticTacToe.player}の番です`);
  btnElement.disabled = continueButton.deactivate();
}
// セルクリック
function clickCell(e) {
  if (ticTacToe.isGameOver()) {
    return;
  }

  ticTacToe.put(e.target.id);
  e.target.textContent = ticTacToe.getMark(e.target.id);

  if (ticTacToe.existWinner()) {
    infoElement.textContent = information.changeMessage(`${ticTacToe.winner}の勝利です`);
    btnElement.disabled = continueButton.activate();
  } else if (ticTacToe.isDraw()) {
    infoElement.textContent = information.changeMessage(`引き分けです`);
    btnElement.disabled = continueButton.activate();
  } else {
    infoElement.textContent = information.changeMessage(`${ticTacToe.player}の番です`);
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

// clickCell(e) eにはクリックしたDOMが渡ってくる
// tictactoe.put(id);eのtextcontentに対してputされた_cellsのthis.textを代入したい
// e.target.textContent = ticTacToe._board._cells[eと同じCell]×
//=============================================
// privateメソッドが表記出来るのは内部のみ
// 渡されたdom.id.textContentに対して代入
// tictactoe内でe.idと_cells.idが一致するものを識別する関数を用意×
// const hoge = ～～～(id);
// e.target.textContent = hoge;
// =====================================
// Cell内にreturnMark(id)？
// board内に
// outputMark(id)

})();

