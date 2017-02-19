var VIEW_SCALE = 1;  // will move as part of 'navigation'
var DEFAULT_STEP = 1;
var CANVAS, CONTEXT;
var OFFSETX = 0;
var OFFSETY = 0;
var planks = [];
var DRAW_ALL_PLANKS = true;

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = canvas.getContext('2d');

  planks = [
    new Plank([1], 1),
    new Plank([1], 2),
    new Plank([1], 3),
    new Plank([1], 4),
    new Plank([1], 5),
    new Plank([1], 6),
    new Plank([1], 7),
    new Plank([1], 8),
    new Plank([1], 9),
    new Plank([1], 10)
  ];
  window.addEventListener('keydown', handlePress);
  CANVAS.addEventListener('click', handleClick);
  CANVAS.addEventListener('contextmenu', handleRightClick);
  draw();
};

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  var start_plank = (VIEW_SCALE - 1 > 0)?VIEW_SCALE - 1:0;
  if (DRAW_ALL_PLANKS) {
    planks.forEach(function(plank) {
      plank.draw(CONTEXT, OFFSETX, OFFSETY);
      CONTEXT.setTransform(1, 0, 0, 1, 0, 0);
    })
  } else {
    for (var i = start_plank; i < start_plank + 3; i++) {
      planks[i].draw(CONTEXT, OFFSETX, OFFSETY);
      CONTEXT.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
}

var key_functions = [];
// TODO: create methods on plank/universe for navigation?
// TODO: leave as the goldfish/camera/agent of navigation?

function moveUp() {
// Ww 'up' 87, 38
  if (OFFSETY > 0)
    OFFSETY -= DEFAULT_STEP
}
key_functions[87] = moveUp;
key_functions[38] = moveUp;

function moveDown() {
// Ss 'down' 83, 40
  if (OFFSETY < DEFAULT_PLANK_SIZE)
    OFFSETY += DEFAULT_STEP
}
key_functions[83] = moveDown;
key_functions[40] = moveDown;

function moveLeft() {
// Aa 'left' 65, 37
  if (OFFSETX > 0)
    OFFSETX -= DEFAULT_STEP
}
key_functions[65] = moveLeft;
key_functions[37] = moveLeft;

function moveRight() {
// Dd 'right' 68, 39
  if (OFFSETX < DEFAULT_PLANK_SIZE)
    OFFSETX += DEFAULT_STEP
}
key_functions[68] = moveRight;
key_functions[39] = moveRight;

function handlePress(event) {
  if (key_functions[event.keyCode]) {
    key_functions[event.keyCode]();
    draw();
  }
}

function handleRightClick(event){
  handleClick(event);
  return false
}

function handleClick(event) {
  event.preventDefault();
}





