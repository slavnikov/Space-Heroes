import { game } from './main.js';
import { setupControlls, removeControlls } from './controls_setup.js';

$("#high-score").submit(highScoreSubmit);
$("#name").focusin(removeControlls);

function highScoreSubmit(e) {
  e.preventDefault();

  const name = $("#name");

  if (name.val()) {
    firebase.database().ref(`${name.val()}/`).set({
      score: game.score,
      valorous: game.valorous,
    });
  }
  name.val("");

  $("#high-score").addClass("hidden");
  setupControlls();
  drawHighScores();
}

export function drawHighScores() {
  const list = $("#score-list");
  list.empty();
  list.append("<h3>Hall of Heroes</h3>");

  firebase.database().ref('/').once('value').then((response) => {
    const listing = response.val();
    let names = Object.keys(listing);
    names = names.sort((name1, name2) => {
      return listing[name2].score - listing[name1].score;
    });

    names.forEach((name) => {
      const score = listing[name].score;
      const valorous = listing[name].valorous;
      if (valorous) {
        list.append(`<li class="score-li"> <p><i class="material-icons">star</i>${name}:</p> <p>${score}</p> </li>`);
      } else {
        list.append(`<li class="score-li"> <p>${name}:</p> <p>${score}</p> </li>`);
      }
    });
  });
}
