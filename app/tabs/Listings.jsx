import { Button } from "antd"
import React, { useEffect, useState } from "react"
import { Table } from "antd"

const Listings = () => {
  const [listings, setListings] = useState([])

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
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <Button type="link">Edit</Button>,
    },
  ]

  return (
    <div className="p-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Listings</h2>
        <Button className="bg-[#08a88a] text-white py-5">+ Add Listing</Button>
      </div>
      <div className="bg-white p-5 shadow rounded-lg mt-7">
        <Table dataSource={listings} columns={columns} />
      </div>
    </div>
  )
}

export default Listings
