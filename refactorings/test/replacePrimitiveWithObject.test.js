const { Order, Priority, getHighPriorityOrders } = require('../replacePrimitiveWithObject/replacePrimitiveWithObject2');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('replacePrimitiveWithObject', () => {
  // it('getHighPriorityOrders', () => {
  //   const orders = [
  //     { priority: 'high' },
  //     { priority: 'rush' },
  //     { priority: 'low' },
  //     { priority: 'normal' },
  //     { priority: 'high' }
  //   ];
  //   const highPriorityOrders = getHighPriorityOrders(orders);
  //   expect(highPriorityOrders.length).to.equal(3);
  // });

  it('getHighPriorityOrders', () => {
    const orders = [
      new Order({ priority: new Priority('high') }),
      new Order({ priority: new Priority('rush') }),
      new Order({ priority: new Priority('low') }),
      new Order({ priority: new Priority('normal') }),
      new Order({ priority: new Priority('high') })
    ];
    const highPriorityOrders = getHighPriorityOrders(orders);
    expect(highPriorityOrders.length).to.equal(3);
  });
});
