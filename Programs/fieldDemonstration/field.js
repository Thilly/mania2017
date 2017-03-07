var CANVAS_SIZE = 800;
var MAX_DOTS = 25;
var MAX_VALUE = CANVAS_SIZE/MAX_DOTS;
var DOT_RADIUS = MAX_VALUE/2;
var ACTOR_RADIUS = DOT_RADIUS * 2;

var ACTOR_SPEED = 5;
var FRAME_RATE = 1000/60;

var dots = [];  // will act as 'field'
var actors = [];  // will act as 'field perturbations'

/*
  goal is to have the field update itself depending on the position of the actors
*/

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = canvas.getContext('2d');

  var spacing = CANVAS_SIZE / MAX_DOTS;
  for(var i = 0; i < MAX_DOTS; i++) { // across
    for(var j = 0; j < MAX_DOTS; j++) { // down
      dots.push(new Dot(i * spacing + DOT_RADIUS, j * spacing + DOT_RADIUS, 'black'));
    }
  }
  actors.push(new Actor(100, 600, 'blue'));
  actors.push(new Actor(100, 200, 'green'));
  setInterval(draw, FRAME_RATE);
};

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  dots.forEach(function(dot) {
    dot.updateValues(actors);
    dot.draw(CONTEXT);
  });
  actors.forEach(function(actor) {
    actor.draw(CONTEXT);
  });
}