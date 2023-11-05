import { isCPF, isEmail, notNull } from '../../utils/validators';

export const data = [
  {
    name: "name",
    label: "Qual o nome completo ou razão social do favorecido?",
    type: "text",
    size: "1/2",
  },
  {
    name: "tax_id",
    label: "Qual o CPF ou CNPJ?",
    type: "text",
    size: "1/3",
    validation: isCPF,
  },
  {
    name: "email",
    label: "Qual o e-mail para envio do comprovante",
    type: "text",
    size: "1/2",
    //validation: isEmail,
  },
];

export const pix = [
  {
    name: "pix_key_type",
    label: "Tipo de chave",
    type: "select",
    size: "1/2",
    options: [
      { value: null, label: 'Selecionar...' },
      { value: 'cpf', label: 'CPF' },
      { value: 'cnpj', label: 'CNPJ' },
      { value: 'email', label: 'E-mail' },
      { value: 'celular', label: 'Celular' },
      { value: 'aleatoria', label: 'Chave aleatória' },
    ],
    //validation: notNull,
  },
  {
    name: "pix_key",
    label: "Chave",
    type: "text",
    size: "1/2",
  },
];