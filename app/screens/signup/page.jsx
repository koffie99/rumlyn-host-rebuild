"use client"
import { Button } from "antd"
import Image from "next/image"
import React, { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // handle create account
  const createAccount = async () => {
    try {
      setLoading(true)
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const raw = JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        phone: phone.trim(),
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      await fetch(
        "https://api.rumlyn.com/api/v1/creators/create",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "creator signed up successfully") {
            setLoading(false)
            toast.success("Host account created successfully")
            location.href = "/screens/login"
          } else {
            setLoading(false)
            toast.error("Something went wrong, kindly try again")
          }
        })
        .catch((error) => {
          setLoading(false)
          toast.error("Something went wrong, kindly try again")
          console.error(error)
        })
    } catch (err) {
      setLoading(false)
      toast.error("Something went wrong, kindly try again")
      console.error(err)
    }
  }

  // to login page
  const toLogin = () => {
    location.href = "/screens/login"
  }

  return (
    <div className="min-h-screen signup-bg flex items-center flex-col justify-center">
      <div className="text-center px-5 mb-4 2xl:mb-12">
        <h2 className="text-2xl 2xl:text-4xl">Become a host today</h2>
        <p className="text-center">
          Join the many other hosts boosting their sales on rumlyn
        </p>
      </div>
      <div className="md:h-[70vh] h-fit 2xl:h-fit md:py-0 2xl:pb-14 pb-14 bg-white rounded-lg shadow-2xl md:w-[40%] w-[90%] mt-6 md:p-12 p-5 flex flex-col gap-4">
        <div className="flex justify-center">
          <Image
            width={100}
            height={100}
            alt="login representation"
            src="/images/styled-logo.png"
            quality={100}
            className="bg-white p-5 rounded-full shadow-2xl mt-[-50px]"
          />
        </div>
        <input
          type="text"
          placeholder="Name"
          className="p-3 ring-1 ring-[#ccc] rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="p-3 ring-1 ring-[#ccc] rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 ring-1 ring-[#ccc] rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="p-3 ring-1 ring-[#ccc] rounded-md"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          className="p-6 bg-[#08a88a] text-white signup-btn"
          onClick={() => createAccount()}
        >
          {loading ? (
            <Image
              width={30}
              height={30}
              alt="loading animation"
              src="/anims/loading.gif"
            />
          ) : (
            "Create Account"
          )}
        </Button>
        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <button className="underline" onClick={() => toLogin()}>
            Login Now
          </button>
        </p>
      </div>

      <Toaster />
    </div>
  )
}

export default SignUp
