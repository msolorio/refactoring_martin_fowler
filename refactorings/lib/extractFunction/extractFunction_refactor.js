function printOwing (invoice) {
  const outstanding = calculateOutstanding();

  printBanner();
  recordDueDate();
  printDetails();

  function printBanner () {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }

  function printDetails () {
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
  }

  function recordDueDate () {
    // record due date
    const { today } = Date.now()
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  }

  function calculateOutstanding () {
    let outstanding = 0;
    for (const o of invoice.orders) {
      outstanding += o.amount
    }

    return outstanding;
  }
}
