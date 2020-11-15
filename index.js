var readlineSync = require("readline-sync");
const chalk = require('chalk');
const fs = require("fs");

var questionList = [
{
  question: "What is the National Tree of India. \n a. Tamarind Tree \n b. Banyan Tree \n c. Neem Tree \n d. Peepal Tree \n ",
  answer: "b"
},
{
  question: "What is the National Fruit of India. \n a. Pomegranate \n b. Apple \n c. Banana \n d. Mango \n ",
  answer: "d"
},
{
  question: "What is the National Bird of India. \n a. Peacock \n b. Kingfisher \n c. Bald Eagle \n d. Parrot \n ",
  answer: "a"
},
{
  question: "What is the National Animal of India. \n a. Deer \n b. Giraffe \n c. Bengal Tiger \n d. Lion \n ",
  answer: "c"
},
{
  question: "What is the National Flower of India. \n a. Lotus \n b. Jasmine \n c. Lily \n d. Sunflower \n ",
  answer: "a"
}
]

userScore = 0;
var scoreboard = require('./scores');

function check(question, answer){
  var userAns = readlineSync.question(question + "\n Enter your answer: ");
  if(userAns === answer){
    console.log(chalk.bgGreen("Right Answer"));
    userScore+= 4;
  }
  else{
    console.log(chalk.bgRed("Wrong Answer"));
    userScore-= 1;
  }
}

var userName = readlineSync.question("Enter your name : ");
console.log(chalk.blue.bgRed.bold("Welcome! "+userName+"."));
console.log("\n Lets see -  How well do you know India?");
console.log(chalk.red("Following are rules for the game : "));
console.log(chalk.red("1. Quiz has total 5 questions"));
console.log(chalk.red("2. You will get 4 points for every right answer."));
console.log(chalk.red("3. For each wrong answer 1 point will be deducted from score. \n"));
console.log(chalk.blue.bgGreen.underline.bold("Lets start the game..."));

for(var i=0; i<questionList.length; i++){
  check(questionList[i].question, questionList[i].answer);
}
if(userScore>= scoreboard[0].score){
  console.log(chalk.bgMagenta("Wow! You made Highscore"));
}
console.log(chalk.bgBlue("Your total score is : "+userScore));
scoreboard.push({name: userName, score: userScore});

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x > y) ? -1 : ((x < y) ? 1 : 0));
 });
}
sort_by_key(scoreboard, "score");
fs.writeFile("scores.json", JSON.stringify(scoreboard), err => { 
    if (err) throw err;  
});

console.log(chalk.red("-------------------------------------"));
console.log("Leader Board");
for(i=0; i<scoreboard.length; i++){
  console.log(chalk.blue(scoreboard[i].name+"  :  "+scoreboard[i].score));
}
console.log(chalk.red("-------------------------------------"));
