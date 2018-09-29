// import ship from './objects/ship.js';
import Game from './classes/game.js';
import BackgroundRender from './classes/background_render.js';
import setupControlls from './controls_setup.js';
import * as Messages from './objects/messages.js';

// export const objects = {player: ship};
// export const objects = {};
export const messages = {[Messages.pressP.ref]: Messages.pressP};
export const background = {};
export const lifeBar = $("#life-bar")[0];

export const game = new Game(window);
export const backgroundRender = new BackgroundRender();
backgroundRender.initiateBackground();

setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  setInterval(game.playBackgournd, 20);
});
