function Dot(in_x, in_y, in_color) {

  var radius = DOT_RADIUS;

  this.color = in_color;
  this.xPos = in_x;
  this.yPos = in_y;
  this.values = [];

  this.draw = function (context) {
    context.beginPath();
    context.arc(this.xPos, this.yPos, radius, 0, Math.PI * 2);
    context.strokeStyle = this.color;
    context.stroke();

    for(var i = 0; i < this.values.length; i += 3) {
      var direction = this.values[i];
      var intensity = this.values[i+1];
      context.moveTo(this.xPos, this.yPos);
      context.lineTo(this.xPos + intensity * Math.sin(direction), this.yPos + intensity * Math.cos(direction));
      context.strokeStyle = this.values[i+2];
      context.stroke();
    }
  };

  this.updateValues = function(actors) {
    this.values = [];
    for(var i = 0; i < actors.length; i++) {
      var direction = Math.atan2(actors[i].xPos - this.xPos, actors[i].yPos - this.yPos);
      var distance = Math.pow(this.xPos - actors[i].xPos, 2) + Math.pow(this.yPos - actors[i].yPos, 2);
      var intensity = Math.abs(MAX_VALUE - (MAX_VALUE * (distance / Math.pow(CANVAS_SIZE, 2))));
      this.values.push(direction);
      this.values.push(intensity);
      this.values.push(actors[i].color);
    }
  };
}

function Actor(in_x, in_y, in_color) {

  var radius = ACTOR_RADIUS;
  var xSpeed = ACTOR_SPEED;
  var ySpeed = ACTOR_SPEED;

  this.color = in_color;
  this.xPos = in_x;
  this.yPos = in_y;

  this.updatePosition = function() {
    if (this.xPos > CANVAS_SIZE - radius || this.xPos < 0 + radius) {
      xSpeed *= -1;
    }
    if (this.yPos > CANVAS_SIZE - radius || this.yPos < 0 + radius) {
      ySpeed *= -1;
    }
    this.xPos += xSpeed;
    this.yPos += ySpeed;
  };

  this.draw = function (context) {
    this.updatePosition();
    context.beginPath();
    context.arc(this.xPos, this.yPos, radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.fill();
  };
}