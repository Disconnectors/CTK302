var mic;
var vol = 0;
var approachingVol = 0;

let state = 0;
let theLoudestItGets = 0.3;
var ease = 0.1;

let wineglass;
let crackedwineglass;
let breakingglass;

function preload() {
  wineglass = loadImage('assets/wineglass.svg');
  crackedwineglass = loadImage('assets/crackedwineglass.svg');
  breakingglass = loadImage('assets/breakingglass.jpeg');
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

  textSize(15);
  text("Have you ever wanted to break a wine glass with your singing?\n Well now you can!\n Click to start.\n My Volume is currently: " + vol.toFixed(3), width/2, 20);
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));

  switch(z) {

    case 0:
      text("You're going to have to try harder than that...", width/2, 475);
      image(wineglass, width/2 - 150, 125, 300, 300);
    break;

    case 1:
      text("Almost...", width/2, 475);
      translate(random(-5,5),random(-5,5));
      image(crackedwineglass, width/2 - 150, 125, 300, 300);
    break;

    case 2:
      text("Well done!", width/2, 475);
      image(breakingglass, width/2 - 150, 125, 300, 300);
    break;
  }


}

function touchStarted() {
  getAudioContext().resume();
}
