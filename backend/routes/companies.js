const Empresa = require('../models/company.model');
const mongoose = require('mongoose');
const router = require('express').Router();

router.route('/').get((req, res) => {
  Empresa.find()
    .then(empresas => res.json(empresas))
    .catch(err => res.status(400).json("Error: "+err));
});

router.route('/add').post((req, res) => {
  console.log(req.body);

  const newCompany = new Empresa({
    _id: new mongoose.Types.ObjectId(),
    cnpj: req.body.cnpj,
    nome: req.body.nome,
    nomeFantasia: req.body.nomeFantasia,
    endereco: {
      cep: req.body.endereco.cep,
      bairro: req.body.endereco.bairro,
      cidade: req.body.endereco.cidade,
      logradouro: req.body.endereco.logradouro,
      numero: Number(req.body.endereco.numero),
    },
    beneficios: req.body.beneficios
  },
  {
    timestamps: true
  }
  );

  newCompany.save()
  .then(() => res.json('Company added'))
  .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;