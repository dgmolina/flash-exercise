const { gql } = require('apollo-server');

const mutation = gql`
  type Mutation {
    createEmpresa(empresa: EmpresaInput): Empresa
    updateEmpresa(cnpj: String, empresa:EmpresaInput): Empresa
    deleteEmpresa(cnpj: String): Empresa
    createFuncionario(funcionario: FuncionarioInput): Funcionario
    updateFuncionario(cpf: String, funcionario: FuncionarioInput): Funcionario
    deleteFuncionario(cpf: String): Funcionario
  }

  input EnderecoInput {
    cep: String
    bairro: String
    cidade: String
    logradouro: String
    numero: Int
  }

  input EmpresaInput {
    _id: String
    cnpj: String
		nome: String
		nomeFantasia: String
	  endereco: EnderecoInput
	  beneficios: [String]
  }

  input FuncionarioInput {
    _id: String
    cpf: String
    empresa: String
    nome: String
    sobrenome: String
    email: String
    createdAt: String
    updatedAt: String
  }
`;

module.exports = mutation;