let frogPos;
let enemies = [];

let frog;
let flyimg;
let spiderimg;
let cricketimg;
let bg;
let winimg;
let sadfrog;
let music;
let frogsound;

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
  winimg = loadImage("assets/win.png");
  sadfrog = loadImage("assets/sadfrog.png");
  music = loadSound("assets/music.mp3");
  frogsound = loadSound("assets/frogsound.mp3");
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  frogPos = createVector(width / 2, height - 80);
  for (let i = 0; i < 20; i++) {
    enemies.push(new Spawn());
  }
}

function draw() {
  background('green');

  switch (state) {
    case 0:
      music.loop();
      state = 1;
      break;

    case 1: // Welcome screen
      fill('red');
      textSize(50);
      textAlign(CENTER);
      text("FROG COLLECTOR \n WELCOME! \n Click to start!", width / 2, height / 2);
      image(frog, 400, 200, 200, 200 * frog.height / frog.width);
      checkForKeys();
      break;
    case 2: // Game screen
      game();

      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 4;
      }

      for (let i = 0; i < enemies.length; i++) {
        enemies[i].display();
        enemies[i].move();
        if (enemies[i].pos.x > width || enemies[i].pos.x < 0 || enemies[i].pos.y < 0 || enemies[i].pos.y > width) {
          enemies.splice(i, 1);
        }
      }

      break;

    case 3: // Win
      image(winimg, 0, 0, 1000, 1000);
      text("Victory! \n Your frog is well fed", width / 2, height / 2);
      checkForKeys();
      break;
    case 4: // Lose
      image(sadfrog, 250, 0, 500, 500);
      fill('blue');
      text("Defeat \n Press R to try again", width / 2, height - 400);
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
      frogsound.play();
    }
  }
  if (score == 20) {
    state = 3;
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
      image(flyimg, this.pos.x, this.pos.y, 100, 100);
    }
    if (score >= 5 && score < 10) {
      image(spiderimg, this.pos.x, this.pos.y, 75, 75);
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
  if (state > 4) state = 0;
}

function resetGame() {
  enemies = [];
  state = 0;
  timer = 0;
  score = 0;
  for (let i = 0; i < 20; i++) {
    enemies.push(new Spawn());
  }
  music.pause();
}
