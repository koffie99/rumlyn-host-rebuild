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
        } h-full w-full md:h-[400px] md:w-[400px] 2xl:w-[600px] 2xl:h-[600px]`}
      />
      <div className="flex-[0.6]">
        <h2 className="text-2xl 2xl:text-4xl">{title}</h2>
        <p className="2xl:text-lg">{desc}</p>
      </div>
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${
          image_position === "right" ? "block" : "hidden"
        }  h-full w-full md:h-[400px] md:w-[400px] 2xl:w-[600px] 2xl:h-[600px]`}
      />
    </div>
  )
}

export default WhyCard
