// Student's score, total possible score
// 15/20 -> You got a C (75%)!
// A 100-90, B 80-89, C 70-79, D 60-69, F 0-59

const getStudentGrade = function (score, possible) {
    const grade = score / possible * 100
    let gradeLetter = ''

    if (grade > 100 || grade < 0) {
        return 'Please enter valid grade between 0 and 100'
    }

    if (grade >= 90) {
        gradeLetter = 'A'
    } else if (grade >= 80) {
        gradeLetter = 'B'
    } else if (grade >= 70) {
        gradeLetter = 'C'
    } else if (grade >= 60) {
        gradeLetter = 'D'
    } else {
        gradeLetter = 'F'
    }

    return `You got a ${gradeLetter} (${grade}%)!`
}

let gradeOne = getStudentGrade(15, 20)
let gradeTwo = getStudentGrade(40, 100)
let gradeThree = getStudentGrade(38, 50)
let gradeFour = getStudentGrade(344, 14)

console.log(gradeOne)
console.log(gradeTwo)
console.log(gradeThree)
console.log(gradeFour)