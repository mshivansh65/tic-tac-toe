export default function hasWon(matrix) {
  //  rows equal
  // row 1

  if (matrix[0] !== 0 && matrix[0] === matrix[1] && matrix[1] === matrix[2]) {
    console.log(`case1`);
    return matrix[0];
  }
  // row 2
  if (matrix[3] !== 0 && matrix[3] === matrix[4] && matrix[4] === matrix[5])
    return matrix[3];
  // row 3
  if (matrix[6] !== 0 && matrix[6] === matrix[7] && matrix[7] === matrix[8])
    return matrix[3];
  // colums equal
  // col 1
  if (matrix[0] !== 0 && matrix[0] === matrix[3] && matrix[3] === matrix[6])
    return matrix[0];
  // col 2
  if (matrix[1] !== 0 && matrix[1] === matrix[4] && matrix[4] === matrix[7])
    return matrix[1];
  // col 3
  if (matrix[2] !== 0 && matrix[2] === matrix[5] && matrix[5] === matrix[8])
    return matrix[2];
  // diagonal equal
  if (matrix[0] !== 0 && matrix[0] === matrix[4] && matrix[4] === matrix[8])
    return matrix[0];
  if (matrix[2] !== 0 && matrix[2] === matrix[4] && matrix[4] === matrix[6])
    return matrix[2];
}
