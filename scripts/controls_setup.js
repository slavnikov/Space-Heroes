import ship from './objects/ship.js';
import Missle from './classes/missle.js';

function keyDownHandler(e) {
  if(e.keyCode == 68) { //D
    ship.moveHorizantally(20);
  } else if(e.keyCode == 65) { //A
    ship.moveHorizantally(-20);
  } else if(e.keyCode == 32) { //SPACE
    new Missle(ship.x + ship.width / 2, ship.y);
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 68 && ship.vx > 0) {
    ship.moveHorizantally(0);
  } else if(e.keyCode == 65 && ship.vx < 0) {
    ship.moveHorizantally(0);
  }
}


function setupControlls(document) {
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
}

export default setupControlls;
