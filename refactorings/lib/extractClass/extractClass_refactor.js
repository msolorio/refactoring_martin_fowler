class Person {
  constructor ({ name, officeAreaCode, officeNumber }) {
    this._name = name
    this._telephoneNumber = new TelephoneNumber({
      officeAreaCode,
      officeNumber
    })
  }

  get name () {
    return this._name
  }

  get officeAreaCode () {
    return this._telephoneNumber.officeAreaCode
  }

  get officeNumber () {
    return this._telephoneNumber.officeNumber
  }

  get telephoneNumber () {
    return this._telephoneNumber.toString()
  }
}

class TelephoneNumber {
  constructor ({ officeAreaCode, officeNumber }) {
    this._officeAreaCode = officeAreaCode
    this._officeNumber = officeNumber
  }

  get officeAreaCode () {
    return this._officeAreaCode
  }

  get officeNumber () {
    return this._officeNumber
  }

  toString () {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }
}

module.exports = {
  Person,
  TelephoneNumber
}
