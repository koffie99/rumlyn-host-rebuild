import { QuestionCircleOutlined } from "@ant-design/icons"
import { Popconfirm, Table } from "antd"
import { useEffect, useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import formatData from "../helpers/formatDate"

const Activities = () => {
  const [activities, setActivities] = useState(null)
  const [isDeleting, setisDeleting] = useState(false)

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

  // delete activities
  const deleteActivity = async (activityId) => {
    try {
      setisDeleting(true)
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      }
      await fetch(
        `https://api.rumlyn.com/api/v1/activity/delete/${activityId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "activity deleted successfully") {
            toast.success(result.msg)
            console.log(result.msg)
            getActivities()
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
        <Popconfirm
          title="Delete the Activity"
          description="Are you sure to delete this Activity?"
          okText={isDeleting ? "Deleting" : "Delete"}
          onConfirm={() => deleteActivity(record._id)}
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
        <h2 className="text-2xl">Activities</h2>
        <div></div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <Table dataSource={activities} columns={columns} />
      </div>
      <Toaster />
    </div>
  )
}

export default Activities
