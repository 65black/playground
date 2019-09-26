// link to problem: https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  let constraint = 0
  let x1Distance = x1 + v1
  let x2Distance = x2 + v2
  let result = 'NO'

  while (constraint <= 10000) {
    if (x1Distance === x2Distance) {
      result = 'YES'
      break
    }

    constraint++
    x1Distance += v1
    x2Distance += v2
  }

  return result
}
