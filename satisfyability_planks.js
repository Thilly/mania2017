var UNIVERSE = function() {
  var SEED = Math.random();
  var DURATION = 1;

  this.UNIVERSAL_CONSTANT = function(plankSpaceTime) {
    return SEED;
  };

  this.UNIVERSAL_LINEAR = function(plankSpaceTime) {
    return plankSpaceTime + this.UNIVERSAL_CONSTANT(plankSpaceTime);
  };
  this.UNIVERSAL_SQUARE = function(plankSpaceTime) {
    return plankSpaceTime * plankSpaceTime + this.UNIVERSAL_LINEAR(plankSpaceTime);
  };

  this.UNIVERSAL_DURATION = function(plankSpaceTime) {
    return DURATION;
  };

  this.UNIVERSAL_ENERGY = function(plankSpaceTime) {
    var energy = Math.pow(Math.E, -this.UNIVERSAL_SQUARE(plankSpaceTime));  //
    return 1 / (1 + energy);  //
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
var entropy = reality.UNIVERSAL_ENERGY(plank_length);

var HUMAN_PLANKS = 12016;  // "https://www.youtube.com/watch?v=czgOWmtGVGs" -Kurzgesagt – In a Nutshell
var reality_plank_length = plank_length/HUMAN_PLANKS;
var beginning_of_reality = reality_plank_length;  // The goal of life is living in agreement with nature. - Zeno of Ela
var OBJECTIVE_HISTORY = observe_reality(beginning_of_reality);  //
function observe_reality(plank_length) {
  return reality.OBJECTIVE_OBSERVATION(plank_length);
}

var statistically_objective_direction_to_a_subjective_goal = statistically_predict_subjective_goal(beginning_of_reality, plank_length, BEGINNING);
function statistically_predict_subjective_goal(plank_size, plank_time, depth) {
  console.log('statistically_predict_subjective_goal');
  //console.log('plank_size:' + plank_size);
  //console.log('plank_time:' + plank_time);
  var SUBJECTIVE_SUCCESS = .7;
  var SUBJECTIVE_IMPROVEMENT = .25;  // what value are you ok with? free will.
  var MAX_DEPTH_WILLING_TO_LOOK = 2;  //
  var subjective_sucess_value = 1;  // “I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?” ― John Lennon
  var subjective_improvement_value = 1; //
  var subjective_history = observe_subjective_reality(plank_size);

  function observe_subjective_reality(objectivity) {
    var subjective_history = [];
    var number_arbitrary_requirements = 1;
    for (var i = 0; i < number_arbitrary_requirements; i++) {
      subjective_history.push((function(objectivity_is_unused) {
        return 1 / (1 + Math.E^-(Math.random() * 2))
      })(objectivity));
    }
    return subjective_history.concat(OBJECTIVE_HISTORY);
  }

  var subjective_historic_trend = aggregate_history(subjective_history);
  function aggregate_history(subjective_history) {
    return subjective_history.reduce(function(a, b){ return a + b}) * 1/subjective_history.length
  }

  var subjective_future_goal = look_inward(plank_size * plank_time, ++depth);
  function look_inward(plankSpaceTime, depth) {
   // console.log('top_inward:' + plankSpaceTime);
    var pondered_observations = null;
    subjective_improvement_value = 1;
    do {
      var new_observations = [];
    //  console.log('top_do: ' + plankSpaceTime);
      subjective_history = observe_subjective_reality(plankSpaceTime * .5);
      subjective_historic_trend = aggregate_history(subjective_history);

 //     console.log('subjective_history: ' + subjective_history);
      var present_subjective_reality = observe_subjective_reality(plankSpaceTime);
      var present_subjective_trends = aggregate_history(present_subjective_reality);

 //     console.log('present_subjective_reality: ' + present_subjective_reality);

      var subjective_reality = aggregate_history([subjective_historic_trend, present_subjective_trends]);
 //     console.log('subjective_reality: ' + subjective_reality);
      new_observations.push(subjective_reality);
//      console.log('observations: ' + new_observations);

      subjective_improvement_value = find_subjective_improvement_value(new_observations);
      function find_subjective_improvement_value(observations) {
        return aggregate_history(observations);
      }

      subjective_sucess_value = (subjective_sucess_value + subjective_success_value(new_observations)) * .5;
      function subjective_success_value(observations) {
        return aggregate_history(observations);
      }

      if (subjective_sucess_value > SUBJECTIVE_SUCCESS) {
        return {
          'plank_length': plank_size,
          'plank_time': plank_time,
          'success': subjective_sucess_value,
          'improving': subjective_improvement_value,
          'observations': subjective_history,
          'depth': depth
        };
      } else if (subjective_improvement_value > SUBJECTIVE_IMPROVEMENT) {
        if (depth < MAX_DEPTH_WILLING_TO_LOOK) {
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
      subjective_history.push({
        'plank_length': plank_size,
        'plank_time': plank_time,
        'success': subjective_sucess_value,
        'improving': subjective_improvement_value,
        'observations': subjective_history,
        'depth': depth
      });
    } while (0 < plankSpaceTime && plankSpaceTime < 1); // Making your mark on the world is hard. If it were easy, everybody would do it. But it’s not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama

    return pondered_observations || {
      'plank_length': plank_size,
      'plank_time': plank_time,
      'success': subjective_sucess_value,
      'improving': subjective_improvement_value,
      'observations': subjective_history,
      'depth': depth
    };
  }

  return subjective_future_goal;
}

var reason = statistically_objective_direction_to_a_subjective_goal;
console.log('statistically_objective_direction_to_a_subjective_goal');
console.log('Duration of this plank: ' + reason['plank_time']);
console.log('Probability of success in this plank: ' + reason['success']);
console.log('Probability of improving in this plank: ' + reason['improving']);
console.log('Length of this plank:' + reason['plank_length']);
console.log('Universal seed:' + reality.UNIVERSAL_CONSTANT(reason['plank_length']));

// “Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.” ― Carl Sagan, Cosmos
// “People are afraid of themselves, of their own reality; their feelings most of all. People talk about how great love is, but that’s bullshit. Love hurts. Feelings are disturbing. People are taught that pain is evil and dangerous. How can they deal with love if they’re afraid to feel? Pain is meant to wake us up. People try to hide their pain. But they’re wrong. Pain is something to carry, like a radio. You feel your strength in the experience of pain. It’s all in how you carry it. That’s what matters. Pain is a feeling. Your feelings are a part of you. Your own reality. If you feel ashamed of them, and hide them, you’re letting society destroy your reality. You should stand up for your right to feel your pain.” ― Jim Morrison
// “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss
// "Go and do amazing things." - Thilly
// */