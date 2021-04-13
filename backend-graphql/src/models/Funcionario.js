const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
  cpf: {type: String, unique: true, match: /^\d{11}$/, required: true},
  empresa: {type: String, required: true},
  nome: {type: String, required: true},
  sobrenome: {type: String, required: true},
  email: {type: String, required: true}
},
{
  timestamps: true
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);