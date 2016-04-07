
////////////////////////////////////////////////
//GLOBAL VARIABLES/////////////////////////////
////////////////////////////////////////////////

var playerOne = new Object; // player objects with values passed on from click function
var playerTwo = new Object; // player objects with values passed on from click function
var turn = new Object;

////////////////////////////////////////////////
//CONSTRUCTION ZONE/////////////////////////////
////////////////////////////////////////////////

function Board(squareOne, squareTwo, SquareThree){
}
function Player(teamChoice, playerName){
  this.team = teamChoice; // x or o
  this.user = playerName; // persons name so later we can say "" its your turn
}
////////////////////////////////////////////////
//PROTO / Function Junction/////////////////////
////////////////////////////////////////////////
function startGame(){
  turn.playerOne == true;
}
function gameOver(){
  $(".square").innerText == "";
}

function message(message){
  $(".message").text(playerOne.user + " , it's your turn!");
}
function switch(){
  if(turn.playerOne == true){
    turn.playerOne == false;
    turn.playerTwo == true;
  }else if(turn.playerTwo == true){
    turn.playerTwo == false;
    turn.playerOne == true;
}
function chooseSquare(square){

  if(turn.playerOne this.square.innerText == playerOne.team ){
    $(".square").innerText == playerOne.team;
  }else if(this.square.innerText == playerTwo.team){
  }else{
  }
  }else if($(".square").innerText == "X"){
  }
}
////////////////////////////////////////////////
//EVENT LISTENERS//Front End////////////////////
////////////////////////////////////////////////

$(document).ready(function(){
  $("button#submit").click(function(event){ //onclick will create our player object upon global player vars
    event.preventDefault();
    var playerOneName = $('#user-one').val(); // stores our user values into a variable to pass on
    var playerTwoName = $('#user-two').val(); // stores our user values into a variable to pass on
    var x = "X";  // stores our team values into a variable to pass on
    var o = "O";  // stores our team values into a variable to pass on
    playerOne = new Player(x,playerOneName); // creates our player object with previous passed in values
    playerTwo = new Player(o,playerTwoName); // creates our player object with previous passed in values
    console.log(playerOne);
    console.log(playerTwo);
    $(".message").text(playerOne.user + " , it's your turn!");
    $("#form").hide();
    $("#table").show();
  });
  $('#1').click(function(){

    $("#1").text("X");
  });
  $(".square").click(function(){

    $(this).text("shit");
  })
});
