import { backgroundRender } from '../main.js';
import createPlayerShip from '../objects/ship.js';
import level1 from '../levels/level1.js';
import level2 from '../levels/level2.js';
import * as msgObjects from '../objects/messages.js';

class Game {
  constructor(window) {
    this.window = window;
    this.documnet = window.document;
    this.canvas = window.$("#field");
    this.context = this.canvas[0].getContext("2d");

    this.objects = {};
    this.messages = {
      [msgObjects.pressP.ref]: msgObjects.pressP,
      [msgObjects.pressC.ref]: msgObjects.pressC
    };
    this.background = {};


    this.playBackgournd = this.playBackgournd.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.play = this.play.bind(this);

    this.currentInterval = null;
    this.paused = false;

    this.levels = [level1, level2];
    this.nextLevelIdx = 0;
    this.haveResetLevel = false;

    this.ship = null;
  }

  enemiesPresent () {
    return Object.values(this.objects).some((object) => {
      return object.constructor.__proto__.name === "Enemy";
    });
  }

  setupNextLevel () {

    const nextLevel = this.levels[this.nextLevelIdx];

    if (nextLevel) {
      nextLevel().setup();
      this.nextLevelIdx++;
      this.haveResetLevel = false;
    } else {
      this.messages = {};
      this.messages[msgObjects.earthSafe.ref] = msgObjects.earthSafe;
      this.messages[msgObjects.pressR.ref] = msgObjects.pressR;
    }

  }

  renderScreen() {
    if (this.paused) {
      return;
    }

    this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
    backgroundRender.render(this.context);

    if (!this.haveResetLevel && !this.enemiesPresent()) {
      setTimeout(this.setupNextLevel.bind(this), 3e3);
      this.messages[msgObjects.cleared.ref] = msgObjects.cleared.setDelay(2e3);
      this.haveResetLevel = true;
    }

    Object.values(this.objects).forEach((object) => {
      object.draw(this.context);
    });
    this.writeMessages();
  }

  writeMessages() {
    Object.values(this.messages).forEach((message) => message.draw(this.context));
  }

  play() {
    this.ship = createPlayerShip();
    this.objects.player = this.ship;
    this.messages = {};
    this.setupNextLevel();
    this.currentInterval = setInterval(this.renderScreen, 20);
  }

  playBackgournd() {
    this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
    this.writeMessages();
    backgroundRender.render(this.context);
  }

  togglePause() {
    this.paused = !this.paused;
  }

  showControls() {
    if (this.messages[msgObjects.pressP.ref]) {
      this.messages = {};
      this.messages = {
        [msgObjects.controls0.ref]: msgObjects.controls0,
        [msgObjects.controls1.ref]: msgObjects.controls1,
        [msgObjects.controls2.ref]: msgObjects.controls2,
        [msgObjects.controls3.ref]: msgObjects.controls3,
      };
    } else {
      this.messages = {
        [msgObjects.pressP.ref]: msgObjects.pressP,
        [msgObjects.pressC.ref]: msgObjects.pressC
      };
    }
  }

  gameOver() {
    this.messages = {};
    this.messages[msgObjects.gameOver.ref] = msgObjects.gameOver;
    this.messages[msgObjects.pressR.ref] = msgObjects.pressR;
  }

  restart() {
    clearInterval(this.currentInterval);
    this.objects = {};
    this.messages ={};
    this.nextLevelIdx = 0;
    this.play();
  }
}

export default Game;
