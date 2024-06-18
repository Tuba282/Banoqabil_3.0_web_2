/*
1. Write a program to take “city” name as input from user. If user enters “Karachi”,
welcome the user like this: “Welcome to city of lights”
*/

let city = prompt("Name the city of lights");
if (city == "karachi") {
  alert("Welcome to city of lights");
}

/*
2. Write a program to take “gender” as input from user. If the user is male, give the
message: Good Morning Sir. If the user is female, give the message: Good Morning
Ma’am.
*/

let gender = prompt("Enter Your gender");
if (gender === "Male") {
  alert("Good Morning Sir");
}
if (gender === "Female") {
  alert("Good Morning Ma'am");
}

/*
3. Write a program to take input remaining fuel in car (in litres) from user. If the current
fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
*/

let fuel = parseFloat(prompt("Enter your fuel in liters."));

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

/*

4. Run this script, & check whether alert message would be displayed or not. Record the
output.
*/

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

/*
5. Guess game:  
Store a secret number (ranging from 1 to 10) in a variable.  
Prompt user to guess the secret number.  
a. If user guesses the same number, show “Bingo! Correct answer”.  
b. If the guessed number +1 is the secret number, show “Close enough to the 
correct answer”. 

*/

let gs_randon_num = Math.floor(Math.random() * 11);

let gs_guess_num = parseInt(prompt("Guess the number between 1 to 10"));
if (gs_guess_num === gs_randon_num) {
  alert("Bingo! Correct answer");
} else if (
  gs_guess_num === gs_randon_num++ ||
  gs_guess_num === gs_randon_num--
) {
  alert("Close enough to the correct answer");
} else {
  alert("Better Luck Next Time.");
}

/*
6. Write a program to check whether the given number is divisible by 3. Show the 
message to the user if the number is divisible by 3.

*/

let num = parseInt(
  prompt("Enter a number to see your given number divisible by 3 or not. ")
);
if (num % 3 === 0) {
  alert("The given number is divisible by 3");
} else {
  alert("The given number is not divisible by 3");
}

// 7. Write a program that checks whether the given number is an even number or an odd

let num1 = parseInt(
  prompt("Enter a number to see your given number is even or not. ")
);
if (num1 % 2 === 0) {
  alert("This is even number");
} else {
  alert("This is not even number");
}

/*
8. Write a program that takes temperature as input and shows a message based on 
following criteria  
a. T > 40 then “It is too hot outside.”  
b. T > 30 then “The Weather today is Normal.”  
c. T > 20 then “Today’s Weather is cool.”  
d. T > 10 then “OMG! Today’s weather is so Cool.” 
*/
let temp = parseInt(prompt("Enter Current Temperature."));

if (temp > 40) {
  alert("“It is too hot outside.”");
} else if (temp > 30) {
  alert("“The Weather today is Normal.”");
} else if (temp > 20) {
  alert("“Today’s Weather is cool.”");
} else if (temp > 10) {
  alert("“OMG! Today’s weather is so Cool.”");
}

let num_1 = parseInt(prompt("Enter First Number."));
let num_2 = parseInt(prompt("Enter Second Number."));

if (typeof num_1 === "number" && typeof num_2 === "number") {
  alert(`
     Addition : ${num_1 + num_2}
     Subtraction : ${num_1 - num_2}
     Multiplication : ${num_1 * num_2}
     Division : ${num_1 / num_2}
     Modulus : ${num_1 % num_2}`);
} else {
  alert("Please enter number only");
}
