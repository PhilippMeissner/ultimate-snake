const GRID_SCALE = 10;
let snake;
let food;

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

  // Check if snake-_position matches food _position
  if (snake.eat(food.getPosition())) {
    // TODO:
    // - enlarge snake
    // --> draw other parts of snake
    // - ensure new location of food does not equal any _position of snake
    food.pickLocation(snake.currentPosition());
  }

  food.show();
}

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
