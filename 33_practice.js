// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

let  array =[5, 7, 8, 10, 45, 30]
function findOddSum(array){
    let sum =0 ;
    for(let i =0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            sum = sum +array[i]
        }
                          

    }
      console.log(sum)
}
findOddSum(array)