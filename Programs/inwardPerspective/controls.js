
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
