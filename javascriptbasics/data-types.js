// Strings = group of characters written inside "", '', or ``
let string1 = "Using double quotes";
let string2 = 'Using single quotes';
let string3 = `Using backticks`;

// console.log(typeof string3);

// Number = any integer, float, or decimal
let num1 = 100;
let num2 = 10.20;
let num3 = 9.22222222222222222222222222222222222222222222222222;

// console.log(typeof num1, typeof num2, typeof num3);

// Boolean = true or false - used for comparisons or conditions
let bool1 = true;
let bool2 = false;

// console.log(typeof bool1);

// Symbols - used to create unique identifiers on every initialization
let x = Symbol();
let y = Symbol("This is a description");

// console.log(Symbol() == Symbol())
// console.log(x == Symbol())


// Undefined - This is the default value assigned to every variable/property if its not overridden
let undef1;
// console.log(typeof undef1);



// Null - This is made manually by the programmer - not generated or defaulted by the interpreter.
// It is usually used to handle empty values
let name = null;

// console.log(name != null);



// Objects - Used to group or structure multiple data or data types
// Usually used to work with data such as JSON (Javascript Object Notation)
let obj1 = {
    name: "Mayank",
    age: 21,
    sub: {
        slug: "Hello"
    }
}

obj1.name = "Hello";

// console.log(typeof obj1.age);
// console.log(obj1.sub.slug);