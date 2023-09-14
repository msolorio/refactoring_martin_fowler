const { taxableCharge } = require('../combineFunctionsIntoClass/combineFunctionsIntoClass2');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('combineFunctionsIntoClass', () => {
  it('taxableCharge', () => {
    expect(taxableCharge).eql(80);
  });
});
