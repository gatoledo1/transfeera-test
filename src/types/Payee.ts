export interface Payee {
  id: string,
  name: string,
  email: string,
  tax_id: string,
  branch?: string,
  account?: string,
  account_type?: string,
  bank_name?: string,
  bank_code?: string,
  pix_key: string,
  pix_key_type: string,
  status: string,
}