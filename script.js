// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = lowerCaseList.toUpperCase();
var specialList = "!@#$%^&*()_+"
var numberList = "0123456789"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? (Must be grater than 8)");
  if (passwordLength < 8 || passwordLength > 120) {
    confirm("Your password must be between 8 and 120 characters.");
  }
  var specialCars = prompt("Would you like special charaters?");
  if (specialCars == "yes") {
    specialCars = true;
  }
  var upperCars = prompt("Would you like upper case charaters?");
  if (upperCars == "yes") {
    upperCars = true;
  }
  var lowerCars = prompt("Would you like lower case charaters?");
  if (lowerCars == "yes") {
    lowerCars = true;
  }
  var numbers = prompt("Would you like numbers in your password??");
  if (numbers == "yes") {
    numbers = true;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);