const {
  tenPercentRaise,
  fivePercentRaise,
  Person
} = require('../lib/parameterizeFunction/parameterizeFunction_refactor');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('parameterizeFunction', () => {
  it('tenPercentRaise', () => {
    const person = new Person(100);
    tenPercentRaise(person);
    expect(person.salary.amount).to.equal(110);
  });
  it('fivePercentRaise', () => {
    const person = new Person(100);
    fivePercentRaise(person);
    expect(person.salary.amount).to.equal(105);
  });
});
