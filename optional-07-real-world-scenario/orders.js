// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = new Array()

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((acc,item) => acc + item.price,0),
    status: 'Menunggu'
  }
  orders.push(newOrder)
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex(order => order.id === orderId)
  orders[orderIndex].status = status
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const completedOrders = orders.filter(order => order.status === 'Selesai')
  const totalRevenue = completedOrders.reduce((acc, order) => acc + order.totalPrice,0)
  return totalRevenue
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const orderIndex = orders.findIndex(order => order.id === id)
  orders.splice(orderIndex, 1)
}


export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
