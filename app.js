$(document).ready(function(){
  console.log('document ready')


  function beginRace(){
    let playerOneCount=0
    let playerTwoCount=0
    let winTarget = 30
    $(document).on("keyup", function(e){
      if (playerOneCount<winTarget && playerTwoCount<winTarget){

        // Player one move
        if (e.keyCode === 90){
          playerOneCount++;
          console.log(playerOneCount);
          $(".player_1").animate({left: "+=2.5%"},100);
          }
          // Player two move
          else if (e.keyCode === 77) {
            playerTwoCount++
            console.log(playerTwoCount);
            $(".player_2").animate({left: "+=2.5%"},100);
          }
        } else {console.log("game over");
        $(document).off("keyup");if (playerOneCount === winTarget){
          alert("Batman wins!");
        }else if (playerTwoCount === winTarget){
          alert("Pikachu wins!");
        }
      }
    });
  }
  beginRace();
});
console.log("js ready");
