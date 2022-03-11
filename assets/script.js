// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var choiceArr =[];
var password = []; 
var lowerArr =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numberArr = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")","=","+","{","}","[","]","?", "/", "<",">",",","."];

function generatePassword(){
    var characterLength = parseInt(prompt("How many characters would you like in your password? (Between 8-128)")); 
    if(!characterLength|| characterLength<8 || characterLength>128){
        alert("Please enter a number that is between 8 and 128. Try Again.");
        return;
    } 
    var lower = confirm("Would you like lowercase letters in your password?");

    var upper = confirm("Would you like uppercase letters in your password?");

    var number = confirm("Would you like numbers in your password?");

    var special = confirm("Would you like special characters in your password?");

    if (lower) {
        choiceArr = choiceArr.concat(lowerArr);
    }
    if (upper) {
        choiceArr = choiceArr.concat(upperArr);
    }
    if (number) {
        choiceArr = choiceArr.concat(numberArr);
    }
    if (special) {
        choiceArr = choiceArr.concat(specialArr);
    } if (!lower && !upper && !number && !special) {
        alert("At least one selection must be made. Please try again.")
        return;
    }
    for (i=0; i<characterLength; i++) {
        password.push(choiceArr[getRandom(choiceArr)]);
        console.log(password);
    }
    return password.join("");
}

// define a fxn called getRandom that accepts a parameter called "arr" 
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random()*arr.length);
    return randomIndex;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);