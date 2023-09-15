class Range {
  constructor (min, max) {
    this._data = { min, max };
  }

  get min () { return this._data.min; }
  get max () { return this._data.max; }

  contains (number) {
    return number >= this.min && number <= this.max;
  }
}

function readingsOutsideRange (station, range) {
  return station.readings
    .filter(r => !range.contains(r.temp));
}

module.exports = {
  Range,
  readingsOutsideRange
};
