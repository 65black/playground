// link to problem: https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(str: string): number {
  const arr = []
  const match = ['S', 'O', 'S']
  let difference = 0

  for (let i = 0; i < str.length; i += 3) {
    arr.push(str.slice(i, i + 3))
  }

  arr.forEach(message => {
    const messageArr = message.split('')

    messageArr.forEach((letter, index) => {
      if (letter !== match[index]) {
        difference += 1
      }
    })
  })

  return difference
}
