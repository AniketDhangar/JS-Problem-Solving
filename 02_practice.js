// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Input: The first line of the input is the marks of the five subjects mentioned above, respectively. Output: Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input: 75.25, 65, 80, 35.45, 99.50 Output: 71.04



var mathematicsResult = 75.25;
var biologyResult = 65;
var chemistryResult = 80;
var physicsResult = 35.45;
var banglaResult = 99.50;

var totalMarks = mathematicsResult + biologyResult + chemistryResult + physicsResult + banglaResult;


var averageMarks = totalMarks / 5 ;
var averageMarksIn2Deci = averageMarks.toFixed(2);
console.log(parseFloat(averageMarksIn2Deci));
