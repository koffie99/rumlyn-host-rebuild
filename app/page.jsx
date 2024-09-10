import Image from "next/image"
import { Button, Popconfirm } from "antd"
import Splash from "./sections/Splash"
import About from "./sections/About"
import Why from "./sections/Why"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Nav from "./sections/Nav"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Nav />
      <Splash />
      <About />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}
