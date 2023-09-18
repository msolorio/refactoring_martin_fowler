const { plumages, speeds } = require('../lib/replaceConditionalWithPolymorphism/replaceConditionalWithPolymorphism_refactor');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('replaceConditionalWithPolymorphism', () => {
  it('plumages', () => {
    const birds = [
      { name: 'bird1', type: 'EuropeanSwallow' },
      { name: 'bird2', type: 'AfricanSwallow', numberOfCoconuts: 3 },
      { name: 'bird3', type: 'NorwegianBlueParrot', voltage: 100 },
      { name: 'bird4', type: 'Unknown' }
    ];
    const result = plumages(birds);
    expect(result.get('bird1')).to.equal('average');
    expect(result.get('bird2')).to.equal('tired');
    expect(result.get('bird3')).to.equal('beautiful');
    expect(result.get('bird4')).to.equal('unknown');
  });

  it('speeds', () => {
    const birds = [
      { name: 'bird1', type: 'EuropeanSwallow' },
      { name: 'bird2', type: 'AfricanSwallow', numberOfCoconuts: 3 },
      { name: 'bird3', type: 'NorwegianBlueParrot', voltage: 100 },
      { name: 'bird4', type: 'Unknown' }
    ];

    const result = speeds(birds);
    expect(result.get('bird1')).to.equal(35);
    expect(result.get('bird2')).to.equal(34);
    expect(result.get('bird3')).to.equal(20);
    expect(result.get('bird4')).to.equal(null);
  });
});
