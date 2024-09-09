import Image from "next/image"
import React from "react"

const WhyCard = ({ image, title, desc, image_position }) => {
  return (
    <div className="flex items-center gap-8 w-full justify-center md:flex-row flex-col-reverse">
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${
          image_position === "left" ? "block" : "hidden"
        } w-64 h-64 sm:w-80 sm:h-80 md:w-fit md:h-fit`}
      />
      <div className="flex-[0.6]">
        <h2 className="text-2xl">{title}</h2>
        <p>{desc}</p>
      </div>
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${
          image_position === "right" ? "block" : "hidden"
        } w-64 h-64 sm:w-120 sm:h-120 md:w-fit md:h-fit`}
      />
    </div>
  )
}

export default WhyCard
