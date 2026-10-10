// ==========================================
// STEP 4 — SIDEBAR COMPONENT
// ==========================================
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 min-vh-100 sidebar">

      {/* STEP 4.1 — Dashboard Logo / Title */}
      <h4 className="text-center mb-4">
        Admin Dashboard
      </h4>


      {/* STEP 4.2 — Navigation Menu */}
      <ul className="nav nav-pills flex-column gap-2">

        {/* Dashboard */}
        <li className="nav-item">
          <Link
  to="/"
  className="nav-link active"
>
  <i className="bi bi-speedometer2 me-2"></i>
  Dashboard
</Link>
        </li>


        {/* Analytics */}
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-bar-chart me-2"></i>
            Analytics
          </a>
        </li>


        {/* Users */}
        <li className="nav-item">
          <Link
  to="/users"
  className="nav-link text-white"
>
  <i className="bi bi-people me-2"></i>
  Users
</Link>
        </li>


        {/* Products */}
        <li className="nav-item">
          <Link
  to="/products"
  className="nav-link text-white"
>
  <i className="bi bi-box-seam me-2"></i>
  Products
</Link>
        </li>


        {/* Orders */}
        <li className="nav-item">
          <Link
  to="/orders"
  className="nav-link text-white"
>
  <i className="bi bi-cart3 me-2"></i>
  Orders
</Link>
        </li>


        {/* Messages */}
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-chat-dots me-2"></i>
            Messages
          </a>
        </li>


        {/* Notifications */}
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-bell me-2"></i>
            Notifications
          </a>
        </li>


        {/* Settings */}
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-gear me-2"></i>
            Settings
          </a>
        </li>

      </ul>


      {/* STEP 4.3 — Logout */}
      <div className="mt-4">

        <button className="btn btn-danger w-100">
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>

      </div>

    </div>
  )
}

export default Sidebar