let x = 0;
let y = 0;

function preload() {
  customfont = loadFont("CreamShoes.ttf");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('black');
  fill('white');
  textSize(50);
  textFont(customfont);
  text('oh yea yea', x, y);
  // rect(x, height / 2, 10, 40);
  x += 3;
  y += 3;
  if (x > width) {
    x = 0;
    y = 0;
  }

}
