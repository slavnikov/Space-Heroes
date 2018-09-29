import { messages, backgroundRender } from '../main.js';
// import setupControlls from '../controls_setup.js';
import createPlayerShip from '../objects/ship.js';
import level1 from '../levels/level1.js';
import level2 from '../levels/level2.js';
import * as Messages from '../objects/messages.js';

class Game {
  constructor(window) {
    this.window = window;
    this.documnet = window.document;
    this.canvas = window.$("#field");
    this.context = this.canvas[0].getContext("2d");

    this.objects = {};

    this.playBackgournd = this.playBackgournd.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.play = this.play.bind(this);

    this.currentInterval = null;

    this.levels = [level1, level2];
    this.nextLevelIdx = 0;
    this.haveResetLevel = false;

    this.ship = null;
  }

  enemiesPresent () {
    return Object.values(this.objects).some((object) => {
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
    backgroundRender.render(this.context);

    if (!this.haveResetLevel && !this.enemiesPresent()) {
      setTimeout(this.setupNextLevel.bind(this), 3e3);
      messages[Messages.cleared.ref] = Messages.cleared;
      this.haveResetLevel = true;
    }

    Object.values(this.objects).forEach((object) => {
      object.draw(this.context);
    });

    Object.values(messages).forEach((message) => message.draw(this.context));
  }

  play() {
    this.ship = createPlayerShip();
    this.objects.player = this.ship;
    delete(messages[Messages.pressP.ref]);
    this.setupNextLevel();
    this.currentInterval = setInterval(this.renderScreen, 20);
  }

  playBackgournd() {
    if (!this.currentInterval) {
      this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
      Object.values(messages).forEach((message) => message.draw(this.context));
      backgroundRender.render(this.context);
    }
  }

  gameOver() {
    messages[Messages.gameOver.ref] = Messages.gameOver;
  }
}

export default Game;
