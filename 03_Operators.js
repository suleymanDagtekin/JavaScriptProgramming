// Order of operators is JS is same with Java
console.log(4+4*(-1)-8/2);

//assignment operators
let x = 5;
x+=5;
console.log(x);

//comparison similar to Java with some difference
let one = 1;
let one_again = 1;
let one_string ='1';
let two_string = '2';
let one_string_again ='1';

console.log(one == one_again); //true
console.log(one == one_string); //true: == sign is looking for value equality
console.log(one === one_string); //false: === sign is looking for both value and dataType
console.log(one_string === two_string); //false : === Identity/Strict Equality, !== Non-Identity/Strict Inequality
console.log('----------------------')
console.log(one_string === one_string_again);
console.log(one_string !== two_string);
console.log('----------------------')

//logical operators same like Java: you have only short circuit &&, ||
console.log((5<2)&&(2<5)); // false

// control flow statements: if/if else/switch/break/continue same with Java
let num1= 100;
let num2= 10;
if(num1>num2){
    console.log('number1 is bigger');
}else{
    console.log('number2 is bigger');
}

// ternary: question mark operator
let age= 25;
let isEligable= age > 18 ? true : false;
console.log(isEligable); // true

// switch
let month= 2;
let dayCount;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount= 31;
        break;
    case 4: case 6: case 9: case 11:
        dayCount= 30;
        break;
    case 2:
        dayCount=28;
        break;
    default:
        dayCount= 'enter a valid number';
        break;
} 
console.log(dayCount);
