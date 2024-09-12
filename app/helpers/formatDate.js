// utils/formatDate.js
import moment from "moment"

const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm A")
}

export default formatDate
