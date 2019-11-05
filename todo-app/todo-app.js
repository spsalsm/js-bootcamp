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

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    let visibleTodos = filteredTodos
    if (filters.hideCompleted) {
        visibleTodos = filteredTodos.filter(function (todo) {
            return !todo.completed
        })
    }
    
    document.querySelector('#todos').innerHTML = ''

    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${visibleTodos.length} todos left`
    todoEl.appendChild(todosLeft)

    visibleTodos.forEach(function (todo) {
        const todoParagraph = document.createElement('p')
        todoParagraph.textContent = todo.text
        todoEl.appendChild(todoParagraph)
    })
}

renderTodos(todos, filters)

// Listen for todo filter change
document.querySelector('#todo-filter').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Submit button event handler for new todo form
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    e.target.elements.todoText.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})