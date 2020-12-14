// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  



  //Create the function to execute for generate password
  function generatePassword() {

  //Create a password length prompt
    var passwordLength =  prompt("Please select the desired length for your password. (Must be betwen 8 and 128 characters)");
  
    //Create a character type prompt for the user to select characters to use
    var characterTypes = prompt("Please select the characters you would like to include in your password. (You may choose: lowercase, uppercase, numeric, and/or special characters)");



    var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // var specialCharacters = [ !," " ", #,  $,  %,  &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~, '"];





  //Create a function to provide numbers for the user password 
      function passwordNumbers () {

    //Loop through random numbers as many times as the user selected for their password length
        for(i = 0; i < parseInt(passwordLength); i++ ) {
    
    //Log the results to console to ensure it is captured correctly
          console.log(Math.floor(Math.random() * 128))
        }
      }



    //Create if statements to measure the length of password desired is within the range of the numbers 8 AND 128. 

    //ALSO be sure to change prompt input from string to number
    if(parseInt(passwordLength) <= 128 && parseInt(passwordLength) >= 8){
      passwordNumbers()
      console.log(`User selected a password that is ${parseInt(passwordLength)} numbers long`)
    } else if(parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8 ){
      alert("Again, please select a number within the range of 8 and 128.")
    } 

  
   //Create if statements to ensure the selected types are of the values: lowercase, uppercase, numberic. and/or special characters    
    if(characterTypes.toLowerCase() === "lowercase" || characterTypes.toLowerCase() === "uppercase" || characterTypes.toLowerCase() === "numeric" || characterTypes.toLowerCase() === "special characters") {
      console.log(characterTypes.toLowerCase())
    } else {
    alert("Please choose a valid option")
    characterTypes;
  }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
