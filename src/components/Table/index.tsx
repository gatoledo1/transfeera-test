import React, { useState } from 'react'
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import BankLogo from '../../components/Logotype';
import { Payee } from '../../types/Payee';
import useToast from '../../hooks/useToast';
import { deletePayees } from '../../utils/deletePayees';

interface TableData {
  receivers: Payee[],
  setReceivers: React.Dispatch<React.SetStateAction<Payee[]>>,
  showModal: (data: Payee) => void
}

const TableHome = ({receivers, setReceivers, showModal}: TableData) => {
  const [selecteds, setSelecteds] = useState([])
  const { Toast, show } = useToast()
  
  const columns: ColumnsType<Payee> = [
    {
      title: 'Favorecido',
      dataIndex: 'name',
      render: (text: string, item: Payee) => <button className='btn-none' onClick={() => showModal(receivers.find(data => data.id === item.id))}>{text}</button>,
      sorter: (a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: 'CPF / CNPJ',
      dataIndex: 'tax_id',
    },
    {
      title: 'Banco',
      dataIndex: 'bank_name',
      render: (text: string) => (<BankLogo name={text ? text : "other"} />)
    },
    {
      title: 'Agência',
      dataIndex: 'branch',
      render: (text: string) => !text ? (<span>--</span>) : text
    },
    {
      title: 'CC',
      dataIndex: 'account',
      render: (text: string) => !text ? (<span>--</span>) : text
    },
    {
      title: 'Status do favorecido',
      dataIndex: 'status',
      render: (text: string) => (<Button className={text === "validado" ? "secondary-bg no-hover" : "gray-bg no-hover"} shape="round" block>
        {text}
      </Button>)
    },
  ];
  
  
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Payee[]) => {
      const filtered = selectedRows.map((item) => item.id)
      setSelecteds(filtered)
    },
  };

  const deletePayee = async () => {
    if(selecteds.length > 0) {
      const updateReceivers = await deletePayees(selecteds)
      setReceivers(updateReceivers);
      setSelecteds([])
    } else {
      show("warning", "Você não selecionou nenhum item!")
    }
    return
  }

  return (
    <>
      {
        Toast ? <Toast /> : null
      }
      <button data-cy="delete-selections" className='btn-default btn-delete' onClick={() => deletePayee()}>Excluir selecionados</button>
      <Table
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={receivers}
        rowKey="id"
        scroll={{ x: 1110 }}
      />
    </>
  )
}

export default TableHome