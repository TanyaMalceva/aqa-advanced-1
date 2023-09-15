function divide(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error('All arguments must be numbers!');
        }
        if (denominator === 0) {
            throw new Error('denominator cannot be equal to 0!');
        }
        const result = numerator / denominator;
        return result;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('The work is complete!');
    }
}
console.log(divide(12, 6));
console.log(divide(7, 0));
console.log(divide('f', 3));