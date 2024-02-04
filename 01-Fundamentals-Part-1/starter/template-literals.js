const firstName = "Jonas";
const job = "teacher";
const birthEar = 1991;
const year = 2023;

const jonas =
  "I'm " + firstName + ", a " + (year - birthEar) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthEar} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
