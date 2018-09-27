import Movable from '../classes/movable.js';

const shipBounds = {min: 0, max: 1250};
const ship = new Movable(1250 / 2 - 50, 670, 50, 100, shipBounds);

export default ship;
