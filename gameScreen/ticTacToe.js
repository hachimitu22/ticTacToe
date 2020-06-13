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
      if (resultjudge[0][0].textContent === '×' && resultjudge[0][1].textContent === '×' && resultjudge[0][2].textContent === '×' 
      || resultjudge[1][0].textContent === '×' && resultjudge[1][1].textContent === '×' && resultjudge[1][2].textContent === '×' 
      || resultjudge[2][0].textContent === '×' && resultjudge[2][1].textContent === '×' && resultjudge[2][2].textContent === '×' 
      || resultjudge[3][0].textContent === '×' && resultjudge[3][1].textContent === '×' && resultjudge[3][2].textContent === '×' 
      || resultjudge[4][0].textContent === '×' && resultjudge[4][1].textContent === '×' && resultjudge[4][2].textContent === '×' 
      || resultjudge[5][0].textContent === '×' && resultjudge[5][1].textContent === '×' && resultjudge[5][2].textContent === '×' 
      || resultjudge[6][0].textContent === '×' && resultjudge[6][1].textContent === '×' && resultjudge[6][2].textContent === '×' 
      || resultjudge[7][0].textContent === '×' && resultjudge[7][1].textContent === '×' && resultjudge[7][2].textContent === '×') {
        p.textContent = '×の勝利です！';
        
      } else {
        p.textContent = '○の番です';
      }
    }
  } else {
    if (check) {
      a.target.textContent = '○';
      if (resultjudge[0][0].textContent === '○' && resultjudge[0][1].textContent === '○' && resultjudge[0][2].textContent === '○' 
      || resultjudge[1][0].textContent === '○' && resultjudge[1][1].textContent === '○' && resultjudge[1][2].textContent === '○' 
      || resultjudge[2][0].textContent === '○' && resultjudge[2][1].textContent === '○' && resultjudge[2][2].textContent === '○' 
      || resultjudge[3][0].textContent === '○' && resultjudge[3][1].textContent === '○' && resultjudge[3][2].textContent === '○' 
      || resultjudge[4][0].textContent === '○' && resultjudge[4][1].textContent === '○' && resultjudge[4][2].textContent === '○' 
      || resultjudge[5][0].textContent === '○' && resultjudge[5][1].textContent === '○' && resultjudge[5][2].textContent === '○' 
      || resultjudge[6][0].textContent === '○' && resultjudge[6][1].textContent === '○' && resultjudge[6][2].textContent === '○' 
      || resultjudge[7][0].textContent === '○' && resultjudge[7][1].textContent === '○' && resultjudge[7][2].textContent === '○') {
        p.textContent ='○の勝利です！';
        
      } else {
        p.textContent = '×の番です';
      }
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

var cellsArray = [].slice.call(cells);
function filterById(targetArray,Id) {
  return targetArray.filter(function(e) {
    return (e.id === Id[0] || e.id === Id[1] ||  e.id === Id[2]);
  });
}

var side1 = filterById(cellsArray, ['cell1', 'cell2', 'cell3']);
var side2 = filterById(cellsArray, ['cell4', 'cell5', 'cell6']);
var side3 = filterById(cellsArray, ['cell7', 'cell8', 'cell9']);
var ver1 = filterById(cellsArray, ['cell1', 'cell4', 'cell7']);
var ver2 = filterById(cellsArray, ['cell2', 'cell5', 'cell8']);
var ver3 = filterById(cellsArray, ['cell3', 'cell6', 'cell9']);
var diag1 = filterById(cellsArray, ['cell1', 'cell5', 'cell9']);
var diag2 = filterById(cellsArray, ['cell3', 'cell5', 'cell7']);

var resultjudge = [side1, side2, side3, ver1, ver2, ver3, diag1, diag2];