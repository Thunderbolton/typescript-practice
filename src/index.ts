// Basic types
let id: number // initalise
let age: number = 10
let person: string = 'John'
let isActive: boolean = true

let i: any = 'test' // can be set to anything after initial declaration
i = true

// arrays
let ages: number[] = [1, 2, 3, 4, 5] // the type of values in this array will only be numbers
let names: string[] = ['john', 'james', 'tom']
let arr: any[] = ['john', 1, true]

// tuple -- specify exact types in an array in order
let profile: [string, number, boolean, number] = ['john', 1, false, 2]
// an array of tuples
let people: [string, number, boolean][]
people = [
    ['james', 1, true],
    ['john', 2, false],
    ['bill', 3, true],
]

// Union - variables that can hold more than one type
let code: string | boolean | number
code = true


// Enum - to define a set of named constants that auto-increment. They increment by default, or we can initalise them to increment. 

enum Direction {
    Up = 1,
    Down, // = 2
    Left, // = 3
    Right, // = 4
}
// constants can be accessed from the enum itself: Direction.Up 

// enums can also have strings
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
// Object types can be set first like this, using a 'type alias':
type User = {
    id: number
    name: string
}
// and then used:
const user: User = {
    id: 1,
    name: 'Tom'
}

// Type assertion -- used to set the type of a value explicitly which allows for more certainty in the code (without the compilier inferring a type)
let pid: any = 1
let pid1: any = 'hello'

//type assertion method #1
let productId = <number>pid

// method #2
let productId1 = pid1 as string


// Functions

// Parameter types are set, as well as the return type (which goes after the parameters):
function addNum(x: number, y: number ): number {
    return x + y
}

// For functions that do not return any values, use 'void'
function log(message: string | boolean): void {
    console.log(message)
}


// Interfaces -- the structure of a certain object or function. Often times used to describe objects

interface UserInterface {
    id: number
    name: string
    readonly isOnline: boolean //
    age?: number // we can use a ? to represent an optional property.
}

const user1: UserInterface = {
    id: 1,
    name: 'James',
    isOnline: true
}

// Interfaces work better with objects and method objects, and types are better to work with functions, complex types, etc. Interfaces cannot be used with primitives or unions. 

// Interfaces can also be used with functions:
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const multiply: MathFunc = (x: number, y: number): number => x * y;



// Classes 
class Person {
    // class property types are set:
    id: number
    name: string

    // they are then assigned using the constructor function with the 'this' keyword
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const john = new Person(1, 'john smith')
const jane = new Person(2, 'jane doe')

// Classes can also utilise interfaces, using the following syntax:
// class Person implements PersonInterface -- the name of the interface

// Classes can also be extended, also known as 'subclasses'
class Relative extends Person {
    relation: string

    constructor(id: number, name: string, relation: string) {
        super(id, name) // don't need 'this' syntax as it's already initialised in the Person class.
        this.relation = relation// is intialised here. 
    }
}

const rel = new Relative(1, 'John', 'Father')



// Data/access modifiers

// These are a way to control the access of properties in a class.
// 3 modifiers: Public (default), Private, Protected

// Public - properties can be accessed and modified outside of the class: 
john.id = 3


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

function getArray<T>(items: T[]): T[] { // 'T' is the type variable. It's specified with the function in angle brackets, and used to specify the function arguments and return value. 
    return new Array().concat(items)
}

let strArray = getArray<string>(['John', 'James', 'Bill'])
let numArray = getArray<number>([1, 2, 3])

// numArray.push('Matt') // a string is passed, but now this gives an error.