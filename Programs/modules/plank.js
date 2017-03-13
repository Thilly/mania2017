var COLORS = [
  'black',
  'blue',
  'green',
  'red'
];
function Plank(in_length) {

  this.length = in_length;  // how many slices make up this context

  this.draw = function (context) {
    var plank_size = (1 / this.length) * current_plank.size;
    var height = context.canvas.height * current_plank.length;
    var width = context.canvas.width * current_plank.length;

    context.strokeStyle = COLORS[this.length % COLORS.length];
    context.fillStyle = COLORS[this.length % COLORS.length];
    context.lineWidth = 2;

    // longitude
    for (var penX = -plank_size; penX <= width; penX += plank_size) {
      context.beginPath();
      context.moveTo(penX, -current_plank.size);
      context.lineTo(penX, height + current_plank.size);
      context.stroke();
    }

    // latitude
    for (var penY = -plank_size; penY <= height; penY += plank_size) {
      context.beginPath();
      context.moveTo(-current_plank.size, penY);
      context.lineTo(width + current_plank.size, penY);
      context.stroke();
    }

    // labels
    // todo: add query for data, keys: "x,y/length"
    for (penX = (plank_size/2 - plank_size); penX <= width; penX += plank_size) {
      for (penY = (plank_size/2 - plank_size); penY <= height; penY += plank_size) {
        context.fillText(this.length.toString(), penX, penY)
    }}
  };

}

function moveIn() {
  current_plank.length += 1;
  current_plank.size = DEFAULT_PLANK_SIZE * current_plank.length;
}

function moveOut() {
  current_plank.length -= 1;
  current_plank.size = DEFAULT_PLANK_SIZE * current_plank.length;
}

function getClickedPlank(event) {
  var xClick = (current_plank.stepX * DEFAULT_PLANK_SIZE) + event.x;
  var yClick = (current_plank.stepY * DEFAULT_PLANK_SIZE) + event.y;  // normailzed to context
  var next_length = current_plank.length + 1;
  return {
    size: DEFAULT_PLANK_SIZE / next_length,
    length: current_plank.length + 1,
    stepX: Math.floor(xClick / (DEFAULT_PLANK_SIZE * current_plank.length / next_length)),
    stepY: Math.floor(yClick / (DEFAULT_PLANK_SIZE * current_plank.length / next_length))
  };
}

function getLastPlank(){
  return plank_history.pop();
}

function copyPlank(in_plank) {
  return {
    size: in_plank.size,
    length: in_plank.length,
    stepX: in_plank.stepX,
    stepY: in_plank.stepY
  }
}
