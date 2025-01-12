// Can you find out who will get the delicious cake?
// (Part II)
// This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

// Input: The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got)

// Output: Print the name of the topper.
// Sample Input-1: 84 99 77
// Sample Output-1: Dea
// Sample Input-2: 69 97 99
// Sample Output-2: Chinku


// x (The marks Jim has got),
// y (The marks Dela has got) 
// z (The marks Chinku has got)

function exam(x,y,z){
    if(x > y && x > z) console.log("jim is topper")
    else   if(x < y && y > z) console.log("dela is topper")
    else    console.log("chinku is topper")
}
exam(100,200,25)