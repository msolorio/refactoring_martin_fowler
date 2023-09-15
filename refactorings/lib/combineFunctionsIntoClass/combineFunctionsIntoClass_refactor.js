class Reading {
  constructor (data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer () { return this._customer; }
  get quantity () { return this._quantity; }
  get month () { return this._month; }
  get year () { return this._year; }

  get baseCharge () {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge () {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

function acquireReading () {
  return { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
}

function baseRate (month, year) {
  return 10;
}

function taxThreshold (year) {
  return 20;
}

const aReading = new Reading(acquireReading());
const taxableCharge = aReading.taxableCharge;

module.exports = {
  taxableCharge
};
