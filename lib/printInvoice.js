const { createStatementData } = require("./createStatementData");

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  
  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${perf.usd} (${perf.audience} seats)\n`;
  }
  
  result += `Amount owed is ${data.usd}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

module.exports = { statement }