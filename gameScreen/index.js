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
  if (ticTacToe.isGameOver()) {
    return;
  }

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