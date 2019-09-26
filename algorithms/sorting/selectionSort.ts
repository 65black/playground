function selectionSort(array: number[]) {
  const sorted = []
  const arrayLength = array.length

  while (sorted.length !== arrayLength) {
    const smallest = Math.min(...array)

    sorted.push(smallest)
    array.splice(array.indexOf(smallest), 1)
  }

  return sorted
}
