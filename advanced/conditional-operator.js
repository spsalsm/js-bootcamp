// const myAge = 37
// const message = myAge >= 18 ? 'Voting age' : 'Nah dawg'
// console.log(message)

const myAge = 37
const showPage = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')