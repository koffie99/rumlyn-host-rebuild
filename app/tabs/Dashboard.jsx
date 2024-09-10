"use client"
import React, { useEffect, useState } from "react"
import DashCard from "../components/DashCard"

const Dashboard = () => {
  const [dashboardCount, setDashboardCount] = useState(null)

  let creatorId

  if (typeof sessionStorage !== "undefined") {
    creatorId = sessionStorage.getItem("creatorId")
  }

  // get creator dashboard counts
  const getDashboardCount = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      }

      await fetch(
        `https://api.rumlyn.com/api/v1/dashboard/creator/${creatorId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setDashboardCount(result)
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  // init
  useEffect(() => {
    getDashboardCount()
  }, [])

  return (
    <div className="min-h-screen p-12">
      <h2 className="font-bold text-xl">Dashboard</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <DashCard count={0} item="Listings" />
        <DashCard count={4} item="New Viewers" />
        <DashCard count={3000} item="Earnings" />
        {/* <p>Total Projects: {dashboardCount?.listing_no || 0}</p> */}
      </div>
    </div>
  )
}

export default Dashboard
