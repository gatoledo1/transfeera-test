import { api } from "./connect";

export const postReceiver = async (data) => {
  const response = await api.post("/receivers", data);
  return response.data; 
};