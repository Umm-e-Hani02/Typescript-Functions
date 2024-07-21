"use strict";
/**************************************************************************
 *                                FUNCTIONS                               *
 **************************************************************************/
// In TypeScript, functions are reusable blocks of code that perform a specific task. They allow you to write code 
// once and reuse it multiple times, making your programs more modular and maintainable.
// 1. NAMED FUNCTION: A function with a name that can be called elsewhere in the code.
function greet() {
    console.log("Hello, World!");
}
greet(); // OUTPUT: Hello, World!
// 2. ARROW FUNCTION: A shorter syntax for function expressions that uses the => arrow notation.
const programming = () => {
    console.log("Let's learn TypeScript!");
};
programming(); // OUTPUT: Let's learn TypeScript!
// 3. ANONYMOUS FUNCTION: A function without a name, often used in function expressions or as arguments to other functions.
let sum = function () {
    let add = 6 + 2;
    console.log(add);
};
sum(); // OUTPUT: 8
// 4. RETURN: Specifies the value that a function returns.
function calculate(num1, num2) {
    return num1 - num2;
}
let answer = calculate(10, 4);
console.log(answer); // OUTPUT: 6
// 5. OPTIONAL PARAMETER: A parameter that is not required. Denoted by a ? after the parameter name.
const user = (name, age) => {
    if (age !== undefined) {
        console.log(`Hello, my name is ${name}, and I am ${age} years old.`);
    }
    else {
        console.log(`Hello, my name is ${name}`);
    }
};
user("Umm-e-Hani"); // OUTPUT: Hello, my name is Umm-e-Hani
// 6. DEFAULT PARAMETER: A parameter with a default value if no argument is provided.
function movie(name, releaseDate = 2009) {
    console.log(`The movie name is ${name} and release date is ${releaseDate}`);
}
movie("Doraemon"); // OUTPUT: The movie name is Doraemon and release date is 2009
// 7. REST PARAMETER: Allows a function to accept an indefinite number of arguments as an array.
function menu(...items) {
    return items;
}
let result = menu("Pizza", "Burger", "Fries");
console.log(result); // OUTPUT: [ 'Pizza', 'Burger', 'Fries' ]
// 8. IMMEDIATELY INVOKED FUNCTION: Functions that are executed as soon as they are defined.
(function () {
    console.log("I invoked immediately");
})(); // OUTPUT: I invoked immediately
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(5, 2)); // OUTPUT: 7
console.log(add("Hello", "World")); // OUTPUT: Hello World
console.log(add(true, false)); // OUTPUT: 1
// 10. CALLBACK FUNCTION: Functions passed as arguments to other functions.
const sumTwoNumbers = () => {
    return 2 + 3;
};
const anotherFunc = (callback) => {
    console.log(callback());
};
anotherFunc(sumTwoNumbers); // OUTPUT: 5
