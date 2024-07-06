document.write(`<h1>Result:</h1> <br><br>`);

let num = 10;
document.write(`The value of num is :${num}<br>`);

document.write("<b>..............................................</b><br>");

document.write(`<br>The value of ++num is : ${++num}`);
document.write(`<br>Now the value num is : ${num}<br>`);

document.write(`<br><br>The value of --num is : ${--num}`);
document.write(`<br>Now the value num is : ${num}<br>`);

document.write(`<br><br>The value of num-- is : ${num--}`);
document.write(`<br>Now the value num is : ${num}<br>`);

let val_1 = 2;
let val_2 = 1;

document.write(`<br>The value of val_1  : ${val_1}`);
document.write(`<br>The value of val_2  : ${val_2}`);
document.write(
  `<br><br>The value after [ <b>--val_1 - --val_2 + ++val_2 + val_2--</b> ]  :  ${
    --val_1 - --val_2 + ++val_2 + val_2--
  }`
);

document.write(`<br><br><b>Explain the output at each stage: <br> </b>`);
document.write(` <br>--val_1 = ${--val_1} `);
document.write(` <br>--val_1 - --val_2 = ${--val_1 - --val_2} `);
document.write(
  ` <br>--val_1 - --val_2 + ++val_2 = ${--val_1 - --val_2 + ++val_2} `
);
document.write(
  ` <br>--val_1 - --val_2 + ++val_2 + val_2-- = ${
    --val_1 - --val_2 + ++val_2 + val_2--
  } `
);

/*
3. Write a program that takes input a name from user & greet the
user.
*/

let user_name = prompt("Enter Your name");

document.write(`<br> Hello<b> ${user_name}</b>`);

/*
4. Write a program to take input a number from user & display its
multiplication table on your browser. If user does not enter a new
number, multiplication table of 5 should be displayed by default.

*/

alert("Enter any number to generate a table.");
let table = prompt();

if (table === null) {
  table = 5;
  document.write(`<br>Table of  ${table}<br><br>`);

  for (let i = 1; i <= 10; i++) {
    document.write(
      `&nbsp;&nbsp;&nbsp;&nbsp; ${table}  *  ${i}  =  ${table * i} <br>`
    );
  }
} else {
  document.write(`<br>Table of  ${table}<br><br>`);

  for (let i = 1; i <= 10; i++) {
    document.write(
      `&nbsp;&nbsp;&nbsp;&nbsp; ${table}  *  ${i}  =  ${table * i} <br>`
    );
  }
}

/*
// 5.Take

// a) Take three subjects name from user and store them in 3 different
// variables.
// */

let sub_1 = prompt("Enter subject 1"); //let's say maths
let sub_2 = prompt("Enter subject 2"); //let's say English
let sub_3 = prompt("Enter subject 3"); //let's say Urdu

// b) Total marks for each subject is 100, store it in another variable.

let total = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
alert("Enter marks of subject 1");
let marks_1 = parseInt(prompt());

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

alert("Enter marks of subject 2");
let marks_2 = parseInt(prompt());

alert("Enter marks of subject 3");
let marks_3 = parseInt(prompt());

// e) Now calculate total marks and percentage and show the result in  browser like this. (Hint: user table)

let total_marks = marks_1 + marks_2 + marks_3;

document.write(`<br><br> <table style=" height="450" border="2" celpadding="9" celspacing="2"  ">
  
  <tr>
  
  <th>&nbsp;&nbsp;&nbsp;&nbsp;       Subject       &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;         Total          &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;          Obt Marks        &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;            Percentage               &nbsp;&nbsp;&nbsp;&nbsp;</th>
  
  </tr>
  

  <tr align="center">
  <td>${sub_1}</td>
  <td>${total}</td>
  <td>${marks_1}</td>
  <td>${(marks_1 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_2}</td>
  <td>${total}</td>
  <td>${marks_2}</td>
  <td>${(marks_2 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_3}</td>
  <td>${total}</td>
  <td>${marks_3}</td>
  <td>${(marks_3 / total) * 100}%</td>
  
  </tr>
  <tr align="center">
  
  <td colspan="2">300</td>
  <td>${total_marks}</td>
  <td>${((total_marks / 300) * 100).toFixed(2)}</td>
  
  </tr>
 
  
  
  
  
  
  
  
  
  </table>`);
