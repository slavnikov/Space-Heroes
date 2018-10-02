import { game } from './main.js';
import { setupControlls, removeControlls } from './controls_setup.js';

$("#high-score").submit(highScoreSubmit);
$("#name").focusin(removeControlls);

export function highScoreSubmit(e) {
  e.preventDefault();

  const name = $("#name");

  if (name.val()) {
    firebase.database().ref(`${name.val()}/`).set({
      score: game.score
    });
  }
  name.val("");

  $("#high-score").addClass("hidden");
  setupControlls();
}
