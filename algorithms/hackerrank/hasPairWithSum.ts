// not a hackerrank challenge but still pretty interesting

function hasPairWithSum(array: number[], sum: number): boolean {
  const complements = new Set([])
  let hasPair = false

  array.forEach(number => {
    complements.has(number) ? (hasPair = true) : complements.add(sum - number)
  })

  return hasPair
}
