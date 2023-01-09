// Assignment Code
var generateBtn = document.querySelector("#generate-password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // passwordText = document.getElementById("#password").innerHTML = password;
}

// Random Password Generator
function generatePassword(){
  var passwordLength = prompt("Enter Password Lenght.\nPassword must be between 8 and 128 characters in length.");
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "0123456789";
  var chars = "";
  var password = "";

  //Prompt Messages
  var lowerCaseMessage = "Would you like to include lowercase characters in your password? \n\nClick Ok for Yes or Cancel for No.";
  var upperCaseMessage = "Would you like to include UPPERCASEcharacters in your password? \n\nClick Ok for Yes or Cancel for No.";
  var numbersMessage = "Would you like to include numbers in your password? \n\nClick Ok for Yes or Cancel for No.";
  var specialCharsMessage = "Would you like to include special characters in your password? \n\nClick Ok for Yes or Cancel for No.";

  //User Prompt criteria
  var lowercasePrompt ="";
  var upperCasePrompt ="";
  var numbersPrompt ="";
  var specialCharsPrompt ="";
  
  // Checks for password length requirements
  if (passwordLength >= 8 && passwordLength <= 128){
    if (window.confirm(lowerCaseMessage)) {
      chars = chars += lowerCaseChars;
      lowercasePrompt = "Yes";
    } else lowercasePrompt = "No";

    if (window.confirm(upperCaseMessage)) {
      chars = chars += upperCaseChars;
      upperCasePrompt = "Yes";
    } else upperCasePrompt = "No";

    if (window.confirm(numbersMessage)) {
      chars = chars += numbers;
      numbersPrompt = "Yes";
    } else numbersPrompt = "No";

    if (window.confirm(specialCharsMessage)) {
      chars = chars += specialChars;
      specialCharsPrompt = "Yes";
    } else specialCharsPrompt = "No";
  
    // creates random password
    for (var i = 0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber,randomNumber +1);
      //resets password tex color
      document.getElementById("password").style.color = "black";
    }

     //checks for a valid character selection, otherwise fails creating password.
    if (chars.length === 0) {
      alert("You must select at least 1 set of characters!\n \n Password could not be created.");
      password = "Password could not be created, you must pick at least one set of characters !";
      document.getElementById("password").style.color = "red";
    } 

    //Adds user Prompted criteria
    document.getElementById("length-prompt").innerHTML = passwordLength;
    document.getElementById("lower-case-prompt").innerHTML = lowercasePrompt;
    document.getElementById("upper-case-prompt").innerHTML = upperCasePrompt;
    document.getElementById("numbers-prompt").innerHTML = numbersPrompt;
    document.getElementById("special-chars-prompt").innerHTML = specialCharsPrompt;
  } else
  window.alert("Password must be between 8 and 128 characters in length!\n\n Click the Generate Password button to try again.")
  return password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

