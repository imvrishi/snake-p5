let snake;
let scl = 20;
let maxWidth;
let maxHeight;
let food;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(10);
  maxWidth = floor(width / scl);
  maxHeight = floor(height / scl);
  textSize(4);
  textAlign(CENTER, CENTER);

  snake = new Snake();
  Food.spawn();
}

function draw() {
  background(50);
  scale(scl);

  snake.move();
  Food.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.direction !== DOWN_ARROW) {
    snake.dir(0, -1, UP_ARROW);
  } else if (keyCode === DOWN_ARROW && snake.direction !== UP_ARROW) {
    snake.dir(0, 1, DOWN_ARROW);
  } else if (keyCode === LEFT_ARROW && snake.direction !== RIGHT_ARROW) {
    snake.dir(-1, 0, LEFT_ARROW);
  } else if (keyCode === RIGHT_ARROW && snake.direction !== LEFT_ARROW) {
    snake.dir(1, 0, RIGHT_ARROW);
  }
  return false;
}
