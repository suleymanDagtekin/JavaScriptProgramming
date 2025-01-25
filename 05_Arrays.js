/**
 * There is no Collection type in JS. JS only has Arrays and Map
 * Not fixed size
 * There are 2 important brackets in JS
 *  1. [] ----> creates an array
 *  2. {} ----> creates an object
 */

let scores = new Array(); // creates an empty array
let numbers = new Array(10); // creates an array with size 10
let emptyArray = []; // creates na empty Arary
let myNumbers = new Array(1,2,3,5,8,13);
let colors = ['red', 'green', 'blue'];


console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

// print second element in an array
console.log(colors[1]); // indexed 

// add element to an array at the end
colors.push("white");
console.log(colors);

// add element to an array at the beginning
colors.unshift("orange");
console.log(colors);

console.log(colors.pop()); // returning the last element and removing from the array at the same time
console.log(colors);

// the size of the array
console.log(colors.length);

for (let i = 0; i < colors.length; i++){
   console.log( colors[i]);
}

// loop with values of array
for (let value of colors) {
   console.log(value);
   
}

colors.forEach(element => {
   console.log(element);
});

// can we add multiple type of data? YES
let soupOfData = [5, 'Oscar', true, undefined]; // you can also put Map, Object, Functions inside an array
soupOfData.forEach(element => {
   console.log(typeof element);
});
