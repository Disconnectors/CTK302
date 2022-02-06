function setup() {
  createCanvas(1000, 1000);
  noStroke();
  noCursor();
}
function draw() {
  background(0, 0, 35, 25);

  // Ice Cream
  fill(205, 162, 111);
  triangle(355, 540, 645, 540, 500, 1000); // Body
  fill(169, 238, 194);
  ellipse(500, 500, 300, 300); // Head

  mouseReleased();

  // Blinking Stars
  fill(255, 166, 81);
  var galaxy = {
    locationX: random(width),
    locationY: random(height),
    size: random(5, 10),
  };
  ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);
}

function mouseReleased() {
  if (mouseIsPressed) {
    background(253, 251, 211);

    // Arm
    fill(205, 162, 111);
    rect(220, 670, 200, 20);
    // Spoon
    fill(211, 211, 211);
    rect(220, 480, 20, 400);
    fill(192, 192, 192);
    ellipse(230, 400, 150, 250);
    fill(205, 162, 111);
    triangle(355, 540, 645, 540, 500, 1000); // Body

    // Heads
    fill(209, 68, 117);
    ellipse(500, 100, 300, 300); // Head 3
    fill(140, 99, 167);
    ellipse(500, 300, 300, 300); // Head 2
    fill(169, 238, 194);
    ellipse(500, 500, 300, 300); // Head 1

    // Glasses 1
    fill(76, 67, 65);
    rect(370, 430, 100, 75);
    rect(530, 430, 100, 75);
    rect(470, 460, 60, 10);
    rect(470, 460, 60, 10);
    // Glasses 2
    rect(370, 230, 100, 75);
    rect(530, 230, 100, 75);
    rect(470, 260, 60, 10);
    rect(470, 260, 60, 10);
    // Glasses 3
    rect(370, 30, 100, 75);
    rect(530, 30, 100, 75);
    rect(470, 60, 60, 10);
    rect(470, 60, 60, 10);
  }
}
