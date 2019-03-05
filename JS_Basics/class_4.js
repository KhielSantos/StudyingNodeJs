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

const copiedArray = [hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4));

const printName = ({ name }) => {
  console.log(name);
}

printName(person);