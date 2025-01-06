import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/RangelGs-dev/frontend-api",
  baseURL: "http://192.168.2.77:3000",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
};
