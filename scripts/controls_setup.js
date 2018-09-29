import Missle from './classes/missle.js';
import { game, backgroundInterval } from './main.js';

function keyDownHandler(e) {
  if(e.keyCode == 68) { //D
    game.ship.moveHorizantally(20);
  } else if(e.keyCode == 65) { //A
    game.ship.moveHorizantally(-20);
  } else if(e.keyCode == 32) { //SPACE
    if (!game.ship.needsReload) {
      game.ship.fireMissle();
      game.ship.toggleReload();
    }
  }

  if (e.keyCode == 80) { //P
    if (!game.currentInterval) {
      game.play();
      clearInterval(backgroundInterval);
    } else {
      game.togglePause();
    }
  }

  if (e.keyCode == 82) { //R
    game.restart();
  }


  //test code for configuring vertical movement

  // if(e.keyCode == 87) { //W
  //   game.ship.moveVertically(-20);
  // } else if(e.keyCode == 83) { //S
  //   game.ship.moveVertically(20);
  // }
}

function keyUpHandler(e) {
  if(e.keyCode == 68 && game.ship.vx > 0) {
    game.ship.moveHorizantally(0);
  } else if(e.keyCode == 65 && game.ship.vx < 0) {
    game.ship.moveHorizantally(0);
  }

  if (e.keyCode == 32) { //SPACE
    game.ship.toggleReload();
  }
  // test code for configuring vertical movement

  // if(e.keyCode == 87 && game.ship.vy < 0) {
  //   game.ship.moveVertically(0);
  // } else if(e.keyCode == 83 && game.ship.vy > 0) {
  //   game.ship.moveVertically(0);
  // }
}


function setupControlls(document) {
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
}

export default setupControlls;
