/********************************
 * Type annotations with objects *
 ********************************/ 

let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
};

personExOne = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
console.log(personExOne);

// And there is yet another method
let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
console.log(personExTwo);
console.log(personExTwo.name)
console.log(personExTwo.age)


// Method 2: Inline declaration and initialization
let personExThree: {
  readonly id: number; // Bonus: readonly property (cannot be changed after initialization)
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  id: 1,
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};

console.log(personExThree.name);
console.log(personExThree.address.city);
