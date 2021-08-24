// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let counter = 0;

// while (counter < alphabet.length) {
//   console.log(alphabet[counter]);
//   counter += 1;
// }

// let colors = ['green', 'blue', 'purple', 'orange'];

// for (let counter = 0; counter < colors.length; counter += 1) {
//   console.log(`I'm the color ${colors[counter]}!`);
// }


// let mixed = ['hello' , 10, undefined];

// for (let counter = 0; counter < mixed.length; counter += 1) {
//   console.log(typeof mixed[counter]);
// }


// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let pets = Object.keys(numberOfPets);  // ['dogs', 'cats', 'fish']
// let counter = 0;

// while (counter < pets.length)  {
//   let currentPet = pets[counter];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }


// let number;

// do {
//   number = Math.floor(Math.random() * 10);
//   console.log(number); //> 7, 3, 5x
// } while (number !== 5)


let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 1) {
    let square = numbers[index] * numbers[index];
    console.log(square);
  }
}