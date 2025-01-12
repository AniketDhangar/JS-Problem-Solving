// "Someone will tell you how many marks they scored out of 100.
//  You can use a function to tell whether they will get an A+ or another grade

function grading(marks){
    if(marks > 95) console.log("grade A+")
else if(marks > 85) console.log("grade A")
else if(marks > 75) console.log("grade b+")
else if(marks > 65) console.log("grade b")
else if(marks > 55) console.log("grade c+")
else if(marks > 45) console.log("grade c")
else                console.log("you are fail")

}

grading(1)