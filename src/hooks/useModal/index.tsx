import { Button } from 'antd'
import React, { useState } from 'react'
import Form from '../../components/Form'
import "./styles.scss";
import { Payee } from '../../types/Payee';
import UpdatePayee from '../../components/payeeData';
import { putReceiver } from '../../services/putReceiver';

export const useModal = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<Payee>(undefined)

  const internalComponent = {
    validado: (<UpdatePayee {...data} />),
    rascunho: (<Form {...data} modal={true} />)
  }

  const submitChange = () => {
    putReceiver(data)
  }

  const Modal = () => {
    return (
      <>
        <div className='overlay-blur'></div>
        <div className='flex-modal'>
          <div className='modal-container'>
            <div className='close-container'>
              <button className='btn-none' onClick={() => setVisible(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" fill="#333">
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
            </div>
            <div className='header'>
              <h4>{data.name}</h4>
              <Button className={data?.status === "validado" ? "secondary-bg no-hover" : "gray-bg no-hover"} shape="round" block>
                {data?.status}
              </Button>
            </div>
            {
              internalComponent[data?.status || "rascunho"] 
            }
            <div className="container-btns">
              <button className="btn-default primary-bg inverted" onClick={() => setVisible(false)}>
                Cancelar
              </button>
              <div className="container-btns">
                <Button
                  type="primary"
                  danger
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 20" fill="none">
                      <path
                        d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  style={{width: 60, height: 60}}
                />
                <button type="submit" className="btn-default secondary-bg" onClick={submitChange}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return {
    Modal: visible ? Modal : null,
    show: (data: Payee) => {
      setVisible(true)
      setData(data)
    }
  }
}

