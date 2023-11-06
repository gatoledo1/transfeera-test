import { api } from "./connect";

const controller = new AbortController();

export const getReceivers = async () => {
  try {
    const response = await api.get("/receivers");
    return response.data;
    
  } catch (error) {
    if(error.response?.status === 404 || error.message === "Network Error") {
      controller.abort()
    }
  }
};