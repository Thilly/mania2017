var DEFAULT_STEP = 1;
var CANVAS, CONTEXT;
var MAX_PLANKS = 10;
var DRAW_ALL_PLANKS = true;
var PLANKS_TO_DRAW = 3;
var DEFAULT_PLANK_SIZE = 800;


var OFFSETX = 0;
var OFFSETY = 0;
var current_plank = 1;
var current_plank_size = DEFAULT_PLANK_SIZE;
var planks = [];

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = canvas.getContext('2d');

  for(var i = 0; i < MAX_PLANKS; i++) {
    planks.push(new Plank([1], i));
  }
  window.addEventListener('keydown', handlePress);
  CANVAS.addEventListener('click', handleClick);
  CANVAS.addEventListener('contextmenu', handleRightClick);
  draw();
};

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  var start_plank = (current_plank > 1) ? current_plank - 1 : 1;
  var visible_planks = (DRAW_ALL_PLANKS) ? planks : planks.slice(start_plank, start_plank + PLANKS_TO_DRAW);
  visible_planks.forEach(function(plank) {
    plank.draw(CONTEXT, OFFSETX, OFFSETY);
    CONTEXT.setTransform(1, 0, 0, 1, 0, 0);
  });
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

function handleRightClick(event) {
  event.preventDefault();
  var translate = getClickedPlank(event);
  moveOut();
  draw();
  return false
}

function handleClick(event) {
  event.preventDefault();
  var translate = getClickedPlank(event);
  moveIn();
  draw();
  return false;
}

function moveIn() {
  current_plank += 1;
  if (current_plank > MAX_PLANKS) {
    current_plank = MAX_PLANKS;
  }
  current_plank_size = DEFAULT_PLANK_SIZE * current_plank;
}

function moveOut() {
  current_plank -= 1;
  if (current_plank < 1) {
    current_plank = 1;
  }
  current_plank_size = DEFAULT_PLANK_SIZE * current_plank;
}

function getClickedPlank(event) {
  for (var i = 0; i < planks.length; i++) {
    var xPos = Math.floor(event.x / i);
    var yPos = Math.floor(event.y / i);
    console.log('x:' + xPos + ' y:' + yPos + ' plank_length:' + i);
  }

  return {
    x: xPos,
    y: yPos,
    length: i
  }
}
