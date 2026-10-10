// ==========================================
// STEP 9 — USERS MANAGEMENT
// ==========================================

import { useState } from 'react'


// STEP 9.1 — Users Data

const initialUsers = [
  {
    id: 1,
    name: 'Ali Khan',
    email: 'ali@example.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    email: 'ahmed@example.com',
    role: 'User',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Usman Ali',
    email: 'usman@example.com',
    role: 'User',
    status: 'Inactive'
  },
  {
    id: 4,
    name: 'Hamza Khan',
    email: 'hamza@example.com',
    role: 'Manager',
    status: 'Active'
  }
]


function Users() {

  // STEP 9.2 — State
  const [users, setUsers] = useState(initialUsers)


  // STEP 9.3 — Delete User

  const deleteUser = (id) => {

    const updatedUsers = users.filter(
      (user) => user.id !== id
    )

    setUsers(updatedUsers)

  }

  // ==========================================
// STEP 10 — SEARCH & FILTER
// ==========================================
const [search, setSearch] = useState('')

// STEP 10.1 — Filter Users

const filteredUsers = users.filter((user) => {

  return (
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

})

// ==========================================
// STEP 17 — UI STATES
// ==========================================

const [loading, setLoading] = useState(false)

const [error, setError] = useState('')
// STEP 17.1 — Simulate Loading

const loadUsers = () => {

  setLoading(true)

  setError('')


  setTimeout(() => {

    setLoading(false)

  }, 1500)

}

  return (

    <div className="p-4">

      {/* STEP 9.4 — Page Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h3>
            Users
          </h3>
{/* ==========================================
    STEP 17.2 — LOAD USERS BUTTON
    ========================================== */}

<button
  className="btn btn-outline-primary mb-3"
  onClick={loadUsers}
>
  Refresh Users
</button>
          <p className="text-muted mb-0">
            Manage your users
          </p>

        </div>


        <button className="btn btn-primary">

          <i className="bi bi-person-plus me-2"></i>

          Add User

        </button>

      </div>

    {/* ==========================================
    STEP 10.2 — SEARCH INPUT
    ========================================== */}

<div className="mb-3">

  <div className="input-group">

    <span className="input-group-text">
      <i className="bi bi-search"></i>
    </span>

    <input
      type="text"
      className="form-control"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  </div>

</div>

      {/* STEP 9.5 — Users Table */}

      <div className="card border-0 shadow-sm">

        <div className="card-body">

          <div className="table-responsive">



            <table className="table table-hover align-middle">

              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>


              <tbody>

  {/* ==========================================
      STEP 17.3 — LOADING STATE
      ========================================== */}

  {loading ? (

    <tr>

      <td
        colSpan="6"
        className="text-center py-4"
      >

        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <p className="mt-2 mb-0">
          Loading users...
        </p>

      </td>

    </tr>

  ) : error ? (

    /* ==========================================
       STEP 17.4 — ERROR STATE
       ========================================== */

    <tr>

      <td
        colSpan="6"
        className="text-center text-danger py-4"
      >
        {error}
      </td>

    </tr>

  ) : filteredUsers.length === 0 ? (

    /* ==========================================
       STEP 17.5 — EMPTY STATE
       ========================================== */

    <tr>

      <td
        colSpan="6"
        className="text-center py-4"
      >

        <i className="bi bi-inbox fs-1"></i>

        <p className="mt-2">
          No users found
        </p>

      </td>

    </tr>

  ) : (

    /* ==========================================
       STEP 17.6 — USERS
       ========================================== */

    filteredUsers.map((user) => (

      <tr key={user.id}>

        <td>{user.id}</td>

        <td>{user.name}</td>

        <td>{user.email}</td>

        <td>{user.role}</td>

        <td>

          <span
            className={`badge ${
              user.status === 'Active'
                ? 'bg-success'
                : 'bg-secondary'
            }`}
          >
            {user.status}
          </span>

        </td>

        <td>

          <button className="btn btn-sm btn-outline-primary me-2">
            <i className="bi bi-pencil"></i>
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteUser(user.id)}
          >
            <i className="bi bi-trash"></i>
          </button>

        </td>

      </tr>

    ))

  )}

</tbody>
            </table>

          </div>

        </div>

      </div>

    </div>

  )
}


export default Users