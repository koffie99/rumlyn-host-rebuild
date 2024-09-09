import { Button } from "antd"
import Image from "next/image"
import React from "react"

const Splash = () => {
  return (
    <div className="h-[100vh] bg-[#08a88a] flex items-center justify-center gap-7">
      <div>
        <Image
          width={500}
          height={500}
          alt="rumlyn cover photo"
          src="/images/rumlyncover.png"
        />
      </div>
      <div className="flex-[0.6]">
        <h1 className="text-4xl text-white mb-3">
          Rent And Sell Your Properties Today
        </h1>
        <p className="text-white">
          Renting and Selling your properties and spaces has been re-imagined
          with Rumlyn. Its free to create an account and start making some extra
          money today.
        </p>
        <Button className="bg-white py-5 font-semibold text-[#08a88a] mt-3">
          Start Listing Now
        </Button>
      </div>
    </div>
  )
}

export default Splash
