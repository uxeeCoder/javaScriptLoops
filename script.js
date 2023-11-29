"use strict";

// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i * 3);
// }

// create a loop to iterate through the array and log each element to the console.

const Fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
for (let i = 0; i < Fruits.length; i++) {
  // console the elements of the array
  console.log(Fruits[i]);
  // console the value of the element in the array
  console.log("The current value of fruit is:", i);
  if (i < Fruits.length - 1) {
    // console the next element in the array
    console.log("The next fruit is:", Fruits[i + 1]);
  }
}

// Part 3 running the loop until a condition is met

// USECASE:A scenario where we want to keep prompting for user input until a valid input is provided.
// Here, the number of iterations is unknown depending on user's input.
// In this case while loop is more suitable as it allows the loop to continue executing until required
// condition is met.
// On the other hand The for loop is better suited for situations where the number of iterations is known
// beforehand.

let userreply;

while (userreply !== "35") {
  userreply = prompt("What is my age?");
}

// Create a nested loop that iterates through the Num array and logs the output of each inner array.

const Num = [
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 110, 120],
  [130, 140, 150, 160],
];

for (let i = 0; i < Num.length; i++) {
  // log the output of the outer array
  console.log(Num[i]);

  for (let j = 0; j < Num[i].length; j++) {
    // log the output of the inner array
    console.log(Num[i][j]);
  }
}
