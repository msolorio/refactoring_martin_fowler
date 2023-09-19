function tenPercentRaise (aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise (aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
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
