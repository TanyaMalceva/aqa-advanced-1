function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json());
}

const start = Date.now();
getTodoById(1).then((value) => console.log(value));
getTodoById(2).then((value) => console.log(value));
getTodoById(3).then((value) => console.log(value));

console.log(`Request has finished in ${Date.now() - start}`);

const promise = Promise.race([getTodoById(1), getTodoById(2), getTodoById(3)]);
promise.then((value) => console.log(value));
