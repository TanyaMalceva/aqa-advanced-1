// Function Declaration
function calculateRectangleArea(width, height) {
const area = width * height;
return area;
}
console.log(calculateRectangleArea(5, 10))

// Function Expression
const calculateRectangleArea2 = function(width, height){
    let area = width * height;
    return area;
};
console.log(calculateRectangleArea2(5, 10))

// Arrow function
const calculateRectangleArea3 = (width, height) => width * height;
console.log(calculateRectangleArea3(5, 10))