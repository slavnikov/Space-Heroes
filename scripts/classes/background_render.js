import { background } from '../main.js';
import BackgroundParticle from './background_particle.js';

class BackgroundRender {
  constructor() {
  }

  render(context) {
    if(Object.keys(background).length < 35) {
      this.generateParticle(-1);
    }
    Object.values(background).forEach((particle) => {
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
    const particle = new BackgroundParticle(x, y, 2, 2, vy);
    particle.setImage();
  }
}

export default BackgroundRender;
