import { api } from "./connect";

export const getReceivers = async () => {
  const response = await api.get("/receivers");
  return response.data; 
};