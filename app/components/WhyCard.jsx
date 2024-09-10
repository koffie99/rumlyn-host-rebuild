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
        } h-[50vh] w-full md:h-[500px] md:w-[500px] lg:w-[600px] lg:h-[600px]`}
        // className="h-[50vh] w-full md:h-[500px] md:w-[500px] lg:w-[700px] lg:h-[700px]"
      />
      <div className="flex-[0.6]">
        <h2 className="text-2xl lg:text-4xl">{title}</h2>
        <p className="lg:text-lg">{desc}</p>
      </div>
      <Image
        width={400}
        height={400}
        alt="easy to use"
        src={image}
        quality={100}
        className={`${
          image_position === "right" ? "block" : "hidden"
        }  h-[50vh] w-full md:h-[500px] md:w-[500px] lg:w-[600px] lg:h-[600px]`}
      />
    </div>
  )
}

export default WhyCard
