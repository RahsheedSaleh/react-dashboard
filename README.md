# React Dashboard

A modern, responsive Admin Dashboard built with React and Bootstrap. This project provides a clean interface for managing users, products, orders, and viewing business statistics.

## Features

* **Dashboard Overview** — View total users, sales, orders, and revenue.
* **Sales Charts** — Visualize sales and revenue using Recharts.
* **Users Management** — View, search, and delete users.
* **Products Management** — View, search, add, and delete products.
* **Orders Management** — View orders and update their status.
* **Dark Mode** — Switch between light and dark themes.
* **Responsive Design** — Layout adapts to desktop, tablet, and mobile screens.
* **Navigation** — Navigate between pages using React Router.
* **Loading and Empty States** — Display appropriate UI states when needed.

## Technologies Used

* React.js
* JavaScript
* Bootstrap
* Bootstrap Icons
* Recharts
* React Router DOM
* HTML5
* CSS3
* Vite
* ESLint

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/RahsheedSaleh/react-dashboard.git
```


### 2. Navigate to the project folder

```bash
cd react-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the dashboard.

## Project Structure

```text
react-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SalesChart.jsx
│   │   └── RecentOrders.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Products.jsx
│   │   └── Orders.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

*Note: The structure above describes the intended organization; your actual files may differ slightly.*

## Data Storage

This project currently uses sample data and React state for demonstration. It does not have a connected backend database, so changes may reset when the page is refreshed.

## Future Improvements

* Connect a Node.js and Express.js backend.
* Integrate MongoDB for persistent data storage.
* Add authentication and authorization.
* Deploy the dashboard online.

## Author

**Rahsheed Saleh**

GitHub: https://github.com/RahsheedSaleh

## License

This project is available for learning and personal portfolio purposes.

