var KEY = ['NOTUSED', 'a', 'b', 'c', 'd', 'e', 'f'];
var Qubit = require('../qubit.js');

var qubit = new Qubit(1);
console.log(qubit);
console.log(qubit + '');
console.log(qubit.encode('beef', KEY) + '');
console.log(qubit.decode(KEY));

var twoQubit = new Qubit(2);
console.log(twoQubit);
console.log(twoQubit + '');
console.log(twoQubit.encode('deadbeef', KEY) + '');
console.log(twoQubit.decode(KEY));
