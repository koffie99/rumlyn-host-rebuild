import {
  Button,
  Drawer,
  Form,
  Input,
  Select,
  Checkbox,
  Upload,
  Spin,
} from "antd"
import React, { useState } from "react"
import { MdArrowRightAlt } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { Toaster, toast } from "react-hot-toast"
import { UploadOutlined } from "@ant-design/icons"

const { Option } = Select

const Listings = () => {
  const [form] = Form.useForm()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [step, setStep] = useState(1)
  const [addListingLoading, setAddListingLoading] = useState(false)

  const onFinish = async (values) => {
    try {
      setAddListingLoading(true)
      const formData = new FormData()

      Object.keys(values).forEach((key) => {
        if (Array.isArray(values[key])) {
          values[key].forEach((item) => formData.append(`${key}[]`, item))
        } else if (key === "photos") {
          formData.append("photos", values[key].file.originFileObj)
        } else {
          formData.append(key, values[key])
        }
      })

      const response = await fetch(
        "https://api.rumlyn.com/api/v1/temp-listings/create",
        {
          method: "POST",
          body: formData,
        }
      )
      const result = await response.json()

      if (result.msg === "temp listing added successfully") {
        console.log(result)
        toast.success("Temp listing created successfully")
        setOpenDrawer(false)
      } else {
        toast.error("Something went wrong, kindly try again")
        console.log(result)
      }
    } catch (err) {
      toast.error("Something went wrong, kindly try again")
      console.log(err)
    } finally {
      setAddListingLoading(false)
    }
  }

  const EssentialsUi = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => setStep(2)}
      initialValues={{
        title: "Testing temp listing",
        desc: "Testing description",
        price: "500",
        contact: "0293848374883892",
        creator_id: "66e05d641b38a6a0fb4a5bee",
        property_type: "House",
        amenities: ["66dee58c8c6f52e9c9ddfb5d"],
        allowable_duration: "Long term",
        isRenewable: true,
        no_bedroom: "3",
        no_bathroom: "2",
        no_kitchen: "1",
        hasCorridor: true,
        no_garage: "2",
        isNegotiable: false,
        isFurnished: true,
        currency_type: "USD",
        location: {
          coordinates: ["20.7749", "30.4194"],
          address: "123 Main St, San Francisco, CA",
        },
        condition: "for sale",
        isAvailable: true,
        isFeatured: true,
        mode: "sell",
      }}
    >
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Essentials</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="desc"
          label="Description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="location.address"
          label="Location"
          rules={[{ required: true, message: "Please enter the location" }]}
        >
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item
          name="currency_type"
          label="Currency"
          rules={[{ required: true, message: "Please enter the currency" }]}
        >
          <Input placeholder="Currency" />
        </Form.Item>
        <Form.Item
          name="mode"
          label="Mode"
          rules={[{ required: true, message: "Please enter the mode" }]}
        >
          <Input placeholder="Mode" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input placeholder="Price" />
        </Form.Item>
        <Form.Item name="photos" label="Photos">
          <Upload
            customRequest={({ file, onSuccess }) => {
              setTimeout(() => onSuccess("ok"), 0)
            }}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={addListingLoading}>
          <span>Continue</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </Form>
  )

  const PropertyFeaturesUi = () => (
    <Form form={form} layout="vertical" onFinish={() => setStep(3)}>
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Property Features</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <Form.Item
          name="property_type"
          label="Property Type"
          rules={[
            { required: true, message: "Please enter the property type" },
          ]}
        >
          <Input placeholder="Property Type" />
        </Form.Item>
        <Form.Item
          name="condition"
          label="Condition"
          rules={[{ required: true, message: "Please enter the condition" }]}
        >
          <Input placeholder="Condition" />
        </Form.Item>
        <Form.Item
          name="no_bedroom"
          label="No. of Bedrooms"
          rules={[
            { required: true, message: "Please enter the number of bedrooms" },
          ]}
        >
          <Input type="number" placeholder="No. of Bedrooms" />
        </Form.Item>
        <Form.Item
          name="no_bathroom"
          label="No. of Bathrooms"
          rules={[
            { required: true, message: "Please enter the number of bathrooms" },
          ]}
        >
          <Input placeholder="No. of Bathrooms" />
        </Form.Item>
        <Form.Item
          name="no_kitchen"
          label="No. of Kitchens"
          rules={[
            { required: true, message: "Please enter the number of kitchens" },
          ]}
        >
          <Input placeholder="No. of Kitchens" />
        </Form.Item>
        <Form.Item
          name="no_garage"
          label="No. of Garages"
          rules={[
            { required: true, message: "Please enter the number of garages" },
          ]}
        >
          <Input placeholder="No. of Garages" />
        </Form.Item>
        <Form.Item name="hasCorridor" valuePropName="checked">
          <Checkbox>Has Corridor</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <span>Continue</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </Form>
  )

  const AdditionalFeaturesUi = () => (
    <Form form={form} layout="vertical" onFinish={() => setStep(4)}>
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Additional Features</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <Form.Item name="isFurnished" valuePropName="checked">
          <Checkbox>Is Furnished?</Checkbox>
        </Form.Item>
        <Form.Item name="isNegotiable" valuePropName="checked">
          <Checkbox>Is Negotiable?</Checkbox>
        </Form.Item>
        <Form.Item name="hasCorridor" valuePropName="checked">
          <Checkbox>Has Corridor</Checkbox>
        </Form.Item>
        <Form.Item name="agent_fee" valuePropName="checked">
          <Checkbox>Agent fee?</Checkbox>
        </Form.Item>
        <Form.Item name="amenities" label="Amenities">
          <Input placeholder="Amenities" />
        </Form.Item>
        <Form.Item name="allowable_duration" label="Duration">
          <Input placeholder="Duration" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <span>Continue</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </Form>
  )

  const PromotionUi = () => (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Promotion</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <Form.Item name="isAvailable" valuePropName="checked">
          <Checkbox>Is Available?</Checkbox>
        </Form.Item>
        <Form.Item name="isFeatured" valuePropName="checked">
          <Checkbox>Is Featured?</Checkbox>
        </Form.Item>
        <Form.Item name="isNegotiable" valuePropName="checked">
          <Checkbox>Is Negotiable?</Checkbox>
        </Form.Item>
        <Form.Item name="isFurnished" valuePropName="checked">
          <Checkbox>Is Furnished?</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={addListingLoading}>
          <span>Submit</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </Form>
  )

  const steps = [
    EssentialsUi,
    PropertyFeaturesUi,
    AdditionalFeaturesUi,
    PromotionUi,
  ]

  return (
    <div>
      <Button type="primary" onClick={() => setOpenDrawer(true)}>
        Create Listing
      </Button>
      <Drawer
        title="Create a New Listing"
        placement="right"
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={600}
      >
        {steps[step - 1]()}
      </Drawer>
      <Toaster />
    </div>
  )
}

export default Listings
