var mic;
var vol = 0;
var approachingVol = 0;

let theLoudestItGets = 0.3;
var ease = 0.1;

let wineglass;
let crackedwineglass;
let breakingglass;
let numberOfTouches;
let char;

function preload() {
  wineglass = loadImage('assets/wineglass.svg');
  crackedwineglass = loadImage('assets/crackedwineglass.svg');
  breakingglass = loadImage('assets/breakingglass.png');
  char = loadImage('assets/char.png');
}

function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw() {
  background("gray");

  vol = mic.getLevel();
  approachingVol += (vol - approachingVol) * ease;
  numberOfTouches = touches.length;
  textSize(15);
  text("Have you ever wanted to break a wine glass with your singing?\n Well now you can!\n Click to start.\n My Volume is currently: " + vol.toFixed(3), width / 2, 20);
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));

  switch (z) {
    // When little to no volume, do nothing
    case 0:
      textSize(30);
      text("SING!", width/2, 110);
      image(wineglass, width / 2 - 150, 125, 300, 300);
      break;

    // When a bit of volume is detected, shake
    case 1:
      translate(random(-5, 5), random(-5, 5));
      image(crackedwineglass, width / 2 - 150, 125, 300, 300);
      break;
    case 2:
      translate(random(-5, 5), random(-5, 5));
      image(crackedwineglass, width / 2 - 150, 125, 300, 300);
      break;
    case 3:
      translate(random(-5, 5), random(-5, 5));
      image(crackedwineglass, width / 2 - 150, 125, 300, 300);
      break;
    case 4:
      translate(random(-5, 5), random(-5, 5));
      image(crackedwineglass, width / 2 - 150, 125, 300, 300);
      break;

    // When volume is above certain level, show broken glass
    case 5:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
    case 6:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
    case 7:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
    case 8:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
    case 9:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
    case 10:
      image(breakingglass, width / 2 - 150, 125, 300, 300);
      break;
  }

  switch (numberOfTouches) {
    case 0:
      textSize(15);
      text("If more than one person is touching the screen, you get a surprise!\nCurrently: " + numberOfTouches + " people.", width/2, 475);
    break;

    case 1:
      textSize(15);
      text("Just one more...", width/2, 475);
    break;

    case 2:
      textSize(15);
      image(char, 0, 100, 500, 400);
      text("Enjoy your charcuterie board!", width/2, 475);
    break;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
