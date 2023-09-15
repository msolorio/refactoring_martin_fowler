function getHighPriorityOrders (orders) {
  return orders.filter(o =>
    o.priority === 'high' || o.priority === 'rush');
}

module.exports = {
  getHighPriorityOrders
};
