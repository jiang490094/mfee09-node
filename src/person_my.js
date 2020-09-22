class Person {
    constructor(name="noname", age=20) {
        this.name = name;
        this.age = age;
    }

    toJSON(){
        const obj = {
            name: this.name,
            age: this.age,
        };
        return JSON.stringify(obj);
    }

    toString(){
        return JSON.stringify({
            name: this.name,
            age: this.age,
        });
    }
}

const p1 = new Person('David', 23);

// 屬性
console.log(p1);
// 字串
console.log(''+p1);
// 字串
console.log(p1.toJSON());

module.exports = Person;