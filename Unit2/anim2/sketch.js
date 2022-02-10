// Reed Cavi's Rain Man
let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 0, 35);

  push();

  translate(x - 400, -300);
  x += 5;
  if (x > width) {
    x = 0;
  }
  avatar()

  pop();

}

function avatar() {

  // Ice Cream
  fill(205, 162, 111);
  triangle(355, 540, 645, 540, 500, 1000);
  fill(169, 238, 194);
  ellipse(500, 500, 300, 300);
  fill(76, 67, 65);
  rect(370, 430, 100, 75);
  rect(530, 430, 100, 75);
  rect(470, 460, 60, 10);
  rect(470, 460, 60, 10);

}
