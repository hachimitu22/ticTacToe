'use strict';

// var cell = document.querySelectorAll('.cell');
// console.log(cell);
// if(cell.textContent === ) {
//   button.disabled = true;
// }

// function startup() {
//   var cell = document.querySelectorAll('.cell');
//   var button = document.getElementById('continue');

//   if(cell.textContent === false) {
//     button.disabled = true;
//   }
// }

// var cellMath = document.querySelectorAll('div.cell').length;
// document.querySelector('div.game-screen > *').addEventListener('click', () => {
//   const circlePlayer = "○";
//   const crossPlayer = "×";
//   function game(a,b) {
//     for (var i= 0; i <= 9; i++) {
//     }
//   }
//   const check = document.getElementById('cell1');
//   const markCircle = check.textContent = "○";
//   check.appendChild(markCircle);
// })

var count = 0;
var button = document.querySelector('button');
var p = document.querySelector('.info p');
var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var cell9 = document.getElementById('cell9');
var side1 = cell1 && cell2 && cell3;
var side2 = cell4 && cell5 && cell6;
var side3 = cell7 && cell8 && cell9;
var ver1 = cell1 && cell4 && cell7;
var ver2 = cell2 && cell5 && cell8;
var ver3 = cell3 && cell6 && cell9;
var diag1 = cell1 && cell5 && cell9;
var diag2 = cell3 && cell5 && cell6;


// 初期化
function initialize() {
  cells.forEach(cell => {
    if(Boolean(cell.textContent) === true ) {
      cell.textContent = "";
      count = 0;
      p.textContent = "○の番です";
    }
  });
}
// セルクリック
function clickCell(a) {
  button.disabled = false;
  const check = a.target.textContent === "";
  if (check) {
    count++
  }
  if (count%2 === 0) {
    if (check) {
      a.target.textContent = '×';
      if (side1.textContent === "×") {//修正ポイント
        p.textContent = '×の勝利です';
      } else {
        p.textContent = '○の番です';
      }
    } 
  } else {
    if (check) {
      a.target.textContent = '○';
      p.textContent = '×の番です';
    } 
  }
}
// もう一度ボタン押下
function submitContinueButton() {
  cells.forEach(cell => {
    if(Boolean(cell.textContent) === true ) {
      cell.textContent = "";
      count = 0;
      p.textContent = "○の番です";
      button.disabled = true;
    }
  });
}

window.onload = initialize;
var cells = document.querySelectorAll('.cell');
cells.forEach(function (cell) {
  cell.addEventListener('click', clickCell);
});
document.querySelector('button').onclick = submitContinueButton;