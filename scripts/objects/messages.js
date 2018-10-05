import Message from '../classes/message.js';
import { game } from '../main.js';

const quotes = [
  "To infinity, and beyond!",
  "One small step for man ...",
  "Live long and prosper.",
  "Try not. Do. Or do not.",
  "The ships hung in the sky, ...",
  "Any planet is 'Earth' to those that live on it.",
  "Never fire a laser at a mirror.",
  "I'm sorry Dave. I'm afaid I can't' do that.",
  "I don't need luck. I have ammo.",
  "Great kid. Don't get cocky.",
  "Never tell me the odds.",
  "How do you get fuding for something like this?",
  "Must go faster!",
  "I ain't heard no fat lady!",
  "I picked a helluva day to quit drinkin'.",
  "Oh god, I hope they bring back Elvis.",
  "Now that's what we call a close encounter.",
  "I have got to get me one of these.",
  "We're not hit! Stop side-set driving!",
];

export const levelM = () => {
  return new Message(
    "40px Righteous",
    "white",
    "center",
    quotes[Math.floor(Math.random() * quotes.length)],
    1250 / 2,
    720 / 2
  );
};

export const scoreMessage = (score) => {
  return new Message (
    "30px Righteous",
    "#1ba8f0",
    "center",
    `${score}`,
    150 / 2,
    48
  );
};

export const gameOver = new Message(
  "100px Righteous",
  "red",
  "center",
  "Game Over",
  1250 / 2,
  720 / 2
);

export const cleared = new Message(
  "75px Righteous",
  "#1ba8f0",
  "center",
  "LEVEL CLEARED!",
  1250 / 2,
  720 / 2
);

export const earthSafe = new Message(
  "75px Righteous",
  "blue",
  "center",
  "The Earth is safe! for now...",
  1250 / 2,
  720 / 2
);

export const pressP = new Message(
  "75px Righteous",
  "white",
  "center",
  "Press P To Play",
  1250 / 2,
  720 / 2
);

export const pressR = new Message(
  "75px Righteous",
  "white",
  "center",
  "Press R To Play Again",
  1250 / 2,
  720 / 2 + 100
);

export const pressC = new Message(
  "50px Righteous",
  "white",
  "center",
  "Press C to view the controls",
  1250 / 2,
  720 / 2 + 100
);

export const controls0 = new Message(
  "30px Righteous",
  "white",
  "center",
  "Use the A and D keys to steer your ship",
  1250 / 2,
  720 / 2 -85
);

export const controls1 = new Message(
  "30px Righteous",
  "white",
  "center",
  "Use the Space bar to fire a missile",
  1250 / 2,
  720 / 2
);

export const controls2 = new Message(
  "30px Righteous",
  "white",
  "center",
  "In game, use P to pause and unpause or R to restart",
  1250 / 2,
  720 / 2 + 85
);

export const controls3 = new Message(
  "25px Righteous",
  "white",
  "center",
  "Press C to close this screen",
  1250 / 2,
  720 / 2 + 200
);
