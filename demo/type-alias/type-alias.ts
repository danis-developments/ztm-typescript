/* eslint-disable */
import { strict as assert } from "assert";

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

// I create a new name for string type. Typescript views this as a string. It just allows me to give a new name to the type
type PersonName = string;

const myName: PersonName = "Dani";
const alsoMyName: string = "Dani";

// bad
function print(thing: string) {
    console.log(`Name is ${thing}`);
}

// good
function printName(name: PersonName) {
    console.log(`Name is ${name}`);
}

print("a house");
printName(myName);
