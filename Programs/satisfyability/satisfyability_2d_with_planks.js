'use strict';

/**
 *  The functions are 'plotted' in a duration and the duration is chopped up.
 *  Each plank of the duration is checked for satisfyability.
 *  If M is the number of planks
 *  If N is the number of functions
 *  O(N*M) for brute force satisfyability in continuous space
 */

var STEPS = 100;               // 'resolution' of planks
var PLANK_LENGTH = 1 / STEPS;  // plank of time between start and end
var REQUIRED_CONFIDENCE = .6;  // sigmoid confidence, to determine 'truth' value between 0 and 1

var EXTRA_FUNCTIONS = 50;      // how many additional functions to add
var MIN_TO_SATISFY = 15;       // how many functions must be 'true/confident' to satisfy

var FUNCTIONS = [              // few generic functions
  function justX (timeValue) {
    return timeValue;
  },
  function xSquared (timeValue) {
    return timeValue * timeValue;
  },
  function xCubed (timeValue) {
    return timeValue * timeValue * timeValue;
  },
  function squareRoot(timeValue) {
    return Math.sqrt(timeValue);
  },
  function somethingDifferent(timeValue) {
    return timeValue - Math.log(timeValue);
  }
];

function satisfy(function_list, plank_length) {  // given a list of observations, and a plank, see if it can be satisfied
  for(var plank = plank_length; plank < 1; plank += plank_length) {
    var satisfied = 0;  // keep count of how many criteria have been satisfied within this plank

    var values = function_list.map(function(observation) {
      var value = observation(plank);
      satisfied += confidenceChecker(value);
      return value;
    });

    if (satisfied > MIN_TO_SATISFY) {
      console.log(values);
      console.log('Satisfied by: ' + plank);
      return values;
    }
  }
  console.log(values);
  console.log('Not satisfied by: ' + plank);
  return values;
}

function fake_noise(seed) {
  return function(timeValue) {
    return seed * timeValue;
  };
}

function get_functions(fake_count) {
  var fakeFunctions = FUNCTIONS;
  fake_count = fake_count || EXTRA_FUNCTIONS;
  for (var i = 0; i < fake_count; i++) {
    var seed = Math.random();
    fakeFunctions.push(fake_noise(seed));
  }
  return fakeFunctions;
}

function confidenceChecker (outputValue) {
  // is the value from function 'true'
  return outputValue > REQUIRED_CONFIDENCE
}

satisfy(get_functions(), PLANK_LENGTH);

