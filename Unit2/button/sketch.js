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
  fill('purple');
  rect(250, 400, 100, 100);

}

function mouseReleased(){
  if ((mouseX > 200) && (mouseX < 300) && (mouseY > 350) && (mouseY < 450)) {
    myState++;
    if (myState > 1) myState =0;
  }

}
