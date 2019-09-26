// link to problem: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(ratingsOne: number[], ratingsTwo: number[]): number[] {
  let ratingsOneScore = 0
  let ratingsTwoScore = 0

  ratingsOne.map((rating, index) => {
    rating > ratingsTwo[index] && ratingsOneScore++
    rating < ratingsTwo[index] && ratingsTwoScore++
  })

  return [ratingsOneScore, ratingsTwoScore]
}
