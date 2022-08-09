import Header from "./header.js";
import Player from "./player.js";
import PlayerCard from "./player-card.js";
import { capitalize } from "./utils.js";

/* Setup of all dynamic elements */
const header = new Header("score-message");
const humanPlayer = new Player();
const botPlayer = new Player();

const humanPlayerCard = new PlayerCard("human-score");
const botPlayerCard = new PlayerCard("bot-score");

/* Setup of move buttons */
const buttonList = document.getElementById("buttons");
const rockButton = document.createElement("button");
rockButton.append(getMoveIcon('rock'));
rockButton.addEventListener("click", () => playerMove('rock'));
const paperButton = document.createElement("button");
paperButton.append(getMoveIcon('paper'));
paperButton.addEventListener("click", () => playerMove('paper'));

const scissorsButton = document.createElement("button");
scissorsButton.append(getMoveIcon('scissors'));
scissorsButton.addEventListener("click", () => playerMove('scissors'));

buttonList.append(rockButton, paperButton, scissorsButton);

/* Set default values */
reset();

function reset() {
  const defaultScore = 0;
  
  /* reset score */
  humanPlayer.setScore(defaultScore);
  botPlayer.setScore(defaultScore);

  /* reset cards */
  humanPlayerCard.setIcon(getMoveIcon());
  botPlayerCard.setIcon(getMoveIcon());

  humanPlayerCard.setScore(defaultScore);
  botPlayerCard.setScore(defaultScore);
}

function playerMove(move) {
  const botMove = getBotMove();

  let middleText = "";
  /* if the bot wins*/
  if (
    (move === 'rock' && botMove === 'paper')
    ||
    (move === 'paper' && botMove === 'scissors')
    ||
    (move === 'scissors' && botMove === 'rock')
  ) {
    header.setTopMessage("You lost!");
    middleText = "is beaten by";
    botPlayer.score += 1;
  }

  /* if ties */
  else if (move === botMove) {
    header.setTopMessage("It's a tie!");
    middleText = "ties with";
  }

  /* if won */
  else {
    header.setTopMessage("You won!")
    middleText = "beats";
    humanPlayer.score += 1;
  }

  header.setBottomMessage(`${capitalize(move)} ${middleText} ${botMove}`);
  
  humanPlayerCard.setIcon(getMoveIcon(move));
  humanPlayerCard.setScore(humanPlayer.score);

  botPlayerCard.setIcon(getMoveIcon(move));
  botPlayerCard.setScore(botPlayer.score);
}

function getBotMove() {
  const move = Math.floor(Math.random() * 2);
  switch(move) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

function getMoveIcon(move) {
  switch(move) {
    case 'rock': return '✊';
    case 'paper': return '✋';
    case 'scissors': return '✌';
    default: return '❔';
  }
}

