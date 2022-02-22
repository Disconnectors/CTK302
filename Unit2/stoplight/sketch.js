let state = 0;
let timer = 0;
let x = 0;
let velocity = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background('white');
  fill('black');
  rect(width / 2, height / 2, 200, 600);

  timer++;
  if (timer > 3*60) {
    timer = 0;
    state = (state + 1) % 3;
  }

  //  Car
  fill('blue');
  rect(x, height-100, 100, 50);
  x = x + velocity ;
  if (x > width) {
    x = 0 ;
  }

  switch (state) {

    case 0: // Red light
      fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      if (x == width/2) {
        velocity = 0;
      }

      break;

    case 1: // Green light
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 25;
      break;

    case 2: // Yellow light
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10;
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
