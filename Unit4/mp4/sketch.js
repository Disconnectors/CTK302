let cars = []; // declare/intialize an array
let enemies = [];
let duckPos; //variable that contains X and Y
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 5;
let score = 0;
let debug = true;
let duckSize = 50;
let sizeInc = 0;

//let song1;
function preload() {
  font1 = loadFont("assets/1x/boogaloo.ttf");
//  song1 = loadSound("assets/1x/zoned.wav");
  sound = loadSound("assets/1x/crunch.wav");
  duck = loadImage("assets/1x/duckbird.png");
  worm = loadImage("assets/1x/worm.png");
  snail = loadImage("assets/1x/snail.png");
  roach = loadImage("assets/1x/roach.png");
  raccoon = loadImage("assets/1x/raccoon.png");
  egg1 = loadImage("assets/1x/eggbird.png");
  egg2 = loadImage("assets/1x/eggbird2.png");
  grape = loadImage("assets/1x/grapes.png");
  forest = loadImage("assets/1x/forestbg.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound.setVolume(0.2);
  //song1.setVolume(0.1);
  //song1.play();
  // Spawn objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car(round(random(4))));
  }
  duckPos = createVector(width / 2, height - 100);
}

function draw() {

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
      text("Click to Start", 100, 400);
      fill('yellow');
      text("Chirp, Chirp, Quack! ", 900, 400);
      fill('red');
      text("(Devour them all!)",  900, 450);
      break;

    case 1:
      game();
      timer++;
      if (duckSize > 1000) {

        state = 2;
      }
      //timer++;

    //  if (timer > maxTimer * 60) {
      //  timer = 0;
      //  state = 3;
      //}
      break;

    case 2:
      background('green');
      fill('blue');
      text("DuckBird has outgrown the ecosystem and will soon conquer mankind!", 200, 200);
      image(egg1, 500, 300, 300, 300);
      break;

    case 3:
      background('green');
      fill('blue');
      text("The wrath of DuckBird has been stopped. The ecosystem is saved!", 400, 200);
      image(snail, 500, 300, 300, 300);
      break;
  }

}

function game() {
  background("green");
  if (timer > maxTimer * 60) {
    enemies.push(new Car(4));
    cars.push(new Car(3));
    timer = 0;
  }
//  if (timer > maxTimer * 60) {
  //  cars.push(new Car(3));

//    timer = 0;

//  }
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();

    if (enemies[i].pos.dist(duckPos) < duckSize/2) {
      if (enemies[i].size < duckSize) {
        enemies.splice(i, 1);
        //duckSize += enemies[i].sizeInc;
          duckSize += 50;
        sound.play();
      } else {
        state = 3;
        sound.play();
        // go to lose screen
      }
    }
  }
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(duckPos) < duckSize/2) {
      if (cars[i].size < duckSize) {
        cars.splice(i, 1);
        duckSize += 10;
        //duckSize += cars[i].sizeInc;
        sound.play();
      } else {
        state = 3;
        sound.play();
        // go to lose screen
      }
    }
  }

  if (cars.length == 0) { // they won
    state = 2;
  }

  //frog
  image(duck, duckPos.x, duckPos.y, duckSize, duckSize);

  checkForKeys();

  //show score

  fill("blue");
  textSize(24);
  text("DuckBird's Size: " + duckSize, 30, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
class Car {
  // constructor and attributes
  constructor(type) {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    //this.v = createVector(random(1, 10), random(1, 10));

    this.sizeInc = 0;
    this.image = snail;
    this.type = type;
    switch (this.type) {

      case 0: {
        this.image = snail;
        this.v = createVector(random(1, 2), random(0));
        this.size = random(25, 75);
        //this.sizeInc = this.size/2;
        break;
      }

      case 1: {
        this.image = worm;
        this.v = createVector(random(3, 4), random(0));
        this.size = random(10, 11);
        //this.sizeInc = this.size/4;
        break;
      }

      case 2: {
        this.image = grape;
        this.v = createVector(0,0);
        this.size = random(10, 12);
        //this.sizeInc = this.size/2;
        break;
      }

      case 3: {
        this.image = roach;
        this.v = createVector(random(5, 10), random(0));
        this.size = random(10, 40);
        //this.sizeInc = this.size/2;
        break;
      }

      case 4: {
        this.image = raccoon;
        this.v = createVector(random(10, 15), random(0));
        this.size = random(150, 200);
        //this.sizeInc = this.size/2;
        break;
      }
    }
  }

  // methods

  display() {

    image(this.image, this.pos.x, this.pos.y, this.size, this.size);
    //fill(this.r, this.b, this.g, this.o);
    //rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    // ellipse(this.pos.x+70, this.pos.y + 40, 30, 30);
    // textSize(this.size) ;
    //text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    duckPos.x -= 5;
    //if (duckPos.x < 0) duckPos.x = width;
  }

  if (keyIsDown(RIGHT_ARROW)) duckPos.x += 5;
  if (keyIsDown(UP_ARROW)) duckPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) duckPos.y += 5;
}

function mouseReleased() {
  switch (state) {

    case 0:
      state = 1;
      break;

    case 2: // win state
      state = 0;
      resetTheGame();
      break;

    case 3: //lose state
      state = 0;
      resetTheGame();
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  enemies = [];
  duckSize = 50;
  // Spawn objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car(round(random(4))));
  }

  duckPos = createVector(width / 2, height - 100);

}
