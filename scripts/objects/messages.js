import Message from '../classes/message.js';

export const gameOver = new Message(
  "30px Comic Sans MS",
  "red",
  "center",
  "Game Over",
  1250 / 2,
  720 / 2
);

export const cleared = new Message(
  "30px Comic Sans MS",
  "green",
  "center",
  "LEVEL CLEARED!",
  1250 / 2,
  720 / 2,
  2e3
);

export const level1M = new Message(
  "30px Comic Sans MS",
  "black",
  "center",
  "Level 1: The First Wave",
  1250 / 2,
  720 / 2,
  3e3
);

export const level2M = new Message(
  "30px Comic Sans MS",
  "black",
  "center",
  "Level 2: The Second Wave",
  1250 / 2,
  720 / 2,
  3e3
);
