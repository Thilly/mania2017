// todo: decide on mutablility, currently operations modifies object instead of creating new

module.exports = Rational;

function Rational(in_value) {

  var in_rational = checkValue(in_value);
  this.numer = in_rational.numer;
  this.denom = in_rational.denom;

  this.add = function(in_value) {
    var oper_rational = checkValue(in_value);
    if(this.denom != oper_rational.denom) {
      var inNumerator = this.denom * oper_rational.numer;
      this.numer *= oper_rational.denom;
      this.numer += inNumerator;
      this.denom *= oper_rational.denom;
      this.reduce();
    } else {
      this.numer += oper_rational.numer;
      this.reduce();
    }
    return this;
  };

  this.sub = function(in_value) {
    var oper_rational = checkValue(in_value);
    if(this.denom != oper_rational.denom) {
      var inNumerator = this.denom * oper_rational.numer;
      this.numer *= oper_rational.denom;
      this.numer -= inNumerator;
      this.denom *= oper_rational.denom;
      this.reduce();
    } else {
      this.numer -= oper_rational.numer;
      this.reduce();
    }
    return this;
  };

  this.mult = function(in_value) {
    var oper_rational = checkValue(in_value);
    this.numer *= oper_rational.numer;
    this.denom *= oper_rational.denom;
    this.reduce();
    return this;
  };

  this.divide = function(in_value){
    var oper_rational = checkValue(in_value);
    this.numer *= oper_rational.denom;
    this.denom *= oper_rational.numer;
    this.reduce();
    return this;
  };

  this.reduce = function() {
    var topRange = Math.sqrt(this.denom);
    for(var i = 2; i < topRange, i < this.denom; i++) {
      if(this.numer % i === 0 && this.denom % i === 0) {
        this.numer /= i;
        this.denom /= i;
        i--;
      }
    }
    return this;
  };

  this.toString = function() {
    return this.numer + '/' + this.denom;
  };

  this.toFloat = function() {  // necessary evil :P
    return this.numer / this.denom;
  };

  function checkValue(rational) {
    if (isNumeric(rational)) {
      if (rational.toString().split('.').length === 2) {
        var whole = rational.toString().split('.')[0];
        var numer = rational.toString().split('.')[1];
        var denom = Math.pow(10, numer.length);
        return {
          numer: parseInt(numer) + parseInt(whole * denom),
          denom: denom
        };
      } else {
        return {
          numer: in_value,
          denom: 1
        };
      }
    } else if(isNumeric(rational.numer) && isNumeric(rational.denom)) {
      if (rational.denom === 0) {
        throw 'rationals shouldn\'t have 0 as denominator';
      }
      return rational;
    } else {
      throw 'cannot parse ' + in_value + ' to a rational';
    }
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
