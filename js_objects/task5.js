const users = [
    { name: "Nik", email: "nike@gmail.com", age: 24 },
    { name: "Alice", email: "alice@gmail.com", age: 32 },
    { name: "Silena", email: "silena@gmail.com", age: 21 },
];
for (const {name, email, age} of users) {
    console.log(
   `Name: ${name},
    Email: ${email},
    Age: ${age}`);
}