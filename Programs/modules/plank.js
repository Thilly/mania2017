
function Plank(in_steps, in_length) {

  var step = [1];  // what portion/ratio of the context observing
  if (in_steps)
    step = in_steps;
  // array for multidimensional but still square planks

  var length = 1;  // how many slices make up this context
  if (in_length)
    length = in_length;

  function linearStepForward(step_location) {
    // step directly into the next 'sub-plank'
    var next_length = length + 1;

    step_location.forEach(function(value, index) {
      step[index] = Math.ceil(value * next_length)
    });
  }

  function linearStepBack(step_location) {
    // step backward into the 'higher' plank
    var next_length = length - 1;

    step_location.forEach(function(value, index) {
      step[index] = Math.ceil((length + value) * next_length)
    });
  }

  /*
      add,       // area/volume + volume
      multiply,  // geometric expansion  // # of dimensions correlates to geometric series

      plank_PP,   // slice spacetime into an additional plank, '++' (1/1 + (++denominator?)
      plank_MM,   // 'zoom' out in spacetime with one less plank, '--' (1/1 + (--denominator?)

      plank_GP,   // geometrically zoom in, 'geometric ++'
      plank_GM   // geometrically zoom out 'geometric --'
  */

  this.draw = function (context, offsetX, offsetY) {
    var plank_size = (1 / length) * current_plank_size;
    var height = context.canvas.height + current_plank_size;
    var width = context.canvas.width + current_plank_size;
    var opacity = (current_plank < length) ? current_plank / length : length / current_plank;
    context.translate(offsetX * length, offsetY * length);
    context.strokeStyle = 'rgba(0,0,0,' + opacity + ')';

    // longitude
    for (var penX = -plank_size; penX <= width; penX += plank_size) {
      context.beginPath();
      context.moveTo(penX, -current_plank_size);
      context.lineTo(penX, height + current_plank_size);
      context.stroke();
    }

    // latitude
    for (var penY = -plank_size; penY <= height; penY += plank_size) {
      context.beginPath();
      context.moveTo(-current_plank_size, penY);
      context.lineTo(width + current_plank_size, penY);
      context.stroke();
    }

    // labels
    for (penX = plank_size/2 - plank_size; penX <= width; penX += plank_size) {
      for (penY = plank_size/2 - plank_size; penY <= height; penY += plank_size) {
        context.strokeText(length, penX, penY)
    }}
  };

}
