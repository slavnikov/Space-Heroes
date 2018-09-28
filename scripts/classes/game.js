import { objects } from '../game.js';
import Level1 from '../levels/level1.js';
import setupControlls from '../controls_setup.js';

class Game {
  constructor(window) {
    this.window = window;
    this.documnet = window.document;
    this.canvas = window.$("#field");
    this.context = this.canvas[0].getContext("2d");
    this.renderScreen = this.renderScreen.bind(this);
    this.play = this.play.bind(this);
    this.currentInterval = null;
  }

  renderScreen() {
    this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
    Object.values(objects).forEach((object) => {
      object.draw(this.context);
    });
  }

  play() {
    this.window.$("#play-button").addClass("hidden");
    this.currentInterval = this.window.setInterval(this.renderScreen, 20);
  }

  gameOver() {

  }
}

export default Game;
