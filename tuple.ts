/*********************
 * TUPLE *
 ********************/

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array.

// Define a tuple type
let article: [number, string, boolean] = [11, "Title One", true];

// Assign a new tuple value to the `article` variable
article = [12, "Title Two", false];   // Output: [ 12, 'Title Two', false ]


//Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);           // Output: 12
console.log(title);        // Output: Title Two
console.log(published);    // Output: false



// ************ Pro Tip: Readonly Tuples ************
// By default, you can still use .push() on tuples, which can break the fixed length.
// To prevent this, use the 'readonly' keyword.

const readOnlyTuple: readonly [number, string] = [1, "Admin"];
// readOnlyTuple.push(100); // Error: Property 'push' does not exist on type 'readonly [number, string]'