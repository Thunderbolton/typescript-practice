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