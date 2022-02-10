// ECMscript: ES6
// javascript: ECMscript + web api
// nodejs: ECMscript + node api

// // Primitive Data
// // sting number boolean undefined null symbol

// var a = 1;
// var b = a;

// coercion
// == vs. ===

// console.log(true + false);
// console.log(1 - 'test12');

// console.log(1 == '1'); // change the type, check it;
// console.log(1 === '1'); // check it;

// // Object Data
// var obj = {name: 'Jojo'};
// function foo(val) {
//     val.name = 'Dio'
// }
// foo(obj);
// console.log(obj);

// var vs. let vs. const

//       hoisting     scope        reassign
// var      yes init  function     yes
// let      yes       block        yes
// const     yes      block        no
// function  yes

// foo();

// const foo = () => {
//     console.log("hello");
// };

// const arr = [1, 2, 3];
// arr.push(4);

// console.log(arr);

// oop: Object oriented programming; class

// encapsulation
class Person {
    #name;
    #age;

    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    walk() {
        console.log(this.#name + ' is ' + this.#age + ' years old');
        console.log(this.#name, 'is', this.#age, 'years old');
        console.log(`${this.#name} is ${this.#age} years old`);
    }

    static walk() {
        console.log(`David is 3 years old`);
    }
}
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
Person.walk();

// // inheritance
class Employee extends Person {

    constructor(name, age, company = 'Jump') {
        super(name, age);
        this.company = 'Jump';
    }

    walk(str) {
        console.log(this.name + ' is walking' + str);
    }
}
const e = new Employee('Dio', 20, 'Antra');
console.log(e);
e.walk();


// e.name

// Polymorphism

// Abstraction

Array.prototype.myForEach = function() {
    console.log('hello world');
}
const arr = [];

arr.myForEach();