/* Create an array with the names of all the mobile phone models you have used so far. Then show the elements of that array as output one by one with a while loop */


var myPhones = ["Maximus", "Nokia-120", "Nokia-expres ", "Nokia-N70"];

var i = 0;

while( i < myPhones.length){
    var phone = myPhones[i];
    console.log(phone);
    i++;
}