/*
A function's THIS references the execution context for that call, determined entirely by
how the function was called
*/

function ask(question) {
  console.log(this.teacher, question);
}
function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  ask.call(myContext, "Why?"); // Suzy Why?
}
otherClass();
// Dynamic Context ~= JS's Dynamic Scope
// Four ways to invoke a function

// Implicit Binding: (1)
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  }
};
workshop.ask("What is implicit binding?");
// how does the this keyword behave
// when ask question is invoked, because of the call site - workshop.ask
// the this keyword will point at the workshop

// dynamic binding -> sharing
// sharing the ask function across two different objects
// one function used in lots of different contexts
function ask(question) {
  console.log(this.teacher, question);
}
var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};
var workshop2 = {
  teacher: "Suzy",
  ask: askm
}
workshop1.ask("How do I share a method?");
// => Kyle How do I share a method?
workshop2.ask("How do I share a method?");
// => Suzy How do I share a method?

// this: explicit binding (2)
// invoke it in a particular context that I'm going to specify
function ask(question) {
  console.log(this.teacher, question);
}
var workshop1 = {
  teacher: "Kyle"
}
var workshop2 = {
  teacher: "Suzy"
}
ask.call(workshop1, 'Can I explicitly set our context')
// => Kyle Can I explicitly set context?
ask.call(workshop2, 'Can I explicitly set our context')
// => Suzy Can I explicitly set context?

// hard binding (3)
var workshop = {
  teacher: 'Kyle',
  ask(question) {
    console.log(this.teacher, question);
  }
};
setTimeout(workshop.ask, 10, "Lost this?");
// => undefined Lost this?
setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?"); // bind creates a new function always bound to the this context you specified (this case workshop)
// Kyle Hard bound this?

//  this: new binding (he says this is the 3rd way? lol) "constructor calls"
function ask(question) {
  console.log(this.teacher, question);
}
var newEmptyObject = new ask("What is 'new' doing here?");
// => undefined What is 'new' doing here?
// purpose of new keyword is to invoke a function with this pointing to a whole new empty object
/*
new steps
1) Create a brand new empty object
2) *Link that boject to another object
3) Call function with this set to the new object
4) If funciton does not return an object, assume return of this
*/

// fourth and final way the fallback - this: default binding
var teacher = "Kyle";
function ask(question) {
  console.log(this.teacher, question)
}
function askAgain(question) {
  "use strict";
  console.log(this.teacher, question)
}
ask("What's the non-strict-mode default?")
//=> Kyle What's the non-strict-mode default?
askAgain("What's the strict-mode default?")
//=> TypeError
// in non strict mode default to the global
// in strict mode you need to call bind or apply

// to determine this you have to see how it is called

/*
this determination
1) is function called by new? if so this will be the newly created object
2) is function called by call() or apply()? if so the context object that is specified will be used as this
   note bind() effectively uses apply()
3) if the function called on a context object? (like workshop.ask) - if so use that object
4) if none of these apply then we fallback to the default which is the 
  DEFAULT: global object(except strict mode)
*/

// this: arrow functions
var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100)
  }
}
workshop.ask("is this lexical 'this'?")
// Kyle Is this lexical 'this'
// arrow function does not define a this keyword at all
// so a this in an arrow function is going to lexically resolve to some scope that does define it
// go up one level of scope to the ask function