var UNIVERSE = function() {
  var SEED = new Math.random();  // “The beginning is the most important part of the work.” ― Plato, The Republic
  var DURATION = 1;

  function UNIVERSAL_CONSTANT(plank_duration) {
    return SEED;
  }

  function N_DIMENSIONAL_SPACE(dimensions, plank_duration) {
    if (dimensions === 0) {
      plank_duration = plank_duration + this.UNIVERSAL_CONSTANT();
    } else {
      plank_duration = plank_duration * this.N_DIMENSIONAL_SPACE(--dimensions);  // "yada yada" - https://www.youtube.com/watch?v=gJpgW2cRIsk
    }
    return plank_duration;
  }

  function UNIVERSAL_DURATION (plank_duration) {
    return DURATION;
  }
  function UNIVERSAL_ENERGY (plank_duration) {
    var energy = Math.pow(Math.E, -this.UNIVERSAL_SQUARE(plank_duration));  //
    return 1 / (1 + energy);  //
  }

  function OBJECTIVE_OBSERVATION (plank_duration) {
    return [
      this.UNIVERSAL_CONSTANT(plank_duration),
      this.UNIVERSAL_LINEAR(plank_duration),
      this.UNIVERSAL_SQUARE(plank_duration),
      this.UNIVERSAL_CUBE(plank_duration),
      this.UNIVERSAL_ENERGY(plank_duration)
    ];
  }  // query the universe

  /** needed? **/

  function UNIVERSAL_LINEAR (plank_duration) {
    return plank_duration + this.UNIVERSAL_CONSTANT(plank_duration);  // electron, qubit, super_plank stars, (1d projection into 2d spacetime)
  } // "I want to build a Taj Mahal that will never get its last tile."
  function UNIVERSAL_SQUARE (plank_duration) {
    return plank_duration * plank_duration + this.UNIVERSAL_LINEAR(plank_duration);  // phospho-lipid bilayer, (2d projection into 3d spacetime)
  }
  function UNIVERSAL_CUBE (plank_duration) {
    return plank_duration * plank_duration * plank_duration + this.UNIVERSAL_SQUARE(plank_duration);  // sub_plank strings, super_plank black holes (3d projection into 4d spacetime)
  }
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
}; // “If you wish to make an apple pie from scratch, you must first invent the universe.” ― Carl Sagan

var BEGINNING = 0;  // “Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?” ― L.M. Montgomery
var reality = new UNIVERSE();  // "My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all." - Stephen Hawking
var plank_duration = reality.UNIVERSAL_DURATION();  // “I think; therefore I am.” ― René Descartes
var HUMAN_PLANKS = 12016;  // "https://www.youtube.com/watch?v=czgOWmtGVGs" -Kurzgesagt – In a Nutshell
var reality_plank_duration = plank_duration / HUMAN_PLANKS;  // “A story has no beginning or end: arbitrarily one chooses that moment of experience from which to look back or from which to look ahead.” - Graham Greene
var beginning_of_reality = reality_plank_duration;  // The goal of life is living in agreement with nature. - Zeno of Ela
var OBJECTIVE_HISTORY = observe_reality(beginning_of_reality);  // "I explore the world using science." - Destin
function observe_reality(plank_duration) {  // Seeing and knowing everything is boring, I want to experience it
  return reality.OBJECTIVE_OBSERVATION(plank_duration);
}

