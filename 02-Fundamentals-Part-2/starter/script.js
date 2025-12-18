"use strict";


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive :D");

//function//
// function logger() {
//   console.log("My name is Julia.");
// }
// logger(); //calling or running function

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// //function declaration//
// const age1 = calcAge1(1991);
// console.log(age1);

//function expression//
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//arrow function//
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, "Jonas"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }
// }
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//arrays//
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1994, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[friends.length - 1]);
// const newLength = friends.push("Jay"); //add to end//
// console.log(`pushed ${newLength}`);
// console.log(friends);
// friends.unshift("John");
// console.log(friends);

// friends.pop(); // remove last element
// const popped = friends.pop();
// console.log(`popped ${popped}`);
// console.log(friends);
// friends.shift(); // remove first
// console.log(friends);
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));

//object//
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else console.log("wrong request");
jonas.location = "Portugal";
jonas["twitter"] = "@jonaschedtmann";
console.log(jonas);
console.log(`
  ${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.
  `);