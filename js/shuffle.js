shuffle.addEventListener("click", () => {
  let ranNum, ranSuits;
  while (deck.length < 52) {
    ranNum = Math.floor(Math.random() * 13) + 1;
    ranSuits = Math.floor(Math.random() * 4);
    if (ranNum === 1) {
      ranNum = 14;
    }
    let obj = {
      num: ranNum,
      suit: suits[ranSuits],
      shape: shapes[ranSuits],
      color: ranSuits % 2 === 0 ? "red" : "black",
      img: `<img src="./cardImage/${ranNum}_of_${suits[ranSuits]}.png">`,
    };
    let temp = suits[ranSuits] + ranNum;
    if (indexDeck.indexOf(temp) === -1) {
      indexDeck.push(temp);
      deck.push(obj);
    }
    iter++;
  }
  // to make a war at first draw
  /* let objTemp = {
    num: 7,
    suit: "diamonds",
    shape: "♥️",
    color: "red",
    img: `<img src="./cardImage/7_of_diamonds.png">`,
  };
  deck.push(objTemp);
  deck.push(objTemp); */
  console.log(iter);
  console.log(deck);
  startGame();
});

function startGame() {
  shuffle.style.display = "none";
  root.style.display = "grid";
  deck.length ? deckGame() : playerGame();
}
