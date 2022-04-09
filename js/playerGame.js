function playerGame() {
  console.log("player deck game");
  checkEndGame();

  playerOneBtn.addEventListener("click", () => {
    playerOneCard.innerHTML = `
    ${playerOne[0].img}`;
    tempPlayerOne.push(playerOne.shift());
    playerOneBtn.disabled = true;
    press = true;
    if (press && pressTwo) {
      win = whoWon(tempPlayerOne[0], tempPlayerTwo[0]);
      console.log(win);
      if (win) {
        moveCardsBetweenPlayers(win);
        checkEndGame();
      }
    }
  });
  playerTwoBtn.addEventListener("click", () => {
    playerTwoCard.innerHTML = `
      ${playerTwo[0].img}`;
    tempPlayerTwo.push(playerTwo.shift());
    playerTwoBtn.disabled = true;
    pressTwo = true;
    if (press && pressTwo) {
      win = whoWon(tempPlayerOne[0], tempPlayerTwo[0]);
      if (win) {
        moveCardsBetweenPlayers(win);
        checkEndGame();
      }
    }
  });
}
function playerWar() {
  if (playerOne.length >= 3 && playerTwo.length >= 3) {
    playerDrawOneSecondWait(3);
  } else if (playerOne.length < 3) {
    playerDrawOneSecondWait(playerOne.length);
  } else {
    playerDrawOneSecondWait(playerTwo.length);
  }
}
//try to send the function as a parameter so reduce code.
function playerDrawOneSecondWait(num) {
  checkEndGame();
  if (num) {
    sleep(1000).then(() => {
      playerWarDraw();
      playerDrawOneSecondWait(num - 1);
    });
  } else {
    win = whoWon(
      tempPlayerOne[tempPlayerOne.length - 1],
      tempPlayerTwo[tempPlayerTwo.length - 1]
    );
    if (win === "playerOne") {
      moveCardsBetweenPlayers("playerOne");
    } else {
      moveCardsBetweenPlayers("playerTwo");
    }
  }
}

function playerWarDraw() {
  checkEndGame();
  tempPlayerOne.push(playerOne.shift());
  tempPlayerTwo.push(playerTwo.shift());
  showCards();
}

function checkEndGame() {
  if (!playerOne.length) {
    endGame("Two");
  }
  if (!playerTwo.length) {
    endGame("One");
  }
}

function endGame(num) {
  root.style.display = "none";
  finish.style.display = "block";
  finish.innerHTML = `
    The winner Is: 
    Player ${num}`;
}
