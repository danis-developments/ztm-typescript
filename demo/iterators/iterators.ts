/* eslint-disable */

// Iterators offer a way to traverse the elements of a collection one by one.
// The purpose of iterators is to provide a standard way for accessing and
// iterating over collections, such as arrays or maps, in a language-agnostic
// way. Using iterators, you can iterate over collections in a loop without
// having to worry about the underlying implementation of the collection.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html


const abc = ["a","b","c"];

//c-style loop
for (let i= 0; i <abc.length; i++) {
    console.log(abc[i]);
}

// using iterator

for (const letter of abc) {
    console.log(letter);
}

const nums = {
    one: 1,
    two: 2,
    three: 3,
    // b: "b", //if we define a string property here, typescript will know that this string type exsists and won't allow us to multiply the letter by 2
};

let property: keyof typeof nums;

for (property in nums){
    console.log(nums[property] * 2);
}

nums["letter"] = "a";

// because nums["letter"] is introduced at runtime, typescript doesn't know that it shouldn't multiply it by 2, so you get NaN in the interface as opposed to a TypeScript compile error
for (property in nums){
    console.log(nums[property] * 2) ;
}
