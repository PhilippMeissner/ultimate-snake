function Food() {
  this._size = GRID_SCALE;

  this._generateNewPosition = function(forbiddenPositions = [createVector(0, 0)]) {
    const cols = floor(width / GRID_SCALE);
    const rows = floor(height / GRID_SCALE);

    let newPosition;
    do {
      newPosition = createVector(floor(random(cols)), floor(random(rows)));
    } while (forbiddenPositions.includes(newPosition));

    return newPosition;
  };

  this.pickLocation = function(forbiddenPositions) {
    this._position = this._generateNewPosition(forbiddenPositions);
    this._position.mult(GRID_SCALE);
  };

  this.show = function() {
    fill(255, 0, 100);
    rect(this._position.x, this._position.y, this._size, this._size);
  };

  this.update = function() {
  };

  this.getPosition = function() {
    return this._position;
  };
}
