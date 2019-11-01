let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location
let sean = {
    name: 'Sean',
    age: 37,
    location: 'West Fork'
}
// Sean is 37 and lives in West Fork.
console.log(`${sean.name} is ${sean.age} and lives in ${sean.location}.`)
// Increase age by 1 and print message again
sean.age += 1

console.log(`${sean.name} is ${sean.age} and lives in ${sean.location}.`)