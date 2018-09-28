import ship from './objects/ship.js';
import Game from './classes/game.js';
import setupControlls from './controls_setup.js';
import Level1 from './levels/level1.js';

export const objects = {player: ship};
export const game = new Game(window);

setupControlls(document);
Level1();

document.addEventListener("DOMContentLoaded", function (e) {

  $("#play-button").click(game.play);
  // game.playGame();
});
