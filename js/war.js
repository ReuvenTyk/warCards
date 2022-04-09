// war function- tie cards
function differentWar() {
  const changeColor = (color, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.random();

        if (random > 0) {
          document.getElementById("player-one-card").style.backgroundColor =
            color;
          resolve();
        } else {
          reject();
        }
      }, time);
    });
  };

  changeColor("green", 1000)
    .then(() => changeColor("yellow", 1000))
    .then(() => changeColor("red", 1000))
    .then(() => changeColor("pink", 1000))
    .then(() => changeColor("brown", 1000))
    .then(() => changeColor("blue", 1000))
    .then(() => changeColor("orange", 1000))
    .then(() => changeColor("", 1000))
    .then(() => changeColor("red", 1000))
    .then(() => changeColor("yellow", 1000))
    .then(() => changeColor("green", 1000))
    .catch(() => {
      console.log("I was rejected");
    });
}

/* setTimeout(() => {
    deck.length ? war() : playerWar();
    win = whoWon(
      tempPlayerOne[tempPlayerOne.length - 1],
      tempPlayerTwo[tempPlayerTwo.length - 1]
    );
    if (win === "playerOne") {
      return " playerOne";
    } else {
      return "playerTwo";
    }
  },0);
}

function war() {
  let flag = true;
  if (deck.length >= 6) {
    deckWarDraw(3);
    flag = false;
  }
  if (deck.length < 6 && deck.length != 0 && flag) {
    deckWarDraw(deck.length / 2);
    flag = false;
  }
  if (!deck.length && flag) {
    playerWar();
  }
}

function deckWarDraw(num) {
  for (let i = 0; i < num; i++) {
    tempPlayerOne.push(deck.pop());
    tempPlayerTwo.push(deck.pop());
    playerOneCard.innerHTML = `
      ${tempPlayerOne[tempPlayerOne.length - 1]["img"]}`;
    playerTwoCard.innerHTML = `
      ${tempPlayerTwo[tempPlayerTwo.length - 1]["img"]}`;
  }
}
 */
