// ==========================================
// STEP 13 — PRODUCTS MANAGEMENT
// ==========================================

import { useState } from "react";

// STEP 13.1 — Products Data

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 25,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Headphones",
    category: "Accessories",
    price: 150,
    stock: 40,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Keyboard",
    category: "Accessories",
    price: 80,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Monitor",
    category: "Electronics",
    price: 450,
    stock: 12,
    status: "In Stock",
  },
];

function Products() {
  // STEP 13.2 — Products State

  const [products, setProducts] = useState(initialProducts);

  const [search, setSearch] = useState("");

  // STEP 13.3 — Search Products

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()),
  );

  // STEP 13.4 — Delete Product

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // ==========================================
  // STEP 15 — ADD PRODUCT MODAL
  // ==========================================

  const [showModal, setShowModal] = useState(false);

  const [productName, setProductName] = useState("");

  const [productCategory, setProductCategory] = useState("");

  const [productPrice, setProductPrice] = useState("");

  const [productStock, setProductStock] = useState("");

  return (
    <div className="p-4">
      {/* ==========================================
          STEP 13.5 — PAGE HEADER
          ========================================== */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3>Products</h3>

          <p className="text-muted mb-0">Manage your products</p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-lg me-2"></i>
          Add Product
        </button>
      </div>

      {/* ==========================================
          STEP 13.6 — SEARCH
          ========================================== */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* ==========================================
              STEP 13.7 — PRODUCTS TABLE
              ========================================== */}

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>

                    <td>
                      <strong>{product.name}</strong>
                    </td>

                    <td>{product.category}</td>

                    <td>${product.price}</td>

                    <td>{product.stock}</td>

                    <td>
                      <span
                        className={`badge ${
                          product.status === "In Stock"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <i className="bi bi-pencil"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* ==========================================
    STEP 15.1 — ADD PRODUCT MODAL
    ========================================== */}

      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}

              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Modal Body */}

              <div className="modal-body">
                {/* Product Name */}

                <div className="mb-3">
                  <label className="form-label">Product Name</label>

                  <input
                    type="text"
                    className="form-control"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                {/* Category */}

                <div className="mb-3">
                  <label className="form-label">Category</label>

                  <input
                    type="text"
                    className="form-control"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>

                {/* Price */}

                <div className="mb-3">
                  <label className="form-label">Price</label>

                  <input
                    type="number"
                    className="form-control"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>

                {/* Stock */}

                <div className="mb-3">
                  <label className="form-label">Stock</label>

                  <input
                    type="number"
                    className="form-control"
                    value={productStock}
                    onChange={(e) => setProductStock(e.target.value)}
                  />
                </div>
              </div>

              {/* Modal Footer */}

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    // STEP 15.2 — Add Product

                    const newProduct = {
                      id: products.length + 1,

                      name: productName,

                      category: productCategory,

                      price: Number(productPrice),

                      stock: Number(productStock),

                      status:
                        Number(productStock) > 0 ? "In Stock" : "Out of Stock",
                    };

                    setProducts([...products, newProduct]);

                    // Clear Form

                    setProductName("");
                    setProductCategory("");
                    setProductPrice("");
                    setProductStock("");

                    // Close Modal

                    setShowModal(false);
                  }}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
