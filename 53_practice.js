// You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

let a =[ 1, 9, 17, 22 ]
let total = 0
  for(let i =0;i<a.length ;i++){
      total += a[i]
  }
  console.log("answer of for loop: ",total)
  
  
  //reduce()
  const ans = a.reduce((acc,curr)=>acc + curr)
  console.log("answer of reduce method:",ans)