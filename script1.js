// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input and display it on the webpage

js

function writePassword() {
  var minLength = parseInt(prompt("Enter minimum password length:"));
  var maxLength = parseInt(prompt("Enter maximum password length:"));
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Check if the entered lengths and character types are valid
  if (isNaN(minLength) || isNaN(maxLength) || minLength < 1 || maxLength < 1 || maxLength < minLength || !(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please enter valid password parameters.");
    return;
  }

  var password = generatePassword(minLength, maxLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  
  var passwordText = document.querySelector("#password");
  document.getElementById("password").value = password;
}

// Generate password
function generatePassword(minLength, maxLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  var chars = "";
  var password = "";

  if (includeLowercase) {
    chars += lowercaseChars;
  }

  if (includeUppercase) {
    chars += uppercaseChars;
  }

  if (includeNumeric) {
    chars += numericChars;
  }

  if (includeSpecial) {
    chars += specialChars;
  }

  var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  return password;
}
