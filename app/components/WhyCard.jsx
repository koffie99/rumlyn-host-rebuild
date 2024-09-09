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
        className={`${image_position === "left" ? "block" : "hidden"}`}
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
        className={`${image_position === "right" ? "block" : "hidden"}`}
      />
    </div>
  )
}

export default WhyCard
