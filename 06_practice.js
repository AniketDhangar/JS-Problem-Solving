// write a code where there is a variable called signal. Its value can be "green", "yellow", or "red". Based on the value of signal:

// If it is "green", the output should indicate that it is safe to cross the road.
// If it is "yellow", the output should suggest stopping and waiting.
// If it is "red", the output should warn about danger and not crossing the road.


var signal = "red";



if(signal == "red" ){
    console.log("Danger!💀 Danger!💀 Please stop🛑🛑. It's not the time for crossing the road.");
}

else if(signal == "yellow"){
    console.log("Please stop🤚🤚. Wait for green.");
}

else if(signal == "green"){
    console.log("Go ahead. It's green it's safe for crossing the road.");
}