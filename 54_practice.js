const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

// Challenging: Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it. But! Wait !! Wait !!! Do the same task using array.reduce() method.


let total = 0

for(let i =0;i< people.length;i++){
   total += people[i].age
}
    console.log(total)


//with reduce and map
const age = people.map((x)=>x.age)
const ans = age.reduce((acc,curr)=>acc +curr )
    console.log(ans)
