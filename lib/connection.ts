import axios from "axios";

export const jobsConnection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
