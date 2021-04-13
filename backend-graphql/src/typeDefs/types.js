const { gql } = require('apollo-server');

const types = gql`

  type Endereco {
    bairro: String
    cidade: String
    logradouro: String
    numero: Int
  }

  type Empresa {
    id: ID!
    cnpj: String
		nome: String
		nomeFantasia: String
	  endereco: Endereco
	  beneficios: [String]
  }

  type Funcionario {
    id: ID!
    cpf: String
    empresa: String
    nome: String
    sobrenome: String
    email: String
    createdAt: String
    updatedAt: String
  }
`;

module.exports = types;