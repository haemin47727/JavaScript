// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let $function = 27;
// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";
// let job1 = "programmer";
// let job2 = "teacher";
// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// let year; undefined
// console.log(typeof null); error as it comes out as object

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
//  console.log(typeof 23);
//  console.log(typeof 'Jonas');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// const cannot be changed/mutated and must be initialized//
// var is old way of defining variables such as let. old way. dont use it
// var job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);
// never declare like this. global

// Math op//

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2**3 means 2 to the power of 3//

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// //Assignment op//
// let x = 10 + 5; // + occurs before = assignment operator //
// x += 10; // x = x + 10 //
// x *= 4; // x = x * 4 = 100//
// x++; // x = x + 1//
// x--;
// x--;
// console.log(x);


// //Comparison operators//

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // assignment operator starts from right to left//
// console.log(x, y);

// const year = 2037;
// const firstName = "Jonas";
// const birthYear = 1991;
// const job = "teacher";
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// //type coercion
// console.log("I'am " + 23 + " years old");

// let n = "1" + 1; //11 plus will convert numb to string when theres a string
// n = n - 1; // 10
// console.log(n);
// let n = "10" - "4" - "3" - 2 + "5" = 15;

// truthy and falsy
// 5 falsy values : 0, "", undefined, null, NaN (not a number type comes up as number tho)
// automatic type coercion
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// if else//
// const age = 18;
// if (age === 18) //strict equal. no type coercion unlike '18' == 18
//   console.log("You just became an adult!");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number!");
// } else {
//   console.log(`${favorite} is not 23 or 7`);
// }

// if (favorite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

//switch//
// const day = "Wednesday";
// switch (day) {
//   case "Monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "Monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "Wednesday" || "Thursday") {
//   console.log("Write code examples");
// } else console.log("not a valid day");

//conditional op//
// const age = 23;
// age >= 18 ? console.log("I like to drink water 😊") :
//   console.log("I like to still drink water");
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);
// console.log(`I like to drink ${drink}`);

