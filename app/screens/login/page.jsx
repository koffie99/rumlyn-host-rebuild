import { Button } from "antd"
import Image from "next/image"
import React from "react"

const Login = () => {
  return (
    <div className="min-h-screen w-full login-bg flex items-center justify-center gap-8 md:p-0 p-7">
      <div className="h-[80vh] md:flex-[0.5] flex-1 rounded-lg bg-white shadow-2xl flex flex-col items-center">
        <Image
          width={100}
          height={100}
          alt="login representation"
          src="/images/styled-logo.png"
          quality={100}
          className="mt-[-40px] bg-white p-5 rounded-full shadow-2xl"
        />
        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-2xl">Welcome here</h2>
          <p className="text-sm">Login to get your listings out there</p>
        </div>
        <div className="flex w-[70%] flex-col gap-4 mt-7">
          <input
            type="email" 
            placeholder="Email"
            className="p-3 rounded-md ring-1 ring-[#ccc]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md ring-1 ring-[#ccc]"
          />
          <div className="flex items-center justify-between">
            <div></div>
            <button>Forgot Password?</button>
          </div>
          <Button className="bg-[#08a88a] text-white p-6 rounded-md">
            Login
          </Button>
          <p className="text-center text-sm mt-4">
            Don't have an account yet?{" "}
            <button className="underline">Create One</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
