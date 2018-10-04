export const laserFire = () => {
  const sound = new Audio("assets/sounds/laser-fire.mp3");
  sound.volume = 0.3;
  sound.play();
};

export const laserHit = () => {
  const sound = new Audio("assets/sounds/laser-hit.mp3");
  sound.volume = 0.9;
  sound.play();
};

export const rocketFire = () => {
  const sound = new Audio("assets/sounds/rocket-fire.mp3");
  sound.volume = 0.3;
  sound.play();
};

export const rocketHit = () => {
  const sound = new Audio("assets/sounds/rocket-hit.mp3");
  sound.volume = 0.3;
  sound.play();
};

export const explosion = () => {
  const sound = new Audio("assets/sounds/explosion.mp3");
  sound.volume = 0.3;
  sound.play();
};
