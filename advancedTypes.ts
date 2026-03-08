/*************************
 * Advanced Types *
 **************************/

// Union types
// Literal types
// Nullable types
// Type Alias
// Intersection type

// ********* Union types *************
// Are used when a value can be more than a single type.
// Such as when a property would be string or number.

let myVar: string | number;

myVar = "Hello"; // Valid assignment - "Hello"
console.log(myVar);

myVar = 42; // Valid assignment - 42
console.log(myVar);

// *********** Literal types *****************
// Literal types in TypeScript allow you to specify exact values that variables can hold, providing more precision than broader types like string or number.
//They are the building blocks for creating precise and type-safe applications.

/***
******** Key Concepts ********** 
String Literals: Exact string values like "success" | "error"
Numeric Literals: Specific numbers like 1 | 2 | 3
Boolean Literals: Either true or false
Template Literal Types: String literal types built using template string syntax
**** */

/***********************************
 ******* Common Use Cases ******
Defining specific sets of allowed values
Creating discriminated unions
Type-safe event handling
API response typing
Configuration objects
 ***********************************/

// A variable with a string literal type
let direction: "north" | "south" | "east" | "west";

// Using string literal types in functions
function selectColor(color: "red" | "green" | "blue") {
  console.log(`Selected: ${color}`);
}

selectColor("green"); // Output: "Selected: green"

// ******************* Nullable types *****************************
let userName: string | null = "Glitcher"; // The variable can hold a string or null.
let ageEx: number | null = null; // The variable can hold a number or null.

function greetUser(username: string | null) {
  if (username === null) {
    console.log(`Hello, Guest!`);
  } else {
    console.log(`Hello, ${username}!`);
  }
}

greetUser("Clitcher"); // Output: "Hello, Clitcher!"
greetUser(null); // Output: "Hello, Guest!"

// ************ Type Alias *****************
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays.
type MyString = string;
let myName: MyString = "Glitcher";
type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 10;

// Another exmaple
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Employee = {
  name: "Bob",
  age: 25,
};

console.log(alice); //Output: { name: 'Alice', age: 30, email: 'alice@example.com' }
console.log(bob); // Output: { name: 'Bob', age: 25 }

// ************ Intersection type *************
// Allow you to compile multiple types into one.

type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  address: string;
  phone: number;
};

type CombineType = FirstType & SecondType; // We've compared 2 properties of 2 types amd used "&".

const person: CombineType = {
  name: "john",
  age: 30,
  address: "123 Main St",
  phone: 123 - 456 - 7890,
};  // This property contains 2 types.
