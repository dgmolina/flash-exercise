const Funcionario = require('../models/employee.model');
const Empresa = require('../models/company.model')
const mongoose = require('mongoose');

const router = require('express').Router();

const findCompanyName = async (cnpj) => {
  const companies = await Empresa.find({cnpj: cnpj})
  const companyName = companies[0].nome;
  return companyName;
}

router.route('/add').post((req, res) => {
  console.log(req.body);

  Empresa.find({nome: req.body.empresa})
    .then(companies => {
      console.log(companies)
      if(companies.length > 0) {
        const newEmployee = new Funcionario({
          _id: new mongoose.Types.ObjectId(),
          cpf: req.body.cpf,
          empresa: req.body.empresa,
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          email: req.body.email
        });
      
        newEmployee.save()
          .then(() => res.json('Employee added!'))
          .catch(err => res.status(400).json('Error: '+err));       
      } else {
        res.status(400).json('Company name not found. Make sure to enter the Company name and not the Tranding name!');
      }
    })
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/bycompany/:cnpj').get(async (req, res) => {
  const companyName = await findCompanyName(req.params.cnpj);
  if (companyName) {
    Funcionario.find({empresa: companyName})
      .then(employees => {
        if (employees.length > 0) {
          res.json(employees)
        } else {
          res.json('There are no employees registered on '+ companyName);
        }
      })
      .catch(err => res.status(400).json("Error: "+err));
  } else {
    res.json('Company not found.')
  }
});

module.exports = router;