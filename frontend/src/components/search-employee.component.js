import React, { Component } from 'react';
import axios from 'axios';
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

export default class SearchEmployee extends Component {
  constructor(props) {
    super(props);

    this.onSelectCompany = this.onSelectCompany.bind(this);

    this.state = {
      companyTradingName: '',
      companies: [],
      employees: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/companies')
    .then(response => {
      this.setState({
        companies: response.data,
        companyTradingName: response.data[0].nomeFantasia
      });
    });
  }

  comp

  onSelectCompany(option) {
    const company = this.state.companies.filter(company => company.nome === String(option))[0];
    axios.get('http://localhost:5000/employees/bycompany/'+company.cnpj)
      .then(response => {
        this.setState({ employees: response.data });
      })
  }

  companyOptions() {
    return this.state.companies.map((company, i) => {
      return <Option value={company.nome} key={i}>{company.nomeFantasia}</Option>
    })
  }

  render() {
    return (
      <div>
      <h2>Escolha uma empresa para visualizar a relação de seus funcionários</h2>
      <Select defaultValue="Empresas..." style={{ width: 120 }} onChange={this.onSelectCompany}>
        { this.companyOptions() }
      </Select>
      <h2>Lista de Funcionários</h2>
      <Table dataSource={this.state.employees} columns={columns}></Table>
      </div>
    );
  }
}