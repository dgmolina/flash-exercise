import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client'
import { Select, Table} from 'antd';

const { Option } = Select;

const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
  },
  {
    title: 'Sobrenome',
    dataIndex: 'sobrenome',
    key: 'sobrenome',
  },
  {
    title: 'Cpf',
    dataIndex: 'cpf',
    key: 'cpf',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }
];

export const GET_EMPRESAS = gql`
  {
    empresas {
      nome
      nomeFantasia
      cnpj
    }
  }
`;

export const GET_FUNCIONARIOS_POR_EMPRESA = gql`
  query GetFuncionario($empresa: String!) {
    funcionariosPorEmpresa(empresa: $empresa) {
      nome
      sobrenome
      cpf
      email
    }
  }
`;

const companyOptions = (companies) => {
  return companies.map((company, i) => {
    return <Option value={company.nome} key={i}>{company.nomeFantasia}</Option>
  })
}

const EmployeesList = () => {

  const [chosenCompany, setChosenCompany] = useState('');

  const onCompanySelect = (nome) => {
    setChosenCompany(nome);
  }

  const { loading, error, data} = useQuery(GET_EMPRESAS);
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h2>Escolha uma empresa para visualizar a relação de seus funcionários</h2>

      <Select defaultValue="Empresas..." style={{ width: 120 }} onChange={onCompanySelect}>
        {companyOptions(data.empresas)}
      </Select>
      <h2>Lista de Funcionários</h2>
      <EmployeesPerCompany nome={chosenCompany} />
    </div>
  );
};

const EmployeesPerCompany = (props) => {
  const empresa = props.nome;
  console.log(empresa)
  const { loading, error, data} = useQuery(GET_FUNCIONARIOS_POR_EMPRESA, {variables: { empresa }});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  return (
    <div>
      <Table dataSource={data.funcionariosPorEmpresa} columns={columns}></Table>
    </div>
  );
}

export default EmployeesList;

