// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;

var cars = [];
var frogPos;
var duckSize = 0;

var duck;
var egg2;
var font1;

var snail;
var grape;
var worm;
var roach;

var state = 0;
var imgState = 0;
var timer = 0;
var maxTimer = 5;

function preload() {
  duck = loadImage("assets/duckbird.png");
  egg2 = loadImage("assets/eggbird2.png");
  font1 = loadFont("assets/boogaloo.ttf");
  snail = loadImage("assets/snail.png");
  grape = loadImage("assets/grapes.png");
  worm = loadImage("assets/worm.png");
  roach = loadImage("assets/roach.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  // spawn a bunch of cars


  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff'); // light blue

  switch (state) {

    case 0:
    textFont(font1);
    background('green');
    image(egg2, 450, 150, 500, 500);
    fill('yellow');
    textSize(64);
    text("DuckBird", 550, 100);
    textSize(36);
    fill('blue')
    text("Avoid larger animals!", 100, 300);
    text("Tap to Start", 100, 400);
    fill('yellow');
    text("Chirp, Chirp, Quack! ", 300, 400);
    fill('red');
    text("(Devour them all!)",  300, 450);

    if (mouseIsPressed === true) {
      state = 1;
    }

    break;

    case 1:
      // the map command !!!!
      // takes your variable and maps it from range 1 to range 2
      // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
      xPosition = map(gamma, -18, 18, 0, width);
      yPosition = map(beta, 25, 45, 0, height);
      text(duckSize, width / 2, 200);
      text("Timer: " + timer, width / 2, 300);

      // move the frog around the screen
      push(); // before you use translate, rotate, or scale commands, push and then pop after
      translate(xPosition, yPosition); // move everything over by x, y

      image(duck, 0, 0,);
      duck.resize(150 + duckSize/10, 0);
      pop();


      // update the frog's position using the accelerometer data
      frogPos.x = xPosition;
      frogPos.y = yPosition;

      // iterate through the car loop to move them and see if we need to delete cars
      for (var i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].drive();
        if (cars[i].pos.dist(frogPos) < 50) {
          cars.splice(i, 1);
          duckSize+=75;
        }
      }
      timer++;
      if (timer > maxTimer * 10) {
        for (var i = 0; i < 1; i++) {
          cars.push(new Car());
          timer = 0;
        }
      }

      if (duckSize >= 1000) {
        state = 2;
      }

    break;

    case 2:
      background('green');
      fill('blue');
      text("DuckBird has outgrown the ecosystem \n and will soon conquer mankind!", 50, 200);
      if (mouseIsPressed === true) {
        state = 0;
        cars = [];
        duckSize = 0;
        imgState = 0;
      }
    break;
  }
}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  duckSize = 0;
  imgState = 0;
  state = 0;
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});


// car class!!
function Car() {
  // attributes
  this.pos = createVector(random(0, width), random(0, height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.s = random(50,100);


  // methods
  this.display = function() {
    if(duckSize >= 0 && duckSize < 250) {
      image(snail, this.pos.x, this.pos.y, this.s, this.s);
    }

    if(duckSize >= 250 && duckSize < 500) {
      image(worm, this.pos.x, this.pos.y, this.s, this.s);
    }
    if(duckSize >= 500 && duckSize < 750) {
      image(grape, this.pos.x, this.pos.y, this.s, this.s);
    }
    if(duckSize >= 750 && duckSize < 1000) {
      image(roach, this.pos.x, this.pos.y, this.s, this.s);
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
