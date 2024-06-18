alert("Welcome to Our Website");

let password = prompt("Enter password. hint(7878)");
let message = "Error! Please Enter a valid password";
if (password == "7878") {
  message = "Correct! Entered password is matched \ncongratulations.";
  alert(message);
} else {
  alert(message);
}

alert("Hey Brother How are you ?"); //Hint use Line Break
alert("If Fine then press OK Button below");
alert("It's good to hear that you are fine.");

let username;
let myName = "Tuba Jan";

let message1 = "Hello World";
alert(message1);

let students_bio = {
  name: "Ali",
  age: 25,
};
alert(students_bio);
console.log(students_bio);

let email = "@gmail.com";
alert(myName + email);

let show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(show);

let age = 19;
alert(age);

let keep_track = 14;
alert(`You have visited this site ${keep_track} times`);

birthyear +show in broswer

let birthYear = 2005;
alert(birthYear);

let Visitors_name = "Ali";
let Product_title = "Shampoo";
let Quantity = 4;
alert(
  `${Visitors_name} ordered ${Quantity} ${Product_title} Bottles from Ahmed's Store`
);

// visitir information in one staement

let Total = 700;
let customer_name = "Ahmed";
let no_of_items = 8;

let Slip = `${customer_name} buy ${no_of_items} items from our Store and his total bill is Rs-${Total}`;

//  5 legal & 5 illegal variable names

let legal;
let Le_gal1;
let _123Legal;
let Legal_12;
let le234gal;

/*
let 2Illegal
let ill egal
let ( ill [] egal)
let -Illegal
let Il#legal@
*/

// add two numbers
let num_1 = 15;
let num_2 = 20;
document.write(`num_1 = 15 <br> num_2 = 20 <br><br>`);
document.write(`Addition ${num_1} + ${num_2} = ${num_1 + num_2} <br>`);
document.write(`Subtraction ${num_1} - ${num_2} = ${num_1 - num_2} <br>`);
document.write(`Multiplication ${num_1} * ${num_2} = ${num_1 * num_2} <br>`);
document.write(`Division ${num_1} / ${num_2} = ${num_1 / num_2} <br>`);
document.write(`Modulus ${num_1} % ${num_2} = ${num_1 % num_2} <br>`);

// Do the following using JS Mathematic Expressions

// a.Declare a variable
let value;

// b. Initialize the variable with some number
value = 5;
// Initial value: 5”
alert(`The initial value of my variable is ${value}`);
// increment is: 6
alert(`Here I am doing Increamnet of it ${value++}`);
// Add 7 to the variable.
value = value + 7;
// Now the value is: 13
alert(`The value after adding 7 is ${value}`);
// Decrement the variable.Value after decrement is: 12
alert(`Here I am doing deccreamnet of my value ${--value}`);
// Show the remainder after dividing the variable’s value by 3.
alert(`The remainder is ${value % 3}`);
// Output : “The remainder is : 0”.

let per_movie_ticket = 600;
// calculate the cost of buying 5 tickets to a movie. 
alert(`Per Movie Ticket is Rs-600 and 5 persons are going it would be ${per_movie_ticket*5}`)

let table = 5

for (let i = 1; i <= 10; i++) {
  document.write(`<br><br> ${table} * ${i} = ${table * i} <br>`);
}