const person = {
  name: 'Khiel',
  age: 29, 
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies);
console.log(hobbies.map(hobby => `Hobby: ${hobby}`));

hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);