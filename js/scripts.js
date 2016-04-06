function Player(teamChoice, playerName){
  this.team = teamChoice; //x or o
  this.user = playerName; //persons name so later we can say "" its your turn

}
function BoardCombinations(a,b,c){
  1,2,3
  4,5,6
  7,8,9
  1,4,7
  2,5,8
  3,6,9
  1,5,9
  3,5,7

}
Player.prototype = {

  Constructor: Player,

  setTurn: function(firstName,secondName){
    var firstName = userOne;
    var secondName = userTwo;
    firstName = "X";
    secondName = "O";
    turn = "X";
    console.log(turn);
  },


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
    setTurn(userOne,userTwo);



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
