import { Button } from "antd"
import React from "react"

const Contact = () => {
  return (
    <div
      className="h-[100%] bg-[#08a88a] text-white md:p-20 p-5 flex gap-8 md:flex-row flex-col"
      id="contact"
    >
      <div className="flex-[0.6]">
        <h2 className="text-3xl mb-3 2xl:text-6xl">
          We'll love to hear from you
        </h2>
        <p className="2xl:text-lg">
          We are open for enquiries, questions and directives as to how to use
          the platform to your own advantage. We respond to you as quick as
          possible
        </p>
      </div>
      <div className="bg-white h-[70vh] w-full flex-[0.7] rounded-lg contact-bg shadow-2xl md:p-12 p-4">
        <div className="w-full h-fit shadow-2xl bg-white rounded-lg text-black p-12">
          <h2 className="text-xl 2xl:text-3xl">
            Don't hesitate, send us a message
          </h2>
          <p>We typically response in about an hour.</p>
          <div className="mt-7 flex flex-col gap-5 w-full">
            <input
              type="email"
              placeholder="Email"
              className="ring-1 ring-[#ccc] rounded p-2 lg:p-3"
            />
            <input
              type="text"
              placeholder="Name"
              className="ring-1 ring-[#ccc] rounded p-2 lg:p-3"
            />
            <textarea
              rows={5}
              type="text"
              placeholder="Message"
              className="ring-1 ring-[#ccc] rounded p-2 lg:p-3"
            />
            <Button className="w-full py-5 bg-[#08a88a] text-white lg:py-6">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
