$(document).ready(function(){
  console.log('document ready')
  let playerOneCount=0
  let playerTwoCount=0
  let winTarget = 40
  $(document).keyup( function(e){
		if (e.keyCode === 90){
      playerOneCount++
      console.log(playerOneCount);
      if (playerTwoCount === winTarget){
        alert("Player One wins!");
      }
    } else if (e.keyCode === 77) {
      playerTwoCount++
      console.log(playerTwoCount);
      if (playerTwoCount === winTarget){
        alert("Player Two wins!");
      }
    }
})
})
console.log("js ready");
