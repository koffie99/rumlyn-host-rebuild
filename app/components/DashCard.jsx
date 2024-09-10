import React from "react"
import { BsHouses } from "react-icons/bs"

const DashCard = ({ count, item }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow flex items-center gap-5">
      <div className="bg-[#f6fffd] p-4 rounded-lg">
        <BsHouses className="text-lg" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold">{count}</h2>
        <p className="text-sm">{item}</p>
      </div>
    </div>
  )
}

export default DashCard
