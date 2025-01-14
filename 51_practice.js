// Write an arrow function where it will do the following:

// It will take two array inputs
// Combine the two arrays and assign them in a new array
// Find the maximum number from the new array and return the result

let a = [1,2,3,4]
let b = [3,6,5,4]

let combine =((arr1,arr2)=>Math.max(...[...arr1,...arr2]))

console.log(combine(a,b))