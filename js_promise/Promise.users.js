function getUsersById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json());
}
getUsersById(1).then(value => console.log(value))