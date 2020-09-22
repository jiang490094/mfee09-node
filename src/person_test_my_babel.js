import Person from './person_babel_my';

const p1 = new Person("David", 23);

console.log(p1);
console.log(''+p1);
p1.name = 'Bill';
console.log(p1.toJSON());