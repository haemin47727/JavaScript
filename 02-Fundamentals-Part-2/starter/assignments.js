"use strict";

// function describeCountry(country, population, capitalCity) {
//   const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return describe;
// }

// const korea = describeCountry("Korea", 55, "Seoul");
// (korea);
// const finland = describeCountry("Finland", 6, "Helsinki");
// (finland);
// const london = describeCountry("England", 57, "London");
// (london);

// function percentageOfWorld1(population) {
//   return population / 7900 * 100;
// }

// const average1 = percentageOfWorld1(55);
// (average1);
// const average2 = percentageOfWorld1(6);
// (average2);
// const average3 = percentageOfWorld1(57);
// (average3);

// const percentageOfWorld2 = function (population) {
//   return population / 7900 * 100;
// }
// const percentageOfWorld3 = population => population / 7900 * 100;

// const describePopulation = (country, population) => {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage} of the world`;
//   (description);
// }
// describePopulation("Korea", 50);

// const populations = [50, 5, 15, 100];
// if (populations.length === 4) {
//   console.log("The array has 4 elements");
// }
// const percentageOfWorld1 = population => population / 7900 * 100;
// const percentage = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];
// console.log(percentage);

// const neighbors = ["China", "Japan"];
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central european country :D");
// }
// neighbors[neighbors.indexOf("China")] = "Singapore";
// console.log(neighbors);
// const myCountry = {
//   country: "Korea",
//   capital: "Seoul",
//   language: "Korean",
//   population: 50,
//   neighbors: ["China", "Japan"],
//   describe: function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`);
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//     return this.isIsland;
//   }
// };
// // console.log(myCountry);
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry.population -= 2;
// console.log(myCountry.population);

//Iteration: The for Loop//
// for (let voter = 1; voter <= 10; voter++) {
//   console.log(`voter number ${voter} is currently voting.`);
// }

//Looping Arrays, Breaking and Continuing//
// const populations = [50, 5, 15, 100];
// function percentageOfWorld1(population) {
//   return population / 7900 * 100;
// }

// const percentage2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentage2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentage2);