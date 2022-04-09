function deckGame() {
  console.log("deck game");
  //player one take a card
  playerOneBtn.addEventListener("click", () => {
    tempPlayerOne.push(deck.pop());
    playerOneCard.innerHTML = `
      ${tempPlayerOne[tempPlayerOne.length - 1]["img"]}`;
    playerOneBtn.disabled = true;
    pressOne = true;
    if (pressOne && pressTwo) {
      win = whoWon(tempPlayerOne[0], tempPlayerTwo[0]);
      if (win) {
        moveCardsBetweenPlayers(win);
      }
    }
  });
  //player two take a card
  playerTwoBtn.addEventListener("click", () => {
    tempPlayerTwo.push(deck.pop());
    playerTwoCard.innerHTML = `
      ${tempPlayerTwo[tempPlayerTwo.length - 1]["img"]}`;
    playerTwoBtn.disabled = true;
    pressTwo = true;
    if (pressOne && pressTwo) {
      win = whoWon(tempPlayerOne[0], tempPlayerTwo[0]);
      if (win) {
        moveCardsBetweenPlayers(win);
      }
    }
  });
}
//no cards in the deck. the games goes to players decks

function whoWon(oneCard, twoCard) {
  //player one wins
  if (oneCard.num > twoCard.num) {
    playerOneCard.style.backgroundColor = "green";
    playerTwoCard.style.backgroundColor = "red";
    return "playerOne";
  }
  //player two wins
  if (oneCard.num < twoCard.num) {
    playerTwoCard.style.backgroundColor = "green";
    playerOneCard.style.backgroundColor = "red";
    return "playerTwo";
  }
  // war
  if (oneCard["num"] === twoCard["num"]) {
    deck.length ? war() : playerWar();
  }
}

function moveCardsBetweenPlayers(win) {
  if (win === "playerOne") {
    playerOne.push(...tempPlayerOne);
    playerOne.push(...tempPlayerTwo);
  }
  if (win === "playerTwo") {
    playerTwo.push(...tempPlayerTwo);
    playerTwo.push(...tempPlayerOne);
  }
  console.log("win=", win);
  if (deck.length) {
    setTimeout(() => {
      reset();
    }, 1500);
  } else {
    setTimeout(() => {
      if (goToPlayerGame) {
        goToPlayerGame = false;
        reset();
        playerOneBtn.style.display = "none";
        playerTwoBtn.style.display = "none";
        playerOneBtn = document.getElementById("player-game-one-btn");
        playerTwoBtn = document.getElementById("player-game-two-btn");
        playerOneBtn.style.display = "block";
        playerTwoBtn.style.display = "block";
        playerGame();
      } else {
        checkEndGame();
        reset();
      }
    }, 1500);
  }
}

// war function- tie cards
function war() {
  if (deck.length >= 6) {
    drawOneSecondWait(3);
  } else if (deck.length) {
    drawOneSecondWait(deck.length / 2);
  } else {
    playerWar();
  }
}

function drawOneSecondWait(num) {
  if (num) {
    sleep(1000).then(() => {
      deckWarDraw();
      drawOneSecondWait(num - 1);
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

function deckWarDraw() {
  tempPlayerOne.push(deck.pop());
  tempPlayerTwo.push(deck.pop());
  showCards();
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function showCards() {
  playerOneCard.innerHTML = `
        ${tempPlayerOne[tempPlayerOne.length - 1].img}`;
  playerTwoCard.innerHTML = `
        ${tempPlayerTwo[tempPlayerTwo.length - 1].img}`;
}

function reset() {
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
  playerOneCard.innerHTML = ``;
  playerTwoCard.innerHTML = ``;
  playerOneCard.style.backgroundColor = "white";
  playerTwoCard.style.backgroundColor = "white";
  tempPlayerOne = [];
  tempPlayerTwo = [];
  pressOne = false;
  pressTwo = false;
  win = "";
}
