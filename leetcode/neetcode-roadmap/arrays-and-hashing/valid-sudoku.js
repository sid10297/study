/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const currentRowArr = [];
    const currentColArr = [];
    const currentBoxArr = [];

    for (let j = 0; j < board[i].length; j++) {
      // Row check
      currentRowArr.push(board[i][j]);
      // Column check
      currentColArr.push(board[j][i]);

      // 3x3 Box check
      let rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let colIndex = 3 * (i % 3) + (j % 3);
      currentBoxArr.push(board[rowIndex][colIndex]);
    }

    if (
      !isUnique(currentRowArr) ||
      !isUnique(currentColArr) ||
      !isUnique(currentBoxArr)
    ) {
      return false;
    }
  }
  return true;
};

function isUnique(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current === ".") continue;
    if (freq[current]) return false;
    else freq[current] = 1;
  }
  return true;
}
