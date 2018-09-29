import Game from './classes/game.js';
import BackgroundRender from './classes/background_render.js';
import setupControlls from './controls_setup.js';

export const lifeBar = $("#life-bar")[0];
export const game = new Game(window);
export const backgroundRender = new BackgroundRender();
export let backgroundInterval = null;

backgroundRender.initiateBackground();
setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  backgroundInterval = setInterval(game.playBackgournd, 20);
});
