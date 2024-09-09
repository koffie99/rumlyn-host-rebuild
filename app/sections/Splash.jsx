"use client"
import { Button } from "antd"
import Image from "next/image"
import React from "react"

const Splash = () => {
  // to login page
  const toLogin = () => {
    location.href = "/screens/login"
  }

  return (
    <div className="h-[100%] py-12 bg-[#08a88a] flex items-center md:flex-row flex-col justify-center gap-7">
      <div>
        <Image
          width={500}
          height={500}
          alt="rumlyn cover photo"
          src="/images/rumlyncover.png"
          quality={100}
          className="h-[50vh] w-full md:h-[500px] md:w-[500px]"
        />
      </div>
      <div className="md:flex-[0.6] flex-1 flex flex-col md:p-0 p-7">
        <h1 className="md:text-4xl text-3xl text-white mb-3 md:text-left text-center">
          Rent And Sell Your Properties Today
        </h1>
        <p className="text-white md:text-left text-center">
          Renting and Selling your properties and spaces has been re-imagined
          with Rumlyn. Its free to create an account and start making some extra
          money today.
        </p>
        <Button
          className="bg-white py-6 rounded-full font-semibold text-[#08a88a] mt-3 md:w-[60%] w-full"
          onClick={() => toLogin()}
        >
          Start Listing Now
        </Button>
      </div>
    </div>
  )
}

export default Splash
