var LAWS_OF_UNIVERSE = [    // one day these wont be generic functions
  function justX (x) {
    return x;
  },
  function xSquared (x) {
    return x * x;
  },
  function xCubed (x) {
    return x * x * x;
  },
  function somethingDifferent(x) {
    return x - Math.log(x);
  },
  function squareRoot(x) {
    return Math.sqrt(x);
  }
];
var UNIVERSE = 1;  // “I think; therefore I am.” ― René Descartes
var PLANKS = 100;  // “Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.” ― Carl Sagan, Cosmos
var beginning_of_universe = UNIVERSE / PLANKS;  // The goal of life is living in agreement with nature. - Zeno of Ela
var objective_history = observe_reality();
function observe_reality() {
  var SUBJECTIVE_REALITIES = 1;   // there is noise in reality
  var objective_history = [];  // start with nothing
  for (var i = 0; i < SUBJECTIVE_REALITIES; i++) {
    objective_history.push(function(objectivity_is_unused) {
      return 1 / (1 + Math.E^-(Math.random() * 2))
    });
  }
  return objective_history + LAWS_OF_UNIVERSE;  // already there, just need to read it
}

var START_DEPTH = 0;  // begin at birth, niave, no understanding of world
var DIRECTION = 1;    // start at the end, to solve the now
var RATE_OF_CHANGE = 1/2;  // geometric refinement, adjust your reality to fit objective reality
satisfy_goals(objective_history, beginning_of_universe, DIRECTION, RATE_OF_CHANGE, START_DEPTH);

function satisfy_goals(observations, start_plank, direction, scale, depth) {
  var SUCCESS_THRESHOLD = .2; // you decide what that is
  var success = true;  // you can do it
  for (var plank = start_plank; 0 < plank < 1; plank += (scale * direction)) {
    observations = [];  // always start over
    var improving = true;  // just by trying you are doing better

    for(var i = 0; i < observations.length; i++) {
      var past_objective_reality = observations[i](plank*scale);
      var future_objective_reality = observations[i](plank*scale + scale);
      var present_objective_reality = past_objective_reality + future_objective_reality / 2;
      observations.push(present_objective_reality);
      improving = subjective_improvement_threshold(observations);
      function subjective_improvement_threshold(outputValue) {
        var BETTER = .2;  // what value are you ok with? free will.
        return outputValue > GOOD_ENOUGH_FOR_ME;
      }
    }

    if (improving && subjective_success_threshold(value)) {

    }
      function subjective_success_threshold(outputValue, satisfied) {
        // is the value from function 'true'
        return outputValue > SUCCESS_THRESHOLD
      }

    var subjective_success = subjective_success_threshold()
    function subjective_success_threshold(outputValue) {
        var GOOD_ENOUGH_FOR_ME = .4;  // what value are you ok with? still free will.
        return outputValue > GOOD_ENOUGH_FOR_ME;
      }
    if (satisfied) {
      var next_start_step = step + (scale * direction);
      var next_direction = direction * -direction;
      if (depth < MAX_DEPTH) {
        return satisfy(next_start_step, next_direction, scale * GEOMETRIC, depth++);
      }
    }
    if (depth === 0) {  // Making your mark on the world is hard. If it were easy, everybody would do it. But it’s not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama
      satisfied = true;
    }
  }
  return {
    'timeStart' : step,
    'timeEnd' : step + scale,
    'satisfied': depth > 0,
    'values' : values
  }
}

