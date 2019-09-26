// link to problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr: number[]): number[] {
  let isUniform = true
  const lowest = [...arr].sort().shift()
  const highest = [...arr].sort().pop()
  let lowestSum = 0,
    highestSum = 0

  arr.reduce((prev, cur) => {
    isUniform = prev !== cur ? false : true
    return cur
  })

  if (isUniform) {
    lowestSum = arr.reduce((prev, cur) => prev + cur) - arr[0]
    highestSum = lowestSum
  } else {
    arr.forEach(number => {
      lowestSum += number !== highest ? number : 0
      highestSum += number !== lowest ? number : 0
    })
  }

  return [lowestSum, highestSum]
}
