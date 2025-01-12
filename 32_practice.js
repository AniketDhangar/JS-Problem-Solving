// Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter
// and will check if each year is a leap year.
//  If a year is a leap year insert that year in a new array,
// return the new array and print the result.


const array = [2023, 2024, 2025, 2028, 2030];
const leap = []
function findLeapYear(array) {
  for (let year = 0; year < array.length; year++) {
    if ((array[year] % 4 === 0 && array[year] % 100 !== 0) ||
      array[year] % 400 === 0) {
       leap.push(array[year])

    }   

  }
  return leapYear;

}
console.log(findLeapYear(array))
