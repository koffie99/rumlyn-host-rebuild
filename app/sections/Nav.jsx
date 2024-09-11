import Image from "next/image"
import React from "react"

const Nav = () => {
  return (
    <div className="h-[10vh] bg-transparent md:flex items-center justify-between px-20 fixed w-full z-[999] hidden">
      <div className="flex items-center gap-4">
        <Image
          width={50}
          height={50}
          alt="rumlyn logo"
          src="/images/logo.png"
        />
        <h2 className="text-white text-lg lg:text-xl">Rumlyn</h2>
      </div>
      <div>
        <ul className="flex gap-8 text-white">
          <a href="#">
            <li className="cursor-pointer hover:underline">Home</li>
          </a>
          <a href="#about">
            <li className="cursor-pointer hover:underline">About</li>
          </a>
          <a href="#why">
            <li className="cursor-pointer hover:underline">Why Rumlyn?</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:underline">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
