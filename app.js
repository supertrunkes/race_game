$(document).ready(function(){
  //sanity check
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
          //2.5 X 30(the winning number of clicks) === 75 makes racers end at 3/4 of window.
          $(".player_1").animate({left: "+=2.5%"},100);
        }
        // Player two move
        else if (e.keyCode === 77) {
          playerTwoCount++
          $(".player_2").animate({left: "+=2.5%"},100);
        }
        //end of game protocal console log is sanity check
      } else {console.log("game over");
      $(document).off("keyup");if (playerOneCount === winTarget){
        $(".modal-body").append("<h2> Batman has won the race!<h2<");
        $('#myModal').modal('show');
      } else if (playerTwoCount === winTarget){
        $(".modal-body").append("<h2> Pikachu has won the race!<h2<");
        $('#myModal').modal('show');
      }
      //if modal is closed without starting new game a play again button is added
      $('#myModal').on('hidden.bs.modal', function (e) {
        $("body").append('<button class="btn btn-danger"  onClick="window.location.reload()">Play agian?</button>')
      })
    }
  });
}
//calling the function above if adding anything that should happen before the race it should go here
beginRace();
});
//sanity check
console.log("js ready");
