import { Switch } from "antd"
import React from "react"

const Settings = () => {
  return (
    <div className="md:p-12 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Settings</h2>
        <div></div>
      </div>

      {/* main content */}
      <div className="w-full bg-white p-5 rounded-lg shadow mt-5 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <h3>Apply Discount</h3>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <h3>Host Status</h3>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  )
}

export default Settings
