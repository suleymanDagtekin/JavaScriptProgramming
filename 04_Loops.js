// loops are same with Java: for loop, while loop, do while
for (let i = 0; i < 5; i++){
    console.log(i); // local scope
}
//console.log(i);

for(var j = 0; j < 5; j++){
    console.log(j);
}
console.log(j); // this type is global and function scope

let n1 = 0;
while (n1 < 3) {
    console.log(n1);
    n1++;
}

let n2 = 0;
do {
    console.log(n2);
    n2++;
}while (n2 < 3);