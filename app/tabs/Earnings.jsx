import { QuestionCircleOutlined } from "@ant-design/icons"
import { Popconfirm, Table } from "antd"
import { useEffect, useState } from "react"

import { Toaster, toast } from "react-hot-toast"

import formatData from "../helpers/formatDate"

const Earnings = () => {
  const [earnings, setEarnings] = useState(null)
  const [isDeleting, setisDeleting] = useState(false)

  // get creator id
  let creatorId

  if (typeof sessionStorage !== "undefined") {
    creatorId = sessionStorage.getItem("creatorId")
  }

  // get earnings
  const getEarnings = async () => {
    try {
      const myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjRkZWJiZmQ0NDBiOTFmYTBjOWRiYWUiLCJpYXQiOjE3MTYzODM0OTksImV4cCI6MTcxNjM4NzA5OX0.ilNNMAvFvzHRFEgUyWPNviQRLmpKfjs-Tqz_0R00Rbg"
      )

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }

      fetch(
        `https://api.rumlyn.com/api/v1/revenues/creator/${creatorId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setEarnings(result.creator_revenue)
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  const deleteEarning = async (earningId) => {
    try {
      setisDeleting(true)
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      }

      await fetch(
        `https://api.rumlyn.com/api/v1/revenues/delete/${earningId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "Revenue deleted successfully") {
            toast.success("Earning deleted successfully")
            console.log(result)
            getEarnings()
            setisDeleting(false)
          } else {
            toast.error(result.msg)
            setisDeleting(false)
          }
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
      setisDeleting(false)
    }
  }

  useEffect(() => {
    getEarnings()
  }, [])

  // columns
  const columns = [
    {
      title: "Property",
      dataIndex: "listing_name",
      key: "listing_name",
    },
    {
      title: "Price",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (record) => <p>{formatData(record)}</p>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Popconfirm
          title="Delete the Earning"
          description="Are you sure to delete this Earning?"
          okText={isDeleting ? "Deleting" : "Delete"}
          onConfirm={() => deleteEarning(record._id)}
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }
          okButtonProps={{
            style: { backgroundColor: "red", borderColor: "red" },
          }}
        >
          <button className="bg-red-500 px-4 py-2 items-center flex text-center text-white text-[12px] justify-center rounded-md cursor-pointer">
            Delete
          </button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <div className="md:p-12 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Earnings</h2>
        <div></div>
      </div>
      <div className="mt-7 bg-white rounded-lg p-5 shadow">
        <Table dataSource={earnings} columns={columns} />
      </div>

      <Toaster />
    </div>
  )
}

export default Earnings
