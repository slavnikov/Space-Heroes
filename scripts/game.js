import ship from './objects/ship.js';
import Game from './classes/game.js';
import setupControlls from './controls_setup.js';
import Level1 from './levels/level1.js';

export const objects = {player: ship};

setupControlls(document);
Level1();

document.addEventListener("DOMContentLoaded", function (e) {
  const game = new Game(window);

  $("#play-button").click(game.play);
  // game.playGame();
});
