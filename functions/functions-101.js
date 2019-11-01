// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (temp) {
    return (temp - 32) * (5/9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))