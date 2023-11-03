import { isCPF, isEmail, notNull } from '../../utils/validators';

export const data = [
  {
    label: "Qual seu nome completo",
    type: "text",
    size: "1/2",
  },
  {
    label: "Qual o CPF ou CNPJ",
    type: "text",
    size: "1/3",
    validation: isCPF,
  },
  {
    label: "Qual o seu e-mail",
    type: "text",
    size: "1/2",
    //validation: isEmail,
  },
];

export const pix = [
  {
    label: "Tipo de chave",
    type: "select",
    size: "1/2",
    options: [
      { value: null, label: 'Selecionar...' },
      { value: 'cpf', label: 'CPF' },
      { value: 'cnpj', label: 'CNPJ' },
      { value: 'email', label: 'E-mail' },
      { value: 'phone', label: 'Celular' },
      { value: 'random', label: 'Chave aleatória' },
    ],
    //validation: notNull,
  },
  {
    label: "Chave",
    type: "text",
    size: "1/2",
  },
];