// Assignment Code

// Clear the concole on every refresh
//console.clear();
var generateBtn = document.querySelector("#generate");
var lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
var uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseStrLength = lowercaseStr.length;
let uppercaseStrLength = uppercaseStr.length;
var num = "1234567890";
var speChar = "!@#$%^&*()_";
let pwSource = "";
let randChar = "";
let finalPassword = "";

function generatePassword() {
  pwSource = "";
  finalPassword = "";
  // 1. prompted for password criteria
  // 2. prompt user for the length of the password
  var pwLength = prompt("Type the length of the password. The length must be between 8 and 128 characters");
  // 3. ask user choose a length of at least 8 
  // characters and no more than 128 characters
  if (pwLength < 8 || pwLength > 128) {
    alert("The input was invalid or not allowed. Try again.");
    generatePassword();
  }
  // 4. ask user to confirm whether or not to include 
  // lowercase, uppercase, numeric, and/or lower characters
  var pwLowCaseChoice = confirm("Do you like to include lowercase characters?");
  if (pwLowCaseChoice == true) {
    pwSource += lowercaseStr;
    console.log(pwSource)
   
  }
  // 5. ask user to confirm whether or not to include 
  // lowercase, uppercase, numeric, and/or uppercase characters
  var pwUpCaseChoice = confirm("Do you like to include Uppercase characters?");
  if (pwUpCaseChoice == true) {
    pwSource += uppercaseStr;
    console.log(pwSource)
  }
  // 6. ask user to confirm whether or not to include 
  // lowercase, uppercase, numeric, and/or numbers
  var pwNumberChoice = confirm("Do you like to include Numbers?");
  if (pwNumberChoice == true) {
    pwSource += num;
    console.log(pwSource)
  }
  // 7. ask user to confirm whether or not to include 
  // lowercase, uppercase, numeric, and/or special characters
  var pwSpecialChoice = confirm("Do you like to include special characters?");
  if (pwSpecialChoice == true) {
    pwSource += speChar;
    console.log(pwSource)
  }

  for (let i = 0; i < pwLength; i++) {
    let randChar = pwSource.charAt(Math.floor(Math.random() * pwSource.length));
    finalPassword += randChar;
  }

  return finalPassword;
  
  console.log(finalPassword);
}
  

// Write password to the #password input DO NOT TOUCH!//
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  var password = generatePassword();
  

  passwordText.value = password;
  console.log();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);


