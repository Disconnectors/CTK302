let myState = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {


  switch (myState) {
    case 0:
      background('grey');
      fill('black');
      textSize(48);
      text("Why couldn't the bicycle stand up by itself?", width/2, height/2, 400, 300);
      break;

    case 1:
      background('yellow');
    fill('black');
    textSize(48);
    text("Because it is two tired", width / 2, height / 2, 400, 300);
    break;
  }
}

function mouseReleased(){
  myState = (myState + 1) % 2;
}
