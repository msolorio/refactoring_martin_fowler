class OwingPrinter {
  constructor (invoice) {
    this.invoice = invoice;
    this.outstanding = this.calculateOutstanding();
  }

  print () {
    this.printBanner();
    this.recordDueDate();
    this.printDetails();
  }

  printBanner () {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }

  printDetails () {
    console.log(`name: ${this.invoice.customer}`)
    console.log(`amount: ${this.outstanding}`)
    console.log(`due: ${this.invoice.dueDate.toLocaleDateString()}`)
  }

  recordDueDate () {
    const today = new Date();
    this.invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  }

  calculateOutstanding () {
    return this.invoice.orders.reduce((sum, o) =>
      sum + o.amount, 0);
  }
}

const invoice = {
  customer: 'Michael',
  orders: [
    { amount: 10 },
    { amount: 12 },
    { amount: 8 }
  ]
}

const owingPrinter = new OwingPrinter(invoice);

owingPrinter.print();
