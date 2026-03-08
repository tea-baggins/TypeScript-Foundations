/*******************
 * ARRAY *
 *******************/

// Type annotations with Arrays

// Annotating an array  of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array.
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`); //Output: Fruit: APPLE Fruit: BANANA Fruit: CHERRY
}

// Type annotations with multidimensional arrays
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, 5, "A", "B", "C"]; // Allows to mix strings and numeric values


// ************ Practical Example: Array of Objects ************
// In QA, we often use this to type lists of data (users, products, etc.)
type User = { 
  id: number; 
  name: string; 
};

let users: User[] = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Tester" }
];

console.log(`Total users: ${users.length}`);