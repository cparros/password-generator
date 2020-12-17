// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  //Create the function to execute for generate password
    function generatePassword() {

  // Define numerals
    var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Define alphabet
    var alphabet = ['a', 'b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  

  // Define special characters
    var specialCharacters = ['\u0020','\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026',
    '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', , '\u007C', '\u007D', '\u007E'] 

  // Define uppercase
    var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  // Define ALL characters
    var allCharacters = uppercase.concat(alphabet, numerals, specialCharacters)

  //Create a password length prompt
    var passwordLength =  prompt("Please choose the desired length of your password. Must be a number between 8 and 128.");
    if(passwordLength === ''){
      alert("Please select the length of your password.")
      return
    } else if (passwordLength === 'undefined'){
      return
    }

    //Create if statements to measure the length of password desired is within the range of the numbers 8 & 128 
    //ALSO be sure to change prompt input from string to number
    //Use parseInt to change string to number
    if(parseInt(passwordLength) <= 128 && parseInt(passwordLength) >= 8){
      var confirmation = confirm(`You have selected a password that is ${parseInt(passwordLength)} characters long.`)
      if(confirmation === false) {
        return
      }
      console.log(`User selected a password that is ${parseInt(passwordLength)} characters long`)
    } else if(parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8 ){
      alert("Please select a number within the range of 8 and 128.")
      return
    } 

    //Create a character type prompt for the user to select characters to use
    var characterTypes = prompt("Please select the characters you would like to include in your password. For lowercase letters type: lowercase. For uppercase letters type: uppercase. For numbers type: numbers. For special characters type: special characters. If you would like a mix of all character styles type: All.")

  if(characterTypes === null) {
    return
  }

    //Create a final password empty array to return.
    var finalPassword = []

    //Create if statements to ensure the selected types are of the values: lowercase, uppercase, numberic. and/or special characters    
    //Console was used to check to ensure password is taken. I can remove console logs if necessary!
   
    if(characterTypes.toLowerCase() === "lowercase") {
      for(i = 0; i < passwordLength; i++) {
        finalPassword.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      };
      
      console.log("The user password is: " + finalPassword.join(''))
      alert("Your password will be displayed in the text area. Please save it for your records.")
      return finalPassword.join('')
    }
    else if (characterTypes.toLowerCase() === "uppercase") {
      for(i = 0; i < passwordLength; i++) {
        finalPassword.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
      } 
      console.log("The user password is: " + finalPassword.join(''))
      alert("Your password will be displayed in the text area. Please save it for your records.")
      return finalPassword.join('') 
    } 
    else if (characterTypes.toLowerCase() === "numbers"){
      for(i = 0; i < parseInt(passwordLength); i++) {
        finalPassword.push(numerals[Math.floor(Math.random() * 10)]);
      }
      console.log("The user password is: " + finalPassword.join(''))
      alert("Your password will be displayed in the text area. Please save it for your records.")
      return finalPassword.join('')
    } 
    else if (characterTypes.toLowerCase() === "special characters") {
      for(i = 0; i < parseInt(passwordLength); i++) {
        finalPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
      }
      console.log("The user password is: " + finalPassword.join(''))
      alert("Your password will be displayed in the text area. Please save it for your records.")
      return finalPassword.join('')
    }
    else if (characterTypes.toLowerCase() === "all") {
      var allCharacters = uppercase.concat(alphabet, numerals, specialCharacters)
      for(i = 0; i < parseInt(passwordLength); i++) {
        finalPassword.push(allCharacters[Math.floor(Math.random() * allCharacters.length)])
      }
      console.log("The user password is: " + finalPassword.join(''))
      alert("Your password will be displayed in the text area. Please save it for your records.")
      return finalPassword.join('')
    } else {
    alert("Please choose a valid option")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
