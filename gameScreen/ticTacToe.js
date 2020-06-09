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

// 初期化
function initialize() {
  console.log('initialize');
}
// セルクリック
function clickCell(a) {
  const p = document.querySelector('.info p');
  const check = a.target.textContent === "";
  if (check) {
    count++
  }
  if (count%2 === 0) {
    if (check) {
      a.target.textContent = '×';
      p.textContent = '○の番です';
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
  console.log('submitContinueButton');
}

window.onload = initialize;
var cells = document.querySelectorAll('.cell');
cells.forEach(function (cell) {
  cell.addEventListener('click', clickCell);
});
document.querySelector('button').onclick = submitContinueButton;