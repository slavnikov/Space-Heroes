import { game } from './main.js';

export function highScoreSubmit(e) {
  e.preventDefault();

  const name = $("#name");

  firebase.database().ref(`${name.val()}/`).set({
    score: game.score
  });
  name.val("");
}
