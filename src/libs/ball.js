export default class Ball {
  constructor({x, y}) {
    this._x = x
    this._y = y
  }

  set x( val ) {
    this._x = val
  }
  set y( val ) {
    this._y = val
  }

  get x() { return this._x }
  get y() { return this._y }
}


