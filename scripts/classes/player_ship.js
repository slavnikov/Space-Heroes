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
    this.LBContext = lifeBar.getContext("2d");
    this.drawLifeBar();
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
    const percentLifeLeft = this.hp / this.maxHp;
    const lifeLeft = 500 * percentLifeLeft;

    this.LBContext.clearRect(0, 0, lifeBar.width, lifeBar.height);
    this.LBContext.beginPath();
    this.LBContext.fillStyle= '#7A0000';
    this.LBContext.rect(0, 0 + (500 - lifeLeft), 30, lifeLeft);
    this.LBContext.fill();
    this.LBContext.closePath();
  }

  getHit(damage) {
    super.getHit(damage);
    this.drawLifeBar();
  }

  delete () {
    super.delete();
    game.gameOver();
  }
}

export default PlayerShip;
