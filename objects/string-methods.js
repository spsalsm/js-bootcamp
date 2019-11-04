let name = '  Sean Salsman '

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword - return true if length is more than 8 and doesn't contain 'password'
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp')) // false
console.log(isValidPassword('abc123#$%!#$')) // true
console.log(isValidPassword('asdfpassword')) // false