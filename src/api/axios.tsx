import axios from "axios";

//create an Axios instance with a config to prevent us from repeating these options in every request
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});
