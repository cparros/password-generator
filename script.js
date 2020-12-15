// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  



  //Create the function to execute for generate password
    function generatePassword() {

  // Define numerals, alphabet, and special characters
    var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var alphabet = ['a', 'b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  

    var specialCharacters = ['\u0020','\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026',
    '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', , '\u007C', '\u007D', '\u007E'] 
    console.log(specialCharacters[1])

  //Create a password length prompt
    var passwordLength =  prompt("Please select the desired length for your password. (Must be betwen 8 and 128 characters)");

  //Create a function to provide numbers for the user password 
      function passwordNumbers () {

    //Loop through random numbers as many times as the user selected for their password length
        for(i = 0; i < parseInt(passwordLength); i++ ) {
    
    //Log the results to console to ensure it is captured correctly
          var randomNums = Math.floor(Math.random() * 10)
          console.log(randomNums)
        }
      }



    //Create if statements to measure the length of password desired is within the range of the numbers 8 AND 128. 
    //Use parseInt to change string to number
    //ALSO be sure to change prompt input from string to number
    if(parseInt(passwordLength) <= 128 && parseInt(passwordLength) >= 8){
      passwordNumbers()
      console.log(`User selected a password that is ${parseInt(passwordLength)} numbers long`)
    } else if(parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8 ){
      alert("Please select a number within the range of 8 and 128.")
      return
    } 


    //Create a character type prompt for the user to select characters to use
    var characterTypes = prompt("Please select the characters you would like to include in your password. (You may choose: lowercase, uppercase, numeric, and/or special characters)");

    var finalPassword = []
   //Create if statements to ensure the selected types are of the values: lowercase, uppercase, numberic. and/or special characters    
  
    if(characterTypes.toLowerCase() === "lowercase") {
      for(i = 0; i < passwordLength; i++) {
        console.log(alphabet[Math.floor(Math.random() * passwordLength)])
        finalPassword.push(alphabet[Math.floor(Math.random() * passwordLength)])
        console.log(finalPassword)
        
      }
      return finalPassword

    } else if (characterTypes.toLowerCase() === "uppercase") {
      for(i = 0; i < passwordLength; i++) {
        console.log(alphabet[Math.floor(Math.random() * passwordLength)].toUpperCase())
        finalPassword.push(alphabet[Math.floor(Math.random() * passwordLength)].toUpperCase())
        console.log(finalPassword)
      } 
      return finalPassword
    } else if (characterTypes.toLowerCase() === "numeric"){
      for(i = 0; i < parseInt(passwordLength); i++) {
        console.log(numerals[Math.floor(Math.random() * 10)])
      }
    } else if (characterTypes.toLowerCase() === "special characters") {
      for(i = 0; i < parseInt(passwordLength); i++) {
        console.log(specialCharacters[Math.floor(Math.random() * passwordLength)])
      }
    } else { 
    alert("Please choose a valid option")
    }


   
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
