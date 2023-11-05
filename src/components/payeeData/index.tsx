import React, { useState } from 'react'
import "./styles.scss";
import { Payee } from '../../types/Payee';
import Field from '../Form/Fields';

const UpdatePayee = (props: Payee) => {
  const [email, setEmail] = useState("")
  return (
    <>
      <div className='flex-container'>
        <div className='row'>
          <div className='col'>
            <p className='title'>CPF / CNPJ</p>
            <p className='info-label'>{props.tax_id}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>Banco</p>
            <p className='info-label'>{props.bank_name}</p>
          </div>
          <div className='col'>
            <p className='title'>Agência</p>
            <p className='info-label'>{props.bank_code}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>Tipo de conta</p>
            <p className='info-label'>{props.account_type}</p>
          </div>
          <div className='col'>
            <p className='title'>{props.account_type}</p>
            <p className='info-label'>{props.account}</p>
          </div>
        </div>
        <Field
          label={"E-mail do favorecido"} size='2/3' type='text'
          {...props}
          value={props.email || ""}
          onChange={(value: any) => setEmail(value)}
        />
      </div>
    </>
  )
}

export default UpdatePayee