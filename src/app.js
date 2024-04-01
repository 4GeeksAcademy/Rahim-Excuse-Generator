/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the cat", "my father", "the bird", "my neighbor"];
  let action = ["fought", "watch", "fly", "ate", "broke"];
  let what = ["the phone", "the glass", "the fence", "ninja", "thief"];
  let when = ["after lunch", "bedtime", "before the class", "while playing"];

  let excuseGenerate =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];
  let excuseSpan = document.querySelector("#excuse");
  excuseSpan.innerHTML = excuseGenerate;
};
function rand(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
