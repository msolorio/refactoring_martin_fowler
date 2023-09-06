const { assert } = require('chai')
const { statement } = require('../lib/printInvoice')
const invoices = require("../lib/invoices.json")
const plays = require("../lib/plays.json")

describe("test", () => {
  it("test", () => {
    const expected = 
      "Statement for BigCo\n" +
      "  Hamlet: $650.00 (55 seats)\n" +
      "  As You Like It: $580.00 (35 seats)\n" +
      "  Othello: $500.00 (40 seats)\n" +
      "Amount owed is $1,730.00\n" +
      "You earned 47 credits\n"
    assert.equal(expected, statement(invoices[0], plays))
  })
})