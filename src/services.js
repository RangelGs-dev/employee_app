import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/RangelGs-dev/frontend-api",
  baseURL: "https://employee-api-n8ti.onrender.com",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
};
