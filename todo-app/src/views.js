import { getTodos, toggleTodo, removeTodo } from "./todos"
import { getFilters } from "./filters"

// Render application todos based on filters
const renderTodos = () => {
    const filters = getFilters()
    const todoEl = document.querySelector('#todos')
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length === 0) {
        const emptyMessageEl = document.createElement('p')
        emptyMessageEl.classList.add('empty-message')
        emptyMessageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(emptyMessageEl)
    } else {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    }   
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox    
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Setup the todo text    
    text.textContent = todo.text
    containerEl.appendChild(text)

    // Set up container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button    
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (todos) => {
    const summary = document.createElement('h2')
    const todoText = todos.length === 1 ? 'todo' : 'todos'
    summary.textContent = `You have ${todos.length} ${todoText} left`
    summary.classList.add('list-title')
    return summary
}

export { renderTodos, generateTodoDOM, generateSummaryDOM }