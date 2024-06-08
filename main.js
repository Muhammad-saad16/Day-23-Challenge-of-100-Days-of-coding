"use strict";
//     🚀 Day 23 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 67: 
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5").
// Return their sum as a number. 
function addNumberAndString(number1, numberWithString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberWithString);
}
// Trying it with 10 and "5"
console.log(addNumberAndString(5, "5")); // Shows 10
// The string 5 is turned into the number 5, and then added to 5.
// Question 68:
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.
function multiplyDecimals(number1, number2) {
    return Math.round((number1 * number2) * 100) / 100;
}
console.log(multiplyDecimals(5.5, 2.5)); // Shows 13.75
// Question 69:
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. 
// Use an object to return both values.
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = dividend / divisor;
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
