const name = "Maria";
let age = 14;
const hasHobbies = true;

age = 30;

const summarizeUser = function(userName, userAge, userHasHobby) {
  return (`Meu nome é ${userName}, tenho ${userAge} e meus hobbies são: ${userHasHobby}.`);
}

console.log(summarizeUser(name, age, hasHobbies));