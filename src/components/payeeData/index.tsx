import React, { useState } from 'react'
import "./styles.scss";
import { Payee } from '../../types/Payee';
import Field from '../Form/Fields';
import FooterBtns from '../FooterBtns';
import { useNavigate } from 'react-router-dom';
import { deletePayees } from '../../utils/deletePayees';
import { putPayee } from '../../utils/putPayee';

const UpdatePayee = (props: Payee) => {
  const [dataUpdateEmail, setDataUpdateEmail] = useState(undefined)
  const navigate = useNavigate();

  const deletePayee = () => {
    deletePayees(props.id).then(() => window.location.reload())
    return
  }

  const handleFieldChange = (value: Payee) => {
    setDataUpdateEmail({ ...props, email: value });
  };

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
          value={dataUpdateEmail?.email || props.email}
          onChange={(value: any) => handleFieldChange(value)}
        />
      </div>
      <FooterBtns modal={true} deletePayee={deletePayee} goTo={navigate} handleSubmit={() => putPayee(dataUpdateEmail)} />
    </>
  )
}

export default UpdatePayee