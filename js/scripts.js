//user interface logic//
function rollDice() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  var oPlayer = document.getElementById("oplayer");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  dice1.innerHTML = d1;
  dice2.innerHTML = d2;

  oplayer.innerHTML = " <li>you rolled a " + diceTotal + ".</li>";
}

function rollDicee() {
  var dice3 = document.getElementById("dice3");
  var dice4 = document.getElementById("dice4");
  var tPlayer = document.getElementById("tplayer");
  var d3 = Math.floor(Math.random() * 6) + 1;
  var d4 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d3 + d4;
  dice3.innerHTML = d3;
  dice4.innerHTML = d4;
  tplayer.innerHTML = " <li>you rolled a " + diceTotal + ".</li>";

}
