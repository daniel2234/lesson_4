// let numbers = [1, 2, 3, 4];
// numbers[0] += 1;
// numbers[1] += 1;
// numbers[2] += 1;
// numbers[3] += 1;
// numbers;               // => [ 2, 3, 4, 5 ]


let numbers = [1, 2, 3, 4]; // => 4
let idx = 0;

//      0   <    4
while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log(numbers); // => [2, 3, 4, 5]