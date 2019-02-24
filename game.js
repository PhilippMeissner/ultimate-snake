const GRID_SCALE = 10;
let snake;
let food;

// GLOBAL TODO:
// - Collision against wall
// - Collision against snake itself
// - fix game-grid (positioning seems to be off (?)

function setup() {
  createCanvas(300, 300);
  frameRate(10);

  snake = new Snake();

  food = new Food();
  food.pickLocation();
}

function draw() {
  background(0);

  snake.update();
  snake.show();

  // Check if snake-position matches food-position
  if (snake.eat(food.getPosition())) {
    food.pickLocation(snake.blockedPositions());
  }

  food.show();
}

// Internal method by P5
function keyPressed() {
  // UP
  if (keyCode === 38) {
    snake.changeDirection(0, -1);
  }

  // DOWN
  if (keyCode === 40) {
    snake.changeDirection(0, 1);
  }

  // RIGHT
  if (keyCode === 39) {
    snake.changeDirection(1, 0);
  }

  // LEFT
  if (keyCode === 37) {
    snake.changeDirection(-1, 0);
  }
}
