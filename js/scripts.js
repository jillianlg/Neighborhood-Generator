// Test Driven Development:
  // Describe: neighborhood()
  // Test 1: "return alert for invalid number"
  // Expect: (neighborhood()).toEqual("Whoops!..."");
  // Expect: (neighborhood("seven")).toEqual("Whoops!..."");
  // PASSED
  
  // Test 2: "return a range of numbers from 0 to the users inputted number.
  // Expect: (neighborhood(5)).toEqual(0, 1, 2, 3, 4, 5);
  // PASSED
  
  // Test 3: "If users inputted number contains a 1 convert it to "Beep".
  // Expect: (neighborhood(11)).toEqual(0, Beep, 2, 3, 4, 5, 6, 7, 8, 9, 10, Beep);
  // PASSED

  // Test 4: will identfy if the users inputted number contains a 2 and converts it to "Boop".
  // Expect: (neighborhood(12)).toEqual(0, Beep, Boop, 3, 4, 5, 6, 7, 8, 9, 10, Beep, Boop);
  // PASSED

  // Test 5: will identfy if the users inputted number contains a 3 and converts it to "Won't you be my neighbor?".
  // Expect: (neighborhood(6)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6);
  // PASSED

  // Test 6: will return in order of 3 taking priority over 2 and 2 taking priority over 1.
  // Expect: (neighborhood(13)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, Beep, Boop, "Won't you be my neighbor?");

// Business Interface

 function neighborhood (numeral) {
  let userInput = [];
  for (let i = 0; i <= numeral; i++) {
    userInput.push(i.toString());
}
let r = 0;
userInput.forEach(function(number) {
  if (isNaN(number)){
    alert("Whoops! Looks like you forgot to enter a number or you entered letters. Please try again.");
  }
  else if (number.indexOf('3') > -1) {
    userInput[r] = "Won't you be my neighbor?";
  }
  else if (number.indexOf('2') > -1) {
    userInput[r] = "Boop!";
  }
  else if (number.indexOf('1') > -1) {
    userInput[r] = "Beep!";
  }
    else {}
    r++
  })
    stringResult = userInput.join(", "); 
    return stringResult;
  }
  
// Test 6: PASSED - return in priority order
console.log returned:
neighborhood("13")
"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"
neighborhood("21")
"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!"
neighborhood("32")
"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?"

// Test 5: PASSED - 3 and converts it to "Won't you be my neighbor?"
// function neighborhood (numeral) {
//   let userInput = [];
//   for (let i = 0; i <= numeral; i++) {
//     userInput.push(i.toString());
// }
// let r = 0;
// userInput.forEach(function(number) {
//   if (isNaN(number)){
//     alert("Whoops! Looks like you forgot to enter a number or you entered letters. Please try again.");
//   }
//   else if (number.indexOf('3') > -1) {
//     userInput[r] = "Won't you be my neighbor?";
//   }
//   else if (number.indexOf('2') > -1) {
//     userInput[r] = "Boop!";
//   }
//   else if (number.indexOf('1') > -1) {
//     userInput[r] = "Beep!";
//   }
//     else {}
//     r++
//   })
//     stringResult = userInput.join(", "); 
//     return stringResult;
//   }

  // Test 4: PASSED - contains a 2 and converts it to "Boop"
  // function neighborhood (numeral) {
  //   let userInput = [];
  //   for (let i = 0; i <= numeral; i++) {
  //     userInput.push(i.toString());
  // }
  // let r = 0;
  // userInput.forEach(function(number) {
  //   if (isNaN(number)){
  //     alert("Whoops! Looks like you forgot to enter a number or you entered letters. Please try again.");
  //   }
  //   else if (number.indexOf('2') > -1) {
  //     userInput[r] = "Boop!";
  //   }
  //     else if (number.indexOf('1') > -1) {
  //       userInput[r] = "Beep!";
  //     }
  //     else {}
  //     r++
  //   })
  //     stringResult = userInput.join(", "); 
  //     return stringResult;
  //   }

  // Test 3: PASSED
// function neighborhood (numeral) {
//   let userInput = [];
//   for (let i = 0; i <= numeral; i++) {
//     userInput.push(i.toString());
// }
// let r = 0;
// userInput.forEach(function(number) {
//   if (isNaN(number)){
//     alert("Whoops! Looks like you forgot to enter a number or you entered letters. Please try again.");
//   }
//     else if (number.indexOf('1') > -1) {
//       userInput[r] = "Beep!";
//     }
//     else {}
//     r++
//   })
//     stringResult = userInput.join(", "); 
//     return stringResult;
//   }

// Test 2: PASSED
// function neighborhood (number) {
//   let userInput = [];
//   if (isNaN(number)){
//     return ("alert");
//   } else {
//     for (let i = 0; i <= number; i++) {
//       userInput.push(i);
//     };
//     stringResult = userInput.join(", "); 
//     return stringResult;
//   };
// };

//Test 1 - PASSED
// function neighborhood (number) {
//   let userInput = [];
//   if (isNaN(number)){
//     alert("Whoops! Looks like you forgot to enter a number your you entered letters. Please try again.");
//   } else {
//     return ("ok range!");
//   }
//  }
 







// User Interface
