// ==========================================
// STEP 7 — SALES & REVENUE CHART
// ==========================================

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'


// STEP 7.1 — Chart Data

const data = [
  {
    month: 'Jan',
    sales: 4000,
    revenue: 2400
  },
  {
    month: 'Feb',
    sales: 3000,
    revenue: 1398
  },
  {
    month: 'Mar',
    sales: 5000,
    revenue: 3800
  },
  {
    month: 'Apr',
    sales: 4780,
    revenue: 3908
  },
  {
    month: 'May',
    sales: 5890,
    revenue: 4800
  },
  {
    month: 'Jun',
    sales: 6390,
    revenue: 5200
  },
  {
    month: 'Jul',
    sales: 7490,
    revenue: 6100
  }
]


function SalesChart() {

  return (

    <div className="card border-0 shadow-sm">

      {/* STEP 7.2 — Chart Header */}
      <div className="card-body">

        <h5 className="card-title mb-4">
          Sales & Revenue
        </h5>


        {/* STEP 7.3 — Chart */}
        <ResponsiveContainer width="100%" height={350}>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />


            {/* Sales Line */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#0d6efd"
              strokeWidth={3}
            />


            {/* Revenue Line */}
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#198754"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}


export default SalesChart