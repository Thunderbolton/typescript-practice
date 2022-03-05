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
