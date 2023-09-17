const number = 7;
console.log ("Multiplication table cycle FOR")
for (let a = 1; a <= 10; a++) {
    let result = number * a;
    console.log(`${number} x ${a} = ${result}`);
}

console.log ("Multiplication table cycle WHILE")
let b = 1;
while (b <= 10) {
    let result = number * b;
    console.log(`${number} x ${b} = ${result}`);
    b++;
}