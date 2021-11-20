
// function addnumbers(num1,num2){
//     return num1+num2
// }
// var resultsum=addnumbers(4,5)
// console.log("THE SUM OF TWO NUMBERS IS:",resultsum)
// console.log("**************************")

// function multiplyofnumbers(num1,num2){
//     return num1*num2
// }
// var resultsum=multiplyofnumbers(5,8)
// console.log("THE MULTIPLY OF TWO NUMBERS IS:",resultsum)
// console.log("**************************")

var readlinesyc=require("readline-sync")
var score=0;
function playgame(question,answer){
    var user=readlinesyc.question(question)

if(user===answer){
    console.log("YOUR ARE RIGHT")
    score++;
    console.log("Your score is:",score);
}else{
    console.log("YOU ARE WRONG!");
    score--
    console.log("Your score is:",score);
}
}
playgame("WHICH ONE IS  THE BEST COMPANY?:","SOFTWARECOMPANY")
playgame("WHAT IS THE MAIN MOTIVATION OF JOB YOUR DOING:","selfrespect")