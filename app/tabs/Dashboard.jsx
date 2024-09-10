import React from "react"
import DashCard from "../components/DashCard"
import { BsHouses } from "react-icons/bs"
import { GoPeople } from "react-icons/go"
import { CiMoneyCheck1 } from "react-icons/ci"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const Dashboard = () => {
  // sample data
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <div className="md:p-12 p-5">
      <h2 className="text-2xl">Dashboard</h2>
      <div className="mt-5 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
        <DashCard count={2} item="Listings" icon={BsHouses} />
        <DashCard count={5} item="Followers" icon={GoPeople} />
        <DashCard count={3000} item="Earnings" icon={CiMoneyCheck1}/>
      </div>

      {/* Engagement Trend Line Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Engagement Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            {/* <Tooltip /> */}
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#08a88a"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
