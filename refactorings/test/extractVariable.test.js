const { Order } = require('../lib/extractVariable/extractVariable_refactor');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Extract Variable', () => {
  it('calculates the price', () => {
    const order = new Order({
      quantity: 100,
      itemPrice: 10
    });

    expect(order.price).equal(1100);
  });
});
