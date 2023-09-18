function plumages (birds) {
  return new Map(
    birds
      .map(b => Bird.for(b))
      .map(b => [b.name, plumage(b)])
  );
}

function speeds (birds) {
  return new Map(
    birds
      .map(b => Bird.for(b))
      .map(b => [b.name, airSpeedVelocity(b)])
  );
}

function plumage (bird) {
  return Bird.for(bird).plumage;
}

function airSpeedVelocity (bird) {
  return Bird.for(bird).airSpeedVelocity;
}

class Bird {
  constructor (birdObject) {
    Object.assign(this, birdObject);
  }

  static for (bird) {
    switch (bird.type) {
      case 'EuropeanSwallow':
        return new EuropeanSwallow(bird);
      case 'AfricanSwallow':
        return new AfricanSwallow(bird);
      case 'NorwegianBlueParrot':
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }

  get plumage () {
    return 'unknown';
  }

  get airSpeedVelocity () {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage () {
    return 'average';
  }

  get airSpeedVelocity () {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage () {
    return (this.numberOfCoconuts > 2) ? 'tired' : 'average';
  }

  get airSpeedVelocity () {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage () {
    return (this.voltage > 100) ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity () {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10;
  }
}

module.exports = { plumages, speeds };
