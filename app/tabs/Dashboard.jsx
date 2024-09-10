import React from "react"
import WhyCard from "../components/WhyCard"
import DashCard from "../components/DashCard"

const Dashboard = () => {
  return (
    <div className="p-12">
      <h2 className="text-2xl">Dashboard</h2>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <DashCard count={2} item="Listings" />
        <DashCard count={5} item="Followers" />
        <DashCard count={3000} item="Earnings" />
      </div>
    </div>
  )
}

export default Dashboard
