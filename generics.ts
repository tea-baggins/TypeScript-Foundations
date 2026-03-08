/********************************
 * Generics *
 *******************************/

// Generics
// Generics Multiple Types
// Generics Classes
// Generics And Interfaces
// Type Assertions

// Generics are a way to define a function or class that can be used with different types of data. They are often used to create reusable components that can work with different types of data.

// A generic function that returns the input value as is
function returnType<T>(val: T): T {
  return val;
}

// Usage of the generic function with different types
const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("Elzero");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

// console.log(`Number Value: ${numValue}`);     // Number Value: 100
// console.log(`String Value: ${strValue}`);     // String Value: Elzero
// console.log(`Boolean Value: ${boolValue}`);   // Boolean Value: true
// console.log(`Array Value: ${arrValue}`);      // Array Value: 1,2,3,4

// **************** Generics Multiple Types **************************

// GenericFunction 'returnTypeEx'
function returnTypeEx<T>(val: T): T {
  return val;
}

console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
console.log(returnTypeEx<string>("Elzero")); // Returns: Elzero (string)

// Arrow function with Generics 'returnTypeExArrowSyntax'
const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax<string>("Elzero")); // Returns: Elzero (string)

// Generic Function 'testType'
function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType<number>(100)); //Returns: The Value Is 100 And Type Is number
console.log(testType<string>("Elzero")); //Returns: The Value Is Elzero And Type Is string

// Generic Function 'multipleTypes'
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Sue", 100)); //Returns: The First Value Sue And Second Value 100
console.log(multipleTypes<string, boolean>("Sue", true)); //Returns: The First Value Sue And Second Value true

// ******************** Generics Classes ********************

// Generic Classes: Generic classes are classes that can work with a variety of data types. They are defined using type parameters, which are placeholders for the actual types that will be used when the class is instantiated.

// Generic class 'User'
class User<T = string> {
  constructor(public value: T) {}

  // Method that takes a messgae of type `T` and displays it along with the `value` property
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User<string>("Elzero");
console.log(userOne.value); // Output:  Elzero
userOne.show("Message"); // Output:  Message - Elzero

// Creating an instance of `User` with a  type parameter that can be a number or a string
let userTwo = new User<number | string>(100);
console.log(userTwo.value); // Output:  100
userTwo.show("Message"); // Output:  Message - 100


// ********************* Generics And Interfaces ***********************

// Interface definitions for Book and Game
interface Book {
  itemType: string;
  title: string;
  isbn: number;
}
interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

// Generic Class `Collection`
class Collection<T> {
  public data: T[] = [];
  // Method to add an item of type `T` to the collection
  add(item: T): void {
    this.data.push(item);
  }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({
  itemType: "Game",
  title: "Uncharted",
  style: "Action",
  price: 150,
});
console.log(itemTwo);

// ****** Type Assertions **************
// Useful when we know more about the type than TypeScript does
let data: any = "1000";

// Type assertion to treat 'data' as a string. Tell TS to treat 'data' as a string to use string methods.
console.log((data as string).repeat(3));  // Output: 100010001000



