import { Table } from "antd"
import { useEffect, useState } from "react"

const Earnings = () => {
  const [earnings, setEarnings] = useState(null)

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
      title: "Action",
      render: (_, record) => (
        <div className="bg-red-500 px-2 py-2 items-center flex text-center text-white text-sm justify-center rounded-md">
          Delete
        </div>
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
    </div>
  )
}

export default Earnings
