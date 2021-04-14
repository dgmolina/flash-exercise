import React, { Component } from 'react';
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
      id
      nome
      sobrenome
      cpf
      email
    }
  }
`;

const CompanyOptions = (props) => {

  const { loading, error, data} = useQuery(GET_EMPRESAS);
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
  const listOfOptions = data.empresas.map((company, i) => (<Option value={company.nome} key={i}>{company.nomeFantasia}</Option>))

  return(
    <Select defaultValue="Empresas..." style={{ width: 120 }} onChange={(value) => props.onSelectCompany(value)}>
      {listOfOptions}
    </Select>
  );

}

const EmployeesPerCompany = (props) => {
  const empresa = props.nome;
  const { loading, error, data} = useQuery(GET_FUNCIONARIOS_POR_EMPRESA, {variables: { empresa }});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <Table dataSource={data.funcionariosPorEmpresa} columns={columns}></Table>
    </div>
  );
}

//---------------------------------------------------------------------------------------------

export default class SearchEmployee extends Component {
  constructor(props) {
    super(props);
    this.onSelectCompany = this.onSelectCompany.bind(this);
    this.state = { chosenCompany: ''}
  }

  onSelectCompany(value) {
    this.setState({ chosenCompany: value})
  }

  render() {
    return(
      <div>
        <h2>Escolha uma empresa para visualizar a relação de seus funcionários</h2>
        <CompanyOptions onSelectCompany={this.onSelectCompany}/>
        <h2>Lista de Funcionários</h2>
        <EmployeesPerCompany nome={this.state.chosenCompany} />
      </div>
    );
  }
}


