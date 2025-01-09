// Practice Challenge-1:

// What are your daily tasks?

// 1) Unlock the module at 8 PM
// 2) Quickly watch the videos and practice
// 3) Take notes while watching the videos
// 4) After completing the module, practice it on your own
// 5) If you don’t understand something (note there’s a condition here), join the support session

// Your task is to use a `for` loop to display the above tasks 5 times as output.

var myDayTask = [
    "1. Unlock videos 8pm",
    "2. Watch these videos",
    "3. Taking Notes",
    "4. Practice the module",
    "5. If confused take help"
];

for (var i = 0; i < myDayTask.length; i++) {
    var myTask = myDayTask[i];
    console.log(myTask);
}

// Practice Challenge-2:

// Repeat the same using a `while` loop.

var i = 0;

while (i < myDayTask.length) {
    var myTask = myDayTask[i];
    console.log(myTask);
    i++;
}

// Practice Challenge-3:

// Do the same task using a reverse `while` loop (decremental).

var i = myDayTask.length - 1;

while (i >= 0) {
    var myTask = myDayTask[i];
    console.log(myTask);
    i--;
}

// Practice Challenge-4:

// Do the same task using a reverse `for` loop (decremental).

for (var i = myDayTask.length - 1; i >= 0; i--) {
    var myTask = myDayTask[i];
    console.log(myTask);
}
