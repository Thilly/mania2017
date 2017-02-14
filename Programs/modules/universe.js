
var UNIVERSE = function() {
  var SEED = Math.random();  // “The beginning is the most important part of the work.” ― Plato, The Republic
  var DURATION = 1;

  function UNIVERSAL_CONSTANT(plank_duration) {
    return SEED;
  }
  function UNIVERSAL_DURATION (plank_duration) {
    return DURATION;
  }
  function UNIVERSAL_ENERGY (plank_duration) {
    var energy = Math.pow(Math.E, -UNIVERSAL_SQUARE(plank_duration));  //
    return 1 / (1 + energy);  //
  }

  function N_DIMENSIONAL_SPACE(dimensions, plank_duration) {
    if (dimensions === 0) {
      plank_duration = plank_duration + this.UNIVERSAL_CONSTANT();
    } else {
      plank_duration = plank_duration * this.N_DIMENSIONAL_SPACE(--dimensions);  // "yada yada" - https://www.youtube.com/watch?v=gJpgW2cRIsk
    }
    return plank_duration;
  }

  function OBJECTIVE_OBSERVATION (plank_duration) {
    return [
      UNIVERSAL_CONSTANT(plank_duration),
      UNIVERSAL_LINEAR(plank_duration),
      UNIVERSAL_SQUARE(plank_duration),
      UNIVERSAL_CUBE(plank_duration),
      UNIVERSAL_ENERGY(plank_duration)
    ];
  }  // query the universe

  /** needed? **/

  function UNIVERSAL_LINEAR (plank_duration) {
    return plank_duration + UNIVERSAL_CONSTANT(plank_duration);  // electron, qubit, super_plank stars, (1d projection into 2d spacetime)
  } // "I want to build a Taj Mahal that will never get its last tile."
  function UNIVERSAL_SQUARE (plank_duration) {
    return plank_duration * plank_duration + UNIVERSAL_LINEAR(plank_duration);  // phospho-lipid bilayer, (2d projection into 3d spacetime)
  }
  function UNIVERSAL_CUBE (plank_duration) {
    return plank_duration * plank_duration * plank_duration + UNIVERSAL_SQUARE(plank_duration);  // sub_plank strings, super_plank black holes (3d projection into 4d spacetime)
  }

  return {
    'UNIVERSAL_DURATION': UNIVERSAL_DURATION,
    'OBJECTIVE_OBSERVATION': OBJECTIVE_OBSERVATION,
    'UNIVERSAL_CONSTANT': UNIVERSAL_CONSTANT
  };
}; // “If you wish to make an apple pie from scratch, you must first invent the universe.” ― Carl Sagan

module.exports = UNIVERSE;