function insertionSort(array: number[]) {
  array.map((number, index) => {
    let previousNumberIndex = index - 1

    while (previousNumberIndex >= 0 && array[previousNumberIndex] > number) {
      array[previousNumberIndex + 1] = array[previousNumberIndex]
      previousNumberIndex--
    }

    array[previousNumberIndex + 1] = number
  })

  return array
}
