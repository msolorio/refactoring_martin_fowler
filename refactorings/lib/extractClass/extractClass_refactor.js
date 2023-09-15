class Person {
  constructor ({ name, officeAreaCode, officeNumber }) {
    this._name = name
    this._telephoneNumber = new TelephoneNumber({
      areaCode: officeAreaCode,
      number: officeNumber
    })
  }

  get name () {
    return this._name
  }

  get officeAreaCode () {
    return this._telephoneNumber.areaCode
  }

  get officeNumber () {
    return this._telephoneNumber.number
  }

  get telephoneNumber () {
    return this._telephoneNumber.toString()
  }
}

class TelephoneNumber {
  constructor ({ areaCode, number }) {
    this._areaCode = areaCode
    this._number = number
  }

  get areaCode () {
    return this._areaCode
  }

  get number () {
    return this._number
  }

  toString () {
    return `(${this.areaCode}) ${this.number}`
  }
}

module.exports = {
  Person,
  TelephoneNumber
}
