function quickSort(array: number[]) {
  const arrayLength = array.length

  if (arrayLength < 2) return array

  const pivot = array.pop()
  const lessThanPivot = array.filter(el => el <= pivot)
  const greaterThanPivot = array.filter(el => el > pivot)

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]
}
