// Practice Problem 47 ( map(), filter(), find() )
// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.

// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.

let odd =  [ 1, 3, 5, 7, 9 ]
let even = odd.map((x)=>x+1)
console.log(even)

let array = [33, 50, 79, 78, 90, 101, 30 ]
let myarray = array.filter((x)=>x%10==0)
console.log(myarray)