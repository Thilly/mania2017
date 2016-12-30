var UNIVERSE = function() {
  var seed = Math.random();
  this.UNIVERSAL_CONSTANT = function(plankSpaceTime) {
    return seed;
  };

  this.UNIVERSAL_LINEAR = function(plankSpaceTime) {
    return plankSpaceTime + UNIVERSAL_CONSTANT(plankSpaceTime);
  };
  this.UNIVERSAL_SQUARE = function(plankSpaceTime) {
    return plankSpaceTime * plankSpaceTime + UNIVERSAL_LINEAR(plankSpaceTime);
  };

  this.UNIVERSAL_DURATION = function(plankSpaceTime) {
    return 1;
  };
  this.UNIVERSAL_ENERGY = function(plankSpaceTime) {
    return Math.E^plankSpaceTime;
  };

  this.OBJECTIVE_OBSERVATION = function(plankSpaceTime) {
    return [
      this.UNIVERSAL_CONSTANT(plankSpaceTime),
      this.UNIVERSAL_LINEAR(plankSpaceTime),
      this.UNIVERSAL_SQUARE(plankSpaceTime),
      this.UNIVERSAL_ENERGY(plankSpaceTime)
    ];
  }
}; // “If you wish to make an apple pie from scratch, you must first invent the universe.” ― Carl Sagan, Cosmos
var BEGINNING = 0;  //
var reality = new UNIVERSE();  // “I think; therefore I am.” ― René Descartes
var plank_length = reality.UNIVERSAL_DURATION();  //
var HUMAN_PLANKS = 12016;  // "https://www.youtube.com/watch?v=czgOWmtGVGs" -Kurzgesagt – In a Nutshell
var reality_plank_length = plank_length/HUMAN_PLANKS;
var beginning_of_reality = reality_plank_length;  // The goal of life is living in agreement with nature. - Zeno of Ela
var objective_history = observe_reality(beginning_of_reality);  //
function observe_reality(plank_length) {
  var objective_history = reality.OBJECTIVE_OBSERVATION(plank_length);
  var subjective_history = [];
  var number_arbitrary_requirements = 0;

  for (var i = 0; i < number_arbitrary_requirements; i++) {
    subjective_history.push(function(objectivity_is_unused) {
      return 1 / (1 + Math.E^-(Math.random() * 2))
    });
  }
  return objective_history.concat(subjective_history);  // already there, just need to read it
}

console.log('before_staisfy');
var statistically_objective_direction_to_a_subjective_goal = statistically_predict_future(objective_history, beginning_of_reality, plank_length, BEGINNING);
console.log('after_staisfy');

function statistically_predict_future(rigorous_observations, plank_size, plank_time, depth) {
  console.log('top_staisfy');
  var MAX_DEPTH = 2;
  var success = true;  // “I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?” ― John Lennon
  var improving = true;
  var all_observations = [];  //

  var subjective_future_goal = look_inward(plank_size * plank_time, ++depth);
  function look_inward(plankSpaceTime, depth) {
    console.log('top_inward');
    var pondered_observations = null;
    all_observations = [];
    improving = true;
    do {
      var new_observations = [];
      console.log('top_do: ' + plankSpaceTime);
      for (var i = 0; i < rigorous_observations.length; i++) {
        var rigorous_observation = rigorous_observations[i];
        var historic_signifigance = rigorous_observation(plankSpaceTime * .5);
        var present_objective_reality = (historic_signifigance + rigorous_observation(plankSpaceTime)) * .5;
        new_observations.push(present_objective_reality);
      }
      console.log('observations: ' + new_observations);

      improving = subjective_improvement_threshold(new_observations);
      function subjective_improvement_threshold(observations) {
        var BETTER = .5;  // what value are you ok with? free will.
        var general_trend = observations.reduce(function(a, b) { return a + b});
        var subjective_improvement_value = general_trend * 1/observations.length;
        return subjective_improvement_value > BETTER;
      }

      success = success && subjective_success_threshold(new_observations);
      function subjective_success_threshold(observations) {
        var GOOD_ENOUGH_FOR_ME = .7;  // what value are you ok with? still free will.
        var general_trend = observations.reduce(function(a, b) { return a + b});
        console.log('general_trend: ' + general_trend);
        var subjective_success_value = general_trend * 1/observations.length;
        console.log('subjective_success_value: ' + subjective_success_value);
        return subjective_success_value > GOOD_ENOUGH_FOR_ME;
      }

      if (success) {
        return {
          'plank_length': plank_size,
          'timeStart': plankSpaceTime - plank_size,
          'timeEnd': plankSpaceTime,
          'success': depth > 0,
          'improving': improving,
          'observations': all_observations,
          'depth': depth
        };
      } else if (improving) {
        console.log('improving: ' + depth);
        console.log('improving: ' + plankSpaceTime);
        console.log('improving: ' + new_observations);
        if (depth < MAX_DEPTH) {
          var future_plank = plankSpaceTime * 1.33333333;
          pondered_observations = null;
          if (0 < future_plank && future_plank < 1) {
            pondered_observations = look_inward(future_plank, ++depth);
            if (pondered_observations['success']) {
              return pondered_observations;
            }
          }
        }
      }
      plankSpaceTime += plank_size;
      all_observations.push({
        'plank_length': plank_size,
        'timeStart': plankSpaceTime - plank_size,
        'timeEnd': plankSpaceTime,
        'success': success,
        'improving': improving,
        'observations': new_observations,
        'depth': depth
      });
    } while (0 < plankSpaceTime && plankSpaceTime < 1); // Making your mark on the world is hard. If it were easy, everybody would do it. But it’s not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama

    return pondered_observations || {
      'plank_length': plank_size,
      'timeStart': plankSpaceTime - plank_size,
      'timeEnd': plankSpaceTime,
      'success': depth > 0,
      'improving': improving,
      'observations': all_observations,
      'depth': depth
    };
  }

  return subjective_future_goal;
}

console.log(statistically_objective_direction_to_a_subjective_goal['success']);
console.log(statistically_objective_direction_to_a_subjective_goal['plank_length']);
console.log(statistically_objective_direction_to_a_subjective_goal['timeStart']);
console.log(statistically_objective_direction_to_a_subjective_goal['timeEnd']);

// “Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.” ― Carl Sagan, Cosmos
// “People are afraid of themselves, of their own reality; their feelings most of all. People talk about how great love is, but that’s bullshit. Love hurts. Feelings are disturbing. People are taught that pain is evil and dangerous. How can they deal with love if they’re afraid to feel? Pain is meant to wake us up. People try to hide their pain. But they’re wrong. Pain is something to carry, like a radio. You feel your strength in the experience of pain. It’s all in how you carry it. That’s what matters. Pain is a feeling. Your feelings are a part of you. Your own reality. If you feel ashamed of them, and hide them, you’re letting society destroy your reality. You should stand up for your right to feel your pain.” ― Jim Morrison
// “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss
// "Go and do amazing things." - Thilly