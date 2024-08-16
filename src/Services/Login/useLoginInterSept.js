import axios from "axios";
import { BASE_URL } from "../../config/Config";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Function to get the access token from localStorage
const getAccessToken = () => localStorage.getItem("Token");

// Function to get the refresh token from localStorage
const getRefreshToken = () => localStorage.getItem("refresh_token");

// Function to set the access token in localStorage
const setAccessToken = (token) => localStorage.setItem("Token", token);

// Function to refresh the token
const refreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(`${BASE_URL}api/token/refresh/`, {
      refresh: refreshToken,
    });

    setAccessToken(response.data.access);
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.access;
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

// Set up a timer to refresh the token every 60 minutes (3600000 milliseconds)
const REFRESH_INTERVAL = 6 * 6 * 1000; // 6 minutes in milliseconds
const refreshInterval = setInterval(refreshToken, REFRESH_INTERVAL);

// Request interceptor to include the access token in headers
api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to refresh token if it's expired
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        return api(originalRequest); // Retry the original request with the new token
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
