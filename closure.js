/*
Closure is when a function 'remembers' its lexical scope
even when the function is executed outside of that lexical scope
*/

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
  ask("What is closure");
}

// closure is a linkage to the entire scope not a per variable basis

function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is closure?");
myQuestion();

// its not a snapshot

var teacher = "Kyle";
var myTeacher = function() {
  console.log(teacher);
}
teacher = "Suzy";
myTeacher(); // => Suzy because we closed over the variable teacher. not the value Kyle

// think of it as preserving access to variables

for(var i=1; i<=3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}
// i : 4
// i : 4
// i : 4
// this function has the appearance of closing over the i value on each iteration
// so we expect it to print i 1 i 2 i 3
// but when we run it it prints 4 4 4 because theres only one i variable
// indstead:
for (var i=1; i<=3;i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, j * 1000);
}
// using let will create a new i for each iteration
for(let i = 1; i<=3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}
// which means the closure just magically works

