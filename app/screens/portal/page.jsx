"use client"
import React, { useState } from "react"
import { TbLayoutDashboard } from "react-icons/tb"
import { HiOutlineHomeModern } from "react-icons/hi2"
import Image from "next/image"
import Dashboard from "@/app/tabs/Dashboard"
import Listings from "@/app/tabs/Listings"
import { GiTakeMyMoney } from "react-icons/gi"
import Earnings from "@/app/tabs/Earnings"
import { IoSettingsOutline } from "react-icons/io5"
import { BsActivity } from "react-icons/bs"
import { GoPeople } from "react-icons/go"
import Settings from "@/app/tabs/Settings"
import Activities from "@/app/tabs/Activities"
import Followers from "@/app/tabs/Followers"
import { RiLogoutCircleLine } from "react-icons/ri"
import { Popconfirm } from "antd"

const Portal = () => {
  let creatorName
  let myPage

  if (typeof sessionStorage !== "undefined") {
    creatorName = sessionStorage.getItem("creatorName")
    myPage = sessionStorage.getItem("myPage")
  }

  const [selectPage, setSelectedPage] = useState(myPage)

  // setPage
  const setPage = (item) => {
    sessionStorage.setItem("myPage", item)
    setSelectedPage(item)
  }

  // custom pages
  const customPages = () => {
    switch (selectPage) {
      case "dashboard":
        return <Dashboard />
      case "listings":
        return <Listings />
      case "earnings":
        return <Earnings />
      case "activities":
        return <Activities />
      case "followers":
        return <Followers />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen w-full flex mesh">
      {/* sidenav */}
      <div className="flex-[2] bg-white h-[100vh] shadow p-5 flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-3">
          <Image
            width={30}
            height={30}
            alt="rumlyn logo"
            src="/images/logo.png"
          />
          <h2 className="text">Rumlyn Host</h2>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("dashboard")}
        >
          <TbLayoutDashboard />
          <p>Dashboard</p>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("listings")}
        >
          <HiOutlineHomeModern />
          <p>Listings</p>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("earnings")}
        >
          <GiTakeMyMoney />
          <p>Earnings</p>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("activities")}
        >
          <BsActivity />
          <p>Activities</p>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("followers")}
        >
          <GoPeople />
          <p>Followers</p>
        </div>
        <div
          className="flex items-center gap-3 side-nav"
          onClick={(e) => setPage("settings")}
        >
          <IoSettingsOutline />
          <p>Settings</p>
        </div>
        <Popconfirm
          title="Do you want to logout?"
          okButtonProps={{ style: {backgroundColor: 'tomato', color: 'white'} }}
          okText="Logout"
          onConfirm={() => {
            location.href = "/"
          }}
        >
          <div
            className="flex items-center gap-3 side-nav text-[tomato]"
            onClick={(e) => setPage("settings")}
          >
            <RiLogoutCircleLine />
            <p>Logout</p>
          </div>
        </Popconfirm>
      </div>
      {/* right side */}
      <div className="flex-[8] flex flex-col">
        {/* top nav */}
        <div className="w-full h-[10vh] bg-white shadow flex items-center justify-between px-10">
          <div></div>
          <div>
            <p>{creatorName || "Welcome Back"}</p>
          </div>
        </div>

        {/* custom page */}
        <div>{customPages()}</div>
      </div>
    </div>
  )
}

export default Portal
