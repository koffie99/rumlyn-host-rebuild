import Image from "next/image"
import { Button, Popconfirm } from "antd"
import Splash from "./sections/Splash"
import About from "./sections/About"
import Why from "./sections/Why"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Splash />
      <About />
      <Why />
    </div>
  )
}
