// Represents a Circle where center is a Point and radius is a Number
class Circle {
    constructor(center, radius) { 
      this.center = center; 
      this.radius = radius;
    }
  }

  // Represents a Point where x and y are Numbers
class Point {
    constructor (x,y) { 
      this.x = x;
      this.y = y; 
    }
  }


function circleArea(circle){
    return Math.PI * Math.pow(circle.radius, 2);
  }

  var circ = new Circle;

  circ.radius = 4;

  console.log(circleArea(circ));

