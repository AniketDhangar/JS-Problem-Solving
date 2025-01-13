// Find the sum of all numbers in an array.
// Input: [1, 2, 3, 4]
// Output: 10

// Concatenate all strings in an array.
// Input: ["Hello", " ", "World", "!"]
// Output: "Hello World!"

// Find the maximum value in an array.
// Input: [3, 5, 1, 10, 6]
// Output: 10


const demo1 = [1,2,3,4]
let output1 = demo1.reduce((acc,curr)=>acc =acc+curr)
console.log(output1)

const demo2 = ["Hello", " ", "World", "!"]
let output2 = demo2.reduce((acc,curr)=>acc =acc+curr)
console.log(output2)

const input = [3, 5, 1, 10, 6];
const maxValue = input.reduce((max, current) => (current > max ? current : max), input[0]);
console.log(maxValue);
