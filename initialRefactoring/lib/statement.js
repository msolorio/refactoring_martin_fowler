const { createStatementData } = require('./createStatementData');

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>\n';

  data.performances.forEach((perf) => {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td><td>${perf.usd}</td></tr>\n`;
  });

  result += '</table>\n';
  result += `<p>Amount owed is ${data.usd}</p>\n`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>\n`;
  return result;
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  data.performances.forEach((perf) => {
    result += `  ${perf.play.name}: ${perf.usd} (${perf.audience} seats)\n`;
  });

  result += `Amount owed is ${data.usd}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

module.exports = { statement, htmlStatement };
