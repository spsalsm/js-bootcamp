const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// Tipper
const tipper = (percent) => {
    return (billAmount) => {
        return billAmount * percent
    }
}

const tip15 = tipper(.15)
const tip20 = tipper(.20)
const tip25 = tipper(.25)

console.log('Bill amount: $100')
console.log(`15%: ${tip15(100)}`)
console.log(`20%: ${tip20(100)}`)
console.log(`25%: ${tip25(100)}`)