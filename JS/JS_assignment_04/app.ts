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
// function cal(num_1: number, num_2: number, CallBack: () => string) {
//   CallBack();
//   return num_1 * num_2;
// }

// function display() {
//   return `Addition: ${num_1} + ${num_2} = ${num_1 + num_2}
//     Subtraction: ${num_1} - ${num_2} = ${num_1 - num_2}
//     Multiplication: ${num_1} * ${num_2} = ${num_1 * num_2}
//     Division: ${num_1} / ${num_2} = ${num_1 / num_2}`;
// }

// console.log(cal(5, 6, display));

let num_1: number;
let num_2: number;
function cal(num_1: number, num_2: number, CallBack: (result: string) => void) {
  const result = display(); // Calculate the result
  CallBack(result); // Invoke the callback with the result
}

function display() {
  num_1 = 5; // Assign values to num_1 and num_2
  num_2 = 6;

  return ` 
  
      Num_1 = ${num_1} Num_2 = ${num_2} 
      
      Addition: ${num_1} + ${num_2} = ${num_1 + num_2}
      Subtraction: ${num_1} - ${num_2} = ${num_1 - num_2}
      Multiplication: ${num_1} * ${num_2} = ${num_1 * num_2}
      Division: ${num_1} / ${num_2} = ${num_1 / num_2}`;
}

// Usage of the callback function
cal(5, 6, (result) => {
  console.log(result);
});
