import React from 'react'
import { Header } from '../../components/Header'
import Form from '../../components/Form'

const NewPayee = () => {
  return (
    <>
      <Header />
      <div className='container' style={{marginBlock: "2rem"}}>
        <Form />
      </div>
    </>
  )
}

export default NewPayee