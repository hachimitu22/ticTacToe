(function () {

  // 引数を足した結果を返す
  function add(a, b) {
    return a + b;
  }
  const result = add(10, 10);
  console.log('test add 10 + 10 = 20', result === 20);

  const tic = new TicTacToe();
  tic.initialize();
  tic.put('cell1');
  console.log(tic.get('cell1') === '○');

  const cell = new Cell('cell1');
  console.log(cell.isSameId('cell1'));
  console.log(!cell.isFill());

  cell.putMark('○');
  console.log(cell.isSameId('cell1'));
  console.log(cell.isSameMark('○'));
  console.log(cell.isFill());

  cell.clear();
  console.log(!cell.isFill());
  console.log(cell.isSameId('cell1'));

})();
