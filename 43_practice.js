/* Who is the tallest?
Tom and his friends are participating in the "Who is the tallest?" competition.
 As per the name, the person with the highest height will be the winner. 
 Can you find who is the tallest among Tom and all of his friends?

**Input: The input line can have multiple integer numbers,
 xi (The height of ith friend in cm).**

**Output: Print the height of the tallest friend (cm).**

1. Sample Input-1: 157 134 188
- Sample Output-1: 188
2. Sample Input-2: 167 100 120 165 137 190
- Sample Output-2: 190 */

function competition(a, b, c, d) {
  if (a > b && a > c && a > d) console.log("a is tallest");
  else if (a < b && b > c && b > d) console.log("b is tallest");
  else if (a < c && b < c && c > d) console.log("c is tallest");
  else console.log("d is tallest");
}
competition(10,24,26,23);
