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
// class Person {
//     #name;
//     #age;

//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     walk() {
//         console.log(this.#name + ' is ' + this.#age + ' years old');
//         console.log(this.#name, 'is', this.#age, 'years old');
//         console.log(`${this.#name} is ${this.#age} years old`);
//     }

//     static walk() {
//         console.log(`David is 3 years old`);
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.walk();

// // inheritance
// class Employee extends Person {

//     constructor(name, age, company = 'Jump') {
//         super(name, age);
//         this.company = 'Jump';
//     }

//     walk(str) {
//         console.log(this.name + ' is walking' + str);
//     }
// }
// const e = new Employee('Dio', 20, 'Antra');
// console.log(e);
// e.walk();

// // Poly-morph-ism: Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }

//     walk() {}
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// Abstraction: TS

// // loop

// console.log(arr[0]);

// const arr1 = new Array(3);

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(typeof i);
//     if ()
// }

// const obj = {name: 'Jojo', age: 18}

// for (let [key, val] in obj) {
//     console.log(key, val);
// }

// for (let ele of arr) {
//     console.log('with of key word: ', ele);
// }

// console.log(arr);

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// arr.myForEach(function (val, i, array) {
//     array[i] = val + 1;
// });

// Array.prototype.myMap = function (callback) {
//     const arr = [];
//     for (let i =0; i< this.length; i++) {
//         arr.push(callback(this[i], i, this));
//     }
//     return arr;
// }

// const arr = [1, 2, 3];
// arr.map(function (val, i, array) {
//     val + 1;
// });

// Array.prototype.myFilter = function(callback) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)){
//             arr.push(this[i]);
//         };
//     }
//     return arr;
// }

// console.log(
//     arr.myFilter(function (val, i, array) {
//         return val < 2;
//     })
// );
// console.log(arr);


// // rebuild myReduce ----> 2 args or 1 args
// Array.prototype.myReduce = function(callback, initacc) {
//     let acc = initacc;
//     for (let i =0; i< this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }
//     return acc;
// }

// const numbers = [175, 50, 25];
// console.log('res: ', numbers.reduce(myFunc, 0)); // 1000

// function myFunc(total, num) {
//     console.log(num);
//     return total - num;
// }

// const str = 'abc';
// // // ['a', 'b', 'c']
// console.log(str.split('').myReduce(
//     function(acc, cur) {
//         return acc + cur + cur;
//     },
//     ''
// ));

// '' + a + a = aa + b + b = aabb + c + c = 'aabbcc'

// 'aabbcc';

// const arr = [2, 2, 3, 4].reduce(
//   function ([2, 4], cur) {
//     const newitem = [2, 4].length !== 0
//       ? [2, 4][[2, 4].length - 1] + 3
//       : cur;
//     return [...[2, 4], 7]; // [2, 4, 7, 11]
//   },
//   []
// );

// // console.log(arr); // [2, 4, 7, 11];

// const foo = arr => arr.myReduce( (acc, cur) => {
//     // acc[cur.name] = cur.age;
//     // return acc;
//     return {...acc, [cur.name]: cur.age};
// }, {});

// const arr = [
//     { name: "sam", age: 18 },
//     { name: "jane", age: 10 },
//     { name: "john", age: 20 },
// ];
// console.log(foo(arr)); // output new obj:
// { sam: 18, jane: 10, john: 20 }

// // // {sam: 18}


// spread operator vs. rest parameter

// function foo(num, ...a) {
//     console.log(a);
// }

// foo(1, 2, 3);

// let arr = [1, 2, 3];
// // arr.push()
// arr = [...arr, 0];

// console.log(arr);

// immutable data; mutable data

// // ~~~~~~interview question~~~~~~~~~~~~
const first = [
    { userid: 2, name: 'Velen' },
    { userid: 56, name: 'Illidan' },
    { userid: 23, name: 'Muradin' },
    { userid: 12, name: 'Sylvanas' },
    { userid: 44, name: 'Cenarius' },
    { userid: 4, name: 'Gul\'Dan' }
];
const second = [
    { userid: 2, role: 'Mage' },
    { userid: 4, role: 'Worlock' },
    { userid: 56, role: 'Demon Hunter' },
    { userid: 66, role: 'Druid' },
    { userid: 87, role: 'Shaman' },
    { userid: 12, role: 'Hunter' },
];
const third = [
    { userid: 2 },
    { userid: 4 },
    { userid: 56 },
    { userid: 66 },
    { userid: 87 },
    { userid: 12 },
];

function solution(fir, sec, thd) {
    const arr = [...sec, ...fir];
    const map = {}
    arr.forEach(ele => {
        map[ele.userid] = {
            userid: ele.userid
        }
    });
    return Object.values(map);
}

// { userid: 2, name: 'Velen'},
// {  userid: 87, name: Null}
// [
//     {},
//     {}
//     ...
// ]

// {
//     2: { userid: 2, name: 'Velen'},
//     56: { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     ...
// }
console.log(solution(first, second));

// [
//     { userid: 2, name: 'Velen', role: 'Mage' },
//     { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     { userid: 23, name: 'Muradin', role: null },
//     { userid: 12, name: 'Sylvanas', role: 'Hunter' },
//     { userid: 44, name: 'Cenarius', role: null },
//     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
//     { userid: 66, name: null, role: 'Druid' },
//     { userid: 87, name: null, role: 'Shaman' },
// ]