const readlinesyc = require("readline-sync")
var username = readlinesyc.question("ENTER the name")
console.log("WELL COME TO NEOG", username)
var score = 0
function playgame(questions, answer, options) {
    console.log(questions)
    console.log("THIS IS YOUR OPTIONS:")
    for (var i = 0; i<options.length; i++) {
        console.log(options[i])
    }
    var result=readlinesyc.question("select your options:")
    if (result === curentquestion.answer) {

        console.log("YOUR RIGHT")
        score++
        console.log("your score is", score)
        console.log("**Congrats**")
    } else {
        console.log("your wrong answer.")
        console.log("your score is", score);
    }
}
var questionlist = [{
    question: "who is your favarate person?",
    options: ["mother", "father", "God", "brother"],
    answer: 3
},
{
    question: "who is your Role model in your life?",
    options: ["mother", "father", "God", "brother"],
    answer: 1
}
]
for (var i = 0; i < questionlist.length; i++) {
    var curentquestion = questionlist[i]
    playgame(curentquestion.question, curentquestion.answer, curentquestion.options)

}
var scorebank=[
        {name:"shailja",score:2
      },{
        name:"nani",score:3
      }]
for (var i=0;i<scorebank.length;i++){
console.log(scorebank[i].name,scorebank[i].score)
}
console.log("boom!,if your get  high score send me a screenshot")
