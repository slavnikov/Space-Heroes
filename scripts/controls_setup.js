import ship from './objects/ship.js';
import Missle from './classes/missle.js';
import {game} from './game.js';

function keyDownHandler(e) {
  if(e.keyCode == 68) { //D
    ship.moveHorizantally(20);
  } else if(e.keyCode == 65) { //A
    ship.moveHorizantally(-20);
  } else if(e.keyCode == 32) { //SPACE
    if (!ship.needsReload) {
      ship.fireMissle();
      ship.toggleReload();
    }
  }

  if (e.keyCode == 80 && !game.currentInterval) { //P
    game.play();
  }
  //test code for configuring vertical movement

  // if(e.keyCode == 87) { //W
  //   ship.moveVertically(-20);
  // } else if(e.keyCode == 83) { //S
  //   ship.moveVertically(20);
  // }
}

function keyUpHandler(e) {
  if(e.keyCode == 68 && ship.vx > 0) {
    ship.moveHorizantally(0);
  } else if(e.keyCode == 65 && ship.vx < 0) {
    ship.moveHorizantally(0);
  }

  if (e.keyCode == 32) { //SPACE
    ship.toggleReload();
  }
  // test code for configuring vertical movement

  // if(e.keyCode == 87 && ship.vy < 0) {
  //   ship.moveVertically(0);
  // } else if(e.keyCode == 83 && ship.vy > 0) {
  //   ship.moveVertically(0);
  // }
}


function setupControlls(document) {
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
}

export default setupControlls;
