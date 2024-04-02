/* eslint-disable */

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// excuses
let who = ["the cat", "my father", "the bird", "my neighbor"];
let action = ["fought", "watch", "fly", "ate", "broke"];
let what = ["the phone", "the glass", "the fence", "ninja", "thief"];
let when = ["after lunch", "bedtime", "before the class", "while playing"];
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
}
const randomExcuse = Math.floor(Math.random() * generateExcuse.length);
