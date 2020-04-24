// oloo pattern - objects link to other objects
var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  }
};
var AnotherWorkshop = Object.assign(
  Object.create(Workshop),
  {
    speakUp(msg) {
      this.ask(msg.toUpperCase());
    }
  }
);

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?");
// => Kyle BUT ISN'T THIS CLEANER?

// argues that this is better than class equivalent
// how does object.create do its magic? 
// here was the old polyfil

if(!Object.create) {
  Object.create = function (o) {
    function F() {} // it literally make an empty function
    F.prototype = o; // sets its prototype to some o
    return new F(); // and it calls new on that who cares whatever function
  };
}
// to give us the newly created object
// .create takes all the constructor functions and prototypes and new keywords and hides them