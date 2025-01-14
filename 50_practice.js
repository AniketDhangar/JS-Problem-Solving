// Write an arrow function where it will do the following:

// Square each array element
// Calculate the sum of the squared elements
// Return the average of the sum of the squared elements

let a = [1,2,3,4]

let sq = a.map((x)=>x*x)
console.log(sq)

let sum =sq.reduce((acc,curr)=>acc+curr)
console.log(sum)

let avg = sum / a.length
console.log(avg)