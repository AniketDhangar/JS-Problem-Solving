// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is 80 or above A grade 60 or above B grade 50 or above C grade 40 or above D grade 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.



var myResult = 85;
var tomsResult = 66;
var janesResult = 95;
var petersResult = 56;
var johnsResult = 40;


/* ---------------------------------------------------------------------------
         Program for finding my and my friends’ grades using if-else.
-------------------------------------------------------------------------- */


/* -----------------------------
          For my result
--------------------------------- */

if( myResult <= 39){
    console.log("Sorry !! Shourav😞😥 you failed in the exam. You got " + myResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= myResult && myResult < 50 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= myResult && myResult < 60 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= myResult && myResult < 80 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations Shourav, It's Awesome🥳💖💕 !!  you are the Best. You got " + myResult + " out of 100. So your Grad is 'A' ") ;
}
