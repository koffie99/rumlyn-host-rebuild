"use client"
import { Button } from "antd"
import Image from "next/image"
import React, { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // handle login
  const handleLogin = async () => {
    try {
      setLoading(true)
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const raw = JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      await fetch("https://api.rumlyn.com/api/v1/mega-login/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "login successful") {
            setLoading(false)
            toast.success("Login successful")
          } else {
            setLoading(false)
            toast.error("Kindly check your credentials and try again")
          }
        })
        .catch((error) => console.error(error))
    } catch (err) {
      setLoading(false)
      toast.error("Kindly check your credentials and try again")
      console.log(err)
    }
  }

  // to sign up page
  const toSignUp = () => {
    location.href = "/screens/signup"
  }

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
        <div className="flex md:w-[70%] w-[90%] flex-col gap-4 mt-7">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md ring-1 ring-[#ccc]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md ring-1 ring-[#ccc]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <div></div>
            <button>Forgot Password?</button>
          </div>
          <Button
            className="bg-[#08a88a] text-white p-6 rounded-md hover:bg-[#258573] login-btn"
            onClick={() => handleLogin()}
          >
            {loading ? (
              <Image
                width={30}
                height={30}
                alt="loading animation"
                src="/anims/loading.gif"
              />
            ) : (
              "Login"
            )}
          </Button>
          <p className="text-center text-sm mt-4">
            Don't have an account yet?{" "}
            <button className="underline" onClick={() => toSignUp()}>
              Create One
            </button>
          </p>
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default Login
