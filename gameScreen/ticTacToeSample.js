var playerMark = '○';   // 現在のプレイヤー記号

// 初期化
function initialize() {
  var cells = getCells();
  cells.forEach(function (cell) {
    cell.innerHTML = '';
  });

  playerMark = '○';
  setInformation(`${playerMark}の番です`);
  document.querySelector('button').disabled = true;
}
// セルクリック
function clickCell() {
  // セルに既に記号が設置してあるか？
  if (this.innerHTML !== "") {
    return;
  }
  // 勝敗が決まってるか？
  if (isHitLine(playerMark) || isFillCells()) {
    return;
  }

  // プレイヤーの記号をセルに設置
  this.textContent = playerMark;

  if (isHitLine(playerMark)) {
    // ラインが揃った？
    // インフォメーションに勝者プレイヤーを表示する
    setInformation(`${playerMark}の勝利です`);
    // もう一度ボタンを有効化する
    document.querySelector('button').disabled = false;
  } else if (isFillCells()) {
    // 全セルに記号が設置された？
    setInformation(`引き分けです`);
    // もう一度ボタンを有効化する
    document.querySelector('button').disabled = false;
  } else {
    //
    playerMark = playerMark === '○' ? '×' : '○';
    setInformation(`${playerMark}の番です`);
  }
}

// もう一度ボタン押下
function submitContinueButton() {
  initialize();
}

// インフォメーションにメッセージを設定する
function setInformation(message) {
  document.querySelector('.info').querySelector('p').textContent = message;
}

// セル一覧を取得
function getCells() {
  var cells = document.querySelectorAll('.cell');
  return Array.from(cells);
}

// いずれかのラインが揃っているか？
function isHitLine(mark) {
  var cells = getCells();
  var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  return lines.some(line => {
    return line.every(index => cells[index].innerHTML === mark);
  });
}

// 全マスが埋まっているか？
function isFillCells() {
  var cells = getCells();
  return cells.every(cell => cell.innerHTML !== '');
}

// イベント設定
window.onload = initialize;
var cells = getCells();
cells.forEach(function (cell) {
  cell.addEventListener('click', clickCell);
});
document.querySelector('button').onclick = submitContinueButton;

class tictactoe {
  constructor() {
    this.player = playerMark;
    
  }
}