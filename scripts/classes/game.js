import { objects, messages } from '../game.js';
import setupControlls from '../controls_setup.js';
import ship from '../objects/ship.js';
import level1 from '../levels/level1.js';
import level2 from '../levels/level2.js';
import * as Messages from '../objects/messages.js';

class Game {
  constructor(window) {
    this.window = window;
    this.documnet = window.document;
    this.canvas = window.$("#field");
    this.context = this.canvas[0].getContext("2d");
    this.renderScreen = this.renderScreen.bind(this);
    this.play = this.play.bind(this);
    this.playBackgournd = this.playBackgournd.bind(this);
    this.currentInterval = null;
    this.levels = [level1, level2];
    this.nextLevelIdx = 0;
    this.haveResetLevel = false;
  }

  enemiesPresent () {
    return Object.values(objects).some((object) => {
      return object.constructor.name === "Enemy";
    });
  }

  setupNextLevel () {

    const nextLevel = this.levels[this.nextLevelIdx];

    if (nextLevel) {
      nextLevel.setup();
      this.nextLevelIdx++;
    }

    this.haveResetLevel = false;
  }

  renderScreen() {
    this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);

    if (!this.haveResetLevel && !this.enemiesPresent()) {
      setTimeout(this.setupNextLevel.bind(this), 3e3);
      messages[Messages.cleared.ref] = Messages.cleared;
      this.haveResetLevel = true;
    }

    Object.values(objects).forEach((object) => {
      object.draw(this.context);
    });

    Object.values(messages).forEach((message) => message.draw(this.context));
  }

  play() {
    delete(messages[Messages.pressP.ref]);
    this.setupNextLevel();
    this.currentInterval = setInterval(this.renderScreen, 20);
  }

  playBackgournd() {
    if (!this.currentInterval) {
      Object.values(messages).forEach((message) => message.draw(this.context));
    }
  }

  gameOver() {
    messages[Messages.gameOver.ref] = Messages.gameOver;
  }
}

export default Game;
