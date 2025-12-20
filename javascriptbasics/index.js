// console.log("Hello World");
//
// var x; // declaration
//
// x = 10; // initialization - assign an initial value


// Lambda function - This function is anonymous, it doesn't have a name
// Use cases - This can be used anywhere where a function can be used
// const greet2 = () => {
//     console.log("Hello World 2");
// }
//
// greet2()

// // Normal function
// function greet() {
//      x = 10;
// }


// 🗑️ var - not recommended - use let or const instead - this is a function-scoped variable, it can be re-declared inside a block which is not a proper standard for variables
// let - use let instead of var - it follows modern JavaScript standards and is block-scoped, it can't be re-declared
// const - use const for values that won't change - it can't be re-declared - it can only be modified if it's an object or array

let x = "Hello World";
let y = 'Hello World'; // Personal preference
let z = `Hello World`; // Supports string interpolation

console.log(`This will say ${x}`); // This is a string interpolation / template literal(${})


// Hoisting - variable, functions, and classes declaration is moved to the top of the scope
// if a function is called before it is declared, it will be executed


let camelCase = "camelCase"; // recommended - standard for naming variables
let PascalCase = "PascalCase"; // recommended - use for naming classes
// let _camelCase = "private camelCase"; // private variable - usually used in classes for private properties/variables
// let snake_case = "snake_case"; // not recommended
// let UPPER_CASE = "UPPER_CASE"; // not recommended unless using constants - e.g. const PI = 3.14;
// let 123abc = "123abc"; // won't work - variables can't start with a number
// let $abc = "abc"; // won't work - variables can't start with a special character (exception _ (underscore))


// Global/Top-level scope - variable defined at the main level - variables declared outside of a function or block are available everywhere.
// Function scope - variables declared inside a function are only available inside that function.
// Block scope - variables declared inside a block are only available inside that block (if/else, for, while, etc.)