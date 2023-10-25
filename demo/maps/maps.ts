/* eslint-disable */
import { strict as assert } from "assert";

// A `Map` is a data structure that allows you to store data in a key-value
// pair format. Keys in a map must be unique, and each key can map to only one
// value. You can use any type of value as the key, including objects and
// functions. Maps are useful when you want to quickly access data and you are
// able to maintain the key in memory. In situations where you have to search
// (you don't have a key) for the data you need, a difference data structure
// would be more appropriate.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//unclear if we do it like this 
// const testScores: Map<string, number> = new Map ();

// so let's use type aliases

type Name = string;
type Score = number;

const testScores: Map<Name,Score> = new Map();

testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

assert.equal(testScores.size, 3);

for (const [name, score] of testScores) {
    console.log(`${name}, your score is ${score}.`);
}

testScores.delete("Bob");

for (const [name, score] of testScores) {
    console.log(`${name}, your score is ${score}.`);
}

assert.equal(testScores.size, 2);

assert.equal(testScores.has("Bob"),false);

console.log("Just the keys:");
for (const name of testScores.keys()){
    console.log(name);
}

console.log("Just the values")
for (const value of testScores.values()){
    console.log(value);
}

// to empty out the testScores map, use clear()
testScores.clear();
assert.equal(testScores.size, 0);