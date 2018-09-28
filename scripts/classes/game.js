import { objects, messages } from '../game.js';
import setupControlls from '../controls_setup.js';
import ship from '../objects/ship.js';
import level1 from '../levels/level1.js';
import * as Messages from '../objects/messages.js';

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

    Object.values(messages).forEach((message) => message.draw(this.context));
  }

  play() {
    level1.setup();
    this.window.$("#play-button").addClass("hidden");
    this.currentInterval = this.window.setInterval(this.renderScreen, 20);
  }

  gameOver() {
    messages[Messages.gameOver.ref] = Messages.gameOver;
  }
}

export default Game;
