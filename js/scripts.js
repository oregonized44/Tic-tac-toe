function Player(teamChoice, playerName){
  this.team = teamChoice; //x or o
  this.user = playerName; //persons name so later we can say "" its your turn

}

Player.prototype.turn = function(){
    var firstName = userOne;
    var secondName = userTwo;
    firstName = "X";
    secondName = "O";
    turn = "X";
    console.log(turn);
}
Player.prototype.switchTurn = function(){





}
Player.prototype.message = function(){




}
function Board(){
}
Board.prototype.checkCombinations = function(){




}
Board.prototype.gameOver = function(){




}
Board.prototype.reset = function(){




}
$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();
    var playerOneName = $('#user-one').val(); // logs user1 input
    var x = "X";
    var userOne = new Player(x,playerOneName);
    console.log(userOne);
    var playerTwoName = $('#user-two').val();
    var o = "O";
    var userTwo = new Player(o,playerTwoName);
    $(".message").text(userOne.user + " , it's your turn!");
    console.log(userTwo);
    $("#form").hide();
    $("#table").show();
  });
  $('#1').click(function(){
    var y = "fuck you";
    $("#1").text(y);
  });
  $(".square").click(function(){
    $(this).text("shit");
  })
});

/*
function Board(){

}

function startGame(){
  newUser.turn = "x";
}

function message(msg){
  $('.message').text("yo its your turn!");
}

function swithTurn(){
    if(user.turn == "x"){
      user.turn == "o";
    }else{
      user.turn == "x"
    }
    message();
}

Board.prototype.checkRow(){
  sees if we have a weeener
}
Board.prototype.nextMove(square){

}*/
