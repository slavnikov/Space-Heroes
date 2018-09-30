import { game } from '../main.js';
import BackgroundParticle from './background_particle.js';

class BackgroundRender {
  constructor() {
  }

  render(context) {
    if(Object.keys(game.background).length < 35) {
      this.generateParticle(-1);
    }
    Object.values(game.background).forEach((particle) => {
      particle.draw(context);
    });
  }

  initiateBackground() {
    const particles = [];

    for (var i = 0; i < 35; i++) {
      this.generateParticle();
    }
  }

  generateParticle (pre_y) {
    const x = Math.random() * 1250;
    const y = pre_y || Math.random() * 720;
    const vy = Math.random() * 0.22;
    const inherit = null;

    new BackgroundParticle({
      x: x,
      y: y,
      width: 2,
      height: 2,
      xBounds: inherit,
      yBounds: {min: -20, max: 740},
      vx: 0,
      vy: vy
    });
  }
}

export default BackgroundRender;
