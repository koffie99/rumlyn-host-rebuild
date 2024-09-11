import { Table } from "antd"
import { useEffect, useState } from "react"
import formatData from "../helpers/formatDate"

const Activities = () => {
  const [activities, setActivities] = useState(null)

  // get creator id
  let creatorId

  if (typeof sessionStorage !== "undefined") {
    creatorId = sessionStorage.getItem("creatorId")
  }

  // get creator activities
  const getActivities = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      }

      await fetch(
        `https://api.rumlyn.com/api/v1/activity/creator/${creatorId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setActivities(result.activities)
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getActivities()
  }, [])

  // columns
  const columns = [
    {
      title: "Activity",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Occurence Date",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (record) => <p>{formatData(record)}</p>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <div className="bg-red-500 px-2 py-2 items-center flex text-center text-white text-[12px] justify-center rounded-md cursor-pointer">
          Delete
        </div>
      ),
    },
  ]

  return (
    <div className="md:p-12 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Activities</h2>
        <div></div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <Table dataSource={activities} columns={columns} />
      </div>
    </div>
  )
}

export default Activities
