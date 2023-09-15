// Function Declaration
function calculateRectangle(width, height) {
const area = width * height;
return area;
}
console.log(calculateRectangle(5, 10))

// Function Expression
const calculateRectangle2 = function(width, height){
    let area = width * height;
    return area;
};
console.log(calculateRectangle2(5, 10))

// Arrow function
const calculateRectangle3 = (width, height) => width * height;
console.log(calculateRectangle3(5, 10))