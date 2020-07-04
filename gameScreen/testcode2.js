(function() {

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
  const tic = new TicTacToe(idCells,hitLines);
  const info = new Information();
  const contBtn = new ContinueButton();
  const board = new Board(idCells);
  const cell = new Cell('cell1');

  //==========================================
  cell.putMark('○');
  console.log(cell.isSameId('cell1'));
  console.log(cell.isSameMark('○'));
  console.log(cell.isFill());
  cell.clear()
  console.log(!cell.isFill());
  console.log(cell.isSameId('cell1'));

//=================================================
  info.changeMessage('hogehoge');
  console.log(info.text === 'hogehoge');

//===================================================
  contBtn.activate();
  console.log(contBtn.disabled === false);
  contBtn.deactivate();
  console.log(contBtn.disabled === true);

 //================================================
  board.put('cell1','○');
  console.log(board._cells[0].isSameMark('○'));//セルにﾏｰｸが入力されているか。
  console.log(board.put('cell1','○') === false);//同じセルをクリックした時falseを返しているか
  board.put('cell2','○');
  console.log(board.isSame(hitLines,'○') === false );//指定のセルが指定のマークで揃っていない時falseを返しているか
  board.put('cell3','○');
  console.log(board.isSame(hitLines,'○') === true );//指定のセルが指定のマークで揃った時trueを返しているか
  board.put('cell4','○');
  board.put('cell5','○');
  board.put('cell6','○');
  board.put('cell7','○');
  board.put('cell8','○');
  console.log(!board.isFill() === true);//一つでも空白の時それを認識出来ているか
  board.put('cell9','○');
  console.log(board.isFill() === true);//全て埋まっている事を認識出来ているか
  board.clear()
  console.log(!board.isFill())//clear起動後空白になっているか

//=================================================
console.log(tic.player === '○');
tic.put('cell1');
console.log(tic._board._cells[0].isSameId('cell1'));//配列の要素のidと引数のidが合っているか
console.log(tic._board._cells[0].isSameMark('○'));//想定のマークが入力されているか
console.log(tic.player === '×');//_changePlayerﾒｿｯﾄﾞが動きplayerが○から×に変わっているか
tic.put('cell1');
console.log(tic.player === '×');//入力済みのセルをクリックして_changePlayerが動いていないか確認
tic.put('cell2');
console.log(tic.player === '○')//_changePlayerﾒｿｯﾄﾞが動きplayerが×から○に変わっているか
tic.put('cell3');
tic.put('cell4');
tic.put('cell5');
tic.put('cell6');
console.log(!tic.existWinner());//ラインが揃っていない時勝者が存在していないか
console.log(!tic.isGameOver());//ゲームの終了フラグが立っていないか
tic.put('cell7');
console.log(tic.existWinner());//ラインが揃った時に勝者が存在しているか
console.log(tic.isGameOver());//ゲームの終了フラグが立ったか
tic.put('cell8');
console.log(!tic.isDraw());//空白が存在する状態を認識しているか
tic.put('cell9');
console.log(tic.isDraw());//全て埋められている状態を認識しているか
tic.initialize();
console.log(!tic._board.isFill());//initialize後全て空白になっているか。
console.log(tic.player === '○');//playerが○に戻っているか
})();