//quiz by Tanay
var readlineSync = require('readline-sync');
var score=0;
var userName= readlineSync.question("What's your name? ");
console.log("Welcome " + userName + "to DO YOU KNOW TANAY?");

//play function

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("right"); 
    score = score+1;
  }
  else {
    console.log("wrong");
    score--;
 }
    console.log("current score", score);
    console.log("-----------");
}

play("Where do I live?", "Bangalore");
play("My fav superhero would be", "Batman");