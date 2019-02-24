function Snake() {
  this._size = GRID_SCALE;
  // `positions[0] === HEAD
  this._positions = [createVector(10, 0), createVector(0, 0)];
  this._speed = createVector(1, 0);

  this.update = function() {
    // Update HEAD, then shift all records to the left by one
    // and remove the previously last entry as it's outdated.
    const newHead = createVector(
      constrain(this._positions[0].x + this._speed.x * this._size, 0, width - this._size),
      constrain(this._positions[0].y + this._speed.y * this._size, 0, height - this._size),
    );

    // Actually length - 2, but `slice` does not include the `end` position.
    const newTail = this._positions.slice(0, this._positions.length - 1);
    this._positions = [].concat([newHead], newTail);
  };

  this.show = function() {
    for (let i = 0; i < this._positions.length; i++) {
      (i % 2 === 0) ? fill(255, 0, 0) : fill(0, 255, 0);
      rect(this._positions[i].x, this._positions[i].y, this._size, this._size);
    }
  };

  this.changeDirection = function(x, y) {
    // Do not allow to go left-right or up-down directly.
    if (this._isOneEighty(x, y)) return;

    this._speed.x = x;
    this._speed.y = y;
  };

  this.eat = function(pos) {
    const hadCollision = dist(this._positions[0].x, this._positions[0].y, pos.x, pos.y) <= 1;

    if (hadCollision) {
      this._positions.push(pos);
    }

    return hadCollision;
  };

  this.blockedPositions = function() {
    return this._positions;
  };

  this._isOneEighty = function(x, y) {
    return (x + this._speed.x) === 0 && (y + this._speed.y === 0);
  };
}
