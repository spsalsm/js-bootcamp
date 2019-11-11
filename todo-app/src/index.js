import { renderTodos } from './views'

renderTodos()

// // Listen for todo filter change
// document.querySelector('#todo-filter').addEventListener('input', (e) => {
//     filters.searchText = e.target.value
//     renderTodos(todos, filters)
// })

// // Submit button event handler for new todo form
// document.querySelector('#new-todo').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const text = e.target.elements.todoText.value.trim()
//     if (text.length > 0) {
//         todos.push({
//             id: uuidv4(),
//             text,
//             completed: false
//         })
//         e.target.elements.todoText.value = ''
//         saveTodos(todos)
//         renderTodos(todos, filters)
//     }
// })

// document.querySelector('#hide-completed').addEventListener('change', (e) => {
//     filters.hideCompleted = e.target.checked
//     renderTodos(todos, filters)
// })