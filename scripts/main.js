import Game from './classes/game.js';
import BackgroundRender from './classes/background_render.js';
import setupControlls from './controls_setup.js';
import {highScoreSubmit} from './high_score_util.js';

const config = {
  apiKey: "AIzaSyB_iaetuKXXZBn_wsOyY3XNOoUfHQc60FU",
  authDomain: "space-invaders-9fbaa.firebaseapp.com",
  databaseURL: "https://space-invaders-9fbaa.firebaseio.com",
  projectId: "space-invaders-9fbaa",
  storageBucket: "space-invaders-9fbaa.appspot.com",
  messagingSenderId: "1056563876723"
};


export const lifeBar = $("#life-bar")[0];
export const game = new Game(window);
export const backgroundRender = new BackgroundRender();
export let backgroundInterval = null;

backgroundRender.initiateBackground();
setupControlls(document);

document.addEventListener("DOMContentLoaded", function (e) {
  firebase.initializeApp(config);
  $("#high-score").submit(highScoreSubmit);
  backgroundInterval = setInterval(game.playBackgournd, 20);

  // firebase.database().ref('name2/').set({
  //   score: 200
  // });
  // firebase.database().ref('name1/').set({
  //   score: 100
  // });
  //
  // firebase.database().ref('/').once('value').then((r) => {debugger;});
});
