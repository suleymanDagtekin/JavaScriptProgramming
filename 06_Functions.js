// no access modifier, no method overloading
function add(a, b) {
    console.log('Total is: '+(a+b)); // No Return type function
}

add(10, 20); // call a function

// Return type function
function multiply(a, b) {
    return (a*b);
}

console.log(multiply(10, 20));

// no overloading
add(10, 20, 30, 200); // ignores after the second parameter


/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * They call functions as first class citizens of JavaScript
 * 1. you can pass a function as an arguments to other functions
 * 2. you can return a function from a function
 * 3. you can store a function into a variable
 */
let divide = function (a, b) {
    return a/b;
}

console.log(divide(30, 5));

let anyFunction = divide;

console.log(anyFunction(30, 5));

// pass a function as an arguments to other functions
function sum(a, b) {
    return a+b;
}

function  average(a, b, fn) {
    return fn(a, b)/2;
}

let averageResult = average(10, 20, sum);
console.log(averageResult);

averageResult = average(10,20,multiply);
console.log(averageResult);