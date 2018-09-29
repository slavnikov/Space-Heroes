import Killable from './killable.js';
import Missle from './missle.js';
import { game, lifeBar } from '../main.js';

class PlayerShip extends Killable {
  constructor(x, y, width, height, hp) {
    super(x, y, width, height, null, null, null, null, hp);
    this.ref = 'player';
    this.toggleReload = this.toggleReload.bind(this);
    this.needsReload = false;
    this.maxHp = hp;
  }

  fireMissle() {
    const image = new Image();
    image.src = 'assets/theme_1/ammo/ship_missle.png';

    const missle = new Missle(this.x + this.width / 2, this.y, -15, "Enemy");
    missle.setImage(image);
  }

  toggleReload() {
    this.needsReload = !this.needsReload;
  }

  drawLifeBar() {
    const LBContext = lifeBar.getContext("2d");
    const percentLifeLeft = this.hp / this.maxHp;
    const lifeLeft = 500 * percentLifeLeft;

    LBContext.clearRect(0, 0, lifeBar.width, lifeBar.height);
    LBContext.beginPath();
    LBContext.fillStyle= '#7A0000';
    LBContext.rect(0, 0 + (500 - lifeLeft), 30, lifeLeft);
    LBContext.fill();
    LBContext.closePath();
  }

  draw(context) {
    this.drawLifeBar();
    super.draw(context);
  }

  delete () {
    this.drawLifeBar();
    super.delete();
    game.gameOver();
  }
}

export default PlayerShip;
