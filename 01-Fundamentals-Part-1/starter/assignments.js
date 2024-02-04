//VALUE AND VARIABLES

// let countryName = "Lithuania";
const countryName = "Lithuania";
// let continentName = "Europe";
const continentName = "Europe";
let population = 2.801;

console.log(countryName, continentName, population);
console.log(countryName);
console.log(continentName);
console.log(population);
console.log(`${countryName}, ${continentName}, ${population}`);

// DATA TYPES
// let isIsland = false;
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof countryName);
console.log(typeof language);

// LET, CONST, VAR
language = "Lithuanian";

// language = "English";
console.log(language);

// BASIC OPERATORS
// If your country split in half, and each half would contain half the population, then how many people would live in each half?
let populationHalf = population / 2;
console.log(populationHalf);

// Increase the population of your country by 1 and log the result to the console.
populationHalf++;
console.log(populationHalf);

// Finland has a population of 6 million. Does your country have more people than Finland?
// const finlandPopulation = 6;
console.log(population > 6);

// The average population of a country is 33 million people. Does you country have less people than the average country?
// const averagePopulation = 33;
console.log(population < 33);

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let description =
  countryName +
  " is in " +
  continentName +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// STRINGS AND TEMPLATE LITERALS
// Recreate the description variable from the last assignment, this time using the template literal syntax.

description = `${countryName} is in ${continentName} and its ${population} million people speak ${language}`;
console.log(description);
