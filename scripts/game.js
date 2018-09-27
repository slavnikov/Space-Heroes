import ship from './objects/ship.js';

document.addEventListener("DOMContentLoaded", function (e) {
  const canvas = $("#field");
  const context = canvas[0].getContext("2d");

  function renderGame() {
    ship.draw(context);
  }

  setInterval(renderGame, 5);
});
