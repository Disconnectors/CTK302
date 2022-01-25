let font1, font2 ;


function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/CreamShoes.ttf");
  font2 = loadFont("assets/SweetSaturday.ttf");
}

function draw() {
  background(100);

  textSize(75);
  textFont(font1);
  fill(200);
  text("CTK302", 150, 200);

  textFont(font2);
  fill(225);
  text("Font Assignment", 15, 300);

  textFont(font1);
  textSize(35);
  fill(250);
  text("By: William Kim", 150, 400);
}
