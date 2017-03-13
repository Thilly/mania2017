var CANVAS, CONTEXT, DEFAULT_PLANK_SIZE, INTERVAL;
var MAX_PLANKS = 10;
var DRAW_ALL_PLANKS = false;
var PLANKS_TO_DRAW = 4;
var ANIMATION_FRAMES = 100;
var FRAME_RATE = 1000/60;

var planks = [];
var plank_history = [];

var current_plank = {
  size: DEFAULT_PLANK_SIZE,
  length: 1,
  stepX: 0,
  stepY: 0
};
var target_plank = {
  size: DEFAULT_PLANK_SIZE,
  length: 1,
  stepX: 0,
  stepY: 0
};

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = CANVAS.getContext('2d');
  resizeCanvas();
  for(var i = 0; i < MAX_PLANKS; i++) {
    planks.push(new Plank(i));
  }

  CANVAS.addEventListener('click', handleClick);
  CANVAS.addEventListener('contextmenu', handleRightClick);
  draw(current_plank);
  var data = query(current_plank);
  if(data.text) {
    renderQueriedData(current_plank, data.text);
  }
};

window.onresize = function() {
  resizeCanvas();
  draw(current_plank);
};

function draw(target) {
  var start_plank = (current_plank.length > 1) ? current_plank.length - 1 : 1;
  var visible_planks = (DRAW_ALL_PLANKS) ? planks : planks.slice(start_plank, start_plank + PLANKS_TO_DRAW);
  var offsetX = target.stepX * DEFAULT_PLANK_SIZE;
  var offsetY = target.stepY * DEFAULT_PLANK_SIZE;

  CONTEXT.setTransform(1, 0, 0, 1, 0, 0);
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  CONTEXT.translate(-offsetX, -offsetY);
  CONTEXT.font = '24px sans-serif';

  visible_planks.forEach(function(plank) {
    plank.draw(CONTEXT, offsetX, offsetY);
  });
  var data = query(target);
  if(data.text) {  // display static content
    renderQueriedData(target, data.text);
  } else if(buildDBString(target)) {  // print db query
    renderQueriedData(target, buildDBString(target));
  } else {  // print coords
    renderQueriedData(target, data);
  }
}

function query(plank) { // todo: geoSearch a datastore
  var content_key = plank.stepX + ',' + plank.stepY + '/' + plank.length;
  if(CONTENT[content_key]) {
    return CONTENT[content_key];
  } else return content_key;
}

function renderQueriedData(plank, data) { //todo: make queried data a 'drawable' for rendering different media
  CONTEXT.fillText(data, (plank.stepX * DEFAULT_PLANK_SIZE) + 100, (plank.stepY * DEFAULT_PLANK_SIZE) + 100)
}


function resizeCanvas() {
  var size = (window.innerHeight > window.innerWidth)? window.innerWidth : window.innerHeight;
  size -= 10;
  CANVAS.width = size;
  CANVAS.height = size;
  DEFAULT_PLANK_SIZE = size;
  current_plank.size = DEFAULT_PLANK_SIZE;
}
