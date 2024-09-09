import React from "react"
import WhyCard from "../components/WhyCard"

const Why = () => {
  return (
    <div className="h-[100vh] bg-[#ffffff] p-20 text-center flex items-center flex-col">
      <h2 className="text-3xl text-center mb-9">Why Host On Rumlyn</h2>
      <div className="flex justify-center flex-col items-center gap-8">
        <WhyCard image_position="left" image="/images/easy.png" />
        <WhyCard image_position="right" />
      </div>
    </div>
  )
}

export default Why
