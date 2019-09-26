// link to problem: https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(array: number[]): number {
  const sortedArray = [...array].sort((a, b) => a - b)
  let absoluteMinDifference = Infinity

  sortedArray.map((currentValue, index, array) => {
    const currentMinDifference = Math.abs(currentValue - array[index + 1])

    if (currentMinDifference < absoluteMinDifference) {
      absoluteMinDifference = currentMinDifference
    }
  })

  return absoluteMinDifference
}
