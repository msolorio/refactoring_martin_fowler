const { Book } = require('../changeFunctionDeclaration/changeFunctionDeclaration');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('changeFunctionDeclaration', () => {
  it('addReservation', () => {
    const newBook = new Book();

    newBook.addReservation('customer_1');
    expect(newBook.reservations).eql(['customer_1']);
  });
});
