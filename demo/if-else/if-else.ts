/* eslint-disable */
import { strict as assert } from "assert";

// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const answer = 2 + 2;
assert.equal(answer,4);

if (answer > 4) {
    console.log(">4");
} 

if (answer === 4) {
    console.log("4");
}
else {
    console.log("!4");
}

if (answer < 4) {
    console.log("<4");
} else if (answer > 4) {
    console.log("<4");
} else {
    console.log("4");
}

const age = 6;
const likesHavingFun = true;

if (age <= 12  && likesHavingFun){
  console.log("try going to the park.");
} else if (likesHavingFun){
    // still have fun
} else {
    // be  bored
}