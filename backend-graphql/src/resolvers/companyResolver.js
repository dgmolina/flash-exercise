const Empresa = require("../models/Empresa")

const companyResolver = {
  Query: {
    empresas() {
      return Empresa.find();
    },
    empresa(_, { cnpj }) {
      return Empresa.findOne({cnpj});
    },
  },
  Mutation: {
    createEmpresa(_, { empresa }) {
      const newEmpresa = new Empresa(empresa);
      return newEmpresa.save();
    },
    updateEmpresa(_, { cnpj, empresa }) {
      return Empresa.findOneAndUpdate({cnpj}, empresa, {
        new: true,
        useFindAndModify: false,
      });
    },
    deleteEmpresa(_, { cnpj} ) {
      return Empresa.findOneAndRemove({ cnpj }, {
        useFindAndModify: false,
      });
    },
  },
};

module.exports = companyResolver;