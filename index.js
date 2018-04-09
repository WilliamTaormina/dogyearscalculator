// START HERE: below, input your current age in human years, and your full-name. (Make sure your name is surrounded by quotations...)

let myAge = 33;
let myName = "William Cosmo Taormina";

// Dog Year Calculator Variables
// puppyYearsCount = the first portion of a dogs life...
// puppyYearsMultiplier = In the first two years of a dogs life, they grow and age much quicker...

let puppyYearsCount = 2;
let puppyYearsMultiplier = 10.5;
let puppyYearsTotal = puppyYearsCount + puppyYearsMultiplier;

// adjusting the human myAge variable to remove the remove the first 2 'high-growth' puppy years
let laterYears = myAge - puppyYearsCount;
let laterYearsMultiplier = 4;
let laterYearsTotal = laterYears * laterYearsMultiplier;

// Calculating your total age in dog years!

let myAgeInDogYears = puppyYearsTotal + laterYearsTotal;

console.log(
  `Hello ${myName}. You are ${myAgeInDogYears} years old in dog years!`
);
