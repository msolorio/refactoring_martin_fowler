class Person {
  constructor (name, officeAreaCode, officeNumber) {
    this._name = name
    this._officeAreaCode = officeAreaCode
    this._officeNumber = officeNumber
  }

  get name () {
    return this._name
  }

  get officeAreaCode () {
    return this._officeAreaCode
  }

  get officeNumber () {
    return this._officeNumber
  }

  get telephoneNumber () {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }
}

module.exports = {
  Person
}
