const { taxableCharge } = require('../lib/combineFunctionsIntoClass/combineFunctionsIntoClass_refactor');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('combineFunctionsIntoClass', () => {
  it('taxableCharge', () => {
    expect(taxableCharge).eql(80);
  });
});
