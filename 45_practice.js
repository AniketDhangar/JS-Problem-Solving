
// ## Practice Problem 45

// **Write an arrow function where it will do the following:**

// 1. It will take an array where the array elements will be the
// name of your friends

// 2. Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.


let names = ['ghule','neha', 'dhanya','gopal', 'some']

const friends = names => {
    let evenName =[]    
 for(let i = 0;i< names.length; i++){
if(names[i].length%2==0){
   evenName.push(names[i]) 
}     
}    
   console.log(evenName) 
}
friends(names)


