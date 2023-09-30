async function getTodoById(id) {
const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    return todo
}

getTodoById(1).then(value => console.log(value))