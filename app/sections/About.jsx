import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <div className="h-[100%] md:h-[100vh] md:p-0 p-12 bg-[#f9fafd] flex justify-center items-center gap-6 md:flex-row flex-col">
      <div className="flex-[0.6] lg:flex-[0.4]">
        <h2 className="text-3xl lg:text-6xl">About Rumlyn</h2>
        <p className="mt-2 lg:text-lg">
          Rumlyn represents the voices of many property owners and prospective
          renters and buys of properties and spaces. We provide a simple way to
          quickly put your properties out there and gain renters and buyers in
          the shortest possible amount of time.
        </p>
        <div className="flex flex-col items-start mt-6">
          <p className="font-semibold">Gideon Asare-Twum</p>
          <p className="text-sm">CMO, Rumlyn</p>
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          alt="gideon chief marketting officer"
          src="/images/ogidi.png"
          quality={100}
          className="h-[50vh] w-full md:h-[500px] md:w-[500px] lg:w-[700px] lg:h-[700px]"
        />
      </div>
    </div>
  )
}

export default About
