import React from 'react'
import { Header } from '../../components/Header'
import Form from '../../components/Form'

const NewPayee = () => {
  return (
    <>
      <Header type={"payee"} />
      <div className='container' style={{margin: "2rem auto", maxWidth: 960}}>
        <Form />
      </div>
    </>
  )
}

export default NewPayee