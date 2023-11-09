import React, { useState } from "react";
import Field from "./Fields";
import { data, pix } from "./props";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Payee } from "../../types/Payee";
import { deletePayees } from "../../utils/deletePayees";
import FooterBtns from "../FooterBtns";
import { putPayee } from "../../utils/putPayee";
import { postPayee } from "../../utils/postPayee";
import useToast from "../../hooks/useToast";

const Form = (props) => {
  const { modal, modalState, ...rest } = props
  const [formData, setFormData] = useState(rest ? rest : {});
  const navigate = useNavigate();
  const { Toast, show } = useToast()

  const handleFieldChange = (fieldName: string, value: Payee) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(modal) {
      putPayee(formData)
    } else {
      if (
        !formData.name ||
        !formData.email ||
        !formData.tax_id ||
        !formData.pix_key ||
        !formData.pix_key_type
      ) {
        show("danger", "Todos os campos devem estar preenchidos!")
        return false;
      } else {
        postPayee(formData, navigate)
      }
    }
  };

  const deletePayee = () => {
    deletePayees(formData.id).then(() => window.location.reload())
    return
  }

  return (
    <>
      {
        Toast && (
          <Toast />
        )
      }
      <form className={modal && "modal"}>
        <h1 className="title">Quais os dados do favorecido?</h1>
        <div className="field-groups">
          {data.map((field, index) => {
            return (
            <Field
              key={index}
              {...field}
              value={formData[field.name] || ""}
              onChange={(value: any) => handleFieldChange(field.name, value)}
            />
          )})}
        </div>
        <h1 className="title">Qual a chave pix?</h1>
        <div className="field-groups">
          {pix.map((field, index) => (
            <Field
              key={index}
              {...field}
              value={formData[field.name] || ""}
              onChange={(value: any) => handleFieldChange(field.name, value)}
            />
          ))}
        </div>
        <FooterBtns modal={modal} deletePayee={deletePayee} goTo={!modal ? navigate : modalState} handleSubmit={handleSubmit} />
          
      </form>
    </>
  );
};

export default Form;
