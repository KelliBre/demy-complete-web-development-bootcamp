/*Section 102
alert("hello world");

//Section 109

let myName = prompt("What is your name?");
let nameLength = myName.length;
console.log(nameLength);


//twitter challange
let userInput = prompt("Enter your Tweet");
let charLength = userInput.length;
let charCutOff = alert(userInput.slice(0, 140)); 
let remainingChar = 140 - charLength ;
alert("You have used " + charLength + " characters." + "You have " + remainingChar + " characters remaining!");

console.log(charCutOff);


console.log(remainingChar);
*/
//section 

let userName = prompt("What is your name?");
// console.log(nameLength);
let firstLetter = userName.slice(0,1);
let nameLength = userName.length;
let remainingChar = userName.slice(1,nameLength);
userName = firstLetter.toUpperCase() + remainingChar.toLowerCase();
alert("Hello " + userName + "!!!")
console.log(userName);