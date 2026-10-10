// ==========================================
// STEP 6 — CONNECT ALL COMPONENTS
// ==========================================

import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import "./App.css";

function App() {
  // ==========================================
  // STEP 16 — DARK / LIGHT MODE
  // ==========================================

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
    <div className={`d-flex dashboard-layout ${darkMode ? "dark-mode" : ""}`}>
      {/* STEP 6.1 — Sidebar */}
      <Sidebar />

      {/* STEP 6.2 — Main Area */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Dashboard Page */}
        <Dashboard />

        {/* ==========================================
              STEP 18.3 — ROUTES
              ========================================== */}

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/users"
              element={<Users />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/orders"
              element={<Orders />}
            />

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
