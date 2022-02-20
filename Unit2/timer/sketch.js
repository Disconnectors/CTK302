let state = 0;
let timer = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
}

function draw() {


  switch (state) {

    case 0:
      //text("0", 100, 100);
      // Timer code
      background(0, 132, 80);
      timer++;
      if (timer > 4*60) {
        timer = 1;
        state = 1;
      }
      fill(184, 29, 19);
      circle(displayWidth/2, displayHeight/2, displayHeight/8);
      break;

    case 1:
      //text("1", 100, 100);
      background(0, 90, 140);
      if (timer > 3*60) {
        timer = 1;
        state = 2;
      }
      timer++;
      fill(239, 183, 0);
      circle(displayWidth/2, displayHeight/2, displayHeight/4);
      break;

    case 2:
      //text("2", 100, 100);
      background(184, 29, 19);
      if (timer > 2*60) {
        timer = 1;
        state = 0;
      }
      timer++;
      fill(0, 132, 80);
      circle(displayWidth/2, displayHeight/2, displayHeight/2);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
