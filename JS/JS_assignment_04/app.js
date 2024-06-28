// // Promises
// // EventLister
// // Switch
// // Ternary operator
// // CallBack

// // Promises
// let victory = true;
// const criket = () => {
//   return new Promise((res, rej) => {
//     if (res) {
//       res("we won");
//     } else {
//       rej("we lost");
//     }
//   });
// };
// criket()
//   .then((res) => {
//     setTimeout(() => {
//       console.log(`Yeah ` + res);
//     });
//   })
//   .catch((rej) => {
//     setTimeout(() => {
//       console.log(`No bro why  ` + rej);
//     });
//   })
//   .finally(() => {
//     console.log(`Come back Home`);
//   });
// // Switch condition
// let surprise = "pet";
// switch (surprise) {
//   case "flowers":
//     console.log("Surprise Happy birthday!");
//     break;
//   case "sweets":
//     console.log("Surprise Happy birthday!");
//     break;
//   default:
//     console.log("Is this your birth day today ...?");
//     break;
// }
// // Ternary operator
// let gender = "male";
// let name = "Sana";
// let checkout =
//   gender === "female" ? `Welcome Mr. ${name} ` : `Welcome Mrs. ${name}`;
// console.log(checkout);
// // Nested ternary operator
// let tol_marks = 200;
// let obt_mrks = 150;
// let result =
//   obt_mrks >= 170
//     ? "A+ "
//     : obt_mrks >= 150
//     ? "A grade"
//     : obt_mrks >= 120
//     ? "B grade"
//     : obt_mrks >= 100
//     ? "C grade"
//     : "Fail";
// console.log(result);
// // CallBack

// let num_1;
// let num_2;
// function cal(callback) {
//   console.log("Simple Calculation (main function)");
//   callback();
// }

// function display() {
//   num_1 = 5;
//   num_2 = 6;
//   console.log(` (Callback function)

//     Num_1 = ${num_1} Num_2 = ${num_2}

//     Addition: ${num_1} + ${num_2} = ${num_1 + num_2}
//     Subtraction: ${num_1} - ${num_2} = ${num_1 - num_2}
//     Multiplication: ${num_1} * ${num_2} = ${num_1 * num_2}
//     Division: ${num_1} / ${num_2} = ${(num_1 / num_2).toFixed(2)}`);
// }
// cal(display);

//another callback  example

// let Name = (name, callback) => {
//   console.log(`Hello, I am ${name}`);
//   callback();
// };
// let completed = () => {
//   console.log("Task Completed");
// };
// Name(`Tuba Jan`, completed);

