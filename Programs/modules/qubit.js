module.exports = Qubit;

function Qubit(dimensions) {  // generalized rational lib

  this.dimensions = dimensions;
  this.numerators = get1Row(dimensions);   // [1,1,1,1....1];
  this.denominator = 0;   // set to base state;

  this.add = function(numerators, denominator) {
    var that = this;
    if(this.denominator === 0) {
      this.denominator = denominator;
      this.numerators = numerators;
    } else if(this.denominator !== denominator) {
      this.numerators = this.numerators.map(function(numerator, dimension) {
        if(that.denominator % denominator === 0)
          return numerator + (that.denominator / denominator * numerators[dimension]);
        else if (denominator % that.denominator === 0)
          return (numerator * denominator/that.denominator) + numerators[dimension];
        else
          return numerator * denominator + that.denominator * numerators[dimension];
      });
      if(this.denominator % denominator === 0) {}
      else if (denominator % this.denominator === 0)
        this.denominator = denominator;
      else
        this.denominator *= denominator;
    } else {
      this.numerators = this.numerators.map(function(numerator, dimension) {
        return numerator + numerators[dimension];
      });
    }
    return this;
  };

  this.sub = function(numerators, denominator) {
    return this.add(numerators.map(function(numerator){return numerator * -1;}), denominator);
  };

  this.mult = function(numerators, denominator) {
    this.numerators = this.numerators.map(function(numerator, dimension) {
      return numerator * numerators[dimension];
    });
    this.denominator *= denominator;
    return this;
  };

  this.divide = function(step){ // todo: name
    this.denominator /= step;
  };

  this.encode = function(string_in, key) {
    this.denom = 0;  // set to 'unknown position'
    for(var i = 0; i < string_in.length; i+=this.dimensions){
      var encoded_bottom = key.length;
      this.mult(get1Row(this.dimensions), encoded_bottom);
      var encoded_top = [];
      for (var j = 0; j < this.dimensions; j++) {
        encoded_top.push(getNumberFromLetter(string_in[i + j], key));
      }
      this.add(encoded_top, encoded_bottom);
    }
    return this;
  };

  this.decode = function(key){
    var current_string = '';
    var current_values = [];
    for(var i = 0; i < this.dimensions; i++) {
      var current_value = getStepFromFraction(this.numerators[i], this.denominator, key.length);
      current_values.push(current_value);
      current_string += key[current_value];
    }
    this.sub(current_values, key.length);
    this.divide(key.length);
    var zeroed = false;
    this.numerators.map(function(numerator){if(numerator <= 0)zeroed=true;});
    if(zeroed)
      return current_string;
    return this.decode(key) + current_string;
  };

  this.toString = function() {
    return this.numerators + '/' + this.denominator;
  };
}

function getStepFromFraction(numerator, denominator, key_length){
  for(var i = 1; i <= denominator; i++) {  // find containing 'gate'
    if (numerator/denominator < i/key_length) {
      return i-1;
    }
  }
}

function getNumberFromLetter(letter, key){
  for(var i = 0; i < key.length; i++)
    if (letter === key[i])
      return i;
}

function get1Row(dimensions) {
  var oneRow = [];
  for(var i = 0; i < dimensions; i++)
    oneRow.push(1);
  return oneRow;
}