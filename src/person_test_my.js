const Person = require("./person");

const p1 = new Person("David", 23);

console.log(p1);
console.log(''+p1);
p1.name = 'Bill';
console.log(p1.toJSON());