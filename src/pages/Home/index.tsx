import React, { useEffect, useState } from 'react'
import "./styles.scss";
import { Header } from '../../components/Header';
import { getReceivers } from '../../services/getReceivers';
import { Button, Table } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Search from 'antd/es/input/Search';

const Home = () => {
  const [receivers, setReceivers] = useState([])
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  useEffect(() => {
    (async function fetchdata() {
      const repoData = await getReceivers();
      setReceivers(repoData);
    })()
  }, [])

  interface DataType {
    key: React.Key;
    name: string;
    tax_id: number;
    bank_name: string;
    branch: number;
    account: number;
    status: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Favorecido',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'CPF / CNPJ',
      dataIndex: 'tax_id',
    },
    {
      title: 'Banco',
      dataIndex: 'bank_name',
    },
    {
      title: 'Agência',
      dataIndex: 'branch',
    },
    {
      title: 'CC',
      dataIndex: 'account',
    },
    {
      title: 'Status do favorecido',
      dataIndex: 'status',
      render: (text: string) => (<Button className={text === "validado" ? "secondary-bg" : "gray-bg"} shape="round" block>
        {text}
      </Button>)
    },
  ];
  
  
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  const onSearch = (e) => {

    return
  }
  
  return (
    <>
      <Header />

      <div className='payee'>
        <div className='container inline-items'>
          <a href='/new' className='h1'>Seus favorecidos <PlusCircleFilled /></a>
          <Search placeholder="Nome, CPF, agência ou conta" onSearch={onSearch} style={{ width: 260, height: 32 }} />
        </div>
      </div>

      <div className='container table-container'>
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={receivers}

        />
      </div>
    </>
  )
}

export default Home