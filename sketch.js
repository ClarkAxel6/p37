var canvas, backgroundImage;

var gameState = 0;
var contestantCount = 0;

var database;

var question, contestant, quiz;

var allPlayers;

function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background('pink');
  if(contestantCount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
}

