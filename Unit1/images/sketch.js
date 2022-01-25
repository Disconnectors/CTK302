let egg ;
let pho ;
let sushi ;


function setup() {
  createCanvas(500, 500);
  egg = loadImage("assets/egg.jpeg");
  pho = loadImage("assets/pho.jpeg");
  sushi = loadImage("assets/sushi.jpeg");

}

function draw() {
  image(egg, width/2, 100, 100, 100);
  image(pho, width/2, 250, 100, 100);
  image(sushi, width/2, 400, 100, 100);
}
