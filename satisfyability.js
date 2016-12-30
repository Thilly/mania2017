var LAWS_OF_UNIVERSE = [    // one day these wont be generic functions
  function justX (x) {
    return 1 / (1 + Math.E^-(x));
  },
  function xSquared (x) {
    return 1 / (1 + Math.E^-(x*x));
  },
  function xCubed (x) {
    return 1 / (1 + Math.E^-(x*x*x));
  },
  function somethingDifferent(x) {
    return 1 / (1 + Math.E^-(x - Math.log(x)));
  },
  function squareRoot(x) {
    return 1 / (1 + Math.E^-(Math.sqrt(x)));
  }
];
var UNIVERSE = 1;  // “I think; therefore I am.” ― René Descartes
var PLANKS = 25;  // “Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.” ― Carl Sagan, Cosmos
var beginning_of_universe = UNIVERSE / PLANKS;  // The goal of life is living in agreement with nature. - Zeno of Ela
var objective_history = observe_reality();
function observe_reality() {
  var SUBJECTIVE_REALITIES = 0;   // there is noise in reality
  var objective_history = [];  // start with nothing
  for (var i = 0; i < SUBJECTIVE_REALITIES; i++) {
    objective_history.push(function(objectivity_is_unused) {
      return 1 / (1 + Math.E^-(Math.random() * 2))
    });
  }
  return objective_history.concat(LAWS_OF_UNIVERSE);  // already there, just need to read it
}

var START_DEPTH = 0;  // begin at birth, niave, no understanding of world
var DIRECTION = 1;    // aim for the end, to solve the now

satisfy_goals(objective_history, beginning_of_universe, DIRECTION, START_DEPTH);

function satisfy_goals(rigorous_observations, start_plank, direction, depth) {
  var MAX_DEPTH = 3;  // how deep are you willing to do
  var success = true;  // you can do it
  var improving = true;  // just by trying you are doing better
  var new_observations = [];  // always start over

  for (var plank = start_plank; 0 < plank && plank < 1; plank = plank + (start_plank * direction)) {
    new_observations = [];  // always start over
    improving = true;

    rigorous_observations.forEach(function(rigorous_observation) {
      debugger;
      var past_objective_reality = rigorous_observation(plank - start_plank);
      var future_objective_reality = rigorous_observation(plank);
      var present_objective_reality = past_objective_reality + future_objective_reality * .5;

      improving = improving && subjective_improvement_threshold(present_objective_reality);
      function subjective_improvement_threshold(observation) {
        var BETTER = .3;  // what value are you ok with? free will.
        return observation > BETTER;
      }

      success = success && subjective_success_threshold(present_objective_reality);
      function subjective_success_threshold(observation) {
        var GOOD_ENOUGH_FOR_ME = .5;  // what value are you ok with? still free will.
        // is the value from function 'true'
        return observation > GOOD_ENOUGH_FOR_ME;
      }
      if (success) {
        return {
          'plank_length': start_plank,
          'timeStart': plank - start_plank,
          'timeEnd': plank,
          'success': success,
          'observations': new_observations,
          'depth': depth
        };
      }
      if (improving) {
        var next_start_plank = plank - (start_plank * direction);
        var next_direction = direction * -direction;
        if (depth < MAX_DEPTH) {
          return satisfy_goals(rigorous_observations, next_start_plank, next_direction, depth++);
        }
      }
      if (depth === 0) {  // Making your mark on the world is hard. If it were easy, everybody would do it. But it’s not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama
        success = true;
      }
    });
  }

  return {
    'plank_length': start_plank,
    'timeStart': plank - start_plank,
    'timeEnd': plank,
    'success': depth > 0,
    'improving': improving,
    'observations': new_observations,
    'depth': depth
  };
}

