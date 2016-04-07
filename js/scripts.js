var playerOne = new Object; // player objects with values passed on from click function
var playerTwo = new Object; // player objects with values passed on from click function
var playerBot = new Object;

function Board(squareOne, squareTwo, SquareThree){
}
function Player(teamChoice, playerName,trueValue){
  this.team = teamChoice; // x or o
  this.user = playerName; // persons name so later we can say "" its your turn
  this.turn = true;
}
////////////////////////////////////////////////
//PROTO / Function Junction/////////////////////
////////////////////////////////////////////////

function chooseSquare(player){
  var box = $(".square").text();
  if(player.team == "X" && player.turn === true){
    box === "hello";
    playerTwo.turn === true;
    $(".message").text(playerTwo.user + " It is now your turn!");
  }else if(player.team === "O" && player.turn === true && box.innerText == ""){
    box === player.team;
    playerOne.turn === false;
    $(".message").text(playerOne.user + "It is now your turn!");
  }else{
    $(".message").text("Whoops, please choose another box!");
  }
}

////////////////////////////////////////////////
//EVENT LISTENERS//Front End////////////////////
////////////////////////////////////////////////

$(document).ready(function(){
  $("button#submit").click(function(event){ //onclick will create our player object upon global player vars
    event.preventDefault();
    alert("clicked");
    var playerOneName = $('#user-one').val(); // stores our user values into a variable to pass on
    var playerTwoName = $('#user-two').val(); // stores our user values into a variable to pass on
    var x = "X";  // stores our team values into a variable to pass on
    var o = "O";  // stores our team values into a variable to pass on
    playerOne = new Player(x,playerOneName); // creates our player object with previous passed in values
    playerTwo = new Player(o,playerTwoName); // creates our player object with previous passed in values
    $(".message").text(playerOne.user + " , it's your turn!");
    $("#form").hide();
    $("#table").show();
  });
  $(".square").click(function(event){
    event.preventDefault();
    chooseSquare(playerOne);
    console.log(playerOne);


  });
});
