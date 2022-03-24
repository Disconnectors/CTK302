let cars = [];
let bg;

function preload() {
    bg = loadImage('logs.jpg') ;
}

function setup() {
  noStroke();
  createCanvas(500, 700);
}

function draw() {
  background(255);
  image(bg, 175, 500, 200, 200) ;
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {
  // constructor
  constructor() {
    this.pos = createVector(width / 2, height - 140);
    this.vel = createVector(random(-0.8, 0.8), random(-10, -1));
    this.r = random(50, 200) ;
    this.g = 0; //random(255) ;
    this.b = 0; //random(255) ;
    this.a = random(200, 255);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    textSize(32);
    text('fire', this.pos.x, this.pos.y)
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;

  }
}
