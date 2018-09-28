import ship from './objects/ship.js';
import Game from './classes/game.js';
import setupControlls from './controls_setup.js';

export const objects = {player: ship};
export const messages = [];
export const game = new Game(window);

setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  $("#play-button").click(game.play);
});
