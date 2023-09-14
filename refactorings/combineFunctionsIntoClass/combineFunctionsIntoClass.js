function acquireReading () {
  return { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
}

function baseRate (month, year) {
  return 10;
}

function taxThreshold (year) {
  return 20;
}

const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

module.exports = {
  taxableCharge
};
