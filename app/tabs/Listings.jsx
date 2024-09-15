import React, { useState } from "react"
import { Form, Input, Button, Checkbox, Upload, Select, Drawer } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import { MdArrowRightAlt } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { Toaster, toast } from "react-hot-toast"

const { TextArea } = Input
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

  const handleNextStep = () => setStep((prev) => prev + 1)
  const handlePreviousStep = () => setStep((prev) => prev - 1)

  const EssentialsUi = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleNextStep}
      initialValues={{
        title: "",
        desc: "",
        price: "",
        contact: "",
        currency_type: "",
        mode: "",
        location: {
          address: "",
          coordinates: [],
        },
        photos: [],
      }}
    >
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">Essentials</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className="mb-4 text-[#818181] text-md">
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
          <TextArea rows={6} placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="location.address"
          label="Location Address"
          rules={[
            { required: true, message: "Please enter the location address" },
          ]}
        >
          <Input placeholder="Location Address" />
        </Form.Item>
        <Form.Item
          name="location.coordinates"
          label="Location Coordinates (latitude, longitude)"
          rules={[{ required: true, message: "Please enter the coordinates" }]}
        >
          <Input placeholder="Latitude, Longitude" />
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

  const DetailsUi = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleNextStep}
      initialValues={{
        property_type: "",
        amenities: [],
        allowable_duration: "",
        isRenewable: false,
        no_bedroom: "",
        no_bathroom: "",
        no_kitchen: "",
        hasCorridor: false,
        no_garage: "",
        isNegotiable: false,
        isFurnished: false,
        condition: "",
        isAvailable: false,
        isFeatured: false,
      }}
    >
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">Details</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className="mb-4 text-[#818181] text-md">
          Please provide additional details
        </p>
        <Form.Item
          name="property_type"
          label="Property Type"
          rules={[
            { required: true, message: "Please select the property type" },
          ]}
        >
          <Select placeholder="Select Property Type">
            <Option value="House">House</Option>
            <Option value="Apartment">Apartment</Option>
            <Option value="Condo">Condo</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="amenities"
          label="Amenities"
          rules={[{ required: true, message: "Please select amenities" }]}
        >
          <Select mode="multiple" placeholder="Select Amenities">
            <Option value="Gym">Gym</Option>
            <Option value="Pool">Pool</Option>
            <Option value="Parking">Parking</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="allowable_duration"
          label="Allowable Duration"
          rules={[
            { required: true, message: "Please select allowable duration" },
          ]}
        >
          <Select placeholder="Select Duration">
            <Option value="Short term">Short term</Option>
            <Option value="Long term">Long term</Option>
          </Select>
        </Form.Item>
        <Form.Item name="no_bedroom" label="Number of Bedrooms">
          <Input type="number" placeholder="Number of Bedrooms" />
        </Form.Item>
        <Form.Item name="no_bathroom" label="Number of Bathrooms">
          <Input type="number" placeholder="Number of Bathrooms" />
        </Form.Item>
        <Form.Item name="no_kitchen" label="Number of Kitchens">
          <Input type="number" placeholder="Number of Kitchens" />
        </Form.Item>
        <Form.Item name="hasCorridor" valuePropName="checked">
          <Checkbox>Has Corridor</Checkbox>
        </Form.Item>
        <Form.Item name="no_garage" label="Number of Garages">
          <Input type="number" placeholder="Number of Garages" />
        </Form.Item>
        <Form.Item name="isNegotiable" valuePropName="checked">
          <Checkbox>Negotiable</Checkbox>
        </Form.Item>
        <Form.Item name="isFurnished" valuePropName="checked">
          <Checkbox>Furnished</Checkbox>
        </Form.Item>
        <Form.Item name="condition" label="Condition">
          <Select placeholder="Select Condition">
            <Option value="for sale">For Sale</Option>
            <Option value="for rent">For Rent</Option>
          </Select>
        </Form.Item>
        <Form.Item name="isAvailable" valuePropName="checked">
          <Checkbox>Available</Checkbox>
        </Form.Item>
        <Form.Item name="isFeatured" valuePropName="checked">
          <Checkbox>Featured</Checkbox>
        </Form.Item>
        <Button onClick={handlePreviousStep}>Back</Button>
        <Button type="primary" htmlType="submit" loading={addListingLoading}>
          <span>Continue</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </Form>
  )

  const ReviewUi = () => (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Review</h2>
        <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
      </div>
      <p className="mb-4 text-[#818181] text-md">
        Please review the information before submitting
      </p>
      {/* Display summary of all steps' information here */}
      <Button onClick={handlePreviousStep}>Back</Button>
      <Button
        type="primary"
        onClick={() => form.submit()}
        loading={addListingLoading}
      >
        Submit
      </Button>
    </div>
  )

  const steps = [EssentialsUi, DetailsUi, ReviewUi]

  // Ensure step is within valid range
  const currentStep = Math.max(1, Math.min(step, steps.length))
  const CurrentStepComponent = steps[currentStep - 1]

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
        {CurrentStepComponent && <CurrentStepComponent />}
      </Drawer>
      <Toaster />
    </div>
  )
}

export default Listings
