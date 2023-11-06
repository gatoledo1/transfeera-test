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
  const [searchItem, setSearchItem] = useState<string>()
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

  const SearchReceiver = () => {
    if(!searchItem) return receivers

    return receivers.filter((payee) => {
      const lowerCase = searchItem.toLowerCase()
      return (
        payee.name.toLowerCase().includes(lowerCase) ||
        payee.tax_id.includes(searchItem) ||
        (payee.branch && payee.branch.includes(searchItem)) ||
        (payee.account && payee.account.includes(searchItem))
      );
    })    
  }
  
  return (
    <>
      <Header type={null} />
      {
        Toast && (
          <Toast />
        )
      }
      <div className='payee'>
        <div className='container container-fluid inline-items'>
          <a href='/new' className='h1 primary-icon'>Seus favorecidos <PlusCircleFilled /></a>
          {/* @ts-ignore */}
          <Search placeholder="Nome, CPF, agência ou conta" onSearch={setSearchItem} style={{ width: 260, height: 32 }} />
        </div>
      </div>

      <div className='container container-fluid table-container'>
        <TableHome receivers={SearchReceiver()} setReceivers={setReceivers} showModal={show} />
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