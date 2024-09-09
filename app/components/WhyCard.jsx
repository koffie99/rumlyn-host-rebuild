import Image from "next/image"
import React from "react"

const WhyCard = ({ image, image_position }) => {
  return (
    <div className="flex items-center gap-5 w-full justify-center">
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${image_position === "left" ? "block" : "hidden"}`}
      />
      <div className="flex-[0.6]">
        <h2 className="text-2xl">Easy to use</h2>
        <p>
          It is extremely easy to create an account and start listing your
          properties instantly!
        </p>
      </div>
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${image_position === "right" ? "block" : "hidden"}`}
      />
    </div>
  )
}

export default WhyCard
