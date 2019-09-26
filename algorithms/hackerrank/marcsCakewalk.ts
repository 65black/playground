// link to problem: https://www.hackerrank.com/challenges/marcs-cakewalk/problem

function marcsCakewalk(calorie: number[]): number {
  calorie.sort((a, b) => a - b).reverse()

  return calorie.reduce((prev, cur, index) => Math.pow(2, index) * cur + prev)
}
