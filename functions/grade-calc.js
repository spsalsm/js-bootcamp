// Student's score, total possible score
// 15/20 -> You got a C (75%)!
// A 100-90, B 80-89, C 70-79, D 60-69, F 0-59

const getStudentGrade = function (score, possible) {
    if (typeof score !== 'number' || typeof possible !== 'number') {
        throw Error('Please provide numbers only')
    }

    const grade = score / possible * 100
    let gradeLetter = ''

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

try {
    const result = getStudentGrade(18, 20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}