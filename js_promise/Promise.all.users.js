function getUsersById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json());
}

const start = Date.now();
getUsersById(1).then((value) => console.log(value));
getUsersById(2).then((value) => console.log(value));
getUsersById(3).then((value) => console.log(value));

console.log(`Request has finished in ${Date.now() - start}`);

const promise = Promise.all([getUsersById(1), getUsersById(2), getUsersById(3)]);

promise.then((results) => console.log(results));