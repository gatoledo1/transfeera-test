import { api } from "./connect";

export const deleteReceivers = async (id: string | string[]) => {
  //Lidando com o DELETE do JSON Server para manipular array
  if(Array.isArray(id)) {
    const ids = id
    let response
    for(const key of ids) {
      response = await api.delete(`/receivers/${key}`);
    }
    return response.data; 
  } else {
    const response = await api.delete(`/receivers/${id}`);
    return response.data; 
  }
};