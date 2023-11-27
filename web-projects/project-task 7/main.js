// Step 1: Set your age in human years
let myAge = 25; // Change this to your age
// Comment: This variable stores the age in human years.

// Step 2: Set the first two years in dog years
let earlyYears = 2; // Change this if needed
earlyYears *= 10.5; // Comment: Multiply the first two years by 10.5 to get dog years.

// Step 3: Calculate the later years in dog years
let laterYears = myAge - 2; // Comment: Subtracting the first two years from the total age.
laterYears *= 4; // Comment: Multiply the remaining years by 4 to get dog years.

// Step 4: Add the dog years together
let myAgeInDogYears = earlyYears + laterYears; // Comment: Total dog years.

// Step 5: Convert your name to lowercase
let myName = 'John'; // Change this to your name
myName = myName.toLowerCase(); // Comment: Convert the name to lowercase.

// Step 6: Display the result
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Comment: Displaying the result using string interpolation.
