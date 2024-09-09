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
        creator_name: name.trim(),
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
        .catch((error) => console.error(error))
    } catch (err) {
      setLoading(false)
      toast.error("Something went wrong, kindly try again")
      console.log(err)
    }
  }

  // to login page
  const toLogin = () => {
    location.href = "/screens/login"
  }

  return (
    <div className="min-h-screen signup-bg flex items-center flex-col justify-center">
      <h2 className="text-2xl">Become a host today</h2>
      <p>Join the many other hosts boosting their sales on rumlyn</p>
      <div className="h-[70vh] bg-white rounded-lg shadow-2xl md:w-[40%] w-[90%] mt-6 md:p-12 p-5 flex flex-col gap-4">
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
