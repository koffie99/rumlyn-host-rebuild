import Image from "next/image"
import { Button, Popconfirm } from "antd"
import Splash from "./sections/Splash"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Splash />
    </div>
  )
}
