/********************************
 * Type annotations with functions *
 *********************************/

// Optional and default parameter;
// Function rest parameter;
// Arow function;
// Anonymous function;
// Void & never;

// Function to calculate the area of a rectangle
function calculateRectangleArea(
  lengthRectAngle: number,
  widthOfRectAngle: number,
): number {
  return lengthRectAngle * widthOfRectAngle;
}

// Calling the function with valid arguments
const lengthRectAngle = 5;
const widthOfRectAngle = 3;
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`);

// ****************** Optional and default parameter **********************
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// Default Parameters:
// For parameters with default values, the default value goes after the type annotation:
function greetOptional(name: string, age: number = 25) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Alice"); //Output: "Hello, Alice!"
greetOptional("Bob", 30); //Output: "Hello, Bob! You are 30 years old."

// ************************** Function with a rest parameter and type annotations **************************
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function addAll(...nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5)); //Output: 170.5

// ************************** Anonymous function***********************
const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(20, 80)); //Output: 100

// ************************** Void & never ****************************
// The type void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("Anna"); //Output: "Hello, Anna!"

function noReturnValue(): void {
  // This function doesn't return a value {implicitly return undefined}.
}

// Never: A function that cannot possibly end successfully 
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // This function never exist (infinite loop)
  }
}


