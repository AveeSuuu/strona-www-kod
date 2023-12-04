//deklaracja zmiennych 
let number = 5;
var text = "hi";
const PI = 3.14;

//Output w terminalu
console.log("Hello world!");

//pętle for i while

for (let i = 0; i < 5; ++i) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  ++i;
}

//instrukcje warunkowe

if (5 < 3) {
  console.log("5 is less than 3 😮");
} else if (5 == 3) {
  console.log("5 is equal 3 🤯")
} else {
  console.log("5 isn't less than 3 😎");
}

//funkcje

function sum(num1, num2) {
  return num1 + num2;
}

console.log("2 + 2 = " + sum(2, 2));

function isEven(num) {
  return Boolean(num % 2); //castowanie typu
}

let num = 5;

if (isEven(num)) {
  console.log(num + " is even");
} else {
  console.log(num + "isn't even");
}
