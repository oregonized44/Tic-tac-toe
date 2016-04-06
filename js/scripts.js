function Player(teamChoice, playerName){
  this.team = teamChoice; //x or o
  this.user = playerName; //persons name so later we can say "" its your turn!
}
function Board(){

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
