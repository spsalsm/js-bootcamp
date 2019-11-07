'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Listen for todo filter change
document.querySelector('#todo-filter').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Submit button event handler for new todo form
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    e.target.elements.todoText.value = ''
    saveTodos(todos)
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})