// ==========================================
// STEP 14 — ORDERS MANAGEMENT
// ==========================================

import { useState } from 'react'


// STEP 14.1 — Orders Data

const initialOrders = [
  {
    id: '#ORD-001',
    customer: 'Ali Khan',
    product: 'Laptop',
    amount: 1200,
    payment: 'Paid',
    status: 'Delivered'
  },
  {
    id: '#ORD-002',
    customer: 'Ahmed Khan',
    product: 'Headphones',
    amount: 150,
    payment: 'Pending',
    status: 'Pending'
  },
  {
    id: '#ORD-003',
    customer: 'Usman Ali',
    product: 'Keyboard',
    amount: 80,
    payment: 'Paid',
    status: 'Processing'
  },
  {
    id: '#ORD-004',
    customer: 'Hamza Khan',
    product: 'Monitor',
    amount: 450,
    payment: 'Paid',
    status: 'Shipped'
  }
]


function Orders() {

  // STEP 14.2 — Orders State

  const [orders, setOrders] = useState(initialOrders)

  const [search, setSearch] = useState('')


  // STEP 14.3 — Search Orders

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase()) ||
    order.customer.toLowerCase().includes(search.toLowerCase())
  )


  // STEP 14.4 — Update Order Status

  const updateStatus = (id, newStatus) => {

    const updatedOrders = orders.map((order) => {

      if (order.id === id) {

        return {
          ...order,
          status: newStatus
        }

      }

      return order

    })

    setOrders(updatedOrders)

  }


  return (

    <div className="p-4">

      {/* ==========================================
          STEP 14.5 — PAGE HEADER
          ========================================== */}

      <div className="mb-4">

        <h3>
          Orders
        </h3>

        <p className="text-muted">
          Manage customer orders
        </p>

      </div>


      {/* ==========================================
          STEP 14.6 — SEARCH
          ========================================== */}

      <div className="card border-0 shadow-sm">

        <div className="card-body">

          <div className="mb-3">

            <input
              type="text"
              className="form-control"
              placeholder="Search order or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          {/* ==========================================
              STEP 14.7 — ORDERS TABLE
              ========================================== */}

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead>

                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>

              </thead>


              <tbody>

                {filteredOrders.map((order) => (

                  <tr key={order.id}>

                    <td>
                      <strong>
                        {order.id}
                      </strong>
                    </td>

                    <td>
                      {order.customer}
                    </td>

                    <td>
                      {order.product}
                    </td>

                    <td>
                      ${order.amount}
                    </td>

                    <td>

                      <span
                        className={`badge ${
                          order.payment === 'Paid'
                            ? 'bg-success'
                            : 'bg-warning text-dark'
                        }`}
                      >
                        {order.payment}
                      </span>

                    </td>

                    <td>

                      <select
                        className="form-select form-select-sm"
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(
                            order.id,
                            e.target.value
                          )
                        }
                      >

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Processing">
                          Processing
                        </option>

                        <option value="Shipped">
                          Shipped
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  )
}


export default Orders