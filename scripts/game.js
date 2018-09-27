import ship from './objects/ship.js';
import setupControlls from './controls_setup.js';

setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  const canvas = $("#field");
  const context = canvas[0].getContext("2d");

  function renderGame() {
    context.clearRect(0, 0, canvas[0].width, canvas[0].height);
    ship.draw(context);
  }

  setInterval(renderGame, 20);
});
