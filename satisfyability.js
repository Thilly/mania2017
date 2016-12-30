'use strict';

/**
 *  The functions are 'plotted' in a duration and the duration is chopped up.
 *  Each plank of the duration is checked for satisfyability.
 *  If M is the number of planks
 *  If N is the number of functions
 *  O(N*M) for satisfyability?
 */

var STEPS = 100;               // resolution of satisfyability
var DELTA_T = 1 / STEPS;       // plank of time between start and end
var REQUIRED_CONFIDENCE = .2;  // sigmoid training, use between zero 1
var NUM_FAKE_FUNCS = 1;       // how many 'noise' functions to add

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
  function somethingDifferent(timeValue) {
    return timeValue - Math.log(timeValue);
  },
  function squareRoot(timeValue) {
    return Math.sqrt(timeValue);
  }
];

function getZeta() {
  var fakeFunctions = FUNCTIONS;
  for (var i = 0; i < NUM_FAKE_FUNCS; i++) {
    fakeFunctions.push(function(timeValue){
      return 1 / (1 + Math.E^-(Math.random() * 2))
    });
  }
  return fakeFunctions;
}

function averageFunction(currentFunction, timeValue) {
  return (currentFunction(timeValue) + currentFunction(timeValue + DELTA_T)) / 2;
}

function confidenceChecker (outputValue) {
  // is the value from function 'true'
  return outputValue > REQUIRED_CONFIDENCE
}

function satisfy() {
  var zeta = getZeta(10);
  for(var step = 0; step < STEPS; step++) {
    var satisfied = true;
    var values = [];
    for(var i = 0; i < zeta.length; i++) {
      var value = averageFunction(zeta[i], step * DELTA_T);
      values.push(value);
      satisfied = satisfied && confidenceChecker(value);
    }
    if (satisfied) {
      return step;
    }
    console.log(values);
  }
  return satisfied;
}

satisfy();

