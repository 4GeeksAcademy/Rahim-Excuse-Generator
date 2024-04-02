window.onload = () => {
  document.querySelector("#button").addEventListener("click"),
    () => {
      document.querySelector("#excuse").innerHTML * generateExcuse();
    };
  console.log("excuses");
};

// excuses variables declared
let who = ["the cat", "my father", "the bird", "my neighbor"];
let action = ["fought", "watch", "fly", "ate", "broke"];
let what = ["the phone", "the glass", "the fence", "ninja", "thief"];
let when = ["after lunch", "bedtime", "before the class", "while playing"];
// function declared
let generateExcuse = () => {
  let randomWho = [Math.floor(Math.random() * who.length)];
  let randomAction = [Math.floor(Math.random() * action.length)];
  let randomWhat = [Math.floor(Math.random() * what.length)];
  let randomWhen = [Math.floor(Math.random() * when.length)];
  //concatinating all the variables
  return (
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen]
  );
};
