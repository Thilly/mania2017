var MAX_DOTS = 20;
var CANVAS_SIZE = 800;
var DOT_RADIUS = 10;
var ACTOR_RADIUS = 20;
var MAX_VALUE = 20;
var ACTOR_SPEED = 5;

var dots = [];  // will act as 'field'
var actors = [];  // will act as 'field perturbations'

/*
  goal is to have the actors modify the underlying field, the 'dots' will update their values based on the position of the actors.
  //todo: dots don't point correct direction
  //todo: dots have wrong color
*/

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = canvas.getContext('2d');

  var spacing = CANVAS_SIZE / MAX_DOTS;
  for(var i = 0; i < MAX_DOTS; i++) { // across
    for(var j = 0; j < MAX_DOTS; j++) { // down
      dots.push(new Dot(i * spacing + DOT_RADIUS, j * spacing + DOT_RADIUS, 'red'));
    }
  }
  actors.push(new Actor(100, 600, 'blue'));
  actors.push(new Actor(100, 200, 'green'));
  setInterval(draw, 50);
};

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  actors.forEach(function(actor) {
    actor.draw(CONTEXT);
  });
  dots.forEach(function(dot) {
    dot.updateValues(actors);
    dot.draw(CONTEXT);
  });

}