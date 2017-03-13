var DEFAULT_STEP = 1;
var OFFSETX = 0;
var OFFSETY = 0;

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
  if (plank_history.length > 0) {
    target_plank = getLastPlank();
    moveOut();
    draw(target_plank);
    current_plank = {
      size: target_plank.size,
      length: target_plank.length,
      stepX: target_plank.stepX,
      stepY: target_plank.stepY
    };
  }
  return false
}

function handleClick(event) { //todo: animate traversals
  event.preventDefault();
  target_plank = getClickedPlank(event);
  if(target_plank.length + PLANKS_TO_DRAW > planks.length) {
    planks.push(new Plank(planks.length));
  }
  plank_history.push(copyPlank(current_plank));
  moveIn();
  draw(target_plank);
  current_plank = {
    size: target_plank.size,
    length: target_plank.length,
    stepX: target_plank.stepX,
    stepY: target_plank.stepY
  };
  return false;
}
