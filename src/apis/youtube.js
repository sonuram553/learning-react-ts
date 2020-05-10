import axios from "axios";

const KEY = "AIzaSyBud3Zkv3OwVPteyq7_zHBXSqwtgW_Dl00";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
  },
});
