const { assert } = require("chai")
const { statement, htmlStatement } = require("../lib/statement")
const invoices = require("../lib/invoices.json")
const plays = require("../lib/plays.json")

describe("statement", () => {
  it("renders plain text", () => {
    const expected = 
      "Statement for BigCo\n" +
      "  Hamlet: $650.00 (55 seats)\n" +
      "  As You Like It: $580.00 (35 seats)\n" +
      "  Othello: $500.00 (40 seats)\n" +
      "Amount owed is $1,730.00\n" +
      "You earned 47 credits\n"
    assert.equal(statement(invoices[0], plays), expected);
  });
});

describe("htmlStatement", () => {
  it("renders html", () => {
    const expected = 
      "<h1>Statement for BigCo</h1>\n" +
      "<table>\n" +
        "<tr><th>play</th><th>seats</th><th>cost</th></tr>\n" +
        "<tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n" +
        "<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n" +
        "<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n" +
      "</table>\n" +
      "<p>Amount owed is $1,730.00</p>\n" +
      "<p>You earned 47 credits</p>\n"
    assert.equal(htmlStatement(invoices[0], plays), expected);
  });
});

