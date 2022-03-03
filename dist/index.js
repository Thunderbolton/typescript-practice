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
