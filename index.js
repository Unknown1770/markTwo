const readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var highScores = [
  {
    name: "Vijayant Prateek",
    score: 5,
  },

  {
    name: "shab",
    score: 2,
  }
];

var questions = [{
  question: "Which country became the first nation to win the Football World Cup?",
  options :{
    a: "Uruguay",
    b: "Germany",
    c: "Argentina",
    d: "Belgium"
  },
  answer: "a"
}, {
  question: "Which country Hosted the first Football World Cup?",
  options :{
    a: "Germany",
    b: "Italy",
    c: "Argentina",
    d: "Uruguay"
  },
  answer: "d"
},  {
  question: "Who was the first player to reach 1000 goal contribution milestone?",
  options :{
    a: "Cristiano Ronaldo",
    b: "Andres Iniesta",
    c: "Lionel Messi",
    d: "Xavi"
  },
  answer: "c"
},  {
  question: "Which club has won the first sextuple?",
  options :{
    a: "FC BARCELONA",
    b: "FC BAYERN MUNICH",
    c: "REAL MADRID",
    d: "MANCHESTER CITY"
  },
  answer: "a"
},  {
  question: "Which club has won the ucl three times in a row?",
  options :{
    a: "FC BARCELONA",
    b: "FC BAYERN MUNICH",
    c: "REAL MADRID",
    d: "MANCHESTER CITY"
  },
  answer: "c"
}];

 
function play(currentquestion) {
  console.log(currentquestion.question);
  var options = currentquestion.options;
  for (let key in options) {
    console.log(chalk.blue(key, ':', options[key]));
  }
  var userAnswer = readlineSync.question("Your Answer: ");
  

  if (userAnswer.toLowerCase() === currentquestion.answer.toLowerCase()) { 
    console.log(chalk.green("Right Answer!"));
    score = score + 1;
    
  } 
  else {
    console.log(chalk.red("Wrong Answer!"));   
  }

  console.log(chalk.blue("Current score: ", score));
  console.log("-------------------------------------")  
}

function StartGame() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion)
  }
}

var userName = readlineSync.question("What's your name? \n");
console.log("Welcome "+ userName + " Let's Check Your Football Knowledge?\n");
StartGame();

console.log("Your score is: ", score)

  for (var i=0; i<highScores.length; i++)
  {
    currentUser = highScores[i];
    if (score > currentUser.score){
      console.log(chalk.green("Congrats!! You are in High Scorer List"));
      currentUser.name = userName
      currentUser.score = score
    }    
  }

  console.log(chalk.bgCyan("\n---------------------------"));
  console.log(chalk.bgCyan("Check out the high scores!!"));
  console.log(chalk.bgCyan("---------------------------"));
  for (var i = 0; i<highScores.length; i++){
    console.log( highScores[i].name, " : ", highScores[i].score);
  }