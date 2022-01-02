import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/by-shubham/us-central1/api", //API url
});

export default instance;
