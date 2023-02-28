var passwordLength = 8;
var choiceArr = [];

// listed are all the charectors to use
var specialCharArr = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.',':',';','<','?','>','=','@','[',']','_',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','t','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

// generates button comand
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// function displays password
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
  }


//   function creats the password
function generatePassword() {
    var password = "";
    for(var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length)
        password = password + choiceArr[randomIndex];
    }
    return password;
}


// function gives prompts on screen to modify password
function getPrompts(){
    choiceArr = [];

    passwordLength = parseInt(prompt("How many chacacters do yo want? (8 - 128) "));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Character lenght has to be a number between 8 and 128");
        return false;
    }

    if (confirm("Would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
    } else {

    }
    if (confirm("Would you like uppedrcase letters?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    } else {

    }
    if (confirm("Would you like special chacacters?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    } else {

    }
    if (confirm("Would you like numbers?")) {
        choiceArr = choiceArr.concat(numberArr);
    } else {
        
    }
    return true;

}