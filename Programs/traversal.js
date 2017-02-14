var VIEW_SCALE = 1;  // will move as part of 'navigation'

window.onload = function() {
  var canvas = document.getElementById('canvas');

  var planks = [
    new Plank([1], 1),
    new Plank([1], 2),
    new Plank([1], 3),
    new Plank([1], 4),
    new Plank([1], 5),
    new Plank([1], 6),
    new Plank([1], 7),
    new Plank([1], 8),
    new Plank([1], 9),
  ];
  var context = canvas.getContext('2d');

  planks.forEach(function(plank){
    plank.draw(context, VIEW_SCALE)
  })
};