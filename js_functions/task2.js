function validate(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(validate(25)); // True
console.log(validate(15)); // False
