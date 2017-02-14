
var DEFAULT_PLANK_SIZE = 400;
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

  this.draw = function (context, view_scale) {
    var plank_size = (view_scale / length) * DEFAULT_PLANK_SIZE;

    // longitude
    for (var penX = 0; penX < context.canvas.width; penX += plank_size) {
      context.beginPath();
      context.moveTo(penX, 0);
      context.lineTo(penX, context.canvas.height);
      context.strokeStyle = 'rgba(0,0,0,' + view_scale / length + ')';
      context.stroke();
    }

    // latitude
    for (var penY = 0; penY < context.canvas.height; penY += plank_size) {
      context.beginPath();
      context.moveTo(0, penY);
      context.lineTo(context.canvas.width, penY);
      context.strokeStyle = 'rgba(0,0,0,' + view_scale / length + ')';
      context.stroke();
    }

    // labels
    for (penX = plank_size/2; penX < context.canvas.width; penX += plank_size) {
      for (penY = plank_size/2; penY < context.canvas.height; penY += plank_size) {
        context.strokeText(length, penX, penY)
    }}
  };

}
