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

  // $("#translate").hide();
  // $("#translate").show();

// // User Interface 
$(document).ready(function(){
  $("#neighborhoodForm").submit(function(event){
    event.preventDefault();
    const nameInput = $("#userName").val();
    const numberInput = parseInt($("#userInput").val());
    $("#translate").show();
    $(".userName").text(nameInput);
    $("#returnPar").text(neighborhood(numberInput)+ "  ");
  });
});

// This Works:
// $(document).ready(function(){
//   $("#neighborhoodForm").submit(function(event){
//     event.preventDefault();
//     const numberInput = parseInt($("#userInput").val());
//     $("#returnPar").append(neighborhood(numberInput)+ "  ");
//   });
// });