async function getUsersById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    return user
}
getUsersById(1).then(value => console.log(value))