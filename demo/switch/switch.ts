/* eslint-disable */
import { strict as assert } from "assert";

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let someNumber = parseInt("10");
const sample = "sample";
const someString = `${sample}`;

switch (someString) {
    case "test":
        // code
        break;
    case "sample":
        // code
        break;
    case "a":
        // code
        break;
    default:
        // some code
}

switch (someNumber) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        //code 
}

switch (someNumber){
    case 1:
    case 2:
    case 3:
        //code
    case 4:
    case 5:
        break;
}