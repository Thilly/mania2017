var Rational = require('../rational.js');

var one = new Rational(1);
var one_half = new Rational(1/2);  // 0.5 goes in, 5/10 comes out
var one_third = new Rational({numer: 1, denom: 3});
var one_quarter = new Rational(0.25);  // 0.25 goes in, 25/100 comes out

console.log('i should print 1/1: ' + one);
console.log('i should print 5/10: ' + one_half);
console.log('i should print 1/2: ' + one_half.reduce());
console.log('i should print 1/3: ' + one_third);
console.log('i should print 25/100: ' + one_quarter);
console.log('i should print 1/4: ' + one_quarter.reduce());

console.log('i should still print 1/4: ' + one_quarter);  // while objects are modified by operations vv
console.log('i should print 3/4: ' + one_half.add(one_quarter));
console.log('i should print 1/2: ' + one_half.sub(one_quarter));
console.log('i should print 1/8: ' + one_half.mult(one_quarter));
console.log('i should print 1/2: ' + one_half.divide(one_quarter));
console.log('i should print 0.5: ' + one_half.toFloat());



