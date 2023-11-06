import moment from 'moment-timezone';
import { v4 as uuidv4 } from 'uuid';
import { postReceiver } from '../services/postReceivers';

export const postPayee = (formData, goTo) => {
  const currentDate = moment();

    const newReceiver = {
      id: uuidv4(),
      ...formData,
      branch: null,
      account: null,
      account_type: null,
      bank_name: null,
      bank_code: null,
      status: "rascunho",
      created_at: currentDate.format('YYYY-MM-DD HH:mm:ssZ').slice(0, -3),
      updated_at: currentDate.format('YYYY-MM-DD HH:mm:ssZ').slice(0, -3),
    }
    postReceiver(newReceiver)
      .then(() => {
        //@ts-ignore
        window.showToast = true;
        goTo("/")
      })
      .catch(() => {});
};