/**********************
 * Interface
 ************************/

// Interface
// Interface Method And parameters
// ReOpen The Interface And Use Cases
// Built-In interface
// HTMLImageElement
// Interface VS. Type Aliases

// 1. Shape Definition: Interfaces specify object structure, including property names, types, and optional/required status.
// 2. Contract: Objects or classes adhering to an interface must implement its defined structure and methods.
// 3. Type Checking: TypeScript checks if objects meet the interface's requirements, catching type errors early.
// 4. Code Clarity: Interfaces document expected object properties and enhance code readability. aiding object usage understanding.

interface PersonEx1 {
  name: string;
  age: number;
}

const John: PersonEx1 = {
  name: "John",
  age: 30,
};

// ***************  Interface Method And parameters ***************

// Define an interface "Person" with a method "greet"
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Sarah.greet("Hello, Typescript!"); //Output: Sarah says: Hello, Typescript!

// *************** ReOpen The Interface And Use Cases ***************

// Homepage Interface Declaration
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Article Page Interface Reopening
interface Settings {
  sidebar: boolean;
}

// Contact Page Interface Reopening
interface Settings {
  external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Setting interface
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

// **************** ReOpen The Interface And Use Cases *****************
// Modular development
// Progressive enhancement
// Clear separation of concerns

// **************** Built-In interface ****************

// This example is for educational purpose, but it is not going to work.
const imageElement: HTMLImageElement = document.createElement("img");
imageElement.src = "image.jpg";
imageElement.alt = "My Image";

if (imageElement.complete) {
  console.log(
    `Image dimensions: ${imageElement.naturalWidth}X${imageElement.naturalHeight}`,
  );
} else {
  imageElement.addEventListener("load", () => {
    console.log(
      `Image dimensions: ${imageElement.naturalWidth}X${imageElement.naturalHeight}`,
    );
  });
}

// Properties:
// alt: A string representing the alternate text for an image.
// height: The height of the image in pixels.
// src: The source URL of the image.
// width: The width of the image in pixels.

// Methods:
// complete: A boolean value indicating whether the image has finished loading.
// decode(): Promise<void> A method that returns a promise and resolves once the image is decoded.
// naturalHeight: The intrinsic height of the image in pixels.
// naturalWidth: The intrinsic width of the image in pixels.

// ************* Interface VS. Type Aliases ********

// Declaration syntax:

// Interface
interface PersonExInterface {
  name: string;
  age: number;
}

// Type
type PersonExType = {
  name: string;
  age: number;
};

// Interface
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}

// Type
type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};

// Compatibility
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar1: Car = {
  brand: "Toyota",
  model: "Camry",
};


// **************** Built-In interface: DOM Elements ****************
// Important for UI Automation (QA)
// Note: Requires DOM library (Browser environment)

// const imageElement = document.createElement("img") as HTMLImageElement;

// ************* Interface VS. Type Aliases ********
// 1. Extension: Interfaces use 'extends', Types use '&' (Intersection)
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

// 2. Merging: Interfaces can be re-opened, Types cannot.
interface Car { brand: string; }
interface Car { model: string; } // Works!

type Bike = { brand: string; };
// type Bike = { model: string; }; // Error: Duplicate identifier 'Bike'

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};