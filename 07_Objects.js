let person = {
    firstName : "Joe",
    lastName : 'Doe'
}

console.log(typeof person);
console.log(person);
console.log(person.firstName);

let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}

console.log(address);
console.log(address['building no']);
console.log(address['street']);

// add new property to object
person.age = 30;
console.log(person);

// delete a property
delete person.age;
console.log(person); // {firstName: 'Joe', lastName: 'Doe'}

// check a property if it is exists
console.log('street' in address); // true

// you can put arrays inside objects
let course = {
    name : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects', 'Arrays', 'Functions', 'Live Server']
}
console.log(course);