var CONTENT = {
  '0,0/2': {
    text: 'static content',
  },
  '1,1/2': {
    text: 'dynamic content',
  },
  '0,0/6' : {
    text: 'This is a demonstration at 0,0/6',
  },
  '0,1/2' : {
    text: 'This is a demonstration 0,1/2',
  },
  '1,0/3' : {
    text: 'This is a demonstration 1,0/3',
  },
  '1,1/4' : {
    text: 'This is a demonstration 1,1/4',
  },
};

var GENRE = [
  '',//0
  '',//1
  'action',//2
  'adventure',//3
  '',       //4
  'racing',//5
  '',//6
  'puzzle'//7
];


function buildDBString(plank) {
  var page = plank.stepX + plank.stepY;
  var genres = getGenres(plank.length);
  if (genres.length) {
    return 'Querying for page' + page + ' of ' + genres;
  }
  return false;
}

function getGenres(num_in) {
  var primes = getDivisors(num_in);
  var genres = [];
  for(var i = 0; i < primes.length; i++)
    genres.push(GENRE[primes[i]]);
  return genres;
}

function getDivisors(num_in) {
  var divisors = [];
  var primes = [2, 3, 5, 7];
  for(var i = 0; i < primes.length; i++){
    if (num_in % primes[i] == 0) {
      divisors.push(primes[i]);
    }
  }
  return divisors;
}
