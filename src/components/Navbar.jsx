// ==========================================
// STEP 5 — NAVBAR COMPONENT
// ==========================================

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4">
      {/* STEP 5.1 — Page Title */}
      <div>
        <h5 className="mb-0">Dashboard</h5>

        <small className="text-muted">Welcome back, Admin!</small>
      </div>

      {/* STEP 5.2 — Right Side */}
      <div className="d-flex align-items-center gap-3">
        {/* Search */}
        <div className="input-group">
          <span className="input-group-text bg-light border-0">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control bg-light border-0"
            placeholder="Search..."
          />
        </div>

        {/* Notification */}
        {/* ==========================================
    STEP 11 — NOTIFICATION DROPDOWN
    ========================================== */}

        <div className="dropdown">
          <button
            className="btn btn-light position-relative"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-bell fs-5"></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <h6 className="dropdown-header">Notifications</h6>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                New order received
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                New user registered
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Payment received
              </a>
            </li>
          </ul>
        </div>

{/* ==========================================
    STEP 16.1 — DARK MODE BUTTON
    ========================================== */}

<button
  className="btn btn-light"
  onClick={() => setDarkMode(!darkMode)}
>

  <i
    className={
      darkMode
        ? 'bi bi-sun fs-5'
        : 'bi bi-moon fs-5'
    }
  ></i>

</button>

        {/* ==========================================
    STEP 11.1 — PROFILE DROPDOWN
    ========================================== */}

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-person-circle fs-5 me-1"></i>
            Admin
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <a className="dropdown-item" href="#">
                <i className="bi bi-person me-2"></i>
                Profile
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item text-danger" href="#">
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
