import React, { useState } from 'react';
import Field from './Fields';
import { data, pix } from './props';
import "./styles.scss"

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleFieldChange = (fieldName: string, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='title'>Quais os dados do favorecido?</h1>
      <div className='field-groups'>
        {data.map((field, index) => (
          <Field
            key={index}
            {...field}
            value={formData[field.label] || ""}
            onChange={(value: any) => handleFieldChange(field.label, value)}
          />
        ))}
      </div>
      <h1 className='title'>Qual a chave pix?</h1>
      <div className='field-groups'>
        {pix.map((field, index) => (
          <Field
            key={index}
            {...field}
            value={formData[field.label] || ""}
            onChange={(value: any) => handleFieldChange(field.label, value)}
          />
        ))}
      </div>
      <div className='container-btns'>
          <button className='btn-default primary-bg inverted'>Cancelar</button>
          <button className='btn-default secondary-bg'>Salvar</button>
      </div>
    </form>
  );
};

export default Form;