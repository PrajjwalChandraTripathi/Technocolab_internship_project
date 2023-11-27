let raceNumber = Math.floor(Math.random() * 1000);

// Step 2
let registeredEarly = true;

// Step 3
let runnerAge = 18;

// Step 4
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

// Step 5
if (runnerAge > 18 && registeredEarly) {
    console.log(`Runner ${raceNumber}, you will race at 9:30 am.`);
} 
// Step 6
else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Runner ${raceNumber}, you will race at 11:00 am.`);
} 
// Step 7
else if (runnerAge < 18) {
    console.log(`Runner ${raceNumber}, you will race at 12:30 pm.`);
} 
// Step 9
else {
    console.log(`Runner ${raceNumber}, please see the registration desk.`);
}
