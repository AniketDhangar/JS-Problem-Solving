// Multiply every number in an array by 2.
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

// Convert an array of strings to uppercase.
// Input: ["apple", "banana", "cherry"]
// Output: ["APPLE", "BANANA", "CHERRY"]

// Extract the first letter of each string in an array.
// Input: ["hello", "world", "javascript"]
// Output: ["h", "w", "j"]

const arr =[1, 2, 3, 4]
let output1 = arr.map((x)=>x +1 )
console.log(output1)

const fruits= ["apple", "banana", "cherry"]
let output2 = fruits.map((x)=>x.toUpperCase())
console.log(output2)

const demo= ["hello", "world", "javascript"]
let output3 = demo.map((x)=> x.charAt(0))
console.log(output3)


