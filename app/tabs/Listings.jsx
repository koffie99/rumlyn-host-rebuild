import { Button, Drawer } from "antd"
import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { render } from "react-dom"
import Image from "next/image"
import { MdArrowRightAlt } from "react-icons/md"
import { IoMdClose } from "react-icons/io"

const Listings = () => {
  const [listings, setListings] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openDetailDrawer, setOpenDetailDrawer] = useState(false)
  const [stepText, setStepText] = useState("")
  const [steps, setSteps] = useState(1)

  // step uis
  const StepOne = () => {
    return <p>Ui is rockingggggggggggggg</p>
  }

  // essentials ui
  const EssentialsUi = () => {
    return (
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Essentials</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Title"
            className="ring-1 ring-[#ccc] p-3 rounded-lg col-span-2"
          />
          <textarea
            rows={6}
            type="text"
            placeholder="Desc"
            className="ring-1 ring-[#ccc] p-3 rounded-lg col-span-2"
          />
          <input
            type="text"
            placeholder="Location"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Currency"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Mode"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Price"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="file"
            placeholder="Photos"
            className="ring-1 ring-[#ccc] p-3 rounded-lg col-span-2"
          />
          <Button
            className="bg-[#08a88a] text-white p-6 col-span-2"
            onClick={() => setSteps(2)}
          >
            <span>Continue</span>
            <MdArrowRightAlt />
          </Button>
        </div>
      </div>
    )
  }

  // property features ui
  const PropertyFeaturesUi = () => {
    return (
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Property Features</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Property Type"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Condition"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="number"
            placeholder="No. of Bedrooms"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="No. of Bathrooms"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="No. of Kitches"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="No. of Garages"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>Has Corridor</p>
          </div>
          <Button
            className="bg-[#08a88a] text-white p-6 col-span-2"
            onClick={() => setSteps(3)}
          >
            <span>Continue</span>
            <MdArrowRightAlt />
          </Button>
        </div>
      </div>
    )
  }

  // additional features ui
  const AdditionalFeaturesUi = () => {
    return (
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Additional Features</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md">
          Kindly enter the fields below
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-4">
            <input
              type="Checkbox"
              placeholder="Property Type"
              className="ring-1 ring-[#ccc] p-3 rounded-lg"
            />
            <p>Is Furnished?</p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="Checkbox"
              placeholder="Property Type"
              className="ring-1 ring-[#ccc] p-3 rounded-lg"
            />
            <p>Is Negotiable?</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>Has Corridor</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p>Agent fee?</p>
          </div>
          <input
            type="text"
            placeholder="Amenities"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Duration"
            className="ring-1 ring-[#ccc] p-3 rounded-lg"
          />
          <Button className="bg-[#08a88a] text-white p-6 col-span-2" onClick={() => setSteps(4)}>
            <span>Continue</span>
            <MdArrowRightAlt />
          </Button>
        </div>
      </div>
    )
  }

  // promotion ui
  const PromotionUi = () => {
    return (
      <div className="md:p-[4rem] p-1 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mt-3">Promotion</h2>
          <IoMdClose onClick={() => setOpenDrawer(false)} className="text-lg" />
        </div>
        <p className=" mb-4 text-[#818181] text-md font-semibold">Final Step</p>
        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <p>Do you want to feature your listing?</p>
        </div>
        <Button className="mt-5 w-full bg-[#08a88a] p-5 text-white">
          Complete
        </Button>
      </div>
    )
  }

  // retrieve creator id
  let creatorId

  if (typeof sessionStorage !== "undefined") {
    creatorId = sessionStorage.getItem("creatorId")
  }

  // get creator listings
  const getListings = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      }

      await fetch(
        `https://api.rumlyn.com/api/v1/listings/creator/${creatorId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setListings(result.listing)
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getListings()
  }, [])

  // columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Photo",
      dataIndex: "photos",
      key: "photos",
      render: (_, record) => (
        <div>
          <Image
            width={80}
            height={80}
            alt="listing photo"
            src={record.photos[0]}
          />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => {
            setOpenDetailDrawer(true)
          }}
        >
          View
        </Button>
      ),
    },
  ]

  // custom form
  const customForm = () => {
    switch (steps) {
      case 1:
        return <EssentialsUi />
      case 2:
        return <PropertyFeaturesUi />
      case 3:
        return <AdditionalFeaturesUi />
      case 4:
        return <PromotionUi />
      default:
        ;<EssentialsUi />
    }
  }

  return (
    <div className="md:p-12 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Listings</h2>
        <Button
          className="bg-[#08a88a] text-white py-5"
          onClick={() => setOpenDrawer(true)}
        >
          + Add Listing
        </Button>
      </div>
      <div className="bg-white p-5 shadow rounded-lg mt-7">
        <Table dataSource={listings} columns={columns} />
      </div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        placement="bottom"
        // title="Add Listing"
        headerStyle={{ display: "none" }}
        className="custom-drawer pt-12"
        size="large"
      >
        {/* custom form uis */}
        {customForm()}
      </Drawer>

      {/* listing detail drawer */}
      <Drawer
        size="large"
        placement="bottom"
        open={openDetailDrawer}
        headerStyle={{ display: "none" }}
        className="pt-12"
      >
        <div>
          <h2>Listing Name</h2>
          <p>Hello there</p>
        </div>
      </Drawer>
    </div>
  )
}

export default Listings