var statistically_objective_direction_to_a_subjective_goal = statistically_predict_subjective_goal(beginning_of_reality, BEGINNING, BEGINNING);
function statistically_predict_subjective_goal(plank_duration, plank_step, depth) {
  var SUBJECTIVE_SUCCESS = .7;
  var SUBJECTIVE_IMPROVEMENT = .4;  // what value are you ok with? free will.
  var MAX_DEPTH_WILLING_TO_LOOK = 2;  //
  var subjective_success_probability = 1;  // “I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?” ― John Lennon
  var subjective_improvement_probability = 1; //

  var subjective_history = observe_subjective_reality(plank_duration); // [Q1, q2, q43 ]
  function observe_subjective_reality(plank_duration) {
    var subjective_history = [];
    var number_arbitrary_requirements = 1;
    for (var i = 0; i < number_arbitrary_requirements; i++) {
      subjective_history.push((function(objectivity_is_unused) {
        return 1 / (1 + Math.E^-(Math.random()))
      })(plank_duration));
    }
    return subjective_history.concat(OBJECTIVE_HISTORY);
  }

  var subjective_history_trend = aggregate_history(subjective_history); //average
  function aggregate_history(subjective_history) {
    return subjective_history.reduce(function(a, b){ return a + b}) * 1/subjective_history.length
  }

  var subjective_future_goal = look_inward(plank_duration, plank_step, depth+1);
  function look_inward(inward_plank_duration, inward_plank_step, inward_depth) {
    if (inward_depth > MAX_DEPTH_WILLING_TO_LOOK) {
      return {};
    }
    var new_predictions = [];
    var pondered_observations = null;
    var inward_space_time = plank_duration * 1/(1 + plank_step);
    subjective_improvement_probability = 1;
    do { // "Persistence is very important. You should not give up unless you are forced to give up." - Elon Musk
      //console.log('inward_plank_duration: ' + inward_plank_duration);
      ////console.log('inward_plank_step: ' + inward_plank_step);
      ////console.log('inward_depth: ' + inward_depth);
      //console.log('inward_space_time' + inward_space_time);


      subjective_history = observe_subjective_reality(inward_plank_duration * .5);
      console.log('subjective_history: ' + subjective_history);

      subjective_history_trend = aggregate_history(subjective_history);
      console.log('subjective_historic_trend: ' + subjective_history_trend);

      var subjective_present = observe_subjective_reality(inward_plank_duration);
      console.log('subjective_present: ' + subjective_present);

      var subjective_present_trend = aggregate_history(subjective_present);
      console.log('present_subjective_trend: ' + subjective_present_trend);

      var subjective_prediction = subjective_present_trend - subjective_history_trend;
      console.log('subjective_prediction: ' + subjective_prediction);

      new_predictions.push(subjective_prediction);  // "The dude abides" - Lebowski

      subjective_improvement_probability = find_subjective_improvement_probability(subjective_prediction);
      function find_subjective_improvement_probability(predictions) {
        return aggregate_history(predictions);
      }
      subjective_success_probability = (subjective_success_probability + find_subjective_success_value(new_predictions)) * .5;
      function find_subjective_success_value(predictions) {
        return aggregate_history(predictions);
      }
      console.log('subjective_success_probability: ' + subjective_success_probability);
      console.log('subjective_improvement_probability: ' + subjective_improvement_probability);

      var decision = null;
      if (subjective_improvement_probability > SUBJECTIVE_IMPROVEMENT) {  //
        decision = decide();
        function decide() {
          pondered_observations = look_inward(inward_plank_duration, inward_plank_step, inward_depth + 1);
          if (pondered_observations['success'] > SUBJECTIVE_SUCCESS) {  // "Will it chooch" -Ave
            return pondered_observations;
          }
          if (pondered_observations['improving'] > SUBJECTIVE_IMPROVEMENT) {
            return pondered_observations;
          }
          return {};
        }
      }
      console.log('plankSpaceTime:' + inward_plank_duration);
      console.log('inward_depth:' + inward_depth);
      inward_plank_duration += inward_plank_duration;
      subjective_history.push({
        'plank_duration': inward_plank_duration,
        'plank_step': inward_plank_step,
        'success': subjective_success_probability,
        'improving': subjective_improvement_probability,
        'observations': subjective_history,
        'depth': inward_depth
      });

    } while (0 < inward_plank_duration && inward_plank_duration < 1); // Making your mark on the world is hard. If it were easy, everybody would do it. But it’s not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama

    return pondered_observations || {
      'plank_duration': plank_duration,
      'plank_step': plank_step,
      'success': subjective_success_probability,
      'improving': subjective_improvement_probability,
      'observations': subjective_history,
      'depth': depth
    };
  }

  return subjective_future_goal;
}

var reason = statistically_objective_direction_to_a_subjective_goal;
console.log('statistically_objective_direction_to_a_subjective_goal');
console.log('HyperVolume of this plank: ' + reason['plank_step'] * reason['plank_duration']);
console.log('Probability of success in this plank: ' + reason['success']);
console.log('Probability of improving in this plank: ' + reason['improving']);
console.log('Volume of this plank:' + reason['plank_duration']);
console.log('Universal seed:' + reality.UNIVERSAL_CONSTANT(reason['plank_duration']));

// “Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.” ― Carl Sagan
// “People are afraid of themselves, of their own reality; their feelings most of all. People talk about how great love is, but that’s bullshit. Love hurts. Feelings are disturbing. People are taught that pain is evil and dangerous. How can they deal with love if they’re afraid to feel? Pain is meant to wake us up. People try to hide their pain. But they’re wrong. Pain is something to carry, like a radio. You feel your strength in the experience of pain. It’s all in how you carry it. That’s what matters. Pain is a feeling. Your feelings are a part of you. Your own reality. If you feel ashamed of them, and hide them, you’re letting society destroy your reality. You should stand up for your right to feel your pain.” ― Jim Morrison
// “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss
// "Go and do amazing things." - Thilly
// */