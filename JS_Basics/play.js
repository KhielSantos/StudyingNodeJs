const name = "Maria";
let age = 14;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (`Meu nome é ${userName}, tenho ${userAge} e meus hobbies são: ${userHasHobby}.`);
}

const add = (a, b) => a + b;

console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobbies));