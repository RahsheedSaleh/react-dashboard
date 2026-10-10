// ==========================================
// STEP 8 — RECENT ORDERS TABLE
// ==========================================

const orders = [
  {
    id: '#ORD-001',
    customer: 'Ali Khan',
    product: 'Laptop',
    amount: '$1,200',
    status: 'Delivered'
  },
  {
    id: '#ORD-002',
    customer: 'Ahmed',
    product: 'Headphones',
    amount: '$150',
    status: 'Pending'
  },
  {
    id: '#ORD-003',
    customer: 'Usman',
    product: 'Keyboard',
    amount: '$80',
    status: 'Processing'
  },
  {
    id: '#ORD-004',
    customer: 'Hamza',
    product: 'Monitor',
    amount: '$450',
    status: 'Delivered'
  }
]


function RecentOrders() {

  return (

    <div className="card border-0 shadow-sm">

      {/* STEP 8.1 — Header */}
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="mb-0">
            Recent Orders
          </h5>

          <button className="btn btn-sm btn-primary">
            View All
          </button>

        </div>


        {/* STEP 8.2 — Responsive Table */}
        <div className="table-responsive">

          <table className="table table-hover align-middle">

            <thead>

              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {/* STEP 8.3 — Generate Orders */}
              {orders.map((order) => (

                <tr key={order.id}>

                  <td>
                    {order.id}
                  </td>

                  <td>
                    {order.customer}
                  </td>

                  <td>
                    {order.product}
                  </td>

                  <td>
                    {order.amount}
                  </td>

                  <td>

                    <span
                      className={`badge ${
                        order.status === 'Delivered'
                          ? 'bg-success'
                          : order.status === 'Pending'
                          ? 'bg-warning text-dark'
                          : 'bg-primary'
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}


export default RecentOrders