import axios from "axios";

const requestClient = axios.create({
  baseURL:
    "https://eccomerceweb-default-rtdb.asia-southeast1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default requestClient;
