class Book {
  constructor () {
    this._reservations = [];
  }

  addReservation (customer) {
    console.assert(typeof (customer) === 'string');

    this._reservations.push(customer);
  }

  get reservations () {
    return this._reservations.slice();
  }
}

module.exports = { Book };
