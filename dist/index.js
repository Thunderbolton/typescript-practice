"use strict";
// Basic types
let id; // initalise
let age = 10;
let person = 'John';
let isActive = true;
let i = 'test'; // can be set to anything after initial declaration
i = true;
// arrays
let ages = [1, 2, 3, 4, 5]; // the type of values in this array will only be numbers
let names = ['john', 'james', 'tom'];
let arr = ['john', 1, true];
// tuple -- specify exact types in an array in order
let profile = ['john', 1, false, 2];
// an array of tuples
let people;
people = [
    ['james', 1, true],
    ['john', 2, false],
    ['bill', 3, true],
];
// Union - variables that can hold more than one type
let code;
code = true;
// Enum - to define a set of named constants that auto-increment. They increment by default, or we can initalise them to increment. 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// constants can be accessed from the enum itself: Direction.Up 
// enums can also have strings
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// and then used:
const user = {
    id: 1,
    name: 'Tom'
};
// Type assertion -- used to set the type of a value explicitly which allows for more certainty in the code (without the compilier inferring a type)
let pid = 1;
let pid1 = 'hello';
//type assertion method #1
let productId = pid;
// method #2
let productId1 = pid1;
// Functions
// Parameter types are set, as well as the return type (which goes after the parameters):
function addNum(x, y) {
    return x + y;
}
// For functions that do not return any values, use 'void'
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'James',
    isOnline: true
};
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
// Classes 
class Person {
    // they are then assigned using the constructor function with the 'this' keyword
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const john = new Person(1, 'john smith');
const jane = new Person(2, 'jane doe');
// Classes can also utilise interfaces, using the following syntax:
// class Person implements PersonInterface -- the name of the interface
// Classes can also be extended, also known as 'subclasses'
class Relative extends Person {
    constructor(id, name, relation) {
        super(id, name); // don't need 'this' syntax as it's already initialised in the Person class.
        this.relation = relation; // is intialised here. 
    }
}
const rel = new Relative(1, 'John', 'Father');
// Data/access modifiers
// These are a way to control the access of properties in a class.
// 3 modifiers: Public (default), Private, Protected
// Public - properties can be accessed and modified outside of the class: 
john.id = 3;
// Private - properties can not be accessed outside of the contianing class. 
// class Person {
//     private id: number // the access modifier is put before the property
// }
// Protected - similar to private, but properties can be accessed if there is an extended class.
// class Person {
//     protected id: number 
// }
// Generics
// Generics offer a way to create reusable components. They allow us to not be restricted by one data type.
// Components can be called or used with a variety of data types
// Uses a type variable to specify the type: 'T'
// Function WITHOUT generic
// function getArray(items: any[]): any[] { // any data type can be passed in. 
//     return new Array().concat(items)
// }
// let strArray = getArray(['John', 'James', 'Bill'])
// let numArray = getArray([1, 2, 3])
// numArray.push('Matt') -- a string is passed to the numArray, but as 'any' was specified above, this won't give an error.
// Function WITH generic
function getArray(items) {
    return new Array().concat(items);
}
let strArray = getArray(['John', 'James', 'Bill']);
let numArray = getArray([1, 2, 3]);
// numArray.push('Matt') // a string is passed, but now this gives an error.
