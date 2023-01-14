// Pick 6 Lotto, pick 6 numbers between 1 and 46
function generatePick6Tickets() {
    var winningNumbers = "";

    for (var i = 0; i < 6; i++){
      var randomNumber = Math.floor(Math.random() * 46) + 1;
      winningNumbers += randomNumber + "  ";
    }
    // write results back to html
    document.getElementById("pick6-lotto-numbers").innerHTML = winningNumbers;
}

// random number between 0 and 10
var winCounter = 0;
function generateRandomNumber() {
  var randomNumber1 = Math.random();
  var randomNumber2 = Math.random() * 10;
  var randomNumber3 = Math.floor(Math.random() * 11);
  var randomNumber4 = Math.floor(Math.random() * 100)+1;
  
  // write results back to html
  document.getElementById("random-number1").innerHTML = (randomNumber1);
  document.getElementById("random-number2").innerHTML = (randomNumber2);
  document.getElementById("random-number3").innerHTML = (randomNumber3);
  if (randomNumber3 === 10){
    winCounter = winCounter + 1;
    document.getElementById("win-counter").innerHTML = (winCounter);
    alert("You win, you got 10!");
  } else
  document.getElementById("random-number4").innerHTML = (randomNumber4);
}
