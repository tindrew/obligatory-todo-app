const todos = [{
    text:'walk the dog',
    completed: false
}, {
    text: 'clean the floor',
    completed: false
}, {
    text: 'arrange the garage',
    completed: true 
}, {
    text: 'move furniture',
    completed: true
}, {
    text: 'wash clothes',
    completed: false
}]
//*********code to display todos and filter them onscreen */

const filters = {
    searchText: ''
}

//build a function that adds to Todo array and connect it
//to the addTodo button

const addTodos = function (text, completed) {
    
}




const renderTodos = function (todos, filters) {
    const filterTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filterTodos.filter(function (todo) {
        return !todo.completed
    })


    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filterTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)



/****************************************/


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log("Add a new todo...")
})

// Listen for todo text change
document.querySelector("#new-todo-text").addEventListener('input', function (e) {
    console.log(e.target.value)
})





