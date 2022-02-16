let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background('yellow');

  switch (state) {

    case 0:
      //text("0", 100, 100);
      fill('black');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i*20, j*20, 12, 12);
        }
      }
      break;

    case 1:
      //text("1", 100, 100);
      fill('red');
      for (let j = 0; j < 50; j++) {
        for (let i = 0; i < 50; i++) {
          rect(i*10, j*10, 7, 7);
        }
      }
      break;

    case 2:
      //text("2", 100, 100);
      fill('green');
      for (let j = 0; j < 50; j++) {
        for (let i = 0; i < 50; i++) {
          rect(i*20, j+=5, 10, j+20);
        }
      }
      break;

    case 3:
      //text("3", 100, 100);
      background('black');
      fill('white');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i*25, j*random(0,100), 10, 15);
        }
      }
      break;

    case 4:
      //text("4", 100, 100);
      fill('purple');
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          arc(i*10, j*50, i+10, 10*j+100, 0, 2/PI);
        }
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
