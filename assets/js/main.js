// Ein Spiel, bei dem der Spieler die Zahl zwischen 1 und 100 erraten soll.
// Der Spieler kann auch auswählen, wie viele Versuche er braucht, um die richtige Zahl zu finden.

let input = document.getElementById("input");
let fourAttempts = Number(document.getElementById("four"));
let fiveAttempts = Number(document.getElementById("five"));
let sixAttempts = Number(document.getElementById("six"));
let custom = document.getElementById("custom"); //radio button custom
let customAttempt = document.getElementById("custom-input");
let randomNumber = Math.floor(Math.random() * 100 + 1); //1-100
let newRandomNumber = Math.floor(Math.random() * 100 + 1);
console.log("some random num " + randomNumber);

// checked custom, show extra field
function showField() {
  if (custom.checked) {
    document.getElementById("custom-input").style.display = "block";
  } else {
    document.getElementById("custom-input").style.display = "none";
  }
}

let rund = 0;
function guessRandom() {
  //check if user's guess is < or > than my random num
  if (input.value != randomNumber) {
    if (input.value > randomNumber) {
      document.getElementById("guess").innerHTML += `${rund + 1} - You need to guess lower than ${input.value}. Try again!` + "<br>";
    } else if (input.value < randomNumber) {
      document.getElementById("guess").innerHTML +=
        `${rund + 1} - You need to guess higher than ${
          input.value}. Try again!` + "<br>";
    }
  } else {
    document.getElementById("guess").innerHTML = "";
    document.getElementById("success").innerHTML = `Success! You got the right number in ${rund + 1}. attempt!`;
  }
  //attempts
  rund++;
//   console.log(rund);
  if (four.checked && rund == 4) {
      btn.style.display = "none";
      document.getElementById("guess").innerHTML = "Wrong :( No more guesses. Play again!";
  } else if (five.checked && rund == 5) {
      btn.style.display = "none";
      document.getElementById("guess").innerHTML = "Wrong :( No more guesses. Play again!";
  } else if (six.checked && rund == 6) {
      btn.style.display = "none";
      document.getElementById("guess").innerHTML = "Wrong :( No more guesses. Play again!";
  } else if (custom.checked && rund == customAttempt.value) {
    btn.style.display = "none";
    document.getElementById("guess").innerHTML = "Wrong :( No more guesses. Play again!";
  }
//empty field
  if (input.value == "") {
    document.getElementById("guess").innerHTML = `You didn't enter a number. Try again!`;
  }
}

function resetGame() {
  btn.style.display = "block";
  customAttempt.value = "";
  input.value = "";
  document.getElementById("guess").innerHTML = "";
  document.getElementById("success").innerHTML = "";
  // newRandomNumber;
  console.log("new random num " + newRandomNumber);
}