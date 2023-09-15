const { Person } = require('../lib/extractClass/extractClass_refactor');
const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');

describe('extractClass', () => {
  let newPerson;

  beforeEach(() => {
    newPerson = new Person({
      name: 'Martin',
      officeAreaCode: '123',
      officeNumber: '4567890'
    });
  })

  it('Person has area code', () => {
    expect(newPerson.officeAreaCode).eql('123');
  });

  it('Person has office number', () => {
    expect(newPerson.officeNumber).eql('4567890');
  })

  it('Person has telephone number', () => {
    expect(newPerson.telephoneNumber).eql('(123) 4567890');
  })
});
