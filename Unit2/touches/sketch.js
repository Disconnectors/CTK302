let numberOfTouches ;
let one;
let two;
let three;

function setup() {
  createCanvas(400, 400);
  one = loadImage("one.jpeg");
  two = loadImage("two.png");
  three = loadImage("three.jpeg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("its empty here...", 5, 22) ;
      break ;

      case 1:
       text("can i have a friend?", 5, 22) ;
      image(one, width/2, 100, 100, 100);
      break ;

      case 2:
      text("just two besties", 5, 22) ;
      image(two, width/2, 100, 100, 100);
      break ;

      case 3:
     text("best trio in town", 5, 22) ;
      image(three, width/2, 100, 100, 100);
      break ;


  }

}
