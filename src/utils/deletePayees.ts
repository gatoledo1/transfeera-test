import { deleteReceivers } from "../services/deleteReceivers";
import { getReceivers } from "../services/getReceivers";
import { Payee } from "../types/Payee";

export const deletePayees = async (selecteds: string | string[]): Promise<Payee[]> => {
  let updateReceivers: Payee[];

  if (selecteds.length > 0) {
    try {
      await deleteReceivers(selecteds);

      const repoData = await getReceivers();
      updateReceivers = repoData;

      return updateReceivers;
    } catch (e) {
      console.error("Erro ao tentar deletar: ", e);
    }
  }

  return updateReceivers;
};