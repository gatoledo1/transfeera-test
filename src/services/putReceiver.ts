import { api } from "./connect";

export const putReceiver = async (data) => {
  const response = await api.put(`/receivers/${data.id}`, data);
  return response.data; 
};