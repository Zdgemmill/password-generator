// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = lowerCaseList.toUpperCase();
var specialList = "!@#$%^&*()_+"
var numberList = "0123456789"

function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  //prompts for collecting password info
  var carList = []
  var newPassword = []
  var passwordLength = prompt("How many characters would you like your password to be? (Must be grater than 8)");
  if (passwordLength < 8 || passwordLength > 120) {
    confirm("Your password must be between 8 and 120 characters.");
  }
  var specialCars = prompt("Would you like special charaters?");
  if (specialCars == "yes") {
    carList += specialList
    console.log(carList)

  }
  var upperCars = prompt("Would you like upper case charaters?");
  if (upperCars == "yes") {
    carList += upperCaseList
    console.log(carList)
  }
  var lowerCars = prompt("Would you like lower case charaters?");
  if (lowerCars == "yes") {
    carList += lowerCaseList
    console.log(carList)
  }
  var numbers = prompt("Would you like numbers in your password?");
  if (numbers == "yes") {
    carList += numberList
    console.log(carList)
  }
  //Loop for looping thropugh our carList array and generating a password. 
  for (var i = 0; i < passwordLength; i++) {
    newPassword[i] = getRandomItem(carList);

  }
  var newPasswordStr = newPassword.join("");
  console.log(newPasswordStr);
  return newPasswordStr;
}



//need a way to combine lists depending on user input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);