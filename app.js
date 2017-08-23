$(document).ready(function(){
  console.log('document ready')
  let playerOneCount=0
  let playerTwoCount=0
  let winTarget = 10
  function beginRace(){
    $(document).on("keyup", function(e){
      if (playerOneCount<winTarget && playerTwoCount<winTarget){

        // Player one
        if (e.keyCode === 90){
          playerOneCount++;
          console.log(playerOneCount);
          $(".player_1").animate({left: "+=10%"},0);
          if (playerOneCount === winTarget){
            alert("Player One wins!");
          }}
          // Player two
          else if (e.keyCode === 77) {
            playerTwoCount++
            console.log(playerTwoCount);
            $(".player_2").animate({left: "+=10%"},0);
            if (playerTwoCount === winTarget){
              alert("Player Two wins!");
            }
          }
        } else {console.log("game over");
        $(document).off("keyup");
      }
    });
  }
  beginRace();
});
console.log("js ready");
