let str1= 'Java';
let str2= "Script";
let str3= "awesome";

let result;
result="the result variable is: "+str1+str2+' '+str3; //like Java

console.log(result);

// difference from Java: backtics for variable insertion
result=`the result variable is: ${str1}${str2} ${str3}`;
console.log(result);

let str4= 'sometimes';
result=`the result variable is: ${str1}${str2} ${str4} ${str3}`;
console.log(result);