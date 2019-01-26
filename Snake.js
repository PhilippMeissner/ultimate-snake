function Snake() {
  this._size = GRID_SCALE;
  this._position = createVector(0, 0);
  this._speed = createVector(1, 0);

  this.update = function() {
    this._position.x = this._position.x + this._speed.x * this._size;
    this._position.y = this._position.y + this._speed.y * this._size;

    this._position.x = constrain(this._position.x, 0, width - this._size);
    this._position.y = constrain(this._position.y, 0, height - this._size);
  };

  this.show = function() {
    fill(255);
    rect(this._position.x, this._position.y, this._size, this._size);
  };

  this.changeDirection = function(x, y) {
    this._speed.x = x;
    this._speed.y = y;
  };

  this.eat = function(pos) {
    return dist(this._position.x, this._position.y, pos.x, pos.y) <= 1;
  };

  this.currentPosition = function() {
    return {x: this._position.x, y: this._position.y};
  }
}
