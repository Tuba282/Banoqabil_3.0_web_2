// Just print Hello World in alert

// alert("Hello World");

//Type of Variable
let girl = "hira";
girl = "habib";
//let when you want to declare a variable that can change its value. It has block-level scope, which means it’s limited to the block (like a function, if statement, or loop) where it’s defined.

var boy = "ali";
var boy = "ali";
boy = "haseeb";
// var: It has function scope, which means it’s accessible outside the block where it’s declared.


/*
Yes, the var keyword in JavaScript creates "" function-scoped "" variables, which means they are accessible throughout the entire function where they are defined. However, if you declare a variable with var outside any function (at the top level), it effectively becomes global and can be accessed from anywhere in your JavaScript program.

*/



const cnic = 2541;
// const cnic = 2541;//Error
// cnic = 5842;//block-scoped variable
// const for declaring constants. Once you assign a value to a const, you can’t change it. It’s also block-scoped like let.



// Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
console.log(`\nData Types \n\n`);
let value_1 = "Ali";
console.log(`value_1 = "Ali" and type of "${value_1}" is ${typeof value_1}`); //type string

let value_2 = 45;
console.log(`value_2 = 45 and type of "${value_2}" is  ${typeof value_2}`); //type number

let value_3 = true;
console.log(`value_3 = true and type of "${value_3}" is  ${typeof value_3}`); //type boolean

let value_4 = null;
console.log(`value_4 = null and type of "${value_4}" is  ${typeof value_4}`); //iski type object kiun arahi hain

let value_5 = undefined;
console.log(
  `value_5 = undefined and type of "${value_5}" is  ${typeof value_5}`
); //type undefined

let value_6 = Symbol();
value_6 = Symbol("23"); //Symbol k () me kuch bhi type uski symbol hi aye gi
console.log(`value_6 = Symbol("@") and type of this is  ${typeof value_6}`);

// Math Expressions + Operators
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus
// ** Exponentiation
// ++ Increment
// -- Decrement
console.log(`\n Math Expressions + Operators \n\n`);

let x, y;
x = 5;
y = 3;
console.log(`here x = ${x} and y = ${y}`);
console.log(`Add: ${x + y}`);
console.log(`Sub: ${x - y}`);
console.log(`Mul: ${x * y}`);
console.log(`Div: ${Math.floor(x / y)}`);
console.log(`Mod: ${x % y}`);
console.log(`Pow (Exp): ${y ** 2}`);
console.log(`\nNow its time for Increament(++) and Decreament(--) `);
console.log(
  `i++(post increament) ++i(pre increament)\n same goes with decreamnet\n i--(post decreament) --i(pre decreament)`
);
console.log(`here x = 5 and x++ will be: ${x++}`); //post increament
console.log(`here y = 3 and ++y will b: ${++y}`); //pre  decreament

// Conditions
let name = "Sana";
let age = 25;

// Single Condition
if (age > 20) {
  console.log("Age is greater than 20");
}
// Multiple Conditions
if (name == "sana") {
  console.log("Welcome sana");
} else {
  console.log("Not sana");
}
// Nested Conditions
if (typeof name == "number") {
  console.log("name is number");
} else if (typeof name == "string") {
  console.log("name is string");
} else {
  console.log("Not string or number");
}

// Function (Regular)
function map(city, country) {
  return `${city} is capital of ${country} .`;
}
console.log(map("Islamabad", "Pakistan"));
console.log(map("Tokyo", "Japan"));

// Arrow Function
let map2 = (city, country) => `${city} is capital of ${country} .`;
console.log(map2("Islamabad", "Pakistan"));
console.log(map2("Tokyo", "Japan"));

// Arrays
let arr = ["sana", "ali", "khan"];
console.log(`Orignal array ` + arr);
arr.push("rabia");
console.log(`using push method =>  ` + arr);
arr.pop();
console.log(`using pop method =>  ` + arr);
arr.shift();
console.log(`using shift method =>  ` + arr);
arr.unshift("ayesha");
console.log(`using unshift method =>  ` + arr);
arr.splice(1, 0, "ikram", `tuba`, `bushra`);
console.log(
  `using splice to add or remove from anywhere in the array =>  ` + arr
);

console.log(`using slice to sort the array =>  ` + arr.slice().sort());
console.log(
  `using slice to reverce the array =>  ` + arr.slice().sort().reverse()
);

// Object

let my_pet = {
  name: "mano",
  age: 6,
  color: "black",
};
console.log(my_pet); //access the object
console.log(my_pet.name); //access the property of object

// Nested Object

let my_pet2 = {
  name: "tommy",
  age: 9,
  color: "brown",
  tommy: {
    nature: "kind",
    isBark: () => true,
  },
};

console.log(my_pet2); //we use .(dot) to access the object property
console.log(my_pet2.tommy.isBark()); //true
console.log(my_pet2.tommy.nature); //kind

// Loops

// For Loop
console.log(`Using For Loop`);
/**
  *  for(initialization; condition; iteration(inc/dec))
  * {
    body of loop
    }

 */
for (let i = 0; i < 5; i++) {
  console.log("Today is Friday!"); //it will print 4 times
}

// While Loop
/**
 * let/var/const = initialization
 * while(condition)
  * {
    body of loop
     iteration(inc/dec)
    }

 */

console.log(`Using While Loop`);
let i = 0;
while (i < 5) {
  console.log("Today is Friday!");
  i++;
}

// Do While Loop
/*
let/var/const = initialization

do{
  body of loop
  
  iteration(inc/dec)
  }
   while(condition)

*/
console.log(`Using Do While Loop`);
let j = 0;
do {
  console.log("Today is Friday!");
  j++;
} while (j < 5);
