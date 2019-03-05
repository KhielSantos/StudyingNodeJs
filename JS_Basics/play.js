var name = "Khiel";
var age = 38;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (`Meu nome é ${userName}, tenho ${userAge} e meus hobbies são: ${userHasHobby}.`);
}

console.log(summarizeUser(name, age, hasHobbies));