var readlineSync = require("readline-sync");

var questionList = [
{
  question: "Which is my favorite fruit? ",
  answer: "apple"
},
{
  question: "Which is my favorite game? ",
  answer: "chess"
},
{
  question: "Which is my favorite place? ",
  answer: "raigad"
},
{
  question: "Which is my favorite dish? ",
  answer: "pohe"
},
{
  question: "Which is my favorite festival? ",
  answer: "diwali"
}
]

userScore = 0;

var scoreboard = [
{
  name: "Rushikesh",
  score: 5
},
{
  name: "Shubham",
  score: 4
},
{
  name: "Saurabh",
  score: 3
}
]

function check(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("Right Answer");
    userScore++;
  }
  else{
    console.log("Wrong Answer");
  }
}

var userName = readlineSync.question("Enter your name : ");
console.log("Welcome! "+userName+".");
console.log("Lets know - How much do you know me?");
console.log("Lets start the game...");

for(var i=0; i<questionList.length; i++){
  check(questionList[i].question, questionList[i].answer);
}

console.log("Your total score is : "+userScore);
scoreboard= [ ...scoreboard ,{name: userName, score: userScore}]
console.log("-------------------------------------");
console.log("Leader Board");
for(i=0; i<scoreboard.length; i++){
  console.log(scoreboard[i].name+"  :  "+scoreboard[i].score);
}
console.log("-------------------------------------");
