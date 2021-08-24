//Array.prototype.forEach
//if we want iterate through an object

let numbers = [1,2,3];
let counter = 0;

while(counter <= numbers.length) {
  console.log(numbers[counter]);
  counter += 1
}

// [1,2,3].forEach(number => {
//   console.log(number);
// })


// number => {
//   console.log(numbers)
// }

//the code within the callback is executed for each iteration
//the callback executes console.log(number)
//the result is that the program displays the elements in the array
//How does the callback know what number is? For each iteration, forEach sends the value of the current element to the callback in the form of an argument. 
//In this callback, the parameter is number; it represents the value of the current element in the array.

// [1, 2, 3].forEach((number, idx) => {
//   //second argument is an index
//   console.log(`${idx}: ${number}`);
// });
//logs
//1
//2
//3

'abcd'.split('').forEach(char => {
  console.log(char);
});
//logs
//a
//b
//c
//d


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
}

let produceValues = Object.values(produce);

console.log(produceValues);

produceValues.forEach(value => {
  console.log(value);
});


let produceKeys = Object.keys(produce);
produceKeys.forEach(key => {
  console.log(key);
})


let produceKeysValues = Object.entries(produce);

produceKeysValues.forEach(keyValue => {
  let [key, value] = keyValue; //array destructuring assignment, we can assign elements of the array to multiple variables by wrapping the variable names in brackets
  console.log(`${key} is a ${value}`)
})

let numbers = [1, 2, 3]; //this is an array of numbers
let oddNumbers = []; //this is an empty array of oddNumbers

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}

oddNumbers; // => [1, 3]

let oddNumbers = [1,2,3].filter(num=> {
  return num % 2 === 1;
});

[1,2,3].filter(num => {
  num + 1;
});

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
}

let produceKeysValues = Object.entries(produce);
let onlyVegetablesArr = produceKeysValues.filter(keyValue => {
  let [key, value] = keyValue;
  return value == 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [key, value] = keyValue;
  onlyVegetables[key] = value;
})


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}