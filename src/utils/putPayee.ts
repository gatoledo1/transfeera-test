import { putReceiver } from "../services/putReceiver";

export const putPayee = (formData) => {
  putReceiver(formData).then(() => window.location.reload())
  .catch(() => {});
}