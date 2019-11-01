// Global scope (convertFahrenheitToCelsius)
  // Local scope (temp)
let convertFahrenheitToCelsius = function (temp) {
    return (temp - 32) * (5/9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))