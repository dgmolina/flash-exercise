const Funcionario = require("../models/Funcionario");

const employeeResolver = {
  Query: {
    funcionarios() {
      return Funcionario.find();
    },
    funcionariosPorEmpresa(_, { empresa }) {
      return Funcionario.find({ empresa });
    },
    funcionario(_, { cpf }) {
      return Funcionario.findOne({cpf});
    },
  },
  Mutation: {
    createFuncionario(_, { funcionario }) {
      const newFuncionario = new Funcionario(funcionario);
      return newFuncionario.save();
    },
    updateFuncionario(_, { cpf, funcionario }) {
      return Funcionario.findOneAndUpdate({ cpf }, funcionario, {
        new: true,
        useFindAndModify: false,
      });
    },
    deleteFuncionario(_, { cpf } ) {
      return Funcionario.findOneAndRemove({ cpf }, {
        useFindAndModify: false,
      });
    },
  },
};

module.exports = employeeResolver;