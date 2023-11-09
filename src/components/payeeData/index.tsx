import React, { useState } from 'react'
import "./styles.scss";
import { Payee } from '../../types/Payee';
import Field from '../Form/Fields';
import FooterBtns from '../FooterBtns';
import { useNavigate } from 'react-router-dom';
import { deletePayees } from '../../utils/deletePayees';
import { putPayee } from '../../utils/putPayee';

interface UpdatePayeeType extends Payee {
  modal: boolean,
  modalState: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdatePayee = (props: UpdatePayeeType) => {
  const { modal, modalState, ...rest } = props
  const [dataUpdateEmail, setDataUpdateEmail] = useState(undefined)
  const navigate = useNavigate();

  const deletePayee = () => {
    deletePayees(rest.id).then(() => window.location.reload())
    return
  }

  const handleFieldChange = (value: Payee) => {
    setDataUpdateEmail({ ...rest, email: value });
  };

  return (
    <>
      <div className='flex-container'>
        <div className='row'>
          <div className='col'>
            <p className='title'>CPF / CNPJ</p>
            <p className='info-label'>{rest.tax_id}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>Banco</p>
            <p className='info-label'>{rest.bank_name}</p>
          </div>
          <div className='col'>
            <p className='title'>Agência</p>
            <p className='info-label'>{rest.bank_code}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>Tipo de conta</p>
            <p className='info-label'>{rest.account_type}</p>
          </div>
          <div className='col'>
            <p className='title'>{rest.account_type}</p>
            <p className='info-label'>{rest.account}</p>
          </div>
        </div>
        <Field
          label={"E-mail do favorecido"} size='2/3' type='text'
          {...rest}
          value={dataUpdateEmail?.email || rest.email}
          onChange={(value: any) => handleFieldChange(value)}
        />
      </div>
      <FooterBtns modal={true} deletePayee={deletePayee} goTo={!modal ? navigate : modalState} handleSubmit={() => putPayee(dataUpdateEmail)} />
    </>
  )
}

export default UpdatePayee