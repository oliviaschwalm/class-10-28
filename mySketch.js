let wheels = [];
var slider;

function setup() {
	createCanvas(600, 600);
	

	
	for (let i = 0; i < 40; i++) {
  wheels.push(new Spiral(300,300));
		}
	for (let i = 0; i < 30; i++) {
  wheels.push(new Spiral1(300,300));
		}
}

function draw() {
	
  for (let i = 0; i < wheels.length; i++) {
    wheels[i].move();
    wheels[i].display();
  }
}

class Spiral {
  constructor(X,Y) {
    this.x = X+1;
    this.y = Y+1;
    this.diameter = random(30, 40);
    this.speed = 6;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
		fill(0, 255, 0);
		noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class Spiral1 {
  constructor(X,Y) {
    this.x = X+1;
    this.y = Y+1;
    this.diameter = random(40, 50);
    this.speed = 9;
  }

  move() {
    this.x += random(this.speed, this.speed);
    this.y += random(-this.speed, -this.speed);
  }

  display() {
		fill(0, 200, 0);
		noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
