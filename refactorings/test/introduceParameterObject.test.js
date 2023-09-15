const { readingsOutsideRange, Range } = require('../lib/introduceParameterObject/introduceParameterObject_refactor');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Extract Variable', () => {
  it('calculates the price', () => {
    const station = {
      name: 'ZB1',
      readings: [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 53, time: '2016-11-10 09:20' },
        { temp: 58, time: '2016-11-10 09:30' },
        { temp: 53, time: '2016-11-10 09:40' },
        { temp: 51, time: '2016-11-10 09:50' }
      ]
    };

    // expect(readingsOutsideRange(station, 50, 55)).eql([
    //   { temp: 47, time: '2016-11-10 09:10' },
    //   { temp: 58, time: '2016-11-10 09:30' }
    // ]);

    expect(readingsOutsideRange(station, new Range(50, 55))).eql([
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 58, time: '2016-11-10 09:30' }
    ]);
  });
});
