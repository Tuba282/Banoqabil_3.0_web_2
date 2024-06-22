// let total = 200;

// const engMarks = document.getElementById('in1').value;
// const sciMarks = document.getElementById('in2').value;

// let calculate = () => {
//   const totalMarks = engMarks + sciMarks;
//   document.getElementById('result').innerHTML = totalMarks;

// };

let total = 200;

let calculate1 = () => {
  {
    // getting marks from user
    const engMarksInput = document.getElementById("in1");
    const sciMarksInput = document.getElementById("in2");

    // put user marks in a variable
    const engMarks = parseInt(engMarksInput.value);
    const sciMarks = parseInt(sciMarksInput.value);
    // addition of marks
    const totalMarks = engMarks + sciMarks;
    if (totalMarks > 60) {
      document.getElementById(
        "result1"
      ).innerHTML = `Pass : ${total} / ${totalMarks}`;
    } else {
      document.getElementById(
        "result1"
      ).innerHTML = `Fail : ${total} / ${totalMarks}`;
    }
  }

  //   document.getElementById('result').innerHTML = totalMarks;
};
let calculate2 = () => {
  {
    // getting marks from user
    const engMarksInput = document.getElementById("in3");
    const sciMarksInput = document.getElementById("in4");

    // put user marks in a variable
    const engMarks = parseInt(engMarksInput.value);
    const sciMarks = parseInt(sciMarksInput.value);
    // addition of marks
    const totalMarks = engMarks + sciMarks;
    if (totalMarks > 60) {
      document.getElementById(
        "result2"
      ).innerHTML = `Pass : ${total} / ${totalMarks}`;
    } else {
      document.getElementById(
        "result2"
      ).innerHTML = `Fail : ${total} / ${totalMarks}`;
    }
  }

  //   document.getElementById('result').innerHTML = totalMarks;
};
let calculate3 = () => {
  {
    // getting marks from user
    const engMarksInput = document.getElementById("in5");
    const sciMarksInput = document.getElementById("in6");

    // put user marks in a variable
    const engMarks = parseInt(engMarksInput.value);
    const sciMarks = parseInt(sciMarksInput.value);
    // addition of marks
    const totalMarks = engMarks + sciMarks;
    if (totalMarks > 60) {
      document.getElementById(
        "result3"
      ).innerHTML = `Pass : ${total} / ${totalMarks}`;
    } else {
      document.getElementById(
        "result3"
      ).innerHTML = `Fail : ${total} / ${totalMarks}`;
    }
  }

  //   document.getElementById('result').innerHTML = totalMarks;
};
