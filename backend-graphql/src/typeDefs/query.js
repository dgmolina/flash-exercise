const { gql } = require('apollo-server');

const query = gql`
  type Query {
    empresas: [Empresa]
    empresa(cnpj: String): Empresa
    funcionarios: [Funcionario]
    funcionario(cpf: String): Funcionario
    funcionariosPorEmpresa(empresa: String): [Funcionario]
  }
`;

module.exports = query;