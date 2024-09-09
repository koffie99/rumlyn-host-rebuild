"use client"
import { Button } from "antd"
import Image from "next/image"
import React, { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  // send reset link
  const sendLink = async () => {
    try {
      setLoading(true)
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const raw = JSON.stringify({
        email: email.trim(),
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      await fetch(
        "https://api.rumlyn.com/api/v1/forgotPassword",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "email sent successfully") {
            setLoading(false)
            toast.success("Password reset link sent successfully")
            location.href = "/"
          } else {
            setLoading(false)
            toast.error(result.msg)
          }
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error("Unable to send reset link, kindly try again")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center forgot-bg flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl">Forgot Password</h1>
        <p>Please enter your email address to get your reset link</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          className="p-3 ring-1 ring-[#ccc] rounded-md w-full"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="bg-[#08a88a] text-white p-6 send-btn"
          onClick={() => sendLink()}
        >
          {loading ? (
            <Image
              width={30}
              height={30}
              alt="loading animation"
              src="/anims/loading.gif"
            />
          ) : (
            "Send Link"
          )}
        </Button>
      </div>

      <Toaster />
    </div>
  )
}

export default ForgotPassword
