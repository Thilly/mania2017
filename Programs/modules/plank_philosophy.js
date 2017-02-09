
  var TEMPORAL_MATH = function() {};  // durations handled differently than reals?
  var SPATIAL_MATH = function() {
    // laws of universe already explain how to deal with areas/volumes.

    function add(left, right) {}
    function multiply(left, right) {}

    function plank_PP(left, right) {}  // traverse spacetime
    function plank_MM(left, right) {}  // traverse spacetime

    function plank_GP(left, right) {}  //
    function plank_GM(left, right) {}  //

    return [
      add,       // area/volume + volume
      multiply,  // geometric expansion  // # of dimensions correlates to geometric series

      plank_PP,   // slice spacetime into an additional plank, '++' (1/1 + (++denominator?)
      plank_MM,   // 'zoom' out in spacetime with one less plank, '--' (1/1 + (--denominator?)

      plank_GP,   // geometrically zoom in, 'geometric ++'
      plank_GM   // geometrically zoom out 'geometric --'
    ]
  }