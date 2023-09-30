function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json());
}
getTodoById(1).then(value => console.log(value))