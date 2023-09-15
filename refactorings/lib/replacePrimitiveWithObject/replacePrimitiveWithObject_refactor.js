class Priority {
  static legalValues () {
    return ['low', 'normal', 'high', 'rush'];
  }

  constructor (value) {
    if (value instanceof Priority) return value;

    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }

  toString () {
    return this._value;
  }

  get _index () {
    return Priority.legalValues().indexOf(this._value);
  }

  equals (other) {
    return this._index === other._index;
  }

  higherThan (other) {
    return this._index > other._index;
  }

  lowerThan (other) {
    return this._index < other._index;
  }
}

class Order {
  constructor (data) {
    this._priority = data.priority;
  }

  get priorityString () {
    return this._priority.toString();
  }

  get priority () {
    return this._priority;
  }

  set priority (aString) {
    this._priority = new Priority(aString);
  }
}

function getHighPriorityOrders (orders) {
  return orders.filter(o =>
    o.priority.higherThan(new Priority('normal')));
}

module.exports = {
  Order,
  Priority,
  getHighPriorityOrders
};
