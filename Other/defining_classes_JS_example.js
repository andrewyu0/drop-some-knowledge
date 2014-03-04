// Feb 25
// JS defining a class example


// defining the class

var Position = module.exports = function(x,y,z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;

  // defining properties on the class 
  this.distanceFromZero = 0;
  this.thing = null;

  this.init();
}

// defining methods on the class 

Postition.prototype = {

  init : function() {
    this.initDistance();
    this.initThing();
  }

  initDistance : function() {
    this.distanceFromZero = this.getDistanceTo(new Position(0,0,0));
  },

  initThing : function() {
    this.thing = 'blah';
  },

  getDistanceTo : function(position) {
    // distance formula
  }

};

// Option 1:
// module.exports = Position;

// Usage
// var Position = require('./lib/position');
// var pos1 = new Position(1,1,1);
// var pos2 = new Position(2,2,2);

// pos1.getDistanceTo(pos2);