// link to problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(array: number[][]): number {
  const length = array.length
  let leftToRightDiagonal = 0
  let rightToLeftDiagonal = 0

  array.map((currentArray, index, originalArray) => {
    leftToRightDiagonal += currentArray[index]
    rightToLeftDiagonal += originalArray[length - 1 - index][index]
  })

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}
