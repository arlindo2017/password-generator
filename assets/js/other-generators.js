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



