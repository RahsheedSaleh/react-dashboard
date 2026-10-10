// ==========================================
// STEP 6 — DASHBOARD PAGE
// ==========================================

// STEP 7 — Import Sales Chart
import SalesChart from "../components/SalesChart";
// STEP 8 — Import Recent Orders
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
  return (
    <div className="p-4">
      {/* STEP 6.1 — Page Heading */}
      <div className="mb-4">
        <h3>Dashboard Overview</h3>

        <p className="text-muted">
          Here is what's happening with your business today.
        </p>
      </div>

      {/* STEP 6.2 — Statistics Cards */}
      <div className="row g-4">
        {/* Total Users */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Total Users</p>

                  <h3 className="mb-0">12,540</h3>
                </div>

                <div className="fs-2">
                  <i className="bi bi-people"></i>
                </div>
              </div>

              <small className="text-success">+12.5% from last month</small>
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Total Sales</p>

                  <h3 className="mb-0">$25,400</h3>
                </div>

                <div className="fs-2">
                  <i className="bi bi-currency-dollar"></i>
                </div>
              </div>

              <small className="text-success">+8.2% from last month</small>
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Total Orders</p>

                  <h3 className="mb-0">1,245</h3>
                </div>

                <div className="fs-2">
                  <i className="bi bi-cart3"></i>
                </div>
              </div>

              <small className="text-danger">-2.4% from last month</small>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Total Revenue</p>

                  <h3 className="mb-0">$48,920</h3>
                </div>

                <div className="fs-2">
                  <i className="bi bi-graph-up"></i>
                </div>
              </div>

              <small className="text-success">+15.7% from last month</small>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
    STEP 7 — SALES & REVENUE CHART
    ========================================== */}

      <div className="row mt-4">
        <div className="col-12">
          <SalesChart />
        </div>
      </div>
      {/* ==========================================
    STEP 8 — RECENT ORDERS
    ========================================== */}

      <div className="row mt-4">
        <div className="col-12">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
