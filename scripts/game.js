import ship from './objects/ship.js';
import Game from './classes/game.js';
import setupControlls from './controls_setup.js';
import * as Messages from './objects/messages.js';

export const objects = {player: ship};
export const messages = {[Messages.pressP.ref]: Messages.pressP};
export const game = new Game(window);

setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  setInterval(game.playBackgournd, 20);
});
