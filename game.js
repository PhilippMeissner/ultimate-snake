const GRID_SCALE = 10;
let snake;
let food;
let canChangeDirection = true;

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
  canChangeDirection = true;
}

// Internal method by P5
function keyPressed() {
  if (canChangeDirection) {
    // UP
    if (keyCode === 38) {
      snake.changeDirection(0, -1);
      canChangeDirection = false;
    }

    // DOWN
    if (keyCode === 40) {
      snake.changeDirection(0, 1);
      canChangeDirection = false;
    }

    // RIGHT
    if (keyCode === 39) {
      snake.changeDirection(1, 0);
      canChangeDirection = false;
    }

    // LEFT
    if (keyCode === 37) {
      snake.changeDirection(-1, 0);
      canChangeDirection = false;
    }
  }
}
