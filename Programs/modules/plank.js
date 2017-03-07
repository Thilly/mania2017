var COLORS = [
  'black',
  'blue',
  'green',
  'red',
  'black',
  'blue',
  'green',
  'red',
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

    context.strokeStyle = COLORS[this.length];
    context.fillStyle = COLORS[this.length];
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
