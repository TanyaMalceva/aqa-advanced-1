function printWithDelay(text, milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, milliseconds);
    });
}
async function example() {
    console.log("Start");

const result = await printWithDelay ("Hi!", 5000);
console.log (result);
console.log ("End");
}
example();