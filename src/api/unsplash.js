import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID -JvgCBNrCQYY9UwcYuW216m3uorwy12fz0LYdp-YKsM",
  },
});
