// Write a function that takes the hour as an input parameter. 
// And it will convert those hours to minutes and return minutes. */


function hoursToMinutes(hours){

    const minutes = hours * 60;
    return minutes;
};


const hoursHaveToConvert = 24;
const convertingMinutes = hoursToMinutes(hoursHaveToConvert);

console.log(hoursHaveToConvert,"hours equals to",convertingMinutes,"minutes.");