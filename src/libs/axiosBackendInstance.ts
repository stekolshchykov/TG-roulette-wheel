import axios from "axios";

const backendBaseURL = process.env.BACKEND_BASE_URL || 'https://telegaroma.shop';

const axiosBackendInstance = axios.create({
  baseURL: backendBaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosBackendInstance;