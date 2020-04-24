// prototypes
// objects are built by 'contructor calls' (via new)
// a constructor call makes an object based on its own prototype
// classes / inheritance is a copy operation - distinct 'people' genetics metaphor
// constructor is (some think of it as) "making a copy of the prototype" (except javascript doesnt do any copying)
// a "constructor call" makes an object linked to its own prototype

// Prototypes: as "classes"
// function is similar to constructor
function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// => Kyle Is 'prototype' a class?
reactJS.ask("Isn't 'prototype' ugly?");
// => Suzy Isn't 'prototype' ugly?

deepJS.constructor === Workshop; // doesnt find the constructor on deepJS 
// it goes up to workshop.prototype
// and does workshop.prototype have a constructor on it? yes and it points at workshop
/*
  ----- prototype ---->
O                      []
object                 
  <--- constructor ----
*/

deepJS.__proto__ === Workshop.prototype; // true
// deepJS doesnt have a property called __proto
// it goes to Workshop.prototype and it doesnt have it
// it goes up to the Object.prototype has a getter function called __proto__
// so its going to invoke it as a function
// internally its this keyword will be deepJS
// deepJS.__proto__ is like a function call but no parenthesis
// this reaching into the internal linkage is called the prototype chain
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true

deepJS.ask = function(question) {
  // this.ask(question.toUpperCase());
  // this will point at deepJS.ask (which will cause an infinite recursion)
  // its not a relative polymorphism
  // go up one level of the prototype chain
  this.__proto__.ask.call(this, question.toUpperCase());
  // (prototypes: shadowing)
  // when you try to shadow like the class system with prototypes you break everything
  // when we override and try to extend like a class
}

/* ------------------------------*/

// prototypal inheritance
// prototypes: objects linked

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}
function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
// object create does 2 things
// first it create a brand new empty object
// then it links that object to another object
// I want anotherWorkshop.prototype to be linked to Workshop.prototype
AnotherWorkshop.prototype.speakUp = function(msg) {
  this.ask(msg.toUpperCase());
};
var JSRecentParts = new AnotherWorkshop("Kyle");
// JSRecentParts is linked to the AnotherWorkshop.prototype which is linked to Workshop.prototype
// that is the prototype chain
JSRecentParts.speakUp("Is this actually inheritance?");
// => Kyle IS THIS ACTUALLY INHERITANCE?

/* ------------------------*/
// Prototypal inheritance is a linkage, arrows right to left, bottom to top
// class / classical inheritance is a copy, left to right top to bottom arrows
// Javascript prototype system is a delegation system not a class system (opinion)