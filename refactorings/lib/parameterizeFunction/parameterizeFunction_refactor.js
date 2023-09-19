function tenPercentRaise (aPerson) {
  raise(aPerson, 0.1);
}
function fivePercentRaise (aPerson) {
  raise(aPerson, 0.05);
}

function raise (aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}

class Person {
  constructor (salaryAmount) {
    this._salary = new Salary(salaryAmount);
  }

  get salary () {
    return this._salary;
  }

  set salary (newSalary) {
    this._salary = newSalary;
  }
}

class Salary {
  constructor (amount) {
    this._amount = amount;
  }

  get amount () {
    return this._amount;
  }

  multiply (multiplier) {
    return new Salary(this._amount * multiplier).roundToCents();
  }

  roundToCents () {
    return new Salary(Math.round(this._amount * 100) / 100);
  }
}

module.exports = {
  tenPercentRaise,
  fivePercentRaise,
  Person
}
