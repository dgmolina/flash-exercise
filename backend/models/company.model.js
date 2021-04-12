const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  cnpj: {type: String, unique: true, match: /^\d{14}$/, required: true},
  nome: {type: String, unique: true, required: true},
  nomeFantasia: {type: String, required: true},
  endereco: {
    cep: {type: String, match: /^\d{8}$/, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    logradouro: {type: String, required: true},
    numero: {type: Number, required: true},
  },
  beneficios: [String]
});

const Empresa = mongoose.model("Empresa", empresaSchema)

module.exports = Empresa;