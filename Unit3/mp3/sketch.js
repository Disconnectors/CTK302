let frogPos;
let enemies = [];

let frog;
let flyimg;
let spiderimg;
let cricketimg;
let bg;

let state = 0;
let score = 0;
let timer = 0;
let maxTimer = 60;

function preload() {
  flyimg = loadImage("assets/fly.svg");
  spiderimg = loadImage("assets/spider.svg");
  cricketimg = loadImage("assets/cricket.svg");
  frog = loadImage("assets/frog.png");
  bg = loadImage("assets/bg.png");
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  frogPos = createVector(width / 2, height - 80);

  for (let i = 0; i < 5; i++) {
    enemies.push(new Spawn());
  }
}

function draw() {
  background('green');

  switch (state) {
    case 0: // Welcome screen
      fill('red');
      textSize(50);
      textAlign(CENTER);
      text("FROG COLLECTOR \n WELCOME! \n CLICK TO START", width / 2, height / 2);
      image(frog, 400, 200, 200, 200 * frog.height / frog.width);

      break;
    case 1: // Game screen
      game();

      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }

      for (let i = 0; i < enemies.length; i++) {
        enemies[i].display();
        enemies[i].move();
        if (enemies[i].pos.x > width || enemies[i].pos.x < 0 || enemies[i].pos.y < 0 || enemies[i].pos.y > width) {
          enemies.splice(i, 1);
        }
      }

      break;

    case 2: // Win
      background('blue');
      text("Victory! \n Your frog is well fed", width / 2, height / 2);
      checkForKeys();
      break;
    case 3: // Lose
      background('red');
      fill('green');
      text("Defeat \n Press R to try again", width / 2, height / 2);
      checkForKeys();
      break;
  }
}

function game() {
  image(bg, 0, 0);
  // Display score

  text("Score:" + score, width / 2, 100);

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
    if (enemies[i].pos.dist(frogPos) < 50) {
      enemies.splice(i, 1);
      score++;
    }
  }
  if (score == 20) {
    state = 2;
  }
  image(frog, frogPos.x, frogPos.y, 100, 100 * frog.height / frog.width);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
  if (keyIsDown(82)) resetGame(); // Press R to reset the game
}


class Spawn {

  // Constructor
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
  }

  // Display method
  display() {

    if (score <= 5) {
      image(flyimg, this.pos.x, this.pos.y);
    }
    if (score >= 5 && score < 10) {
      image(spiderimg, this.pos.x, this.pos.y);
    }
    if (score >= 10) {
      image(cricketimg, this.pos.x, this.pos.y);
    }
  }

  // Move method
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;
}

function resetGame() {
  state = 0;
  enemies = [];
  score = 0;
}
