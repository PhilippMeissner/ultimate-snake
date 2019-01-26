function Food() {
  this._size = GRID_SCALE;

  this.pickLocation = function() {
    const cols = floor(width / GRID_SCALE);
    const rows = floor(height / GRID_SCALE);

    this._position = createVector(floor(random(cols)), floor(random(rows)));
    console.log('Created new food at', this._position);
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
