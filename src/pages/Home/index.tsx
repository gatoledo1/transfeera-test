import React, { useEffect, useState } from 'react'
import "./styles.scss";
import { Header } from '../../components/Header';
import { getReceivers } from '../../services/getReceivers';
import { PlusCircleFilled } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { useModal } from '../../hooks/useModal';
import TableHome from '../../components/Table';
import { Payee } from '../../types/Payee';
import useToast from '../../hooks/useToast';

const Home = () => {
  const [receivers, setReceivers] = useState<Payee[]>([])
  const { Modal, show } = useModal()
  const { Toast, show: showToast } = useToast()

  useEffect(() => {
    (async function fetchdata() {
      const repoData = await getReceivers();
      setReceivers(repoData);
    })()
  }, [])

  useEffect(() => {
    //@ts-ignore
    if(window.showToast) {
      //@ts-ignore
      window.showToast = false
      showToast("info", "Favorecido adicionado com sucesso")
    }
    //@ts-ignore
  }, [showToast])
  
  return (
    <>
      <Header type={null} />
      {
        Toast && (
          <Toast />
        )
      }
      <div className='payee'>
        <div className='container inline-items'>
          <a href='/new' className='h1 primary-icon'>Seus favorecidos <PlusCircleFilled /></a>
          <Search placeholder="Nome, CPF, agência ou conta" onSearch={() => {}} style={{ width: 260, height: 32 }} />
        </div>
      </div>

      <div className='container table-container'>
        <TableHome receivers={receivers} setReceivers={setReceivers} showModal={show} />
      </div>

      {
        Modal ?
          <Modal />
        : null
      }
    </>
  )
}

export default Home