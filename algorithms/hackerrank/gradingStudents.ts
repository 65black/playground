// link to problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades: number[]): number[] {
  const roundedGrades = grades.map(grade => {
    if (grade >= 38) {
      const difference = grade % 5

      if (difference >= 3) {
        grade = grade + (5 - difference)
      }
    }

    return grade
  })

  return roundedGrades
}
