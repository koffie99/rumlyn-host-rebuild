import React from "react"

const DashCard = ({ icon, count, item }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow flex items-center gap-5 px-12">
      <div className="bg-[#f6fffd] p-4 rounded-lg w-fit">
        {React.createElement(icon, { className: "text-md" })}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{count}</h2>
        <p className="text-sm">{item}</p>
      </div>
    </div>
  )
}

export default DashCard
