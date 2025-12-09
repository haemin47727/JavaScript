"use strict";

function describeCountry(country, population, capitalCity) {
  const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return describe;
}

const korea = describeCountry("Korea", 55, "Seoul");
console.log(korea);
const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const london = describeCountry("England", 57, "London");
console.log(london);