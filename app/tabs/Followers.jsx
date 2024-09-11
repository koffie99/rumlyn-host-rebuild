import { Table } from "antd"
import { useEffect, useState } from "react"

const Followers = () => {
  const [followers, setFollowers] = useState(null)

  // get creator id
  let creatorId

  if (typeof sessionStorage !== "undefined") {
    creatorId = sessionStorage.getItem("creatorId")
  }

  // get followers
  const getFollowers = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      }

      await fetch(
        `https://api.rumlyn.com/api/v1/follows/creator/${creatorId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setFollowers(result.followers)
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getFollowers()
  }, [])

  // columns
  const columns = [
    {
      title: "User",
      render: (_, record) => (
        <p className="capitalize">{record.user?.username}</p>
      ),
    },
    {
      title: "Date Followed",
      dataIndex: "dateCreated",
      key: "dateCreated",
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
        <h2 className="text-2xl">Followers</h2>
        <div></div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow mt-5">
        <Table dataSource={followers} columns={columns} />
      </div>
    </div>
  )
}

export default Followers
