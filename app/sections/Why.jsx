import React from "react"
import WhyCard from "../components/WhyCard"

const Why = () => {
  return (
    <div
      className="h-[100%] py-12 bg-[#ffffff] p-20 text-center flex items-center flex-col bg"
      id="why"
    >
      <h2 className="text-3xl 2xl:text-6xl text-center mb-9">
        Why Host On Rumlyn
      </h2>
      <div className="flex justify-center flex-col items-center gap-8">
        <WhyCard
          image_position="left"
          image="/images/easy.png"
          title="Easy to use"
          desc=" It is extremely easy to create an account and start listing your
          properties instantly!"
        />
        <WhyCard
          image_position="right"
          image="/images/discover.png"
          title="Get Discovered Quickly"
          desc="Get your listings to the reach of many prospective renters and buyers."
        />
        <WhyCard
          image_position="left"
          image="/images/support.png"
          title="24/7 Support"
          desc="Call us anytime when you need help with anything. We are here for you."
        />
        <WhyCard
          image_position="right"
          image="/images/discover.png"
          title="Get Discovered Quickly"
          desc="Get your listings to the reach of many prospective renters and buyers."
        />
      </div>
    </div>
  )
}

export default Why
