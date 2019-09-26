// link to problem: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h: string, word: any): number {
  const heights = h.split(' ').map(Number)
  const wordArray = word.split('')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let width = 1
  let tallest = 1

  for (const index in word) {
    const currentHeight = heights[alphabet.indexOf(wordArray[index])]
    if (currentHeight > tallest) {
      tallest = currentHeight
    }
  }

  const area = word.length * width * tallest
  return area
}
