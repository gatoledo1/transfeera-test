import React, { useState, useEffect } from 'react'
import "./styles.scss";
import { CloseOutlined } from '@ant-design/icons';

const useToast = () => {
  const [visible, setVisible] = useState(false)
  const [content, setContent] = useState("")
  const [theme, setTheme] = useState("")

  useEffect(() => {
    if(visible) {
      setTimeout(() => {
        setVisible(false)
      }, 8000);
    }
  }, [visible])
  

  const Toast = () => {
    return (
      <div className={`toast-container animated ${theme} ${visible && "fadeInLeft"}`}>
        <p>{content}</p>
        <button className='btn-none close' onClick={() => setVisible(false)}>
          <CloseOutlined />
        </button>
      </div>
    )
  }

  return {
    Toast: visible ? Toast : null,
    show: (theme: "info" | "success" | "danger" | "warning", content: string) => {
      setContent(content)
      setTheme(theme)
      setVisible(true)
    }
  }
}

export default useToast