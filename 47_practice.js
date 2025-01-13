// Filter out all numbers greater than 10. //means extract them
// Input: [5, 15, 3, 20, 8]
// Output: [5, 3, 8]

// Get only the even numbers from an array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Filter strings with a length greater than 3.
// Input: ["hi", "hello", "cat", "dog"]
// Output: ["hello"]

const demo =[5, 15, 3, 20, 8]
let output1 = demo.filter((x)=>x >10)
console.log(output1)

const demo2  = [1, 2, 3, 4, 5, 6]
let output2 = demo2.filter((x)=>x%2 ==0)
console.log(output2)


const demo3  =["hi", "hello", "cat", "dog"]
let output3 = demo3.filter((x)=>x.length >3)
console.log(output3)