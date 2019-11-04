// const todos = ['Do this', 'Do that', 'Do the other thing', 'Master JavaScript', 'Make big money']
const todos = [{
    text: 'Do this',
    completed: true
}, {
    text: 'Do that',
    completed: false
}, {
    text: 'Do the other thing',
    completed: false
}, {
    text: 'Master JavaScript',
    completed: true
}, {
    text: 'Make big money',
    completed: false
}]

const deleteTodo = function (todos, text) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// console.log(todos)
// deleteTodo(todos, 'do that')