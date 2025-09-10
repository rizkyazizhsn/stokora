import axios from "axios";
import { environment } from "@/configs/environment";

export const api = axios.create({
  baseURL: environment.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  timeout: 10000
})