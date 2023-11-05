import React, { useState } from "react";
import Field from "./Fields";
import { data, pix } from "./props";
import "./styles.scss";
import { postReceiver } from "../../services/postReceivers";
import { useNavigate } from "react-router-dom";
import { Payee } from "../../types/Payee";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment-timezone";

const Form = (props) => {
  const [formData, setFormData] = useState(props ? props : {});
  const navigate = useNavigate();
  const currentDate = moment();

  const handleFieldChange = (fieldName: string, value: Payee) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
        setFormData({});
        navigate("/")
        //@ts-ignore
        window.showToast = true;
      })
      .catch(() => {});
  };

  return (
    <form className={props.modal && "modal"}>
      <h1 className="title">Quais os dados do favorecido?</h1>
      <div className="field-groups">
        {data.map((field, index) => (
          <Field
            key={index}
            {...field}
            value={formData[field.name] || ""}
            onChange={(value: any) => handleFieldChange(field.name, value)}
          />
        ))}
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
      {
        !formData.modal && (
          <div className="container-btns">
            <button className="btn-default primary-bg inverted" onClick={() => navigate("/")}>
              Cancelar
            </button>
            <div className="container-btns">
              <button type="submit" className="btn-default secondary-bg" onClick={handleSubmit}>
                Salvar
              </button>
            </div>
          </div>
        )
      }
    </form>
  );
};

export default Form;
