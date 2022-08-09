import Header from "./header.js";
import Player from "./player.js";
import PlayerCard from "./player-card.js";
import { capitalize, getRandomArrayItem } from "./utils.js";

const moves = [
  {
    name: 'rock',
    icon: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    icon: '✋',
    beats: 'rock'
  }, 
  {
    name: 'scissors',
    icon: '✌',
    beats: 'paper'
  }
];

const unknownMoveIcon = '❔';

/* Setup of all dynamic elements */
const header = new Header("score-message");
const humanPlayer = new Player();
const botPlayer = new Player();

const humanPlayerCard = new PlayerCard("human-score");
const botPlayerCard = new PlayerCard("bot-score");

/* Setup of move buttons */
generateMovementButtons(moves);

/* Set default values */
reset();

function generateMovementButtons() {
  const buttonList = document.getElementById("buttons");
  moves.forEach(move => {
    const btn = document.createElement("button");
    btn.append(move.icon);
    btn.addEventListener("click", () => playerMove(move));

    buttonList.append(btn);
  });
}

function reset() {
  const defaultScore = 0;
  
  /* reset score */
  humanPlayer.setScore(defaultScore);
  botPlayer.setScore(defaultScore);

  /* reset cards */
  humanPlayerCard.setIcon(unknownMoveIcon);
  botPlayerCard.setIcon(unknownMoveIcon);

  humanPlayerCard.setScore(defaultScore);
  botPlayerCard.setScore(defaultScore);
}

function playerMove(move) {
  const botMove = getRandomArrayItem(moves);

  let middleText = "";
  /* if the bot wins*/
  if (isMoveBeaten(move, botMove)) {
    header.setTopMessage("You lost!");
    middleText = "is beaten by";
    botPlayer.score += 1;
  }

  /* if ties */
  else if (move.name === botMove.name) {
    header.setTopMessage("It's a tie!");
    middleText = "ties with";
  }

  /* if won */
  else {
    header.setTopMessage("You won!")
    middleText = "beats";
    humanPlayer.score += 1;
  }

  header.setBottomMessage(`${capitalize(move.name)} ${middleText} ${botMove.name}`);
  
  humanPlayerCard.setIcon(move.icon);
  humanPlayerCard.setScore(humanPlayer.score);

  botPlayerCard.setIcon(botMove.icon);
  botPlayerCard.setScore(botPlayer.score);
}

function isMoveBeaten (moveOne, moveTwo) {
  return moveOne.name === moveTwo.beats;
}