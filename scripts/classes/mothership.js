import Enemy from './enemy.js';
import Missle from './missle.js';
import ClassicGrunt from '../classes/classic_grunt.js';
import FluidGrunt from '../classes/fluid_grunt.js';
import Shifter from '../classes/shifter.js';
import Bouncer from '../classes/bouncer.js';
import { game } from '../main.js';
import { laserFire, healthDrop, laserHit, heal } from '../objects/sounds.js';
import { healthImage, laserImage, classicGruntImage, fluidGruntImage, shifterWhite, bouncerImage } from '../objects/images.js';

class Mothership extends Enemy {
  constructor(props) {
    super(props);
    this.spawnInterval = setInterval(this.spawnShip.bind(this), 4e3);
  }

  getVx() {
    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      if (this.yBounds.max < 600) {
        this.yBounds.max = this.yBounds.max + 100;
      } else {
        this.yBounds.max = 720;
      }
      this.vx *= -1;
    }

    return this.vx;
  }

  translate() {
    if (this.y + this.height >= 719) {
      game.gameOver();
    }
    this.getVx();
    super.translate();
  }

  fireMissle() {
    const gunLocations = {0: this.x + 63, 1: this.x + 122, 2: this.x + 198, 3: this.x + 258};

    for (var i = 0; i < 4; i++) {
      if (this.y + this.height >= 0 && Math.random() < this.rateOfFire) {
        const missle = new Missle({
          x: gunLocations[i],
          y: this.y + this.height - 25,
          width: 10,
          height: 36,
          xBounds: null,
          yBounds: {min: -50, max: 800},
          vx: 0,
          vy: 15,
          foe: "PlayerShip",
          damage: 2,
          image: laserImage,
          fireSound: laserFire,
          impactSound: laserHit,
        });
      }
    }
  }

  spawnShip() {
    if (!game.objects[this.ref]) {
      clearInterval(this.spawnInterval);
      return;
    }
    const selector = Math.floor(Math.random() * 4);
      switch (selector) {
        case 0:
        game.drawObject(new ClassicGrunt({
          x: this.x + this.width / 2,
          y: this.y,
          width: 80,
          height: 87,
          xBounds: {min: 0, max: 1250},
          yBounds: {min: 0, max: this.y + this.height},
          vx: (2 + Math.random()) * (Math.random > 0.5 ? 1 : -1) ,
          vy: 0.6,
          hp: 5,
          rateOfFire: 0.0125,
          image: classicGruntImage
        }));
        break;
        case 1:
          game.drawObject(new FluidGrunt({
            x: this.x + this.width / 2,
            y: this.y,
            width: 80,
            height: 87,
            xBounds: {min: 0, max: 1250},
            yBounds: {min: 0, max: this.y + this.height},
            vx: 4 * (Math.random > 0.5 ? 1 : -1),
            vy: 1,
            hp: 3,
            rateOfFire: 0.03,
            image: fluidGruntImage
          }));
          break;
        case 2:
          const shifter = new Shifter({
            x: this.x + this.width / 2,
            y: this.y,
            width: 50,
            height: 50,
            xBounds: {min: 0, max: 1250},
            yBounds: {min: 0, max: 550},
            vx: 0,
            vy: 0,
            hp: 3,
            rateOfFire: 0,
            image: shifterWhite
          });
          shifter.shifting = true;
          game.drawObject(shifter);
          break;
        case 3:
          game.drawObject(new Bouncer({
            x: this.x + this.width / 2,
            y: this.y,
            width: 50,
            height: 50,
            xBounds: {min: -150, max: 1350},
            yBounds: {min: -150, max: 700},
            vx: (2.75 + Math.random()) * (Math.random() > 0.5 ? 1 : -1),
            vy: 2.75 + Math.random(),
            hp: 6,
            rateOfFire: 0,
            image: bouncerImage,
          }));
          break;
        default:
        return null;
      }
  }

  delete() {
    clearInterval(this.spawnInterval);
    game.valorous = true;
    super.delete();
  }
}

export default Mothership;
